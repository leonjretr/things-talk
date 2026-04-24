import React from 'react';
import Link from "next/link";
import {FaFacebook, FaGoogle} from "react-icons/fa";
import LoginForm from '@/components/forms/LoginForm';
import ProviderButton from '@/components/buttons/ProviderButton';
import {auth} from '../lib/auth/server';
import {redirect} from "next/navigation";
// import { signIn, signOut, useSession } from "next-auth/react"


const Page = async () => {
    const session = await auth();
    if (session) {
        redirect("/");
    }

    return (
        <div className={"min-h-screen flex justify-center mt-14"}>
            <div className={"w-full max-w-lg mx-auto"}>
                <div className={"text-3xl font-poppins font-semibold mb-5 text-center"}>
                    sign in to your account
                </div>
                <div className={"flex"}>
                    <div className={"flex flex-col my-5 gap-y-3 "}>
                        <div className={"text-sm font-poppins mb-6 items-end text-right"}>
                            using credentials
                        </div>
                        <div className={"flex flex-col"}>
                            <LoginForm/>
                            <h1 className={"text-sm text-ce font-inter mt-5"}> not registered?&nbsp;
                                <Link href={"/sign-up"} className={"underline text-blue-700 font-semibold"}>
                                    create an account</Link>
                            </h1>
                        </div>
                        <div className={"flex justify-center"}>
                            <button className={"bg-brandLightgold hover:bg-amber-300 transition-colors text-brandCoffee font-inter font-semibold rounded-md p-2.5"}>sign in!</button>
                        </div>

                    </div>
                    <div className="mx-6 w-px bg-brandCoffee dark:bg-zinc-700 self-stretch"/>
                    <div className={"flex flex-col my-5"}>
                        <div className={"flex justify-center text-sm font-poppins mb-6"}>
                            using one of the services
                        </div>
                        <div className={"flex flex-col items-start gap-y-3"}>
                            <ProviderButton text={"Github"} signProvider={"github"}/>
                            <div
                                className={"flex items-center gap-2 px-3 py-2 bg-white border-2 border-brandCoffee text-brandCoffee font-inter font-medium rounded-lg cursor-pointer"}>
                                <FaGoogle/> Google
                            </div>
                            <div
                                className={"flex items-center gap-2 px-3 py-2 bg-brandCoffee border-2 border-brandCoffee text-white font-inter font-medium rounded-lg cursor-pointer"}>
                                <FaFacebook/> Facebook
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;