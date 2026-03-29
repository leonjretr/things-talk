import React from 'react';

interface ProfileNavPlateButtonProps {
    link: string;
    activeTab:string;
    name: string;
}

const ProfileNavPlateButton = ({link, activeTab, name}: ProfileNavPlateButtonProps) => {
    const isActive = name === activeTab;
    return (
        <a href={`${link}`}>
            <button
                className={`flex h-12 w-max px-4 ${isActive && "bg-gray-200"} border-x-2 border-brandTangerine items-center font-poppins hover:bg-gray-200 p-2`}>
                <div>memories</div>
            </button>
        </a>
    );
};

export default ProfileNavPlateButton;