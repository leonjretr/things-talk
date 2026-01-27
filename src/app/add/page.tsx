import React from 'react';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"

const Page = () => {
    return (
        <div className={"min-h-screen bg-white overflow-visible"}>
            <div className={"flex flex-col justify-center font-poppins"}>
                <button className={"flex justify-center text-2xl font-bold m-14 border-2 border-red-700"}>
                    endow with a spirit anything you want
                </button>
                <button className={"flex justify-center"}>
                    add a memory
                </button>
            </div>
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>
                            Add a memory
                        </FieldLegend>
                        <FieldDescription>
                            endow with a spirit anything you want
                        </FieldDescription>
                        <FieldGroup>
                            <Field>

                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </FieldGroup>
            </form>
        </div>
    );
};

export default Page;