import "server-only"
import {db} from "@/app/lib/db";
import {count, desc} from "drizzle-orm";
import {memories} from "@/app/lib/db/schema";
import {auth} from "@/app/lib/auth/server";

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

