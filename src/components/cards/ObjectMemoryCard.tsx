import React from 'react';
import Link from "next/link";
import FavoriteButton from "@/components/buttons/FavoriteButton";

interface ObjectMemoryCardProps {
    title: string | null;
    description: string | null;
    memoryId: string;
}

const ObjectMemoryCard = ({title, description, memoryId}: ObjectMemoryCardProps) => {

    // создаёшь блок с карточками всех историй на главной странице, там фетчишь и сюда
    // и сюда передаёшь через пропсы

    return (
        <div
            className={"flex items-center justify-between cursor-pointer w-96 gap-3 border-2 rounded-lg border-brandWalnut p-2 font-poppins"}>
            <Link href={`/memories/${memoryId}`} className={"flex flex-col"}>
                <div className={"font-semibold text-lg"}>
                    {title}
                </div>
                <div className={"text-sm"}>
                    {description}
                </div>
            </Link>
            <FavoriteButton memoryId={memoryId}/>
        </div>
    )
        ;
};

export default ObjectMemoryCard;