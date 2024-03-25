import React from "react";
import { Stack } from "@mui/material/";
import "@fontsource/inter";
import { useEffect } from "react";
import RegisterComponent from "../components/registerComponent";


export default function Register() {
  useEffect(() => {
    document.title = "Account aanmaken | Snackbezorgd.nl";
  }, []);
  if (localStorage.getItem("access_token") === null) {
    return (
      <Stack>
          <RegisterComponent />
      </Stack>
    );
  } else {
    window.location.href = "/";
  }
}
