import React from 'react';
import ProfileNavPlateButton from '../buttons/ProfileNavPlateButton';

interface ProfileNavPlateProps {
    activeTab: string;
}

const ProfileNavPlate = ({activeTab}: ProfileNavPlateProps) => {

    const buttons = [
        {link: "/me/favorites", name: "favorites"},
        {link: "/me/my-memories", name: "memories"},
        {link: "/me", name: "settings"}
    ];

    return (
        <div className="flex flex-wrap justify-center gap-2">
            {buttons.map((button) => (
                <ProfileNavPlateButton
                    key={button.link}
                    link={button.link}
                    name={button.name}
                    activeTab={activeTab}
                />
            ))}
        </div>
    );
};

export default ProfileNavPlate;