import React from 'react';
import ProfileNavPlateButton from '../buttons/ProfileNavPlateButton';

interface ProfileNavPlateProps {
    activeTab: string;
}

const ProfileNavPlate = ({activeTab}: ProfileNavPlateProps) => {

    const buttons = [
        {link: "/me/favourites", name: "favourites"},
        {link: "/me/memories", name: "memories"},
        {link: "/me/settings", name: "settings"}
    ];

    return (
        <>
            {buttons.map((button, index) => (
                <div key={index}>
                    <ProfileNavPlateButton link={button.link} name={button.name} activeTab={activeTab}/>
                </div>
            ))}
        </>
    );
};

export default ProfileNavPlate;