"use client"
import {motion} from 'motion/react';
import React from 'react';
import Link from "next/link";

const ObjectMemoryCard = () => {

    return (
        <Link href={"/"} className={""}>
            <motion.div
                whileHover={{scale: 1.1}}
                className={"flex flex-col justify-center cursor-pointer w-96 gap-3 border-2 rounded-lg border-brandWalnut p-2 font-poppins"}>
                <div className={"font-semibold text-lg"}>
                    My first memory
                </div>
                <div className={"text-sm"}>
                    Description of the first memory!
                </div>
            </motion.div>
        </Link>
    )
        ;
};

export default ObjectMemoryCard;