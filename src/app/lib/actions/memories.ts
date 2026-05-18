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
    if (session && session.user) {
        await db.insert(memories).values({
            userId: session.user.id,
            objectName: data.title,
            emotions: data.emotions,
            people: data.people,
            description: data.memory
        });
    } else if (!session) {
        throw new Error("Unauthorized")
    }
}