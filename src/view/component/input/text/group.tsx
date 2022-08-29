import { ErrorText } from "../../text/error";
import { TextInput } from "./input";
import { InputLabelGroup } from "../../text/inputLabel";
import { ChangeEvent } from "react";

type TextInputGroupProps = {
    formDataKey: string;
    label: string;
    onChange: (formDataKey: any, value: string) => void;
    value: string | undefined;
    
    error?: string;
    placeholder?: string;
    sublabel?: string;
};

const TextInputGroup = ({
    error,
    formDataKey,
    label,
    onChange,
    placeholder = "",
    sublabel,
    value,
}: TextInputGroupProps) => {
    return (
        <div className="mb-3">
            <InputLabelGroup formDataKey={formDataKey} label={label} sublabel={sublabel} />
            <TextInput
                id={formDataKey}
                onChange={(event: ChangeEvent) => {
                    const input = event.target as HTMLInputElement;
                    onChange(formDataKey, input.value);
                }}
                placeholder={placeholder}
                value={value}
            />
            {error ? <ErrorText>{error}</ErrorText> : null}
        </div>
    );
};

export { TextInputGroup };
