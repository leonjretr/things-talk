import "server-only"

function required(name: string) {
    const v = process.env[name]
    if (!v) throw new Error(`Missing environment variable: ${name}`)
    return v
}

export const env = {
    DATABASE_URL: required("DATABASE_URL"),
    NEXTAUTH_SECRET: required("NEXTAUTH_SECRET"),
    NEXTAUTH_URL: required("NEXTAUTH_URL"),
    GITHUB_ID: required("GITHUB_ID"),
    GITHUB_SECRET: required("GITHUB_SECRET"),
}