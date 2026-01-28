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
        <div className={"flex justify-center p-10 min-h-screen bg-white overflow-visible"}>
            <div className={"flex justify-center font-poppins"}>
                {/*<button className={"flex justify-center text-3xl font-bold mt-5"}>*/}
                {/*    endow with a spirit anything you want*/}
                {/*</button>*/}
                <div className={"flex justify-center text-xs text-center p-5 font-medium italic text-brandWalnut"}>
                    people come and go, things bought and lost, <br/>
                    yet memories endure, unyielding as a stone<br/>
                    that rush of pride in the first car dad helped choose -<br/>
                    engine hum, leather scent, childlike joy<br/>
                    the scrutiny in mum&#39;s eyes as she toured through uni halls,<br/>
                    her hopes woven into every brick and beam.<br/>
                    the future exists not, nor is the past<br/>
                    what remains is this fleeting moment,<br/>
                    and the echoes we carry within us<br/>
                </div>
            </div>
            <div className={"flex justify-center"}>
                <form>
                    <FieldGroup>
                        <FieldSet>
                            <FieldLegend className={"text-center font-inter font-bold flex justify-center"}>
                                Add your memory. Perpetuate it.
                            </FieldLegend>
                                <FieldGroup>
                                    <div className="flex gap-5">
                                        <Field>
                                            <FieldLabel className={"font-inter font-semibold"}>Story name</FieldLabel>
                                            <Input id={"name"} placeholder={"Once Upon a Time in Prague"} />
                                            <FieldError></FieldError>
                                        </Field>
                                        <Field>
                                            <FieldLabel className={"font-inter font-semibold"}>Story name</FieldLabel>
                                            <Input id={"name"} placeholder={"Once Upon a Time in Prague"} />
                                            <FieldError></FieldError>
                                        </Field>
                                    </div>

                                </FieldGroup>

                        </FieldSet>
                    </FieldGroup>
                </form>
            </div>
        </div>
    );
};

export default Page;