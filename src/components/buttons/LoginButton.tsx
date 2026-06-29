import React from 'react';
import Link from "next/link";


interface LoginButtonProps {
    text: string;
}

const LoginButton = ({text}: LoginButtonProps) => {
    return (
        <Link href={"/login"}>
            <button className={"min-w-10 px-1 sm:px-2 py-1.5 sm:py-2 text-xxs mob3:text-sm md:text-base bg-brandCoffee border-2 border-brandCoffee text-white font-inter font-medium rounded-lg cursor-pointer"}>
                {text}
            </button>
        </Link>

    );
};

export default LoginButton;