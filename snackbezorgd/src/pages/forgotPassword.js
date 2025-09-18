import React from "react";
import { Stack } from "@mui/material/";
import "@fontsource/inter";
import { useEffect } from "react";
import ForgotPasswordComponent from "../components/forgotpasswordComponent";

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "Wachtwoord Vergeten | Snackbezorgd.nl";
  }, []);

  return (
    <Stack>
      <ForgotPasswordComponent />
    </Stack>
  );
}
