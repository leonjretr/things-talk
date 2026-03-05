import "server-only"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth"

export function auth() {
    return getServerSession(authOptions)
}