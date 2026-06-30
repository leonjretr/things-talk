import React from 'react';
import {auth} from "@/app/lib/auth/server";
import {redirect} from 'next/navigation';
import ProfileUserPlate from '@/components/plates/ProfileUserPlate';
import ProfileNavPlate from '@/components/plates/ProfileNavPlate';
export const dynamic = "force-dynamic"

const Page = async () => {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }
    return (
        <div className="min-h-screen">
            <ProfileUserPlate />

            <div className="flex justify-center flex-wrap gap-2 my-6 px-4 text-lg md:text-xl">
                <ProfileNavPlate activeTab="settings" />
            </div>
        </div>
    );
};

export default Page;