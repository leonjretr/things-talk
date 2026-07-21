import React from 'react';
import AddMemoryForm from "@/components/forms/AddMemoryForm";
import {redirect} from "next/navigation";
import {auth} from "@/app/lib/auth/server";

const Page = async () => {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }
    return (
        <div className={"flex flex-col items-center min-h-screen bg-white overflow-visible"}>
            <AddMemoryForm/>
        </div>
    );
};

export default Page;