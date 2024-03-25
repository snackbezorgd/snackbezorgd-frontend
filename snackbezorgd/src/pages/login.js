import React from "react";
import { Stack } from "@mui/material/";
import "@fontsource/inter";
import { useEffect } from "react";
import LoginComponent from "../components/loginComponent";

export default function Login() {
  useEffect(() => {
    document.title = "Login | Snackbezorgd.nl";
  }, []);
  if (localStorage.getItem("access_token") === null) {
    return (
      <Stack>
        <LoginComponent />
      </Stack>
    );
  } else {
    window.location.href = "/";
  }
}
