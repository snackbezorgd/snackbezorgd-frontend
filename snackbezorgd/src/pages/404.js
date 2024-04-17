import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Stack, Button, Link } from "@mui/material/";

const apiUrl = process.env.REACT_APP_API_URL;

const styles = {
  header: {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    width: "100%",
    fontFamily: "inter",
    fontWeight: "700",
  },
};

export const NotFound = () => {
  return (
    <Stack>
      <Typography sx={styles.header} variant="h3">
        404 | Pagina niet gevonden.
      </Typography>
    </Stack>
  );
};
