import React from 'react';
import {auth} from "@/app/lib/auth/server";
import {redirect} from 'next/navigation';
import ProfileUserPlate from '@/components/plates/ProfileUserPlate';
import ProfileNavPlate from '@/components/plates/ProfileNavPlate';
import ProfileSettingsPlate from '@/components/plates/ProfileSettingsPlate';
import {hasOAuthAccount} from '@/app/lib/actions/user';

export const dynamic = "force-dynamic"

const Page = async () => {
    const session = await auth();
    if (!session || !session.user) {
        redirect("/login");
    }
    const isOAuthAccount = await hasOAuthAccount(session.user.id);
    return (
        <div className="min-h-screen pb-5">
            <ProfileUserPlate/>

            <div className="flex justify-center flex-wrap gap-2 my-6 px-4 text-lg md:text-xl">
                <ProfileNavPlate activeTab="settings"/>
            </div>

            <ProfileSettingsPlate
                initialName={session?.user?.name ?? ''}
                initialSurname={session?.user?.surname ?? ''}
                initialEmail={session?.user?.email ?? ''}
                isOAuthAccount={isOAuthAccount}
            />
        </div>
    );
};

export default Page;