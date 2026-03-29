import React from 'react';
import Image from "next/image";

const ProfileUserPlate = () => {
    return (
        <div className={"px-10 pt-10"}>
            <div className={"flex justify-between w-full bg-brandTangerine p-5 rounded-2xl"}>
                <div className={"flex"}>
                    <div className={"flex flex-col"}>
                        <Image className={"rounded-xl border-2 border-white"} alt={"Author"}
                               src={"/imgs/leo.jpg"}
                               height={"150"}
                               width={"150"}/>
                    </div>
                    <div className={"flex flex-col text-white font-poppins mx-6"}>
                        <div className={"text-5xl font-bold italic"}>hi, Leon</div>
                        {/*<div className={"text-3xl font-medium mt-1.5"}> Renowned author</div>*/}
                        <div className={"flex gap-x-3 items-center mt-1 text-lg font-medium"}>
                            <div>you&#39;ve got: 32 stories</div>
                        </div>
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <a href={"/myprofile/mystories/newstory"}>
                        <button
                            className={"w-max h-max p-3 rounded-lg bg-white text-black font-poppins font-medium"}>
                            post a memory
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileUserPlate;