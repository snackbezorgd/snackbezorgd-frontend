import { Typography, Stack } from "@mui/material/";


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
  
  return <Stack>
    <Typography sx={styles.header} variant="h3">Je wordt nu uitgelogd...</Typography>
  </Stack>;
};
 