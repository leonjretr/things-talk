"use client"
import React from 'react';
import DrawerButton from "@/components/drawer/DrawerButton";
import {FaBook, FaCodeBranch, FaHeart, FaRegUserCircle, FaSignOutAlt} from 'react-icons/fa';
import DrawerStore from '@/stores/DrawerStore';
import {observer} from "mobx-react";

interface ProfileDrawerProps {
    name: string;
}

const ProfileDrawer = ({name}: ProfileDrawerProps) => {
    return (
        <div
            className={`${DrawerStore.isOpen && "fixed inset-0 z-30 bg-black bg-opacity-15 overscroll-hidden backdrop-blur-sm"}`}>
            <div
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-all transform duration-300 ${DrawerStore.isOpen ? 'translate-x-0' : 'translate-x-full'} bg-white w-64`}
            >
                <h5 className="text-base font-interFont font-semibold uppercase dark:text-gray-400">
                    Hi, {name}!
                </h5>
                <button
                    onClick={() => DrawerStore.setIsOpen}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" d="M1 1l6 6m0 0l6 6M7 7L1 13M7 7l6-6"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <DrawerButton name={"My Profile"} icon={<FaRegUserCircle/>}/>
                        <DrawerButton name={"My Favourites"} icon={<FaHeart/>}/>
                        <DrawerButton name={"My Stories"} icon={<FaBook/>}/>
                        <DrawerButton name={"My Branches"} icon={<FaCodeBranch/>}/>
                        <DrawerButton name={"Log out"} icon={<FaSignOutAlt/>}/>
                        {/* Other menu items */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default observer(ProfileDrawer);