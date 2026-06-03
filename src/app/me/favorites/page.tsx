import ProfileUserPlate from '@/components/plates/ProfileUserPlate';
import React from 'react';
import ProfileNavPlate from "@/components/plates/ProfileNavPlate";
import {redirect} from 'next/navigation';
import {auth} from "@/app/lib/auth/server";
import {getFavoritesOfUser} from "@/app/lib/actions/memory-queries";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";
import Link from "next/link";
import PageCounter from '@/components/plates/PageCounter';

const Page = async ({searchParams}: { searchParams: Promise<{ page?: string }> }) => {
    const session = await auth();
    if (!session || !session.user) {
        redirect("/login");
    }
    const {page} = await searchParams;
    const currentPage = Number(page ?? "1");
    const fetchLimit = 10;

    const userFavorites = await getFavoritesOfUser(currentPage, fetchLimit);
    return (
        <div className={"min-h-screen"}>
            <ProfileUserPlate/>
            <div className={"flex justify-center my-5 text-xl"}>
                <ProfileNavPlate activeTab={"favorites"}/>
            </div>

            {userFavorites?.length === 0 ? <div className={"flex flex-col items-center"}>
                <h1 className={"font-poppins text-lg"}>Ooops, seems like you do not have any favorite stories!</h1>
                <Link href={"/memories"}
                      className="p-2 bg-brandWalnut text-brandLightgold  font-poppins text-xl rounded-md transition-transform hover:scale-110 m-5">
                    Find new stories
                </Link>
            </div> : <div className={"grid grid-cols-2 justify-center gap-y-3 m-5"}>
                {userFavorites?.map((userFavorite) => (
                    <ObjectMemoryCard key={userFavorite.favorite.memoryId}
                                      memoryId={userFavorite.favorite.memoryId} isFavorite={true}
                                      title={userFavorite.memory.objectName}
                                      description={userFavorite.memory.description}/>
                ))}</div>}

            <PageCounter currentPage={currentPage}/>
        </div>
    );
};

export default Page;