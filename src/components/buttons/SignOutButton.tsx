import React from 'react';
import {signOut} from "next-auth/react";

interface SignOutButtonProps {
    name: string;
    icon: React.ReactNode;
}

const SignOutButton = ({name, icon} : SignOutButtonProps) => {
    return (
        <button onClick={() => signOut()}
                className="flex items-center w-full p-2 text-brandCoffee rounded-lg dark:text-white hover:bg-brandCoffee hover:text-white dark:hover:bg-gray-700 group">
            <div className={"text-xl hover:text-white"}>{icon}</div>
            <span className="ms-3 font-poppinsFont ">{name}</span>
        </button>
    );
};

export default SignOutButton;