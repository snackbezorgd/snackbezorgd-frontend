import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "../components/TwoSidedLayout";

const styles = {
  Rectangle: {
    width: "55%",
    height: "100%",
    right: "0",
    position: "absolute",
    background: "#fda912",
    clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
    zIndex: -1,
    "@media (max-width: 833px)": {
      clipPath: "polygon(0 54%, 100% 44%, 100% 100%, 0% 100%)",
      width: "500%",
      height: "900px",
    },
    "@media (max-width: 376px)": {
      clipPath: "polygon(0 65%, 100% 51%, 100% 100%, 0% 100%)",
      width: "500%",
      height: "1000px",
    },
    "@media (min-width: 2200px)": {
      width: "56%",
    },
  },
  img_food: {
    height: "70px",
  },
  welcomeText: {
    fontWeight: 900,
    fontSize: 40,
  },
  container: {
    positon: "absolute",
    left: "75%",
  },
  welcomeSub: {
    fontWeight: 700,
    fontSize: 20,
    maxWidth: "380px",
  },
  locationBar: {
    position: "absolute",
    left: "30%",
    fontFamily: "inter",
    top: "5vw",
  },
  zoekButton: {
    height: "120%",
    marginLeft: ".2vw",
    backgroundColor: "#FDA912",
    "&:hover": {
      backgroundColor: "#b47914",
    },
  },
  inputField: {
    fontFamily: "inter",
    width: "400px",
  },
  inputFieldContainer: {
    marginTop: "1vw",
    display: "flex",
    flexDirection: "row",
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewactive: true,
      productList: [],
      modal: false,
      activeproduct: {
        title: "",
        description: "",
        price: 0,
        active: false,
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <Stack sx={styles.Rectangle}></Stack>
        <TwoSidedLayout>
          <Typography
            level="h1"
            fontWeight="xl"
            sx={styles.welcomeText}
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            Snack of maaltijd, wij hebben het!
          </Typography>
          <Typography
            sx={styles.welcomeSub}
            fontSize="lg"
            textColor="text.secondary"
            lineHeight="lg"
          >
            Bestel bij verschillende restaurants of van het snackbezorgd
            huismerk!
          </Typography>
          <Link to="/producten">
            <Button
              sx={styles.zoekButton}
              size="lg"
              endDecorator={<ArrowForward fontSize="xl" />}
            >
              Bestellen
            </Button>
          </Link>
          <Typography
            level="body-xs"
            sx={{
              position: "absolute",
              top: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            HeroLeft01
          </Typography>
        </TwoSidedLayout>
      </React.Fragment>
    );
  }
}

export default Home;
