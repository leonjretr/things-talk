"use client"
import React from 'react';
import {Field, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const LoginForm = () => {

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
    );
};

export default LoginForm;