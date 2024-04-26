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
  if (localStorage.getItem("B5O1J0jA2IWb9txz2Q6S70JxGyPrS7C1ev9i3bclcvwKBR7rjOsYCupBjRZZzcGJR2YLo4y1DaRpuZfqdRlox02QD6WxmzfGUaWrTxvw1RwzwuTDHiAK9LvbzYKgf3YHFQhsOPsYtpLdFV1KhRDyYt7DFCggBPFYQioJOPKhTW9is5vgS") === null) {
    window.location.href = "/login";
  } else {
    return (
      <Stack>
        <Stack sx={styles.titleContainer}>
          <VerticalTabs />
        </Stack>
      </Stack>
    );
  }
}
