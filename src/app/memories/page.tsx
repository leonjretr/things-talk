import React from 'react';
import {getMemoriesPaginated} from "@/app/lib/auth/memories";
import {desc} from "drizzle-orm";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";
import {notFound} from 'next/navigation';
import PageCounter from "@/components/plates/PageCounter";

const Page = async ({searchParams}: { searchParams: { page?: string } }) => {
    // страница всех меморисов. здесь будет поиск, здесь будет сортировка
    const page = Number(searchParams.page ?? "1");
    const fetchLimit = 10;
    const memories = await getMemoriesPaginated(page, fetchLimit, desc);
    return (
        <div className={"min-h-screen flex flex-col items-center"}>
            {memories.length === 0 ?
                notFound() : memories?.map((memory) => (
                    <ObjectMemoryCard key={memory.id} title={memory.objectName} id={memory.id}
                                      description={memory.description}/>
                ))}

            <div className={"m-10"}>
                <PageCounter currentPage={7}/>
            </div>
        </div>
    );
};

export default Page;