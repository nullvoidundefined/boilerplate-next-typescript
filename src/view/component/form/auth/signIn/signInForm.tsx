import { useEffect, useState } from "react";
import { Button } from "../../../../design-system";

import { validateSignInForm } from "../../../../../service";
import { AuthRequestData, SignInFormErrorMap } from "../../../../../type";
import { TextInputGroup } from "../../../input";

type MobileAppFormProps = {
    onSubmit: (formData: AuthRequestData) => void;
};

const SignInForm = ({ onSubmit }: MobileAppFormProps) => {
    const [errors, setErrors] = useState<SignInFormErrorMap>(
        {} as SignInFormErrorMap
    );
    const [formState, setFormState] = useState<AuthRequestData>({
        username: "root",
        password: "swordfish",
    });
    const [hasErrored, setHasErrored] = useState(false);

    const updateFormState = (
        key: string,
        value: string | unknown[] | boolean
    ) => {
        setFormState({ ...formState, [key]: value });
    };

    useEffect(() => {
        if (hasErrored) {
            validateSignInForm(formState, setErrors);
        }
    }, [formState, hasErrored]);

    return (
        <form>
            <TextInputGroup
                error={errors.username}
                formDataKey="username"
                label="Username"
                onChange={updateFormState}
                value={formState.username}
            />
            <TextInputGroup
                error={errors.password}
                formDataKey="password"
                label="Password"
                onChange={updateFormState}
                value={formState.password}
            />

            <div className="d-flex flex-row-reverse w-100">
                <Button
                    onClick={(event) => {
                        event.preventDefault();
                        const hasErrors = validateSignInForm(
                            formState,
                            setErrors
                        );

                        if (!hasErrors) {
                            onSubmit(formState);
                        } else {
                            setHasErrored(true);
                        }
                    }}
                >
                    Submit
                </Button>
            </div>
        </form>
    );
};

export { SignInForm };
