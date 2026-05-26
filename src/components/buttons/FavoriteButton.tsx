"use client"
import React from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {addFavorite} from "@/app/lib/actions/memory-actions";
import toast from "react-hot-toast";
import {checkFavorite} from "@/app/lib/actions/memory-queries";

interface FavoriteButtonProps {
    memoryId: string;
}

const FavoriteButton = ({memoryId}: FavoriteButtonProps) => {
    const clickFavorite = async () => {
        const toastLoading = toast.loading("Just checking whether you liked it already...❤️");
        try{

        } catch(error) {

        }
        const check = checkFavorite(memoryId);
        toast.promise(check, {
            loading: "Just checking whether you liked it already...❤️",
            success: "Great, now I Memory has been created!📖",
            error: "Memory has been removed from favorites💔",
        })
        const result = addFavorite(memoryId);
        toast.promise(result, {
            loading: "Give us a second, your memory is being created...💿",
            success: "Excellent!🤩 Memory has been created!",
            error: "Ooops..😱 Something went wrong, please try again",
        });
    }
    return (
        <button className={"group block"} onClick={clickFavorite}>
            <FaRegHeart className={"block group-hover:hidden text-2xl"}/>
            <FaHeart className={"hidden group-hover:block text-2xl"}/>
        </button>
    );
};

export default FavoriteButton;