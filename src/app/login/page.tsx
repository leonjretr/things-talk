"use client"
import React from 'react';
import Link from "next/link";
import {FaGithub, FaGoogle} from "react-icons/fa";
import LoginForm from '@/components/forms/LoginForm';
import ProviderButton from '@/components/buttons/ProviderButton';
// import { signIn, signOut, useSession } from "next-auth/react"


const Page = () => {

    return (
        <div className={"min-h-screen"}>
            <div className={"flex flex-col items-center m-10"}>
                <div className={"text-3xl font-poppins font-semibold mb-1"}>
                    Sign in
                </div>
                <div className={"flex"}>
                    <div className={"flex flex-col items-end my-5 gap-y-3 text-right"}>
                        <div className={"text-sm font-poppins mb-6"}>
                            using credentials
                        </div>
                        <div>
                            <LoginForm/>
                            <h1 className={"text-sm text-right font-inter my-5"}> Not registered?&nbsp;
                                <Link href={"/sign-up"} className={"underline text-blue-700 font-semibold"}>
                                    Create an account</Link>
                            </h1>
                        </div>
                    </div>
                    <div className="mx-6 w-px bg-brandCoffee dark:bg-zinc-700 self-stretch"/>
                    <div className={"flex flex-col my-5"}>
                        <div className={"flex justify-center text-sm font-poppins mb-6"}>
                            using one of the services
                        </div>
                        <div className={"flex flex-col items-start gap-y-3"}>
                            <ProviderButton text={"Github"} signProvider={"github"}/>
                            <button
                                className={"flex items-center gap-2 px-3 py-2 bg-white border-2 border-brandCoffee text-brandCoffee font-inter font-medium rounded-lg cursor-pointer"}>
                                <FaGoogle/> Google
                            </button>
                            <button
                                className={"flex items-center gap-2 px-3 py-2 bg-brandCoffee border-2 border-brandCoffee text-white font-inter font-medium rounded-lg cursor-pointer"}>
                                <FaGithub/> Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;