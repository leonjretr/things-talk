import "server-only"
import {db} from "@/app/lib/db";
import {and, count, desc, eq} from "drizzle-orm";
import {memories, favorites} from "@/app/lib/db/schema";
import {auth} from "@/app/lib/auth/server";

export async function getMemoriesByUserPaginated(userId: string, page: number, limit: number, orderFn = desc) {
    const offset = (page - 1) * limit;

    return await db.query.memories.findMany({
        where: (memory, {eq}) => eq(memory.userId, userId),
        orderBy: orderFn(memories.createdAt),
        limit,
        offset,
    });
}

export async function getMemoryById(memoryId: string) {
    return await db.query.memories.findFirst({
        where: (memory, {eq}) => eq(memory.id, memoryId)
    });
}

export async function getMemoriesPaginated(page: number, limit: number, orderFn = desc) {
    const offset = (page - 1) * limit;

    return await db.query.memories.findMany({
        orderBy: orderFn(memories.createdAt),
        limit,
        offset,
    });
}

export async function getTotalMemories() {
    const [result] = await db.select({
        count: count()
    }).from(memories);
    return Number(result?.count);
}

export async function getTotalMemoriesByUser() {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized")
    }
    const [result] = await db.select({
        count: count(),
    }).from(memories).where(eq(memories.userId, session.user.id))

    return Number(result?.count);
}

export async function checkFavorite(memoryId: string) {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized")
    }

    return await db.query.favorites.findFirst({
        where: and(eq(favorites.memoryId, memoryId), eq(favorites.userId, session.user.id))
    });
}

