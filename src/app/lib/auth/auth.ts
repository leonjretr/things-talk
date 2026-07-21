import "server-only"
import {NextAuthOptions} from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import {DrizzleAdapter} from "@auth/drizzle-adapter"
import {db} from "../db/index"
import {getUserWithPasswordByEmail, verifyPassword} from "../actions/user"
import {z} from "zod"
import {env} from "@/lib/env"

export const authOptions: NextAuthOptions = {
    adapter: DrizzleAdapter(db),

    session: {strategy: "jwt"},

    providers: [
        GitHub({
            clientId: env.GITHUB_ID!,
            clientSecret: env.GITHUB_SECRET!,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"},
            },
            async authorize(raw) {
                const schema = z.object({
                    email: z.string().email(),
                    password: z.string().min(8).regex(/[@#$]/)
                })

                const {email, password} = schema.parse(raw);

                const user = await getUserWithPasswordByEmail(email)

                if (!user) return null

                const ok = await verifyPassword(password, user.passwordHash)

                if (!ok) console.log("password problem: ", ok)

                return {id: user.id, email: user.email, name: user.name, surname: user.surname}
            }
        })
    ],

    callbacks: {
        async jwt({token, user, trigger, session}) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.name = user.name
                token.surname = user.surname
            }
            if (trigger === "update" && session) {
                if (session.name !== undefined) token.name = session.name
                if (session.surname !== undefined) token.surname = session.surname
                if (session.email !== undefined) token.email = session.email
            }
            return token;
        },
        async session({session, token}) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.email = token.email as string
                session.user.name = token.name as string
                session.user.surname = token.surname as string
            }
            return session;
        },
    }
}
