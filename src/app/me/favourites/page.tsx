import ProfileUserPlate from '@/components/plates/ProfileUserPlate';
import React from 'react';
import ProfileNavPlate from "@/components/plates/ProfileNavPlate";
import {redirect} from 'next/navigation';
import {auth} from "@/app/lib/auth/server";
import {getFavoritesOfUser} from "@/app/lib/actions/memory-queries";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";

const Page = async () => {
    const session = await auth();
    if (!session || !session.user) {
        redirect("/login");
    }

    const userFavorites = await getFavoritesOfUser();
    return (
        <div className={"min-h-screen"}>
            <ProfileUserPlate/>
            <div className={"flex justify-center my-5 text-xl"}>
                <ProfileNavPlate activeTab={"favourites"}/>
            </div>
            {userFavorites && userFavorites.map((userFavorite) => (
                <ObjectMemoryCard key={userFavorite.favorite.memoryId}
                                  memoryId={userFavorite.favorite.memoryId} isFavorite={true}
                                  title={userFavorite.memory.objectName}
                                  description={userFavorite.memory.description}/>
            ))}
        </div>
    );
};

export default Page;