import {NextResponse} from "next/server"
import {auth} from "@/app/lib/auth/server";
import {db} from "@/app/lib/db";
import {memories} from "@/app/lib/db/schema";

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user?.id) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    const body = await req.json();

    const memory = await db.insert(memories).values({
        userId: session.user.id,
        objectName: body.title,
        description: body.description,
        emotions: body.emotions,
        people: body.memory,
    }).returning();

    return NextResponse.json({memory}, {status: 200})
}

export async function GET(){
    
}