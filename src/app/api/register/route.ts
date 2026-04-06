import {NextResponse} from "next/server"
import {z} from "zod"
import {createUserWithPassword, getUserByEmail} from "@/app/lib/auth/user"

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(1),
    surname: z.string().min(1).optional(),
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {email, password, name, surname} = schema.parse(body)

        const existing = await getUserByEmail(email)
        if (existing) {
            return NextResponse.json(
                {error: "User already exists"},
                {status: 400}
            )
        }

        const user = await createUserWithPassword(email, password, name, surname)

        return NextResponse.json({
            status: 200,
            message: "User created",
            userId: user.id,
        })
    } catch (err) {
        return NextResponse.json(
            {error: "Invalid data", err},
            {status: 400}
        )
    }
}