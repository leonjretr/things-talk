import React from 'react';
import Link from "next/link";


interface SignUpButtonProps {
    text: string;
}

const SignUpButton = ({text}: SignUpButtonProps) => {
    return (
        <Link href={"/sign-up"}>
            <button className={"min-w-10 px-1 sm:px-2 py-1.5 sm:py-2 text-xxs mob3:text-sm md:text-base bg-white border-2 border-brandCoffee text-brandCoffee font-inter font-medium rounded-lg cursor-pointer"}>
                {text}
            </button>
        </Link>

    );
};

export default SignUpButton;