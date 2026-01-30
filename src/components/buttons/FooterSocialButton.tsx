import React from 'react';

interface FooterSocialButtonProps {
    link: string;
    title: string;
}

const FooterSocialButton = ({link, title}: FooterSocialButtonProps) => {
    return (
        <a rel="noopener noreferrer"
           href={`https://${link}`}
           target="_blank"
           className={"hover:underline"}>
            {title}
        </a>
    );
};

export default FooterSocialButton;