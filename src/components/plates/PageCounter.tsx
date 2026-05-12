import React from 'react';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {getTotalMemories} from "@/app/lib/auth/memories";
import {notFound} from "next/navigation";

interface PageCounterProps {
    currentPage: number;
}

const PageCounter = async ({currentPage}: PageCounterProps) => {
    const totalMemories = await getTotalMemories();
    const totalPages = Number(totalMemories) / 10;
    if (totalPages == 0 || !totalPages) return notFound();
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(Number(totalPages), start + 4);
    if (end - start < 4) {
        start = Math.max(1, end - 4);
    }
    console.log("total pages: " + Number(totalPages));
    const pageArray = Array.from({length: 5}, (_, i) => start + i);

    return (
        <div className={"flex items-center gap-x-3"}>
            <button className={"p-2 rounded-md hover:bg-brandLightgold hover:text-brandWalnut"}><FaArrowLeft/></button>
            <div className={"flex items-center justify-center gap-x-1"}>
                {pageArray.map((page, index) => (
                    <button className={`rounded-md px-3 py-1.5 border-2 border-brandWalnut font-poppins font-semibold text-md ${index == 2 ? "bg-brandWalnut text-brandLightgold scale-90" : "text-brandWalnut hover:text-brandLightgold hover:bg-brandWalnut"}`} key={index}>{page}</button>
                ))}
            </div>
            <button className={"p-2 rounded-md hover:bg-brandLightgold hover:text-brandWalnut"}><FaArrowRight/></button>
        </div>
    );
};

export default PageCounter;