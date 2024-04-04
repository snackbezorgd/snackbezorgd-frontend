import React, { useState, useEffect } from "react";
import {
  CssVarsProvider,
  Alert,
  GlobalStyles,
  CssBaseline,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Link,
  Input,
  Typography,
  Stack,
} from "@mui/joy";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export default function ForgotPasswordComponent() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        email: email,
      };

      const { data } = await axios.post(`${apiUrl}/password_reset/`, user, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("wachtwoordreset error:", error);
    }
  };

  return (
    <CssVarsProvider defaultMode="light" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s",
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width: { xs: "100%", md: "50vw" },
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(12px)",
          backgroundColor: "#",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "#fff9ef",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                marginTop: "3vw",
                gap: 2,
                display: "flex",
                alignItems: "center",
              }}
            ></Box>
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: "hidden",
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <Typography sx={{ color: "#000" }} component="h1" level="h3">
                  Wachtwoord vergeten
                </Typography>
                <Typography sx={{ color: "#000" }} level="body-sm">
                  We versturen een email als het account bestaat.
                </Typography>
                <Divider
                  sx={(theme) => ({
                    [theme.getColorSchemeSelector("light")]: {
                      color: { xs: "#fff", md: "text.primary" },
                    },
                  })}
                ></Divider>
              </Stack>
            </Stack>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formElements = event.currentTarget.elements;
                  const email = formElements.email.value;
                  setEmail(email);
                  submit(event);
                }}
              >
                {errorMessage && (
                  <Alert
                    key="error"
                    sx={{ alignItems: "flex-start" }}
                    variant="solid"
                    color="danger"
                    endDecorator={
                      <IconButton
                        variant="soft"
                        color="danger"
                        onClick={() => setErrorMessage("")}
                      >
                        <CloseRoundedIcon />
                      </IconButton>
                    }
                  >
                    {errorMessage}
                  </Alert>
                )}
                <FormControl required>
                  <FormLabel>Jouw email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </FormControl>
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  ></Box>
                  <Button
                    sx={{
                      backgroundColor: "#fda912",
                      "&:hover": {
                        backgroundColor: "rgba(253,146,18,1)",
                      },
                    }}
                    type="submit"
                    fullWidth
                  >
                    Verstuur
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © Snackbezorgd.nl {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: "50vw" },
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          background: "rgb(255,211,131)",
          background: "rgb(255,232,190)",
          background:
            "linear-gradient(90deg, rgba(255,232,190,1) 4%, rgba(255,195,124,1) 100%)",
        })}
      />
    </CssVarsProvider>
  );
}
