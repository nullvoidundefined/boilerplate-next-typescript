import { useEffect, useState } from "react";
import { Button } from "../../../design-system";
import { validateProposalForm } from "../../../../service";
import { TextAreaInputGroup, TextInputGroup } from "../../input";

import type { ProposalFormData, ProposalFormErrorMap } from "../../../../type";

type ProposalFormProps = {
    formData: ProposalFormData;
    onSubmit: (formData: ProposalFormData) => void;
};

const ProposalForm = ({ formData, onSubmit }: ProposalFormProps) => {
    const [errors, setErrors] = useState<ProposalFormErrorMap>(
        {} as ProposalFormErrorMap
    );
    const [formState, setFormState] = useState<ProposalFormData>(formData);
    const [hasErrored, setHasErrored] = useState(false);

    const updateFormState = (
        key: string,
        value: string | unknown[] | boolean
    ) => {
        setFormState({ ...formState, [key]: value });
    };

    useEffect(() => {
        if (hasErrored) {
            console.log("formState", formState);
            validateProposalForm(formState, setErrors);
            setHasErrored(false);
        }
    }, [formState, hasErrored]);

    return (
        <form>
            <TextInputGroup
                error={errors.name}
                formDataKey="name"
                label="Name"
                onChange={updateFormState}
                value={formState.name}
            />
            <TextAreaInputGroup
                error={errors.description}
                formDataKey="description"
                label="Description"
                onChange={updateFormState}
                value={formState.description}
            />

            <div className="d-flex flex-row-reverse w-100">
                <Button
                    onClick={(event) => {
                        event.preventDefault();
                        const hasErrors = validateProposalForm(
                            formState,
                            setErrors
                        );

                        if (!hasErrors) {
                            onSubmit(formState);
                        } else {
                            setHasErrored(true);
                        }
                    }}
                >
                    Submit
                </Button>
            </div>
        </form>
    );
    return <div>Foo</div>;
};

export { ProposalForm };
