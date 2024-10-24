import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LoginForm } from "./components/login.form";
import { CardHeader } from "@mui/material";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const Login: React.FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader title="Welcome to my app" />
        <CardContent>
          <LoginForm onSubmit={onSubmit} />
        </CardContent>
      </Card>
    </>
  );
};
