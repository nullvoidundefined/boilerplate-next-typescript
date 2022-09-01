import { AuthRequestData, SignInFormErrorMap } from "../../../../type";
const validateSignInForm = (
    formData: AuthRequestData,
    setErrors: React.Dispatch<React.SetStateAction<SignInFormErrorMap>>
) => {
    const newErrors: SignInFormErrorMap = {} as SignInFormErrorMap;

    if (formData.username.length < 1) {
        newErrors.username = "Please enter a username";
    }

    if (formData.password.length < 1) {
        newErrors.password = "Please enter a password";
    }

    setErrors(newErrors);

    return Boolean(Object.keys(newErrors).length);
};

export { validateSignInForm };
