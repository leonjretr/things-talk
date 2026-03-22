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
            <div>

            </div>
            <div>

            </div>

        </div>
    );
};

export default Page;