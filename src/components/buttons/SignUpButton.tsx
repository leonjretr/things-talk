import React from 'react';
import Link from "next/link";


interface SignUpButtonProps {
    text: string;
}

const SignUpButton = ({text}: SignUpButtonProps) => {
    return (
        <Link href={"/sign-up"}>
            <button className={"px-2 py-2 bg-white border-2 border-brandCoffee text-brandCoffee font-inter font-medium rounded-lg cursor-pointer"}>
                {text}
            </button>
        </Link>

    );
};

export default SignUpButton;