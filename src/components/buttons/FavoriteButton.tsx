"use client"
import React, {useEffect, useState} from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {addFavorite, removeFavorite} from "@/app/lib/actions/memory-actions";
import toast from "react-hot-toast";
import {checkFavorite} from "@/app/lib/actions/memory-queries";

interface FavoriteButtonProps {
    memoryId: string;
}

const FavoriteButton = ({memoryId}: FavoriteButtonProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    useEffect(() => {
        const fetchInitialState = async () => {
            const favoriteExists = await checkFavorite(memoryId);
            setIsFavorite(!!favoriteExists); // sets to true if found, false if null
        };
        fetchInitialState();
    }, [memoryId]);

    const clickFavorite = async () => {
        const toastId = toast.loading("Just checking whether you liked it already...❤️");
        try {
            const existingFavorite = await checkFavorite(memoryId);
            if (existingFavorite) {
                // remove favorite
                await removeFavorite(memoryId);
                return toast.error("Memory has been removed from favorites💔", {id: toastId})
            } else {
                // if doesn't exist, creating a new one
                toast.loading("Give us a second, your memory is being created...💿", {id: toastId})
                await addFavorite(memoryId);
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