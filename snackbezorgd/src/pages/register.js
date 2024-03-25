import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Alert from "@mui/joy/Alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import axios from "axios";
import { useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

function ColorSchemeToggle(props) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="outlined"
      disabled={!mounted}
      onClick={(event) => {
        setMode(mode === "light" ? "light" : "light");
        onClick?.(event);
      }}
      {...other}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirst_name(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLast_name(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      password2: password2, // Corrected typo here
      email: email,
      first_name: first_name,
      last_name: last_name,
    };

    try {
      const response = await axios.post(`${apiUrl}/register/`, user, {
        headers: { "Content-Type": "application/json" },
      });
      // Assuming your backend returns a success message or status upon successful registration
      if (response.status === 201) {
        // Success, redirect to login page
        window.location.href = "/login";
      } else {
        // Handle other response statuses appropriately
        console.log("Registration failed with status: ", response.status);
      }
    } catch (error) {
      // Handle error from axios or from the backend
      console.error("Error during registration:", error);
      // Optionally, you can display an error message to the user
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
            >
              {/* <ColorSchemeToggle /> */}
            </Box>
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
                  Account aanmaken
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formElements = event.currentTarget.elements;
                  const username = formElements.username.value;
                  const password = formElements.password.value;
                  const password2 = formElements.password2.value;
                  const email = formElements.email.value;
                  const first_name = formElements.firstName.value;
                  const last_name = formElements.lastName.value;
                  setUsername(username);
                  setPassword(password);
                  setPassword2(password2);
                  setEmail(email);
                  setFirst_name(first_name);
                  setLast_name(last_name);
                  submit(event);
                }}
              >
                <FormControl required>
                  <FormLabel>Gebruikersnaam</FormLabel>
                  <Input
                    type="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Voornaam</FormLabel>
                  <Input
                    type="firstName"
                    name="firstName"
                    value={first_name}
                    onChange={handleFirstNameChange}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Achternaam</FormLabel>
                  <Input
                    type="lastName"
                    name="lastName"
                    value={last_name}
                    onChange={handleLastNameChange}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Wachtwoord</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Wachtwoord herhalen</FormLabel>
                  <Input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={handlePassword2Change}
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
                    Account aanmaken
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
