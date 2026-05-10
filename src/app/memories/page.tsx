import React from 'react';
import {getMemoriesPaginated} from "@/app/lib/auth/memories";
import {desc} from "drizzle-orm";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";

const Page = async ({searchParams}: { searchParams: { page?: string } }) => {
    // страница всех меморисов. здесь будет поиск, здесь будет сортировка
    const page = Number(searchParams.page ?? "1");
    const fetchLimit = 10;
    const memories = await getMemoriesPaginated(page, fetchLimit, desc);
    return (
        <div>
            {memories.length === 0 ?
                <div className={"flex justify-center"}>No memories found</div> : memories?.map((memory) => (
                    <ObjectMemoryCard key={memory.id} title={memory.objectName} id={memory.id}
                                      description={memory.description}/>
                ))}
        </div>
    );
};

export default Page;