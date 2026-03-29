import React from 'react';
import {signIn} from "next-auth/react";
import {FaGithub} from "react-icons/fa";

interface ProviderButtonProps {
    text: string;
    signProvider: string;
    icon?: React.ReactNode;
}

const ProviderButton = ({text, signProvider}: ProviderButtonProps) => {
    return (
        <button
            onClick={() => signIn(`${signProvider}`)}
            className={"flex items-center gap-2 px-3 py-2 bg-brandCoffee border-2 border-brandCoffee text-white font-inter font-medium rounded-lg cursor-pointer"}>
            <FaGithub/> {text}
        </button>
    );
};

export default ProviderButton;