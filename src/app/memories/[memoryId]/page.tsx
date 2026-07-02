import React from 'react';
import {getMemoryById} from "@/app/lib/actions/memory-queries";
import {getUserNameById} from "@/app/lib/actions/user";
import {notFound} from 'next/navigation';

const Page = async ({params}: { params: Promise<{ memoryId: string }> }) => {

    const {memoryId} = await params;
    const memories = await getMemoryById(memoryId);
    if (!memories) return notFound();
    const author = await getUserNameById(memories?.userId);

    return (
        <div className="min-h-screen px-6 py-12">
            <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                    <h1 className="font-poppins text-brandWalnut text-4xl md:text-6xl tracking-tight font-bold uppercase text-center break-words">
                        {memories.objectName}
                    </h1>
                    <p className="mt-4 font-inter italic text-center text-brandWalnut/70">
                        by {author?.name} {author?.surname}
                    </p>
                </div>

                <div className="flex items-center justify-center my-10">
                    <div className="h-px w-16 bg-brandWalnut/20"/>
                    <div className="mx-3 h-2 w-2 rounded-full bg-brandTangerine"/>
                    <div className="h-px w-16 bg-brandWalnut/20"/>
                </div>

                <div
                    className="mx-auto max-w-2xl space-y-6 rounded-xl border border-brandWalnut/10 bg-brandWalnut/[0.02] p-8">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-32 font-semibold uppercase tracking-widest text-brandWalnut/50">
                            Emotions
                        </div>
                        <div className="font-poppins text-brandWalnut">
                            {memories.emotions}
                        </div>
                    </div>

                    <div className="border-t border-brandWalnut/10"/>
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-32 font-semibold uppercase tracking-widest text-brandWalnut/50">
                            People
                        </div>
                        <div className="font-poppins text-brandWalnut">
                            {memories.people}
                        </div>
                    </div>
                </div>
                
                <article className="relative mx-auto mt-16 max-w-3xl">
                    <span
                        className="absolute -left-7 -top-12 text-[8rem] leading-none text-brandWalnut/6 font-serif select-none">
                        “
                    </span>
                    <p className="font-poppins text-lg md:text-xl leading-9 md:leading-10 text-brandWalnut whitespace-pre-wrap">
                        {memories.description}
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Page;