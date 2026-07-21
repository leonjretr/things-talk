import ProfileUserPlate from '@/components/plates/ProfileUserPlate';
import React from 'react';
import ProfileNavPlate from "@/components/plates/ProfileNavPlate";
import {auth} from "@/app/lib/auth/server";
import {redirect} from "next/navigation";
import {getMemoriesByUserPaginated} from "@/app/lib/actions/memory-queries";
import {desc} from "drizzle-orm";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";
import PageCounter from '@/components/plates/PageCounter';

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
        <div className={"min-h-screen pb-5"}>
            <ProfileUserPlate/>
            <div className={"flex justify-center my-5 text-xl"}>
                <ProfileNavPlate activeTab={"memories"}/>
            </div>
            <div className={"grid grid-cols-2 justify-items-center gap-4 max-w-6xl mx-auto m-5 px-1"}>
                {memories?.length === 0 ?
                    <div> Sorry, you do not have any published memories at the
                        moment</div> : memories?.map((memory) => (
                        <ObjectMemoryCard key={memory.id} title={memory.objectName} memoryId={memory.id}
                                          description={memory.description} isFavorite={memory.isFavorite}
                                          isOwner={true}/>

                    ))}
            </div>
            <div className={"flex justify-center"}>
                <PageCounter currentPage={currentPage} pageName={"my-memories"}/>
            </div>
        </div>
    );
};

export default Page;