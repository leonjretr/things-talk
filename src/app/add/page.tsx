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
import { Textarea } from '@/components/ui/textarea';

const Page = () => {
    return (
        <div className={"flex flex-col items-center p-7 min-h-screen bg-white overflow-visible"}>
            <div className={"flex justify-center"}>
                <form>
                    <FieldGroup>
                        <FieldSet>
                            <div className={"flex justify-center items-center"}>
                                <FieldLegend className={"font-inter font-bold text-2xl"}>
                                    Add your memory. Perpetuate it. Be an interpreter.
                                </FieldLegend>
                            </div>
                            <FieldGroup>
                                <div className="flex gap-5 w-full">
                                    <Field className={"w-80 shrink-0"}>
                                        <FieldLabel className={"font-inter font-semibold"}>what is that thing?</FieldLabel>
                                        <Input id={"name"} placeholder={"a book"}/>
                                        <FieldError></FieldError>
                                    </Field>
                                    <Field className={"w-80 shrink-0"}>
                                        <FieldLabel className={"font-inter font-semibold"}>describe what do you feel thinking about it?</FieldLabel>
                                        <Input id={"emotions"} placeholder={"joy, loneliness, nostalgia"}/>
                                        <FieldError></FieldError>
                                    </Field>
                                </div>
                                <div className={"flex gap-5 w-full"}>
                                    <Field className={"w-80 shrink-0"}>
                                        <FieldLabel className={"font-inter font-semibold"}>who makes it special? </FieldLabel>
                                        <Input id={"people"} placeholder={"dad, mom, or yourself"}/>
                                        <FieldError></FieldError>
                                    </Field>
                                    <Field className={"w-80 shrink-0"}>
                                        <FieldLabel className={"font-inter font-semibold w-full break-keep"}>time has come. i&#39;ll let you unfold the story</FieldLabel>
                                        <Textarea id={"memory"} placeholder={"once upon a time..."}/>
                                        <FieldError></FieldError>
                                    </Field>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                    </FieldGroup>
                </form>
            </div>
            <div className={"flex font-poppins text-xs text-center p-5 font-medium italic text-brandWalnut"}>
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