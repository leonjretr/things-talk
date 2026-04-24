"use client"
import React from 'react';
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {signIn} from "next-auth/react"

const SignUpForm = () => {
        const formSchema = z.object({
            email: z
                .email("Sorry, it seems like your email address doesn't exist"),
            password: z
                .string()
                .min(7, "Sorry, your password is too short")
                .includes("@#$")
                .trim(),
            name: z.string().min(2, "Sorry, it seems you didn't include your name"),
            surname: z.string()
        })

        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                email: "",
                password: "",
                name: "",
                surname: ""
            }

        })

        const onSubmit = async (data: z.infer<typeof formSchema>) => {
            const reg = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: {
                        email: data.email,
                        password: data.password,
                        name: data.name,
                        surname: data.surname,
                    },
                }),
            })
            if (reg.status == 200) {
                await signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect: true,
                    callbackUrl: "/me",
                });
            }
        }

        return (
            <>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldGroup>
                            <div className={"flex gap-x-3 justify-center"}>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>your name</FieldLabel>
                                    <Input className={"w-56"} placeholder={"John"} required/>
                                </Field>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>your surname</FieldLabel>
                                    <Input className={"w-56"} placeholder={"Doe"}/>
                                </Field>
                            </div>
                            <div className={"flex gap-x-3"}>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>your email</FieldLabel>
                                    <Input className={"w-56"} placeholder="johndoe@example.com" required/>
                                </Field>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>your password</FieldLabel>
                                    <Input className={"w-56"} placeholder={"qwerty"} required/>
                                </Field>
                            </div>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </>
        );
    }
;

export default SignUpForm;