"use client"
import React from 'react';
import DrawerStore from "@/stores/DrawerStore";
import ProfileDrawer from "@/components/drawer/ProfileDrawer";
import {observer} from "mobx-react";

interface ProfileButtonProps {
    name: string;
}

const ProfileButton = ({name}: ProfileButtonProps) => {
    const clickDrawer = () => {
        DrawerStore.setIsOpen();
        console.log("drawer status: " + DrawerStore.isOpen);
    }
    return (
        <div onClick={clickDrawer}
                className={"font-poppins italic text-brandCoffee px-3 cursor-pointer"}> Hello,
            {name}! ^^^
            <ProfileDrawer name={name}/>
        </div>
    );
};

export default observer(ProfileButton);