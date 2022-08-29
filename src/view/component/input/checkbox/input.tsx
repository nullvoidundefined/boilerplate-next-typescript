import { ChangeEvent } from "react";
import styled from "styled-components";

type CheckboxInputProps = {
    checked: boolean | undefined;
    onChange: (changeEvent: ChangeEvent) => void;
    
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    
    id?: string;
    type?: "checkbox" | "radio";
};

const StyledInput = styled.input`
    height: 20px;
    width: 20px;
`;

const CheckboxInput = ({
    checked,
    className = "",
    disabled = false,
    id,
    onChange,
    placeholder = "",
    type = "checkbox",
}: CheckboxInputProps) => {
    return (
        <StyledInput
            className={className}
            disabled={disabled}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            checked={checked}
        />
    );
};

export { CheckboxInput };
