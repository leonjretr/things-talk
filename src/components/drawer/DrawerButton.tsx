import React from 'react';

interface DrawerButtonProps {
    name: string;
    icon: React.ReactNode;
    toLink: string;
}

const DrawerButton = ({name, icon, toLink}: DrawerButtonProps) => {
    return (
        <>
            <li>
                <a href={`${toLink}`}
                   className="flex items-center p-2 text-brandCoffee rounded-lg dark:text-white hover:bg-brandCoffee hover:text-white dark:hover:bg-gray-700 group">
                    <div className={"text-xl hover:text-white"}>{icon}</div>
                    <span className="ms-3 font-poppinsFont ">{name}</span>
                </a>
            </li>
        </>
    );
};

export default DrawerButton;