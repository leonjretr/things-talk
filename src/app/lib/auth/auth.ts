import "server-only"
import {NextAuthOptions} from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import {DrizzleAdapter} from "@auth/drizzle-adapter"
import {db} from "../db/index"
import {getUserWithPasswordByEmail, verifyPassword} from "../auth/user"
import {z} from "zod"
import {env} from "@/lib/env"

export const authOptions: NextAuthOptions = {
    adapter: DrizzleAdapter(db),

    session: {strategy: "database"},

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
                    password: z.string().min(8)
                })

                const {email, password} = schema.parse(raw);

                const user = await getUserWithPasswordByEmail(email)
                if (!user) return null

                const ok = await verifyPassword(password, user.passwordHash)
                if (!ok) return null

                return {id: user.id, email: user.email, name: user.name ?? null}
            }
        })
    ],

    callbacks: {
        async session({session, user}) {
            if (session.user) {
                session.user.email = user.email;
                session.user.name = user.name;
                session.user.id = user.id;
            }
            return session
        },
    },
}