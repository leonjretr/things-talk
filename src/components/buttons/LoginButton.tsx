import React from 'react';
import Link from "next/link";


interface LoginButtonProps {
    text: string;
}

const LoginButton = ({text}: LoginButtonProps) => {
    return (
        <Link href={"/login"}>
            <button className={"px-3 py-2 bg-brandCoffee border-2 border-brandCoffee text-white font-inter font-medium rounded-lg cursor-pointer"}>
                {text}
            </button>
        </Link>

    );
};

export default LoginButton;