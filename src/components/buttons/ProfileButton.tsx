"use client"
import React from 'react';
import DrawerStore from "@/stores/DrawerStore";
import ProfileDrawer from "@/components/drawer/ProfileDrawer";
import {observer} from "mobx-react";

const ProfileButton = () => {
    return (
        <button onClick={() => DrawerStore.setIsOpen}
                className={"font-poppins italic text-brandCoffee px-3"}> Hello,
            Leon!
            <ProfileDrawer name={"Leon"}/>
        </button>
    );
};

export default observer(ProfileButton);