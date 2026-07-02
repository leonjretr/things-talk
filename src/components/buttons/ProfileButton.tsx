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
    }
    return (
        <div onClick={clickDrawer}
             className={`font-poppins text-xs mob2:text-sm sm:text-base italic text-brandCoffee cursor-pointer`}> hey, {name}!
            <ProfileDrawer name={name}/>
        </div>
    );
};

export default observer(ProfileButton);