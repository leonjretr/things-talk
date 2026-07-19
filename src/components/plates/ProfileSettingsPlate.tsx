'use client';

import React, {useState} from 'react';

interface ProfileSettingsPlateProps {
    initialName: string;
    initialSurname: string;
    initialEmail: string;
}

const ProfileSettingsPlate = ({initialName, initialSurname, initialEmail}: ProfileSettingsPlateProps) => {
    const [name, setName] = useState(initialName);
    const [surname, setSurname] = useState(initialSurname);
    const [email, setEmail] = useState(initialEmail);
    const [profileSaving, setProfileSaving] = useState(false);
    const [profileMessage, setProfileMessage] = useState<string | null>(null);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordSaving, setPasswordSaving] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState<string | null>(null);

    const handleProfileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setProfileSaving(true);
        setProfileMessage(null);
        try {
            // TODO: replace with your server action, e.g.
            // await updateUserProfile({ name, surname, email });
            await new Promise((res) => setTimeout(res, 500));
            setProfileMessage('Profile updated.');
        } catch (err) {
            setProfileMessage('Something went wrong. Please try again.');
        } finally {
            setProfileSaving(false);
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordMessage(null);

        if (newPassword !== confirmPassword) {
            setPasswordMessage("New passwords don't match.");
            return;
        }
        if (newPassword.length < 8) {
            setPasswordMessage('New password must be at least 8 characters.');
            return;
        }

        setPasswordSaving(true);
        try {
            // TODO: replace with your server action, e.g.
            // await updateUserPassword({ currentPassword, newPassword });
            await new Promise((res) => setTimeout(res, 500));
            setPasswordMessage('Password updated.');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (err) {
            setPasswordMessage('Could not update password. Check your current password.');
        } finally {
            setPasswordSaving(false);
        }
    };

    return (
        <div className="px-4 md:px-8 lg:px-10 flex flex-col gap-6 font-poppins">
            {/* Profile info */}
            <form
                onSubmit={handleProfileSubmit}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4"
            >
                <h2 className="text-xl md:text-2xl font-bold">profile info</h2>

                <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex-1 flex flex-col gap-1 text-sm font-medium text-gray-600">
                        name
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base text-black"
                        />
                    </label>

                    <label className="flex-1 flex flex-col gap-1 text-sm font-medium text-gray-600">
                        surname
                        <input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base text-black"
                        />
                    </label>
                </div>

                <label className="flex flex-col gap-1 text-sm font-medium text-gray-600">
                    email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-base text-black"
                    />
                </label>

                {profileMessage && (
                    <div className="text-sm text-gray-700">{profileMessage}</div>
                )}

                <button
                    type="submit"
                    disabled={profileSaving}
                    className="self-start px-6 py-3 rounded-lg bg-brandTangerine text-white font-medium disabled:opacity-60"
                >
                    {profileSaving ? 'saving...' : 'save changes'}
                </button>
            </form>

            {/* Password */}
            <form
                onSubmit={handlePasswordSubmit}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4"
            >
                <h2 className="text-xl md:text-2xl font-bold">change password</h2>

                <label className="flex flex-col gap-1 text-sm font-medium text-gray-600">
                    current password
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-base text-black"
                    />
                </label>

                <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex-1 flex flex-col gap-1 text-sm font-medium text-gray-600">
                        new password
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base text-black"
                        />
                    </label>

                    <label className="flex-1 flex flex-col gap-1 text-sm font-medium text-gray-600">
                        confirm new password
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base text-black"
                        />
                    </label>
                </div>

                {passwordMessage && (
                    <div className="text-sm text-gray-700">{passwordMessage}</div>
                )}

                <button
                    type="submit"
                    disabled={passwordSaving}
                    className="self-start px-6 py-3 rounded-lg bg-brandWalnut text-white font-medium disabled:opacity-60"
                >
                    {passwordSaving ? 'saving...' : 'update password'}
                </button>
            </form>
        </div>
    );
};

export default ProfileSettingsPlate;