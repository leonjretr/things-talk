import React from 'react';
import LoginButton from "@/components/buttons/LoginButton";
import SignUpButton from '../buttons/SignUpButton';
import Link from "next/link";

const Header = () => {

    return (
        <div
            className={"flex justify-between items-center w-full px-3 py-4 bg-white text-brandCoffee border-b-2 border-solid border-brandCoffee"}>
            <div className="flex items-center">
                <Link href={"/goals"} className={"px-3 font-medium font-poppins italic hover:underline cursor-pointer"}>
                    project goals
                </Link>
            </div>
            <div className="flex items-center">
                <button
                    className={"cursor-pointer justify-self-center"}>
                    <div className={"flex flex-col justify-center"}>
                        <div className={"flex text-start font-poppins font-bold text-3xl p-2 leading-1"}>
                            things talk
                        </div>
                        <div className={"flex justify-center font-poppins italic text-xs pt-3 leading-1"}>
                            what&#39;s their language?
                        </div>
                    </div>
                </button>
            </div>
            <div className="flex items-center gap-x-3">
                <LoginButton text={"login"}/>
                <SignUpButton text={"sign up"}/>
            </div>
        </div>
    );
};

export default Header;