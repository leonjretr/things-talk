"use client"
import React from 'react';
import {FaRegTrashAlt} from "react-icons/fa";
import {deleteMemory} from "@/app/lib/actions/memory-actions";
import toast from "react-hot-toast";

interface DeleteMemoryButtonProps {
    memoryId: string;
    onDeleted: () => void;
}

const DeleteMemoryButton = ({memoryId, onDeleted}: DeleteMemoryButtonProps) => {
    const clickDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this memory? This cannot be undone.")) {
            return;
        }

        const toastId = toast.loading("Deleting your memory...");
        try {
            await deleteMemory(memoryId);
            toast.success("Memory has been deleted🗑️", {id: toastId});
            onDeleted();
        } catch (error) {
            toast.error("Ooops..😱 Something went wrong, please try again", {id: toastId});
            console.log("Error while deleting memory: " + error);
        }
    }

    return (
        <button className={"group block"} onClick={clickDelete} aria-label={"Delete memory"}>
            <FaRegTrashAlt className="text-xl text-brandWalnut transition-colors group-hover:text-red-600"/>
        </button>
    );
};

export default DeleteMemoryButton;
