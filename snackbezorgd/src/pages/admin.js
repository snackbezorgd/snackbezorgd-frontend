import React from "react";
import { Stack } from "@mui/material/";
import "@fontsource/inter";
import VerticalTabs from "../components/verticalTabs";
import { useEffect } from "react";

const styles = {
  titleContainer: {
    position: "absolute",
    top: "10%",
    left: "10vw",
  },
};

export default function Admin() {
  useEffect(() => {
    document.title = "Admin | Snackbezorgd.nl";
  }, []);

  return (
    <Stack>
      <Stack sx={styles.titleContainer}>
        <VerticalTabs />
      </Stack>
    </Stack>
  );
}
