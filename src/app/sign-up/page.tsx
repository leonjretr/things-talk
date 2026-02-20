"use client"
import React from 'react';
import {Field, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

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
                    Sign Up
                </div>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel className={"font-inter font-semibold"}>your email</FieldLabel>
                                <Input className={"w-56"}/>
                            </Field>
                            <Field>
                                <FieldLabel className={"font-inter font-semibold"}>your password</FieldLabel>
                                <Input className={"w-44"}/>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </form>
                <h1 className={"m-5 text-sm font-inter"}> Already registered?&nbsp;
                    <Link href={"/login"} className={"underline text-blue-700 font-semibold"}>
                        Sign in</Link>
                </h1>
            </div>
        </div>
    );
};

export default Page;