"use client"
import React, {useState} from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {addFavorite, removeFavorite} from "@/app/lib/actions/memory-actions";
import toast from "react-hot-toast";

interface FavoriteButtonProps {
    memoryId: string;
    isFavoriteProp: boolean;
}

const FavoriteButton = ({memoryId, isFavoriteProp}: FavoriteButtonProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(isFavoriteProp);

    const clickFavorite = async () => {
        const toastId = toast.loading("Just checking whether you liked it already...❤️");
        try {
            if (isFavorite) {
                await removeFavorite(memoryId);
                setIsFavorite(false);
                return toast.error("Memory has been removed from favorites💔", {id: toastId})
            } else if (!isFavorite) {
                toast.loading("Give us a second, memory is being added to favorites...💿", {id: toastId})
                await addFavorite(memoryId);
                setIsFavorite(true);
                toast.success("Excellent!🤩 Memory has been created!", {id: toastId})
            }
        } catch (error) {
            toast.error("Ooops..😱 Something went wrong, please try again", {id: toastId})
            console.log("Error while adding favorite: " + error);
        }
    }

    return (
        <button className={"group block"} onClick={clickFavorite}>
            {isFavorite ? (
                <FaHeart className="text-2xl text-red-500"/>
            ) : (
                <FaRegHeart className="text-2xl"/>
            )}
        </button>
    );
};

export default FavoriteButton;