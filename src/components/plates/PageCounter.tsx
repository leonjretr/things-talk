import React from 'react';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {getTotalMemories} from "@/app/lib/auth/memories";
import {notFound} from "next/navigation";

interface PageCounterProps {
    currentPage: number;
}

const PageCounter = async ({currentPage}: PageCounterProps) => {
    const totalPages = await getTotalMemories();
    if (Number(totalPages) == 0 || !totalPages) return notFound();
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(Number(totalPages), start + 4);
    if (end - start < 4) {
        start = Math.max(1, end - 4);
    }
    console.log("total pages: " + Number(totalPages));
    const pageArray = Array.from({length: 5}, (_, i) => start + i);

    return (
        <div className={"flex items-center"}>
            <div><FaArrowLeft/></div>
            <div></div>
            <div><FaArrowRight/></div>
        </div>
    );
};

export default PageCounter;