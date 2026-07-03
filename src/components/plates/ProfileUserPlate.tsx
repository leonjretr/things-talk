import React from 'react';
import Image from "next/image";
import {auth} from "@/app/lib/auth/server";
import {getTotalMemoriesByUser} from "@/app/lib/actions/memory-queries";

const ProfileUserPlate = async () => {
    const session = await auth();
    const memoriesAmount = getTotalMemoriesByUser();
    return (<div className="px-4 md:px-8 lg:px-10 pt-6 md:pt-10">
        <div
            className="flex flex-col lg:flex-row lg:justify-between gap-8 bg-brandTangerine rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <Image className="rounded-xl border-2 border-white shrink-0 bg-white" alt="Author" src="/imgs/user.png"
                       width={150}
                       height={150}
                />
                <div
                    className="flex flex-col text-white font-poppins mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left">
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold italic break-words"
                    >
                        hi, {session?.user?.name}
                    </h1>

                    <div className="mt-3 text-base md:text-lg font-medium break-all">
                        published stories: {memoriesAmount}
                    </div>

                    <div className="mt-2 text-base md:text-lg font-medium break-all">
                        your email: {session?.user?.email}
                    </div>
                </div>
            </div>

            <div
                className="flex justify-center lg:justify-end items-center">
                <a href="/myprofile/mystories/newstory">
                    <button
                        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-poppins font-medium">
                        post a memory
                    </button>
                </a>
            </div>
        </div>
    </div>);
};

export default ProfileUserPlate;