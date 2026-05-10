import "server-only"
import {db} from "@/app/lib/db";
import {count, desc} from "drizzle-orm";
import {memories} from "@/app/lib/db/schema";

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
    return db.select({
        count: count()
    }).from(memories);
}