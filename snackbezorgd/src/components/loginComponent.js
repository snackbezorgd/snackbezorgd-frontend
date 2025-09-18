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

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [loggedinUsername, setLoggedinUsername] = useState("");
  const [loggedinUsernameReal, setLoggedinUsernameReal] = useState("");
  const [password, setPassword] = useState("");
  const [ setUserID] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const fetchUsers = async (userID) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/api/user/${userID}`);
      if (response && response.data && response.data.is_staff !== undefined) {
        setIsAdmin(response.data.is_staff);
        setLoggedinUsername(
          response.data.first_name + " " + response.data.last_name
        );
        setLoggedinUsernameReal(response.data.username);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && isAdmin !== "") {
      checkAdmin();
    }
  },);

  const checkAdmin = () => {
    if (isAdmin === true && tokenData) {
      localStorage.setItem("B5O1J0jA2IWb9txz2Q6S70JxGyPrS7C1ev9i3bclcvwKBR7rjOsYCupBjRZZzcGJR2YLo4y1DaRpuZfqdRlox02QD6WxmzfGUaWrTxvw1RwzwuTDHiAK9LvbzYKgf3YHFQhsOPsYtpLdFV1KhRDyYt7DFCggBPFYQioJOPKhTW9is5vgS", tokenData.access);
      localStorage.setItem("username", loggedinUsername);
      localStorage.setItem("usernameReal", loggedinUsernameReal);
      window.location.href = "/admin";
    } else {
      window.location.href = "/";
      localStorage.setItem("username", loggedinUsername);
      localStorage.setItem("usernameReal", loggedinUsernameReal);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        username: username,
        password: password,
      };

      const { data } = await axios.post(`${apiUrl}/token/`, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setTokenData(data);
      localStorage.clear();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data["access"]}`;
      const token = data.access;
      const userID = JSON.parse(atob(token.split(".")[1])).user_id;
      setUserID(userID);
      await fetchUsers(userID);
    } catch (error) {
      setErrorMessage("Foute gebruikersnaam of wachtwoord!");
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
          backgroundImage: "url('https://i.imgur.com/7OY1VPP.png')",
          "@media (max-width: 899px)": {
          background:
            "linear-gradient(90deg, rgba(255,232,190,1) 4%, rgba(255,195,124,1) 100%)",
          },  
        })}
      />
    </CssVarsProvider>
  );
}
