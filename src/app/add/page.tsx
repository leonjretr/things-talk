"use client"
import React from 'react';
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import {Input} from "@/components/ui/input";
import {Textarea} from '@/components/ui/textarea';
import * as z from "zod"
import {useForm, Controller} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

const Page = () => {
    const formSchema = z.object({
        title: z
            .string()
            .min(3, "Object title must be at least 3 characters")
            .max(32, "Object title must be at most 32 characters"),
        emotions: z
            .string()
            .min(5, "Emotions field must be at least 5 characters")
            .max(50, "Emotions field must be at most 50 characters"),
        people: z
            .string()
            .min(5, "People field must be at least 5 characters")
            .max(50, "People field must be at most 50 characters"),
        memory: z
            .string()
            .min(10, "Emotions field must be at least 10 characters")
            .max(1000, "Emotions field must be at most 1000 characters"),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            emotions: "",
            people: "",
            memory: "",
        }
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        console.log(data)
    }

    return (
        <div className={"flex flex-col items-center pt-7 min-h-screen bg-white overflow-visible"}>
            <div className={"flex justify-center"}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <FieldSet>
                            <div className={"flex justify-center items-center"}>
                                <FieldLegend className={"font-inter font-bold text-2xl"}>
                                    Add your memory. Perpetuate it. Be an interpreter.
                                </FieldLegend>
                            </div>
                            <FieldGroup>
                                <div className="flex gap-5 w-full">
                                    <Controller name={"title"} control={form.control} render={({field, fieldState}) => (
                                        <Field className={"w-80 shrink-0"}>
                                            <FieldLabel className={"font-inter font-semibold"}>what is that
                                                thing?</FieldLabel>
                                            <Input {...field} id={"title"} placeholder={"a book"}/>
                                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                                        </Field>
                                    )}/>
                                    <Controller name={"emotions"} control={form.control}
                                                render={({field, fieldState}) => (
                                                    <Field className={"w-80 shrink-0"}>
                                                        <FieldLabel className={"font-inter font-semibold"}>describe
                                                            what do you feel thinking about it?</FieldLabel>
                                                        <Input {...field} id={"emotions"}
                                                               placeholder={"joy, loneliness, nostalgia"}/>
                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]}/>)}
                                                    </Field>
                                                )}/>
                                </div>
                                <div className={"flex gap-5 w-full"}>
                                    <Controller name={"people"} control={form.control}
                                                render={({field, fieldState}) => (
                                                    <Field className={"w-80 shrink-0"}>
                                                        <FieldLabel className={"font-inter font-semibold"}>who makes it
                                                            special? </FieldLabel>
                                                        <Input {...field} id={"people"}
                                                               placeholder={"dad, mom, or yourself"}/>
                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]}/>)}
                                                    </Field>
                                                )}/>
                                    <Controller name={"memory"} control={form.control}
                                                render={({field, fieldState}) => (
                                                    <Field
                                                        className={"w-80 shrink-0"}>
                                                        <FieldLabel
                                                            className={"font-inter font-semibold w-full break-keep"}>time
                                                            has
                                                            come. i&#39;ll let you unfold the story</FieldLabel>
                                                        <Textarea {...field}
                                                                  id={"memory"} placeholder={"once upon a time..."}/>
                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]}/>)}
                                                    </Field>
                                                )}/>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                    </FieldGroup>
                </form>
            </div>
            <div className={"flex font-poppins text-xs text-center pt-5 font-medium italic text-brandWalnut"}>
                people come and go, things are bought and lost, <br/>
                yet memories endure, unyielding as a stone<br/>
                that rush of pride in the first car dad helped to choose -<br/>
                engine hum, leather scent and childlike joy<br/>
                the scrutiny in mum&#39;s eyes as she toured through uni halls,<br/>
                her hopes woven into every brick and beam.<br/>
                the future exists not, nor is the past<br/>
                what remains is this fleeting moment,<br/>
                and the echoes we carry within us<br/>
            </div>
        </div>
    );
};

export default Page;