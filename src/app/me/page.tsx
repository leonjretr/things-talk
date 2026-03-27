import React from 'react';
import {auth} from "@/app/lib/auth/server";
import {redirect} from 'next/navigation';
import ProfileUserPlate from '@/components/plates/ProfileUserPlate';

const Page = async () => {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }
    return (
        <div className={"min-h-screen"}>
            <ProfileUserPlate/>
            <div className={"flex justify-center my-5"}>
                <button className={"flex h-12 w-max px-4 border-y-2 border-l-2 border-brandTangerine justify-center items-center rounded-l-md font-poppins p-2 hover:bg-gray-100"}>
                    <div className={""}>favourites</div>
                </button>
                <button className={"flex h-12 w-max px-4 border-2 border-brandTangerine items-center font-poppins hover:bg-gray-100 p-2"}>
                    <div>memories</div>
                </button>
                <button className={"flex h-12 w-max px-4 border-y-2 border-r-2 border-brandTangerine items-center rounded-r-md font-poppins p-2 hover:bg-gray-100"}>
                    <div className={""}>settings</div>
                </button>
            </div>
        </div>
    );
};

export default Page;