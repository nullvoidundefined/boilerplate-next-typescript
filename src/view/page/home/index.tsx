import { FormEvent } from "react";

import { AuthRequestData, User } from "../../../type";
import { SignInForm } from "../../component";

type HomePageProps = {
  onSignInSuccess: (user: User) => void;
};

const HomePage = ({ onSignInSuccess }: HomePageProps) => {
  const onFormSubmit = (signUpData: AuthRequestData) => {
    const { password, email } = signUpData;
    fetch(`/api/auth/signIn?password=${password}&userName=${email}`)
      .then((response) => response.json())
      .then((userData) => onSignInSuccess(userData))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <SignInForm onSubmit={onFormSubmit} />
    </>
  );
};

export { HomePage };
