import "server-only"
import {db} from "../db/index"
import {users, credentials} from "../db/schema"
import {eq} from "drizzle-orm"
import bcrypt from "bcryptjs"


export async function getUserByEmail(email: string) {
    const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return rows[0] ?? null;
}

export async function createUserWithPassword(email: string, password: string, name?: string) {
    const passwordHash = await bcrypt.hash(password, 12);

    return db.transaction(async (trcontext) => {
        const [newUser] = await trcontext
            .insert(users)
            .values({
                email,
                name: name ?? null,
            })
            .returning();

        await trcontext.insert(credentials).values({userId: newUser.id, passwordHash})

        return newUser;
    })
}

export async function getUserWithPasswordByEmail(email: string | null) {
    if (email) {
        const rows = await db
            .select({
                id: users.id,
                email: users.email,
                name: users.name,
                passwordHash: credentials.passwordHash,
            })
            .from(users)
            .innerJoin(credentials, eq(credentials.userId, users.id))
            .where(eq(users.email, email))
            .limit(1)

        return rows[0] ?? null;
    }
}

export async function verifyPassword(password: string, passwordHash: string) {
    return bcrypt.compare(password, passwordHash)
}