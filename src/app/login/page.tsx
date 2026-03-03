"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field";
import {Input} from '@/components/ui/input';
import Link from "next/link";
import {FaGithub, FaGoogle} from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react"

const Page = () => {
    const formSchema = z.object({
        email: z
            .email("Sorry, it seems like your email address doesn't exist"),
        password: z
            .string()
            .min(7, "Sorry, your password is too short")
            .includes("@#$")
            .trim(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    const { data: session } = useSession()


    return (
        <div className={"min-h-screen"}>
            <div className={"flex flex-col items-center m-10"}>
                <div className={"text-3xl font-poppins font-semibold mb-1"}>
                    Sign in
                </div>
                <div className={"flex"}>
                    <div className={"flex flex-col items-end my-5 gap-y-3 text-right"}>
                        <div className={"text-sm font-poppins mb-6"}>
                            using credentials
                        </div>
                        <div>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FieldSet>
                                    <FieldGroup>
                                        <Field className={"max-w-48"}>
                                            <FieldLabel className={"font-inter font-semibold"}>your email</FieldLabel>
                                            <Input/>
                                        </Field>
                                        <Field className={"max-w-48 "}>
                                            <FieldLabel className={"font-inter font-semibold"}>your
                                                password</FieldLabel>
                                            <Input/>
                                        </Field>
                                    </FieldGroup>
                                </FieldSet>
                            </form>
                            <h1 className={"text-sm text-right font-inter my-5"}> Not registered?&nbsp;
                                <Link href={"/sign-up"} className={"underline text-blue-700 font-semibold"}>
                                    Create an account</Link>
                            </h1>
                        </div>
                    </div>
                    <div className="mx-6 w-px bg-brandCoffee dark:bg-zinc-700 self-stretch"/>
                    <div className={"flex flex-col my-5"}>
                        <div className={"flex justify-center text-sm font-poppins mb-6"}>
                            using one of the services
                        </div>
                        <div className={"flex flex-col items-start gap-y-3"}>
                            <button
                                onClick={() => signIn("github")}
                                className={"flex items-center gap-2 px-3 py-2 bg-brandCoffee border-2 border-brandCoffee text-white font-inter font-medium rounded-lg cursor-pointer"}>
                                <FaGithub/> Github
                            </button>
                            <button
                                className={"flex items-center gap-2 px-3 py-2 bg-white border-2 border-brandCoffee text-brandCoffee font-inter font-medium rounded-lg cursor-pointer"}>
                                <FaGoogle/> Google
                            </button>
                            <button
                                className={"flex items-center gap-2 px-3 py-2 bg-brandCoffee border-2 border-brandCoffee text-white font-inter font-medium rounded-lg cursor-pointer"}>
                                <FaGithub/> Github
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;