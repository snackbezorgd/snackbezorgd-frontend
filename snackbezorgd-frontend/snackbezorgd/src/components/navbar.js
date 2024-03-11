import * as React from "react";
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
import OpenInNew from "@mui/icons-material/OpenInNew";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import logoImage from "../assets/snackbezorgd-png.png";


// TEST CHANGE
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
    fontSize: 30,
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
    width: "20vw",
    backgroundColor: "#d9d9d9",
  },
  regButton: {
    width: "20vw",
    marginLeft: "4vw",
    backgroundColor: "#FDA912",
  },
};

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
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
          <Stack sx={styles.buttonContainer}>
            <Button
              sx={styles.loginButton}
              color="neutral"
              loading={false}
              onClick={function () {}}
              size="lg"
              variant="outlined"
            >
              Inloggen
            </Button>
            <Button
              sx={styles.regButton}
              color="neutral"
              loading={false}
              onClick={function () {}}
              size="lg"
              variant="solid"
            >
              Registreren
            </Button>
          </Stack>
          <List
            sx={{
              maxWidth: 320,
            }}
          >
            <ListItem>
              <ListItemButton onClick={() => alert("You clicked")}>
                <ListItemDecorator>
                  <FastfoodIcon />
                </ListItemDecorator>
                Bestellingen
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/admin">
                <ListItemDecorator>
                  <OpenInNew />
                </ListItemDecorator>
                Admin Login
              </ListItemButton>
            </ListItem>
          </List>
        </Sheet>
      </Modal>
    </Box>
  );
}
