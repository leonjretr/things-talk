import React from 'react';

const Page = () => {
    return (
        <div className={"min-h-screen"}>
            <div className={"flex flex-col p-10 font-poppins"}>
                <div className={"flex justify-center text-brandCoffee italic font-medium text-4xl"}>
                    PROJECT GOALS
                </div>
                <div className={"flex items-start m-5"}>
                    During the development of this project I omitted many things on purpose. <br/>
                    My goal was to keep UI as minimalistic and simple as possible in order to let myself concentrate on technical part of the website and learning new tools, things and techniques.
                </div>
            </div>

        </div>
    );
};

export default Page;