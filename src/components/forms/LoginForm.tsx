"use client"
import React from 'react';
import {Field, FieldError, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Link from "next/link";
import {signIn} from "next-auth/react";

const LoginForm = () => {

    const formSchema = z.object({
        email: z
            .string().email("Sorry, it seems like your email address doesn't exist"),
        password: z
            .string()
            .min(8, "Sorry, your password is too short")
            .regex(/[@#$]/, "Must include @, # or $"),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: "/me"
        })
        // if (!result?.error) {
        //     router.refresh();
        //     router.push("/me");
        // }
    }

    const {formState: {errors}} = form;

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldSet>
                <FieldGroup>
                    <Field className={"max-w-48"}>
                        <FieldLabel className={"font-inter font-semibold"}>your email</FieldLabel>
                        <Input {...form.register("email")} placeholder={"johndoe@example.com"}/>
                        {errors.email && <FieldError>{errors.email.message}</FieldError>}
                    </Field>
                    <Field className={"max-w-48 "}>
                        <FieldLabel className={"font-inter font-semibold"}>your
                            password</FieldLabel>
                        <Input {...form.register("password")} placeholder={"qwerty123"}/>
                        {errors.password && <FieldError>{errors.password.message}</FieldError>}
                    </Field>
                </FieldGroup>
            </FieldSet>
            <h1 className={"text-sm text-ce font-inter mt-5"}> not registered?&nbsp;
                <Link href={"/sign-up"} className={"underline text-blue-700 font-semibold"}>
                    create an account</Link>
            </h1>
            <div className={"flex justify-center mt-2"}>
                <button type={"submit"}
                        className={"bg-brandLightgold hover:bg-amber-300 transition-colors text-brandCoffee font-inter font-semibold rounded-md p-2.5"}>sign
                    in!
                </button>
            </div>
        </form>

    );
};

export default LoginForm;