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

const Page = () => {
    return (
        <div className={"flex flex-col items-center p-7 min-h-screen bg-white overflow-visible"}>
            <div className={"flex justify-center"}>
                <form>
                    <FieldGroup>
                        <FieldSet>
                            <FieldLegend className={"font-inter font-bold flex pb-5 justify-center "}>
                                Add your memory. Perpetuate it. Be an interpreter.
                            </FieldLegend>
                            <FieldGroup>
                                <div className="flex gap-5 w-full">
                                    <Field>
                                        <FieldLabel className={"font-inter font-semibold"}>what is that thing?</FieldLabel>
                                        <Input id={"name"} placeholder={"a book"}/>
                                        <FieldError></FieldError>
                                    </Field>
                                    <Field>
                                        <FieldLabel className={"font-inter font-semibold w-full break-keep"}>describe your emotions. what do you feel thinking about it?</FieldLabel>
                                        <Input id={"name"} placeholder={"joy, loneliness, nostalgia"}/>
                                        <FieldError></FieldError>
                                    </Field>
                                </div>
                                <div className={"flex gap-5 w-full"}>
                                    <Field>
                                        <FieldLabel className={"font-inter font-semibold"}>what is that thing?</FieldLabel>
                                        <Input id={"name"} placeholder={"a book"}/>
                                        <FieldError></FieldError>
                                    </Field>
                                    <Field>
                                        <FieldLabel className={"font-inter font-semibold w-full break-keep"}>describe your emotions. what do you feel thinking about it?</FieldLabel>
                                        <Input id={"name"} placeholder={"joy, loneliness, nostalgia"}/>
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
                yet memories endure, unyielding as a cliff<br/>
                that rush of pride in the first car dad helped choose -<br/>
                engine hum, leather scent, childlike joy<br/>
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