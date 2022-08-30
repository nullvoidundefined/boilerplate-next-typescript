import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"; // TODO [ENG-1128] replace with AWD TextButton

import { validateSignInForm } from "../../../../service/validate/form/signIn/validateSignInForm"; // TODO Why does this break Next if using parent export?
import { AuthRequestData, SignInFormErrorMap } from "../../../../type";
import { TextInputGroup } from "../../input";

type MobileAppFormProps = {
  onSubmit: (formData: AuthRequestData) => void;
};

const SignInForm = ({ onSubmit }: MobileAppFormProps) => {
  const [errors, setErrors] = useState<SignInFormErrorMap>(
    {} as SignInFormErrorMap
  );
  const [formState, setFormState] = useState<AuthRequestData>({
    email: "",
    password: "",
  });
  const [hasErrored, setHasErrored] = useState(false);

  const updateFormState = (key: string, value: string | unknown[] | boolean) => {
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
        error={errors.email}
        formDataKey="email"
        label="Email"
        onChange={updateFormState}
        value={formState.email}
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
            const hasErrors = validateSignInForm(formState, setErrors);

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
