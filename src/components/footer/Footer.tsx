import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <div className={"flex justify-between items-center w-full h-20 p-5 border-t-2 border-brandCoffee font-inter text-brandCoffee font-semibold text-sm"}>
            <div className={""}>
                leonid svietlychnyi - {date.getFullYear()}
            </div>
            <div className={""}>
                thanks for visiting❤️
            </div>
            <div className={"flex gap-3 "}>
                <a href={"t.me/thatsleonard"} className={"hover:underline "}>
                    telegram
                </a>
                <a href={"t.me/thatsleonard"} className={"hover:underline"}>
                    linkedin
                </a>
                <a href={"t.me/thatsleonard"} className={"hover:underline"}>
                    github
                </a>
            </div>
        </div>
    );
};

export default Footer;