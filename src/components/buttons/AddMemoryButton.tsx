"use client"
import React from 'react';
import {motion} from "motion/react";
import {IoAdd} from "react-icons/io5";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import Link from "next/link";

const AddMemoryButton = () => {
        return (
            <div className={"flex items-center gap-x-3"}>
                <Link href={"/add"} className={"font-semibold"}>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        className={"flex items-center justify-center w-12 cursor-pointer h-10 border-2 border-brandWalnut rounded-lg"}>
                        <IoAdd className={"text-3xl"}/>
                    </motion.button>
                </Link>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div className={"font-semibold"}>
                            Add a new object memory
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className={"flex flex-col font-poppins"}>
                            <div className={"font-bold text-md"}>
                                Adding a new memory
                            </div>
                            <div className={"text-sm"}>
                                Tell a story: whether it&#39;s a pen gifted by your father, or a camera you
                                bought last week - doesn&#39;t matter. Any story is great.
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        );
    }
;

export default AddMemoryButton;