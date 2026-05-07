import React, { use } from 'react';

const Page = ({params}: { params: Promise<{ memory: string }> }) => {

    const {memory} = use(params);
    // фетчинг мемори по параму с бэка, ну и соответственно выводишь всё на странице

    return (
        <div className={"min-h-screen"}>
            <div className={"flex justify-center"}>
                <div className={"uppercase font-poppins font-medium italic text-3xl m-5"}>
                    Title: {memory.replaceAll("-", " ")}
                </div>
            </div>
            <div className={"flex mx-10 my-5"}>
                <div className={"font-poppins"}>
                    I dreamt about it all night...

                </div>
            </div>
        </div>
    );
};

export default Page;