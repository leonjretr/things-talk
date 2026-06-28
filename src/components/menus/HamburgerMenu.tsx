"use client"
import {motion} from "framer-motion";
import HamburgerStore from "../../stores/HamburgerStore";
import HamburgerMenuButtons from "./HamburgerMenuButtons";

const HamburgerMenu = () => {

    const overlayVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
        exit: {opacity: 0}
    };

    return (
        <motion.div
            initial={"hidden"}
            animate={HamburgerStore.isOpen && "visible"}
            exit={"exit"}
            variants={overlayVariants}
            transition={{duration: 0.1}}
            className={"flex fixed top-16 text-left items-center w-full dark:bg-bgDarkColor bg-cyan-50 z-50 text-black dark:text-white px-6 pb-3 rounded-b-lg"}>
            <motion.div
                initial={{height: 0, opacity: 0}}
                animate={{height: 'auto', opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.2, ease: 'easeInOut'}}
                className="flex flex-col items-center justify-start text-left text-sm font-poppinsFont">
                <HamburgerMenuButtons text={"profile"} pageLink={"/me"}/>
                <HamburgerMenuButtons text={"feed"} pageLink={"/memories"}/>
                <HamburgerMenuButtons text={"new memory"} pageLink={"/me/add"}/>
                <HamburgerMenuButtons text={"my memories"} pageLink={"/me/my-memories"}/>
                <HamburgerMenuButtons text={"favourites"} pageLink={"/me/favorites"}/>
            </motion.div>
        </motion.div>
    );
};

export default HamburgerMenu;