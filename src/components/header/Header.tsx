import React from 'react';

export const dynamic = "force-dynamic"
import LoginButton from "@/components/buttons/LoginButton";
import SignUpButton from '../buttons/SignUpButton';
import Link from "next/link";
import {auth} from "@/app/lib/auth/server";
import ProfileButton from "@/components/buttons/ProfileButton";
import Hamburger from '../menus/Hamburger';

const Header = async () => {
    const session = await auth();

    return (
        <div
            className={"flex justify-between items-center w-full h-20 px-3 py-4 bg-white text-brandCoffee border-b-2 border-solid border-brandCoffee"}>
            <div className="flex items-center">
                <Link href={"/goals"}
                      className={"px-3 text-xs mob1:text-sm mob3:text-md font-medium font-poppins italic hover:underline cursor-pointer "}>
                    project goals
                </Link>
            </div>
            <div className="flex items-center">
                <button
                    className={"cursor-pointer justify-self-center"}>
                    <Link href={"/"} className={"flex flex-col justify-center"}>
                        <div className={"flex text-start font-poppins font-bold text-lg sm:text-3xl p-2 leading-1"}>
                            things talk
                        </div>
                        <div
                            className={"flex justify-center font-poppins italic text-xxs pt-3 leading-1 sm:after:content-['what&#39;s their language?'] "}>
                        </div>
                    </Link>
                </button>
            </div>
            {/*<ProfileButton name={"Leon"}/>*/}
            {
                session?.user?.name ? (<>
                        <div className={"hidden sm:flex"}><ProfileButton name={session.user.name}/></div>
                        <div className={"sm:hidden"}><Hamburger/></div>
                    </>) :
                    (
                        <div className="flex items-center gap-x-3">
                            <LoginButton text={"login"}/>
                            <SignUpButton text={"sign up"}/>
                        </div>
                    )
            }
        </div>
    );
};

export default Header;

