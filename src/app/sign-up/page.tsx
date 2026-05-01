import React from 'react';
import SignUpForm from "@/components/forms/SignUpForm";
import {redirect} from "next/navigation";
import {auth} from "@/app/lib/auth/server";
export const dynamic = "force-dynamic"

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
                </div>
            </div>
        </div>
    );
};

export default Page;