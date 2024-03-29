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

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    const { data } = await axios.post(`${apiUrl}/token/`, user, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    window.location.href = "/";
    return (
      <Alert
        key="title"
        sx={{ alignItems: "flex-start" }}
        startDecorator={CheckCircleIcon}
        variant="soft"
        color="success"
        endDecorator={
          <IconButton variant="soft" color="success">
            <CloseRoundedIcon />
          </IconButton>
        }
      >
        <div>
          <Typography level="body-sm" color="success">
            This is a time-sensitive Alert.
          </Typography>
        </div>
      </Alert>
    );
  };

  return (
    <CssVarsProvider defaultMode="light" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
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
                  Inloggen
                </Typography>
                <Typography sx={{ color: "#000" }} level="body-sm">
                  Nog geen account?{" "}
                  <Link
                    sx={{
                      color: "#fda912",
                      "&:hover": {
                        color: "#000",
                      },
                    }}
                    href="/registreren"
                    level="title-sm"
                  >
                    Maak er een!
                  </Link>
                </Typography>
              </Stack>
            </Stack>
            <Divider
              sx={(theme) => ({
                [theme.getColorSchemeSelector("light")]: {
                  color: { xs: "#fff", md: "text.primary" },
                },
              })}
            >
              or
            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formElements = event.currentTarget.elements;
                  const username = formElements.username.value;
                  const password = formElements.password.value;
                  setUsername(username);
                  setPassword(password);
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
                  <FormLabel>Wachtwoord</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
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
                    Inloggen
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
