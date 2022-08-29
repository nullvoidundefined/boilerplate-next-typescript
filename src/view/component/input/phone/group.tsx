import { ErrorText } from "../../text/error";
import { PhoneInput } from "./input";
import { InputLabelGroup } from "../../text/inputLabel";
import { ChangeEvent } from "react";

type PhoneInputGroupProps = {
    error: string | undefined;
    formDataKey: string;
    label: string;
    onChange: (formDataKey: any, value: string) => void;
    value: string | undefined;

    placeholder?: string;
    sublabel?: string;
};

const PhoneInputGroup = ({ error, formDataKey, label, placeholder="", sublabel, onChange, value }: PhoneInputGroupProps) => {
    return (
        <div className="mb-3">
            <InputLabelGroup formDataKey={formDataKey} label={label} sublabel={sublabel} />
            <PhoneInput
                id={formDataKey}
                onChange={(event: ChangeEvent) => {
                    const input = event.target as HTMLInputElement;
                    const output = input.value.replace(/\D/g,'');
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
