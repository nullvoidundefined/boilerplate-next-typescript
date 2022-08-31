import { ErrorText } from "../../../design-system/text/error";
import { NumberInput } from "./numberInput";
import { InputLabelGroup } from "../../../design-system/text/inputLabel";
import styled from "styled-components";

type NumberInputGroupProps = {
    formDataKey: string;
    label: string;
    onChange: (formDataKey: string, value: number) => void;
    value: number | undefined;

    allowNegativeNumbers?: boolean;
    step?: string;
    error?: string;
    fullWidth?: boolean;
    placeholder?: string;
    sublabel?: string;
    tooltipText?: string;
};

const NumberInputGroupContainer = styled.div<{ fullWidth: boolean }>`
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "200px")};
`;

const NumberInputGroup = ({
    allowNegativeNumbers = false,
    error,
    formDataKey,
    fullWidth = false,
    label,
    onChange,
    placeholder,
    sublabel,
    step = "1",
    value,
}: NumberInputGroupProps) => {
    return (
        <div className="mb-3">
            <InputLabelGroup
                formDataKey={formDataKey}
                label={label}
                sublabel={sublabel}
            />
            <NumberInputGroupContainer fullWidth={fullWidth}>
                <NumberInput
                    allowNegativeNumbers={allowNegativeNumbers}
                    id={formDataKey}
                    onChange={(value: number) => {
                        onChange(formDataKey, value);
                    }}
                    placeholder={placeholder}
                    step={step}
                    value={value}
                />
            </NumberInputGroupContainer>
            {error ? <ErrorText>{error}</ErrorText> : null}
        </div>
    );
};

export { NumberInputGroup };
