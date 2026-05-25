import React from 'react';
import Link from "next/link";
import {FaRegHeart} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";

interface ObjectMemoryCardProps {
    title: string | null;
    description: string | null;
    id: string;
}

const ObjectMemoryCard = ({title, description, id}: ObjectMemoryCardProps) => {

    // создаёшь блок с карточками всех историй на главной странице, там фетчишь и сюда
    // и сюда передаёшь через пропсы

    return (
            <div
                className={"flex items-center justify-between cursor-pointer w-96 gap-3 border-2 rounded-lg border-brandWalnut p-2 font-poppins"}>
                <Link href={`/memories/${id}`} className={"flex flex-col"}>
                    <div className={"font-semibold text-lg"}>
                        {title}
                    </div>
                    <div className={"text-sm"}>
                        {description}
                    </div>
                </Link>
                <button className={"group block"}>
                    <FaRegHeart className={"block group-hover:hidden text-2xl"}/>
                    <FaHeart className={"hidden group-hover:block text-2xl"}/>
                </button>
            </div>
    )
        ;
};

export default ObjectMemoryCard;