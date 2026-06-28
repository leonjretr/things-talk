"use client"
import {FC} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

interface HamburgerMenuButtonProps {
    text: string;
    pageLink: string;
}

const HamburgerMenuButtons: FC<HamburgerMenuButtonProps> = ({pageLink, text}) => {

    const itemVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -20},
    };

    return (
        <Link href={pageLink}>
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                initial={"hidden"}
                animate={"visible"}
                exit={"exit"}
                variants={itemVariants}
                transition={{duration: 0.3}}
                className="p-1 hover:dark:text-neutral-200 hover:dark:bg-bgDarkColor hover:bg-gray-200 rounded-lg"
                >{text}
            </motion.button>
        </Link>

    );
};

export default HamburgerMenuButtons;