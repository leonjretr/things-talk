import React from 'react';
import Link from "next/link";
import SignUpForm from "@/components/forms/SignUpForm";
import {redirect} from "next/navigation";
import {auth} from "@/app/lib/auth/server";

const Page = async () => {
    const session = await auth();
    if (session) {
        redirect("/");
    }

    return (
        <div className={"min-h-screen h-full flex justify-center mt-14"}>
            <div className={"w-full max-w-lg mx-auto px-6"}>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-poppins font-semibold">
                        sign up for an account
                    </h1>
                </div>
                <div className={""}>
                    <SignUpForm/>
                    <div className={"flex flex-col items-center"}>
                        <p className={"m-5 text-sm font-inter text-center"}> already registered?&nbsp;
                            <Link href={"/login"} className={"underline text-blue-700 font-semibold"}>
                                sign in</Link>
                        </p>
                        <button
                            className={"bg-brandLightgold hover:bg-amber-300 transition-colors text-brandCoffee font-inter font-semibold rounded-md p-2.5"}>
                            sign me up!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;