"use client"
import React from 'react';
import * as z from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {FaPaperPlane} from "react-icons/fa";

const AddMemoryForm = () => {
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
        // submit data
        console.log(data)
    }

    return (
        <div className="flex justify-center">
            <div className="w-full rounded-2xl bg-white p-8 m-5 shadow-sm border">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <FieldSet>
                            <div className={"flex flex-col leading-none justify-center items-center font-inter"}>
                                <FieldLegend className={"text-xl font-semibold  tracking-tight text-neutral-900 leading-3"}>
                                    Add your memory. Perpetuate it. Be an interpreter.
                                </FieldLegend>
                                <p className="text-sm text-neutral-500 leading-3">
                                    Describe something meaningful. This will become part of your archive.
                                </p>
                            </div>
                            <FieldGroup>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
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
                    <div className="pt-6 flex justify-end">
                        <button
                            type="submit"
                            className="flex items-center gap-x-2 px-5 py-2.5 rounded-lg font-poppins text-brandWalnut border-2 border-brandWalnut hover:bg-brandWalnut hover:text-white hover:opacity-90 transition-colors"
                        >
                            <FaPaperPlane/> save memory
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMemoryForm;