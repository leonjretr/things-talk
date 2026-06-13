import React from 'react';
import {getMemoryById} from "@/app/lib/actions/memory-queries";
import {getUserNameById} from "@/app/lib/actions/user";
import {notFound} from 'next/navigation';

const Page = async ({params}: { params: Promise<{ memoryId: string }> }) => {

    const {memoryId} = await params;
    const memories = await getMemoryById(memoryId);
    if (!memories) return notFound();
    const author = await getUserNameById(memories?.userId);


    // фетчинг мемори по АЙДИ из парамов бэка, ну и соответственно выводишь всё на странице
    // это страница КОНКРЕТНОЙ мемори

    return (
        <div className="min-h-screen bg-brandLightgold px-6 py-12">
            <div className="mx-auto max-w-4xl">
                <div className="relative">
                    <span className="absolute -top-10 left-0 text-[10rem] font-serif text-brandTangerine/10">
                    &#34;
                    </span>

                    <h1 className={""}>
                        Hello
                    </h1>
                </div>

                <div className="mb-10 text-center">
                    <h1 className="font-poppins text-5xl font-bold uppercase tracking-wide text-brandWalnut">
                        {memories.objectName}
                    </h1>

                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-brandTangerine"/>

                    <p className="mt-4 font-poppins text-lg text-brandWalnut/80">
                        Shared by{" "}
                        <span className="font-medium">
                    {author?.name} {author?.surname}
                </span>
                    </p>
                </div>

                <div className="mb-8 grid gap-4 md:grid-cols-2">

                    <div className="rounded-2xl border border-brandWalnut/10 bg-white/50 p-6 shadow-sm">
                        <p className="mb-2 text-sm uppercase tracking-widest text-brandTangerine">
                            Emotions
                        </p>
                        <p className="font-poppins text-brandWalnut">
                            {memories.emotions}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-brandWalnut/10 bg-white/50 p-6 shadow-sm">
                        <p className="mb-2 text-sm uppercase tracking-widest text-brandTangerine">
                            People
                        </p>

                        <p className="font-poppins text-brandWalnut">
                            {memories.people}
                        </p>
                    </div>

                </div>

                <article className="rounded-3xl border border-brandWalnut/10 bg-white/60 p-10 shadow-md max-w-3xl">
                    <p className="font-poppins text-lg leading-9 text-brandWalnut whitespace-pre-wrap">
                        {memories.description}
                    </p>
                </article>

            </div>
        </div>
    );
};

export default Page;