import React from 'react';
import AddMemoryForm from "@/components/forms/AddMemoryForm";

const Page = () => {
    return (
        <div className={"flex flex-col items-center pt-7 min-h-screen bg-white overflow-visible"}>
            <AddMemoryForm/>
            <div className={"flex font-poppins text-xs text-center pt-5 font-medium italic text-brandWalnut"}>
                people come and go, things are bought and lost, <br/>
                yet memories endure, unyielding as a stone<br/>
                that rush of pride in the first car dad helped to choose -<br/>
                engine hum, leather scent and childlike joy<br/>
                the scrutiny in mum&#39;s eyes as she toured through uni halls,<br/>
                her hopes woven into every brick and beam.<br/>
                the future exists not, nor is the past<br/>
                what remains is this fleeting moment,<br/>
                and the echoes we carry within us<br/>
            </div>
        </div>
    );
};

export default Page;