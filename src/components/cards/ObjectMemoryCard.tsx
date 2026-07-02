import React from 'react';
import Link from "next/link";
import FavoriteButton from "@/components/buttons/FavoriteButton";

interface ObjectMemoryCardProps {
    title: string | null;
    description: string | null;
    memoryId: string;
    isFavorite: boolean;
}

const ObjectMemoryCard = ({title, description, memoryId, isFavorite}: ObjectMemoryCardProps) => {
    return (
        <div
            className={"flex justify-between items-start gap-4 w-full rounded-lg border-2 border-brandWalnut p-4 font-poppins"}>
            <Link href={`/memories/${memoryId}`} className={"flex-1 min-w-0"}>
                <div className={"font-semibold text-lg break-words"}>
                    {title}
                </div>
                <div className={"text-sm break-words"}>
                    {description}
                </div>
            </Link>
            <div className={"shrink-0"}>
                <FavoriteButton memoryId={memoryId} isFavoriteProp={isFavorite}/>
            </div>
        </div>
    );
};

export default ObjectMemoryCard;