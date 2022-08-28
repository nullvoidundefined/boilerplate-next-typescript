import { FormEvent } from "react";

import { User } from "../../../type";

type HomePageProps = {
  onSignInSuccess: (user: User) => void;
};

const HomePage = ({ onSignInSuccess }: HomePageProps) => {
  const onFormSubmit = (event: FormEvent) => {
    const form = event.target as HTMLFormElement;
    fetch(
      `/api/auth/signIn?password=${form.password.value}&userName=${form.userName.value}`
    )
      .then((response) => response.json())
      .then((userData) => onSignInSuccess(userData))
      .catch((error) => console.log(error));
    event.preventDefault();
  };

  console.log("HomePage is rendering")


  return (
    <form onSubmit={onFormSubmit}>
      <div className="container">
        <div>
          <label htmlFor="userName">
            <b>Username</b>
          </label>
          <input
            defaultValue="Bob" // Remove
            name="userName"
            placeholder="Enter Username"
            required
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            defaultValue="Bob" // Remove
            name="password"
            placeholder="Enter Password"
            required
            type="password"
          />
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export { HomePage };
