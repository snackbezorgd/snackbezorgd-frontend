import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Stack } from "@mui/material/";

const apiUrl = process.env.REACT_APP_API_URL;

const styles = {
  header: {
    position: "absolute",
    textAlign: "center",
    top:"50%",
    width:"100%",
    fontFamily: "inter",
    fontWeight: "700",
  }
}


export const Logout = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          `${apiUrl}/logout/`,
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          { headers: { "Content-Type": "application/json" } },
          { withCredentials: true }
        );
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        window.location.href = "/login";
      } catch (e) {
        // console.log("logout not working", e);
      }
    })();
  }, []);
  return <Stack>
    <Typography sx={styles.header} variant="h3">Je wordt nu uitgelogd...</Typography>
  </Stack>;
};
 