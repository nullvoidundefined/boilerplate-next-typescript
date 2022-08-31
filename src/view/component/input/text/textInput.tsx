import { ChangeEvent } from "react";

type TextInputProps = {
    value: string | undefined;

    id?: string;
    onChange?: (event: ChangeEvent) => void;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
};

const TextInput = ({ id, className = "", disabled = false, onChange, placeholder = "", value }: TextInputProps) => {
    return (
        <input
            className={`form-control ${className}`}
            disabled={disabled}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            value={value}
        />
    );
};

export { TextInput };
