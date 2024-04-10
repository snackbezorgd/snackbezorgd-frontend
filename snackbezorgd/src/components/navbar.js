// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import { Stack, Box, Link } from "@mui/material/";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import LockIcon from "@mui/icons-material/Lock";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import logoImage from "../assets/snackbezorgd-png.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GroupIcon from "@mui/icons-material/Group";
import React, { useState, useEffect } from "react";

const styles = {
  navbar: {
    backgroundColor: "#fff",
    width: "100%",
  },
  Hamburger: {
    color: "#000",
    marginRight: 2,
    marginLeft: 2,
  },
  logo: {
    color: "#fda912",
    marginRight: 2,
    marginLeft: 2,
    flexGrow: 1,
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      color: "#ffb836",
      textDecoration: "none",
    },
  },
  logoImage: {
    width: "200px",
    marginRight: "1vw",
  },
  accountTitle: {
    fontSize: 20,
    fontWeight: 600,
  },
  buttonContainer: {
    marginTop: "1vw",
    marginBottom: "1vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#FDA912",
  },
  logoutButton: {
    width: "100%",
    backgroundColor: "#d9d9d9",
  },
  regButton: {
    width: "100%",
    backgroundColor: "#d9d9d9",
  },
};

export default function NavBar() {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdminAuth, setIsAdminAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  useEffect(() => {
    if (localStorage.getItem("access_token_staff") !== null) {
      setIsAdminAuth(true);
    }
  }, [isAdminAuth]);

  const [open, setOpen] = React.useState(false);
  const loggedInUsername = localStorage.getItem("username");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.navbar} position="fixed">
        <Toolbar>
          <Link sx={styles.logo} href="/">
            <img
              style={styles.logoImage}
              src={logoImage}
              alt="Snackbezorgd.nl Logo"
            />
          </Link>
          <IconButton
            sx={styles.Hamburger}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          {isAuth ? (
            <Typography
              sx={styles.accountTitle}
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Hallo, {loggedInUsername}
            </Typography>
          ) : (
            <Typography
              sx={styles.accountTitle}
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Mijn account
            </Typography>
          )}
          <Stack sx={styles.buttonContainer}>
            {isAuth ? (
              <Button
                sx={styles.logoutButton}
                color="neutral"
                loading={false}
                onClick={(event) => (window.location.href = "/logout")}
                size="lg"
                variant="outlined"
              >
                Uitloggen
              </Button>
            ) : (
              <Stack>
                <Button
                  sx={styles.loginButton}
                  color="neutral"
                  loading={false}
                  size="lg"
                  onClick={(event) => (window.location.href = "/login")}
                  variant="solid"
                >
                  Inloggen
                </Button>
              </Stack>
            )}
          </Stack>
          <List
            sx={{
              maxWidth: 320,
            }}
          >
            {isAuth ? (
              <ListItem>
                <ListItemButton component="a" href="/mijnbestellingen">
                  <ListItemDecorator>
                    <FastfoodIcon />
                  </ListItemDecorator>
                  Mijn bestellingen
                </ListItemButton>
              </ListItem>
            ) : (
              <Stack></Stack>
            )}
            <ListItem>
              <ListItemButton component="a" href="/overons">
                <ListItemDecorator>
                  <GroupIcon />
                </ListItemDecorator>
                Over ons
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/contact">
                <ListItemDecorator>
                  <LocalPhoneIcon />
                </ListItemDecorator>
                Contact
              </ListItemButton>
            </ListItem>
            {isAdminAuth ? (
              <ListItem>
                <ListItemButton component="a" href="/admin">
                  <ListItemDecorator>
                    <LockIcon />
                  </ListItemDecorator>
                  Beheerders Pagina
                </ListItemButton>
              </ListItem>
            ) : (
              <Stack></Stack>
            )}
          </List>
        </Sheet>
      </Modal>
    </Box>
  );
}
