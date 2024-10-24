import React from "react";
import { Button, TextField } from "@mui/material";

import { FormData } from "../login.vm";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(formData.username, formData.password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        label="Username"
        value={formData.username}
        onChange={handleChange("username")}
      />
      <TextField
        label="Password"
        value={formData.password}
        type="password"
        onChange={handleChange("password")}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
