import React from 'react';
import {getMemoryById} from "@/app/lib/auth/memories";
import {getUserNameById} from "@/app/lib/auth/user";
import {notFound} from 'next/navigation';

const Page = async ({params}: { params: Promise<{ memoryId: string }> }) => {

    const {memoryId} = await params;
    const memories = await getMemoryById(memoryId);
    if (!memories) return notFound();
    const author = await getUserNameById(memories?.userId);


    // фетчинг мемори по АЙДИ из парамов бэка, ну и соответственно выводишь всё на странице
    // это страница КОНКРЕТНОЙ мемори

    return (
        <div className={"min-h-screen"}>
            <div className={"flex justify-center"}>
                <div className={"uppercase font-poppins font-medium italic text-3xl m-5"}>
                    Title: {memories?.objectName}
                </div>
                <div> Author: {author?.name} {author?.surname}</div>
            </div>
            <div className={"flex mx-10 my-5"}>
                <div className={"font-poppins"}>
                    This thing is really connected to: {memories?.people}
                </div>
                <div className={"font-poppins"}>
                    And my feelings about it are: {memories?.emotions}
                </div>
                <div className={"font-poppins"}>
                    Description {memories?.description}
                </div>
            </div>
        </div>
    );
};

export default Page;