import { ErrorText } from "../../text/error";
import { TextAreaInput } from "./input";
import { InputLabelGroup } from "../../text/inputLabel";
import { ChangeEvent } from "react";

type TextAreaInputGroupProps = {
    formDataKey: string;
    label: string;
    onChange: (formDataKey: string, value: string) => void;
    value: string | undefined;
    
    error?: string;
    placeholder?: string;
    rows?: number;
    sublabel?: string;
};

const TextAreaInputGroup = ({
    error,
    formDataKey,
    label,
    onChange,
    placeholder = "",
    rows = 4,
    sublabel,
    value,
}: TextAreaInputGroupProps) => {
    return (
        <div className="mb-3">
            <InputLabelGroup formDataKey={formDataKey} label={label} sublabel={sublabel} />
            <TextAreaInput
                id={formDataKey}
                onChange={(event: ChangeEvent) => {
                    const input = event.target as HTMLInputElement;
                    onChange(formDataKey, input.value);
                }}
                placeholder={placeholder}
                rows={rows}
                value={value}
            />
            {error ? <ErrorText>{error}</ErrorText> : null}
        </div>
    );
};

export { TextAreaInputGroup };
