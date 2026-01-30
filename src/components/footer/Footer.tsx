import React from 'react';
import FooterSocialButton from "@/components/buttons/FooterSocialButton";

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
            <div className={"flex gap-3"}>
                <FooterSocialButton link={"t.me/thatsleonard"} title={"telegram"}/>
                <FooterSocialButton link={"t.me/leonjretr"} title={"github"}/>
                <FooterSocialButton link={"t.me/thatsleonard"} title={"linkedin"}/>
            </div>
        </div>
    );
};

export default Footer;