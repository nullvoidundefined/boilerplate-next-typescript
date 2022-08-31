import { ErrorText } from "../../../design-system/text/error";
import { PhoneInput } from "./phoneInput";
import { InputLabelGroup } from "../../../design-system/text/inputLabel";
import { ChangeEvent } from "react";

type PhoneInputGroupProps = {
    formDataKey: string;
    label: string;
    onChange: (formDataKey: string, value: string) => void;
    value: string | undefined;

    error?: string;
    placeholder?: string;
    sublabel?: string;
};

const PhoneInputGroup = ({
    error,
    formDataKey,
    label,
    placeholder = "",
    sublabel,
    onChange,
    value,
}: PhoneInputGroupProps) => {
    return (
        <div className="mb-3">
            <InputLabelGroup
                formDataKey={formDataKey}
                label={label}
                sublabel={sublabel}
            />
            <PhoneInput
                id={formDataKey}
                onChange={(event: ChangeEvent) => {
                    const input = event.target as HTMLInputElement;
                    const output = input.value.replace(/\D/g, "");
                    onChange(formDataKey, output);
                }}
                placeholder={placeholder}
                value={value}
            />
            {error ? <ErrorText>{error}</ErrorText> : null}
        </div>
    );
};

export { PhoneInputGroup };
