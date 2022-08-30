import { ChangeEvent } from "react";

import { CheckboxInput } from "./input";
import { ErrorText } from "../../text/error";
import { InputLabelGroup } from "../../text/inputLabel";

type TextInputGroupProps = {
    checked: boolean | undefined;
    formDataKey: string;
    label: string;
    onChange: (formDataKey: string, value: boolean) => void;

    error?: string;
    sublabel?: string;
    tooltipText?: string;
};

const CheckboxInputGroup = ({
    checked,
    error,
    formDataKey,
    label,
    onChange,
    sublabel,
}: TextInputGroupProps) => {
    return (
        <div className="align-items-center d-flex mb-3">
            <CheckboxInput
                checked={checked}
                className="mr-2"
                id={formDataKey}
                onChange={(event: ChangeEvent) => {
                    const input = event.target as HTMLInputElement;
                    onChange(formDataKey, input.checked);
                }}
            />
            <InputLabelGroup
                formDataKey={formDataKey}
                horizontal
                label={label}
                sublabel={sublabel}
            />
            {error ? <ErrorText>{error}</ErrorText> : null}
        </div>
    );
};

export { CheckboxInputGroup };
