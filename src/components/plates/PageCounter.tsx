import React from 'react';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {getTotalMemories} from "@/app/lib/actions/memory-queries";
import {notFound} from "next/navigation";
import Link from 'next/link';

interface PageCounterProps {
    currentPage: number;
}

const PageCounter = async ({currentPage}: PageCounterProps) => {
    const totalMemories = await getTotalMemories();
    const totalPages = Math.ceil(Number(totalMemories) / 10);
    if (totalPages === 0) return notFound();
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);
    if (end - start < 4) {
        start = Math.max(1, end - 4);
    }
    const pageArray = Array.from(
        {length: end - start + 1},
        (_, i) => start + i
    );
    const currentPageColor = "bg-brandWalnut text-white scale-90";
    const otherPagesColor = "text-brandWalnut hover:text-brandLightgold hover:bg-brandWalnut";

    return (
        <div className={"flex items-center gap-x-3"}>
            <Link href={`/memories?page=${currentPage - 1}`}
                  className={"p-2 rounded-md hover:bg-brandLightgold hover:text-brandWalnut"}><FaArrowLeft/></Link>
            <div className={"flex items-center justify-center gap-x-1"}>
                {pageArray.map((page) => (
                    <Link
                        key={page}
                        href={`/memories?page=${page}`}
                        className={`rounded-md px-3 py-1.5 border-2 border-brandWalnut font-poppins font-semibold text-md text-brandLightgold ${
                            page === currentPage
                                ? currentPageColor
                                : otherPagesColor
                        }`}
                    >
                        {page}
                    </Link>
                ))}
            </div>
            <Link href={`/memories?page=${currentPage + 1}`}
                  className={"p-2 rounded-md hover:bg-brandLightgold hover:text-brandWalnut"}><FaArrowRight/></Link>
        </div>
    );
};

export default PageCounter;