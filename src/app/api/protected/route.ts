import {authOptions} from "@/app/lib/auth/auth"
import {getServerSession} from "next-auth/next"
import {NextResponse} from "next/server"

export async function GET() {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json(
            {error: "Unauthorized"},
            {status: 401}
        )
    }
    return NextResponse.json({
        message: "You are authenticated",
        user: session.user,
    })
}