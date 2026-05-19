"use server"

import {auth} from "../auth/server";
import {db} from "@/app/lib/db";
import {memories} from "@/app/lib/db/schema";

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