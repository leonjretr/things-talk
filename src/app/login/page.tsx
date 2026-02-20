"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field";
import {Input} from '@/components/ui/input';
import Link from "next/link";
import {Separator} from "@/components/ui/separator"
import {FaGithub} from "react-icons/fa";

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

    return (
        <div className={"min-h-screen"}>
            <div className={"flex flex-col items-center m-10"}>
                <div className={"text-3xl font-poppins font-semibold mb-6"}>
                    Login
                </div>
                <div className={"flex m-5 gap-3"}>
                    <div>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldSet>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel className={"font-inter font-semibold"}>your email</FieldLabel>
                                        <Input className={"w-min"}/>
                                    </Field>
                                    <Field>
                                        <FieldLabel className={"font-inter font-semibold"}>your password</FieldLabel>
                                        <Input className={"w-44"}/>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        </form>
                        <h1 className={"m-5 text-sm font-inter"}> Not registered?&nbsp;
                            <Link href={"/sign-up"} className={"underline text-blue-700 font-semibold"}>
                                Create an account</Link>
                        </h1>
                    </div>
                    <Separator orientation={"vertical"} className={"bg-black w-10"}/>
                    <div className={"flex flex-col items-center"}>
                        <div>
                            using github
                        </div>
                        <button className={"flex items-center w-24 p-3 gap-2 bg-gray-200 border-2 border-black rounded-md"}>
                            <FaGithub/> Github
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;