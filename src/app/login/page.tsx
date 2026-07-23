import React from 'react';
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";
import LoginForm from '@/components/forms/LoginForm';
import ProviderButton from '@/components/buttons/ProviderButton';
import {auth} from '../lib/auth/server';
import {redirect} from "next/navigation";

const Page = async () => {
    const session = await auth();
    if (session) {
        redirect("/");
    }

    return (
        <div className="min-h-screen flex justify-center px-4 py-12">
            <div className="w-full max-w-4xl">

                <h1 className="text-center text-3xl font-poppins font-semibold mb-8">
                    sign in to your account
                </h1>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
                    <div className="flex flex-col w-full md:w-auto">
                        <div className="text-sm font-poppins mb-6 text-center md:text-right">
                            using credentials
                        </div>
                        <LoginForm/>
                    </div>

                    <div
                        className="my-8 h-px w-full bg-brandCoffee dark:bg-zinc-700 md:my-0 md:mx-8 md:h-auto md:w-px md:self-stretch"
                    />

                    <div className="flex flex-col w-full md:w-auto">
                        <div className="text-sm font-poppins mb-6 text-center">
                            using one of the services
                        </div>
                        <div className="flex flex-col gap-3 items-center md:items-start">
                            <ProviderButton
                                text="Github"
                                signProvider="github"
                                icon={<FaGithub/>}
                                whiteVersion={false}
                            />
                            <ProviderButton
                                text="Google"
                                signProvider="google"
                                icon={<FaGoogle/>}
                                whiteVersion={true}
                            />
                            <ProviderButton
                                text="Facebook"
                                signProvider="facebook"
                                icon={<FaFacebook/>}
                                whiteVersion={false}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;