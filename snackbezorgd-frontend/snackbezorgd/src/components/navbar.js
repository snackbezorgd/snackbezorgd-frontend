import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
  },
};

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.navbar} position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.logo}>
            Snackbezorgd.nl
          </Typography>
          <IconButton
            sx={styles.Hamburger}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
