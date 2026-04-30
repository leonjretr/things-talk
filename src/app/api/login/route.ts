import {getUserWithPasswordByEmail, verifyPassword} from "@/app/lib/auth/user";
import {NextResponse} from "next/server"
import {z} from "zod";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export async function POST(req: Request) {
    try {
        const body = req.json();
        const {email, password} = schema.parse(body);
        const user = await getUserWithPasswordByEmail(email)
        if (!user) return NextResponse.json(
            {error: "Invalid email, please check again"},
            {status: 400}
        )

        const check = await verifyPassword(password, user.passwordHash);
        if (!check) return NextResponse.json(
            {error: "Wrong password, please check again"},
            {status: 400}
        )

        if (check) {
            return NextResponse.json({status: 200, message: "Login successful", user: user})
        }

    } catch (err) {
        return NextResponse.json(
            {error: "Invalid data", err},
            {status: 400}
        )
    }
}