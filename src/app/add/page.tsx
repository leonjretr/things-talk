import React from 'react';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup, FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import {Input} from "@/components/ui/input";

const Page = () => {
    return (
        <div className={"min-h-screen bg-white overflow-visible"}>
            <div className={"flex flex-col justify-center font-poppins"}>
                <button className={"flex justify-center text-3xl font-bold mt-5"}>
                    endow with a spirit anything you want
                </button>
                <button className={"flex justify-center mt-2"}>
                    add a memory
                </button>
            </div>
            <div className={"flex justify-center"}>
                <form>
                    <FieldGroup>
                        <FieldSet>
                            <FieldLegend className={"font-inter font-bold flex justify-center"}>
                                Add a memory
                            </FieldLegend>
                            <FieldDescription>
                                endow with a spirit anything you want
                            </FieldDescription>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel className={"font-inter font-semibold"}>Story name</FieldLabel>
                                    <Input id={"name"} placeholder={"Once Upon a Time in Prague"} />
                                    <FieldError></FieldError>
                                </Field>
                            </FieldGroup>
                        </FieldSet>
                    </FieldGroup>
                </form>
            </div>
        </div>
    );
};

export default Page;