import ProfileUserPlate from '@/components/plates/ProfileUserPlate';
import React from 'react';
import ProfileNavPlate from "@/components/plates/ProfileNavPlate";
import {auth} from "@/app/lib/auth/server";
import {redirect} from "next/navigation";
import {getMemoriesByUserPaginated} from "@/app/lib/actions/memory-queries";
import {desc} from "drizzle-orm";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";

const Page = async ({searchParams}: { searchParams: Promise<{ page?: string }> }) => {
    const session = await auth();
    if (!session || !session.user) {
        redirect("/login");
    }
    const {page} = await searchParams;
    const currentPage = Number(page ?? "1");
    const fetchLimit = 10;

    const memories = await getMemoriesByUserPaginated(session?.user?.id, currentPage, fetchLimit, desc)


    return (
        <div className={"min-h-screen"}>
            <ProfileUserPlate/>
            <div className={"flex justify-center my-5 text-xl"}>
                <ProfileNavPlate activeTab={"memories"}/>
            </div>
            {memories.length === 0 ?
                <div> Sorry, you do not have any published memories at the moment</div> : memories?.map((memory) => (
                    <ObjectMemoryCard key={memory.id} title={memory.objectName} id={memory.id}
                                      description={memory.description}/>

                ))}
        </div>
    );
};

export default Page;