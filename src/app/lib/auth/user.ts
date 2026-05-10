import "server-only"
import {db} from "../db/index"
import {users, credentials} from "../db/schema"
import {eq} from "drizzle-orm"
import bcrypt from "bcryptjs"


export async function getUserByEmail(email: string) {
    const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return rows[0] ?? null;
}

export async function createUserWithPassword(email: string, password: string, name?: string, surname?: string) {
    const passwordHash = await bcrypt.hash(password, 12);

    return db.transaction(async (trcontext) => {
        const [newUser] = await trcontext
            .insert(users)
            .values({
                email,
                name: name ?? null,
                surname: surname ?? null,
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

export async function getUserNameById(userId: string) {
    const rows = await db.select({name: users.name, surname: users.surname}).from(users).where(eq(users.id, userId)).limit(2);
    return rows[0] ?? null;
}