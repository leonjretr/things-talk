"use server"
import {auth} from "@/app/lib/auth/server";
import {db} from "@/app/lib/db";
import {favorites, memories} from "@/app/lib/db/schema";
import {and, eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

export async function createMemory(data: {
    title: string,
    emotions: string,
    people: string,
    memory: string,
}) {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized")
    }

    await db.insert(memories).values({
        userId: session.user.id,
        objectName: data.title,
        emotions: data.emotions,
        people: data.people,
        description: data.memory
    });
}

export async function addFavorite(memoryId: string) {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized")
    }
    await db.insert(favorites).values({
        userId: session.user.id,
        memoryId: memoryId,
    });
    revalidatePath("/memories");
    revalidatePath("/me/my-memories");
    revalidatePath("/me/favorites");
}

export async function removeFavorite(memoryId: string) {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized")
    }

    await db.delete(favorites).where(and(eq(favorites.memoryId, memoryId), eq(favorites.userId, session.user.id)));
    revalidatePath("/memories");
    revalidatePath("/me/my-memories");
    revalidatePath("/me/favorites");
}

export async function deleteMemory(memoryId: string) {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized")
    }

    const [deletedMemory] = await db.delete(memories)
        .where(and(eq(memories.id, memoryId), eq(memories.userId, session.user.id)))
        .returning();

    if (!deletedMemory) {
        throw new Error("Memory not found or you do not have permission to delete it");
    }

    revalidatePath("/memories");
    revalidatePath("/me/my-memories");
    revalidatePath("/me/favorites");
}