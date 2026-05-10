import React from 'react';
import Link from "next/link";

interface ObjectMemoryCardProps {
    title: string | null;
    description: string | null;
    id: string;
}

const ObjectMemoryCard = ({title, description, id}: ObjectMemoryCardProps) => {

    // создаёшь блок с карточками всех историй на главной странице, там фетчишь и сюда
    // и сюда передаёшь через пропсы

    return (
        <Link href={`/memories/${id}`} className={""}>
            <div
                className={"flex flex-col justify-center cursor-pointer w-96 gap-3 border-2 rounded-lg border-brandWalnut p-2 font-poppins"}>
                <div className={"font-semibold text-lg"}>
                    {title}
                </div>
                <div className={"text-sm"}>
                    {description}
                </div>
            </div>
        </Link>
    )
        ;
};

export default ObjectMemoryCard;