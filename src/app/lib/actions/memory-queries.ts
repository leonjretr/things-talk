import "server-only"
import {db} from "@/app/lib/db";
import {and, count, desc, eq} from "drizzle-orm";
import {memories, favorites} from "@/app/lib/db/schema";
import {auth} from "@/app/lib/auth/server";
import {redirect} from "next/navigation";

export async function getMemoriesByUserPaginated(userId: string, page: number, limit: number, orderFn = desc) {
    const offset = (page - 1) * limit;

    const myMemoriesList = await db.query.memories.findMany({
        where: (memory, {eq}) => eq(memory.userId, userId),
        orderBy: orderFn(memories.createdAt),
        limit,
        offset,
        with: {
            favorites: {
                where: and(eq(favorites.memoryId, memories.id), eq(favorites.userId, userId))
            }
        }
    });
    return myMemoriesList.map(memory => ({
        ...memory,
        isFavorite: memory.favorites.length > 0,
    }))
}

export async function getMemoryById(memoryId: string) {
    return await db.query.memories.findFirst({
        where: (memory, {eq}) => eq(memory.id, memoryId)
    });
}

export async function getMemoriesPaginated(page: number, limit: number, orderFn = desc) {
    const offset = (page - 1) * limit;
    const session = await auth();
    if (!session || !session.user) {
        const memoriesList = await db.query.memories.findMany({
            orderBy: orderFn(memories.createdAt),
            limit,
            offset,
        });
        return memoriesList.map(memory => ({
            ...memory,
            isFavorite: false,
        }));

    } else if (session && session.user) {
        const memoriesList = await db.query.memories.findMany({
            orderBy: orderFn(memories.createdAt),
            limit,
            offset,

            with: {
                favorites: {
                    where: and(eq(favorites.memoryId, memories.id), eq(favorites.userId, session.user.id))
                }
            }
        });
        return memoriesList.map(memory => ({
            ...memory,
            isFavorite: memory.favorites.length > 0,
        }))
    }
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

export async function getFavoritesOfUser(page: number, limit: number, orderFn = desc) {
    const offset = (page - 1) * limit;
    const session = await auth();

    if (!session || !session.user) {
        return redirect("/login");
    } else if (session && session.user) {
        const myFavoritesList = await db.select().from(favorites)
            .innerJoin(memories, eq(favorites.memoryId, memories.id))
            .where(eq(favorites.userId, session.user.id))
            .orderBy(orderFn(favorites.createdAt)).limit(limit).offset(offset);
        return myFavoritesList.map(favorite => ({
            ...favorite
        }));
    }
}

