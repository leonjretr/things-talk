"use client"
import React, {useState} from 'react';
import Link from "next/link";
import FavoriteButton from "@/components/buttons/FavoriteButton";
import DeleteMemoryButton from "@/components/buttons/DeleteMemoryButton";

interface ObjectMemoryCardProps {
    title: string | null;
    description: string | null;
    memoryId: string;
    isFavorite: boolean;
    isOwner?: boolean;
}

const ObjectMemoryCard = ({title, description, memoryId, isFavorite, isOwner = false}: ObjectMemoryCardProps) => {
    const [isDeleted, setIsDeleted] = useState(false);

    if (isDeleted) {
        return null;
    }

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
            <div className={"shrink-0 flex flex-col items-center gap-3"}>
                <FavoriteButton memoryId={memoryId} isFavoriteProp={isFavorite}/>
                {isOwner && <DeleteMemoryButton memoryId={memoryId} onDeleted={() => setIsDeleted(true)}/>}
            </div>
        </div>
    );
};

export default ObjectMemoryCard;
