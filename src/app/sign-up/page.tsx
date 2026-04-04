import React from 'react';
import Link from "next/link";
import SignUpForm from "@/components/forms/SignUpForm";

const Page = () => {
    // const session = await auth();
    // if (session) {
    //     redirect("/");
    // }

    return (
        <div className={"min-h-screen h-full"}>
            <div className={"flex flex-col items-center m-10"}>
                <div className={"text-3xl font-poppins font-semibold mb-6"}>
                    Sign Up
                </div>
                <SignUpForm/>
                <h1 className={"m-5 text-sm font-inter"}> Already registered?&nbsp;
                    <Link href={"/login"} className={"underline text-blue-700 font-semibold"}>
                        Sign in</Link>
                </h1>
                <button className={"bg-brandLightgold text-brandCoffee font-inter font-semibold rounded-md p-2"}>sign me up!</button>
            </div>
        </div>
    );
};

export default Page;