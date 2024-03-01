import React, { Component } from "react";
import { Stack, Box } from "@mui/material/";
import Homefood from "../assets/home-food.png";
import Slogan from "../assets/slogan.png";
import Typography from "@mui/material/Typography";

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
    fontWeight: 700,
    fontSize: 40,
  },
  locationBar: {
    position: "absolute",
    top: "10%",
    left: "50%",
  },
};

class SB_Home extends Component {
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
            top: "15%",
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
              top: "10%",
              left: "50%",
            }}
            alt="Logo"
          />
          <Typography variant="h5" sx={styles.welcomeText}>
            Snack of maaltijd, wij hebben het!
          </Typography>
        </Stack>
      </Stack>
    );
  }
}

export default SB_Home;
