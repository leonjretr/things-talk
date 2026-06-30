"use client"
import React from 'react';
import {signIn} from "next-auth/react";

interface ProviderButtonProps {
    text: string;
    signProvider: string;
    icon: React.ReactNode;
    whiteVersion: boolean;
}

const ProviderButton = ({text, signProvider, icon, whiteVersion}: ProviderButtonProps) => {
    return (
        <button
            onClick={() => signIn(`${signProvider}`)}
            className={`flex items-center justify-center w-full gap-2 px-3 py-2 ${whiteVersion ? "bg-white border-2 border-brandCoffee text-brandCoffee" : "bg-brandCoffee border-2 border-brandCoffee text-white"} font-inter font-medium rounded-lg cursor-pointer`}>
            {icon} {text}
        </button>
    );
};

export default ProviderButton;