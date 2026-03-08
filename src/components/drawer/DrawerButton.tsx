import React from 'react';

interface DrawerButtonProps {
    name: string;
    icon: React.ReactNode;
}

const DrawerButton = ({name, icon}: DrawerButtonProps) => {
    return (
        <>
            <li>
                <a href="#"
                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-700 group">
                    <div className={"text-xl hover:text-white"}>{icon}</div>
                    <span className="ms-3 font-poppinsFont ">{name}</span>
                </a>
            </li>
        </>
    );
};

export default DrawerButton;