"use client"
import React from 'react';
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldError, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {signIn} from "next-auth/react"
import Link from "next/link";

const SignUpForm = () => {
        const formSchema = z.object({
            email: z
                .z.string().email("Sorry, it seems like your email address doesn't exist"),
            password: z
                .string()
                .min(7, "Sorry, your password is too short")
                .regex(/[@#$]/, "Must include @, # or $"),
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
            console.log("submit pressed")
            const reg = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                    name: data.name,
                    surname: data.surname,
                }),
            })
            console.log("submit pressed 2")
            if (reg.status == 200) {
                await signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect: true,
                    callbackUrl: "/me",
                });
            }
        }
        const {
            register, handleSubmit, formState: {errors}
        } = form

        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldGroup>
                            <div className={"flex gap-x-3 justify-center"}>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>your name</FieldLabel>
                                    <Input {...register("name")} className={"w-56"} placeholder={"John"} required/>
                                    {errors.name && <FieldError>{errors.name.message}</FieldError>}
                                </Field>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>your surname</FieldLabel>
                                    <Input {...register("surname")} className={"w-56"} placeholder={"Doe"}/>
                                    {errors.surname && <FieldError>{errors.surname.message}</FieldError>}
                                </Field>
                            </div>
                            <div className={"flex gap-x-3"}>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>your email</FieldLabel>
                                    <Input {...register("email")} className={"w-56"} placeholder="johndoe@example.com"
                                           required/>
                                    {errors.email && <FieldError>{errors.email.message}</FieldError>}
                                </Field>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>your password</FieldLabel>
                                    <Input {...form.register("password")} className={"w-56"} placeholder={"qwerty"}
                                           required/>
                                    {errors.password && <FieldError>{errors.password.message}</FieldError>}
                                </Field>
                            </div>
                        </FieldGroup>
                    </FieldSet>
                    <div className={"flex flex-col items-center"}>
                        <p className={"m-5 text-sm font-inter text-center"}> already registered?&nbsp;
                            <Link href={"/login"} className={"underline text-blue-700 font-semibold"}>
                                sign in</Link>
                        </p>
                        <button type={"submit"}
                                className={"bg-brandLightgold hover:bg-amber-300 transition-colors text-brandCoffee font-inter font-semibold rounded-md p-2.5"}>
                            sign me up!
                        </button>
                    </div>
                </form>
            </>
        );
    }
;

export default SignUpForm;