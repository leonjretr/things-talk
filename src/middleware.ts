import {NextRequest, NextResponse} from 'next/server';
import {getToken} from "next-auth/jwt";
import {env} from "@/lib/env";

const publicRoutes = ["/login", "/sign-up"]

export async function middleware(req: NextRequest) {
    const token = await getToken({req, secret: env.NEXTAUTH_SECRET})

    const isAuth = !!token
    const isPublic = publicRoutes.some(route =>
        req.nextUrl.pathname.startsWith(route)
    )

    if (!isAuth && !isPublic) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    if (isAuth && isPublic) {
        return NextResponse.redirect(new URL("/", req.url))
    }
}
