import { ChangeEvent } from "react";

type TextAreaInputProps = {
    id: string;
    onChange: (event: ChangeEvent) => void;
    value: string | undefined;

    className?: string;
    placeholder?: string;
    rows?: number;
};

const TextAreaInput = ({ id, className = "", onChange, placeholder = "", rows = 4, value }: TextAreaInputProps) => {
    return (
        <div className="input-group">
            <textarea
                className={`form-control ${className}`}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                value={value}
            />
        </div>
    );
};

export { TextAreaInput };
