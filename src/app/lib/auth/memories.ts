import "server-only"
import {db} from "@/app/lib/db";
import {desc} from "drizzle-orm";
import {memories} from "@/app/lib/db/schema";

export async function getMemoriesByUser(userId: string) {
    return await db.query.memories.findMany({
        where: (memory, {eq}) => eq(memory.userId, userId),
    });
}

export async function getMemoryById(memoryId: string) {
    return await db.query.memories.findFirst({
        where: (memory, {eq}) => eq(memory.id, memoryId)
    });
}

export async function getMemories(orderFn = desc) {
    return db.query.memories.findMany({
        orderBy: orderFn(memories.createdAt),
    });
}