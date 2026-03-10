import {NextRequest, NextResponse} from 'next/server';
import {auth} from './app/lib/auth/server';

export async function middleware(req: NextRequest) {
    const session = await auth();

    if (!session?.user) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (session?.user) {
        if (req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/sign-up")) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
}

export const config = {
    matcher: [
        "/me/:path*",
        "/api/protected/:path*",
    ]
}
