"use server"
import {auth} from "@/app/lib/auth/server";
import {db} from "@/app/lib/db";
import {users, credentials} from "@/app/lib/db/schema";
import {eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";
import bcrypt from "bcryptjs";
import {z} from "zod";
import {hasOAuthAccount} from "@/app/lib/actions/user";

const profileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    surname: z.string().optional(),
    email: z.string().email("Please enter a valid email"),
})

export async function updateUserProfile(data: { name: string, surname?: string, email: string }) {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized")
    }

    const {name, surname, email} = profileSchema.parse(data);

    const [existing] = await db.select({id: users.id}).from(users).where(eq(users.email, email)).limit(1);
    if (existing && existing.id !== session.user.id) {
        throw new Error("This email is already in use");
    }

    await db.update(users).set({
        name,
        surname: surname || null,
        email,
    }).where(eq(users.id, session.user.id));

    revalidatePath("/me");
}

const passwordSchema = z.object({
    currentPassword: z.string().optional(),
    newPassword: z.string()
        .min(8, "New password must be at least 8 characters")
        .regex(/[@#$]/, "New password must include @, # or $"),
})

export async function updateUserPassword(data: { currentPassword?: string, newPassword: string }) {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized")
    }

    if (await hasOAuthAccount(session.user.id)) {
        throw new Error("This account signs in through an external provider (e.g. GitHub), so it doesn't have a password to change.");
    }

    const {currentPassword, newPassword} = passwordSchema.parse(data);

    const [existingCredentials] = await db.select().from(credentials)
        .where(eq(credentials.userId, session.user.id)).limit(1);

    if (!existingCredentials) {
        throw new Error("No password is set for this account");
    }
    if (!currentPassword) {
        throw new Error("Current password is required");
    }
    const ok = await bcrypt.compare(currentPassword, existingCredentials.passwordHash);
    if (!ok) {
        throw new Error("Current password is incorrect");
    }

    const newHash = await bcrypt.hash(newPassword, 12);
    await db.update(credentials).set({passwordHash: newHash}).where(eq(credentials.userId, session.user.id));

    revalidatePath("/me");
}
