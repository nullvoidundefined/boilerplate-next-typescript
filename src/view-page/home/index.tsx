import Button from "../../view-design-system/button";
import { FormEvent } from "react";
import utilStyles from "../../style/global.module.css";

type HomePageProps = {
  onButtonClick: () => void;
};

const HomePage = ({ onButtonClick }: HomePageProps) => {
  const onFormSubmit = (event: FormEvent) => {
    const form = event.target as HTMLFormElement;
    fetch(
      `/api/auth/signIn?password=${form.password.value}&userName=${form.userName.value}`
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
    event.preventDefault();
  };

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
