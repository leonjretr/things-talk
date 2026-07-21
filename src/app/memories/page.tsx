import React from 'react';
import {getMemoriesPaginated} from "@/app/lib/actions/memory-queries";
import {desc} from "drizzle-orm";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";
import {notFound} from 'next/navigation';
import PageCounter from "@/components/plates/PageCounter";
import {auth} from "@/app/lib/auth/server";

const Page = async ({searchParams}: { searchParams: Promise<{ page?: string }> }) => {
    // страница всех меморисов. здесь будет поиск, здесь будет сортировка
    const {page} = await searchParams;
    const currentPage = Number(page ?? "1");
    const fetchLimit = 10;
    const session = await auth();
    const memories = await getMemoriesPaginated(currentPage, fetchLimit, desc);

    return (
        <div className={"min-h-screen flex flex-col items-center justify-between m-10"}>
            <div className={"flex flex-col items-center"}>
                <div className={"flex"}>
                    <PageCounter currentPage={currentPage} pageName={"memories"}/>
                </div>
                <div className={"my-5"}>
                    {memories?.length === 0 ?
                        notFound() : memories?.map((memory) => (
                            <div className={"my-3"} key={memory.id}>
                                <ObjectMemoryCard key={memory.id} title={memory.objectName} memoryId={memory.id}
                                                  description={memory.description} isFavorite={memory.isFavorite}
                                                  isOwner={memory.userId === session?.user?.id}/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={"flex justify-end"}>
                <PageCounter currentPage={currentPage} pageName={"memories"}/>
            </div>
        </div>
    );
};

export default Page;