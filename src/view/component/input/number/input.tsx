import { ChangeEvent } from "react";

type NumberInputProps = {
    value: number | undefined;

    allowNegativeNumbers?: boolean;
    className?: string;
    disabled?: boolean;
    id?: string;
    onChange?: (value: number) => void;
    placeholder?: string;
    step?: string;
};

const NumberInput = ({
    allowNegativeNumbers = false,
    className = "",
    disabled = false,
    id,
    onChange,
    placeholder = "",
    step = "1",
    value,
}: NumberInputProps) => {
    return (
        <input
            className={`form-control ${className}`}
            disabled={disabled}
            id={id}
            onChange={event => {
                if (Number(event.target.value) < 0 && !allowNegativeNumbers) {
                    event.target.value = String(0);
                }
                onChange && onChange(Number(event.target.value));
            }}
            placeholder={placeholder}
            step={step}
            type="number"
            value={value}
        />
    );
};

export { NumberInput };
