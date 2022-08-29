import { AuthRequestData, SignInFormErrorMap } from "../../../../type";
const validateSignInForm = (
  formData: AuthRequestData,
  setErrors: React.Dispatch<React.SetStateAction<SignInFormErrorMap>>
) => {
  const newErrors: SignInFormErrorMap = {} as SignInFormErrorMap;

  if (formData.email.length < 1) {
    newErrors.email = "Please enter an email";
  }

  if (formData.password.length < 1) {
    newErrors.password = "Please enter a password";
  }

  setErrors(newErrors);

  return Boolean(Object.keys(newErrors).length);
};

export { validateSignInForm };
