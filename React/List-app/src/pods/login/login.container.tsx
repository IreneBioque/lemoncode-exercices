import React from "react";
import { ProfileContext } from "@/core/providers";
import { Login } from "./login.component";
import { login } from "./api/api";

export const LoginContainer: React.FC = () => {
  const { setProfile } = React.useContext(ProfileContext);

  const handleSubmit = (username: string, password: string) => {
    login(username, password).then((result) => {
      if (result) {
        console.log({ result });
        setProfile(result.username);
      }
    });
  };

  return <Login onSubmit={handleSubmit} />;
};
