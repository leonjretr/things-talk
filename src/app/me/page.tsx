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
            <div className={"flex h-12 max-w-full mx-10 my-5 border-2 border-brandTangerine justify-evenly items-center rounded-md font-poppins"}>
                <div>favourites</div>
                <div>memories</div>
                <div>settings</div>
            </div>
        </div>
    );
};

export default Page;