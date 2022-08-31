import { ErrorText } from "../../../design-system/text/error";
import { CheckboxInput } from "../checkbox/checkboxInput";
import { InputLabelGroup } from "../../../design-system/text/inputLabel";

type RadioInputGroupProps = {
    formDataKey: string;
    label: string;
    options: { label: string; value: string }[];
    onChange: (formDataKey: string, value: string) => void;
    value: string;

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
