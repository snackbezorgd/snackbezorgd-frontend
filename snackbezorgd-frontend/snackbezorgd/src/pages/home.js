import React, { Component } from "react";
import { Stack, Box } from "@mui/material/";
import Homefood from "../assets/home-food.png";
import Slogan from "../assets/slogan.png";
import Typography from "@mui/material/Typography";
import "@fontsource/inter";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

const styles = {
  Rectangle: {
    width: "60%",
    height: "100%",
    left: "-300px",
    position: "absolute",
    background: "#FDA912",
    clipPath: "polygon(20% 0, 70% 0, 100% 100%, 0 100%)",
    zIndex: -1,
  },
  img_food: {
    height: "70px",
  },
  welcomeText: {
    positon: "absolute",
    fontWeight: 900,
    marginTop: "22vw",
    maxWidth: "480px",
    fontSize: 40,
    left: "20vw",
  },
  welcomeSub: {
    fontWeight: 700,
    fontSize: 20,
    maxWidth: "380px",
  },
  locationBar: {
    position: "absolute",
    left: "50%",
    fontFamily: "inter",
    top: "5vw",
  },
  zoekButton: {
    width: "4vw",
    marginLeft: ".2vw",
    backgroundColor: "#FDA912",
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
      <Stack>
        <Stack sx={styles.Rectangle}></Stack>
        <img
          src={Homefood}
          style={{
            width: "35vw",
            height: "35vw",
            position: "absolute",
            top: "16%",
            left: "13%",
          }}
          alt="Logo"
        />
        <Stack sx={styles.locationBar}>
          <img
            src={Slogan}
            style={{
              width: "22vw",
              height: "15vw",
              position: "absolute",
              top: "20%",
              left: "-30px",
            }}
            alt="Logo"
          />
          <Typography variant="h5" sx={styles.welcomeText}>
            Snack of maaltijd, wij hebben het!
          </Typography>
          <Typography variant="h6" sx={styles.welcomeSub}>
            Bestel bij verschillende restaurants of van het snackbezorgd
            huismerk!
          </Typography>
          <Stack sx={styles.inputFieldContainer}>
            <Input
              sx={styles.inputField}
              color="neutral"
              placeholder="Bijv. Netelweg 13, 9021 WD Amstelhaeghe"
              size="lg"
              variant="outlined"
            />
            <Button
              sx={styles.zoekButton}
              color="neutral"
              loading={false}
              onClick={function () {}}
              size="lg"
              variant="solid"
            >
              Zoek
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}

export default Home;
