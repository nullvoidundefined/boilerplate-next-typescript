import { ErrorText } from "../../text/error";
import { CheckboxInput } from "../checkbox/input";
import { InputLabelGroup } from "../../text/inputLabel";
import { ChangeEvent } from "react";

type RadioInputGroupProps = {
    formDataKey: string;
    label: string;
    options: any[]; // TODO @Ian Make this more specific
    onChange: (formDataKey: any, value: string) => void;
    value: any;

    error?: string;
    sublabel?: string;
    tooltipText?: string;
};

const RadioInputGroup = ({
    error,
    formDataKey,
    label,
    onChange,
    options,
    sublabel,
    tooltipText,
    value,
}: RadioInputGroupProps) => {
    return (
        <div className="mb-3">
            <div className="mb-1">
                <InputLabelGroup
                    formDataKey={formDataKey}
                    horizontal
                    label={label}
                    sublabel={sublabel}
                />
            </div>
            {options.map((option, index) => {
                return (
                    <div className="align-items-center d-flex mb-1" key={index}>
                        <CheckboxInput
                            checked={String(value) === String(option.value)}
                            className="mr-2"
                            id={formDataKey}
                            onChange={() => {
                                onChange(formDataKey, option.value);
                            }}
                            type="radio"
                        />{" "}
                        {option.label}
                    </div>
                );
            })}
            {error ? <ErrorText>{error}</ErrorText> : null}
        </div>
    );
};

export { RadioInputGroup };
