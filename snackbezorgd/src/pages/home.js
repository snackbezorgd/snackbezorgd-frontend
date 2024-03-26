import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material/";
import Homefood from "../assets/home-food.png";
import Slogan from "../assets/slogan.png";
import Typography from "@mui/material/Typography";
import "@fontsource/inter";
import Input from "@mui/joy/Input";
import Autocomplete from "@mui/joy/Autocomplete";

import Button from "@mui/joy/Button";

const apiUrl = process.env.REACT_APP_API_URL;

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
const adresses = [
  { label: "Prinsengracht 123" },
  { label: "Keizersgracht 456" },
  { label: "Herengracht 789" },
  { label: "Damstraat 10" },
  { label: "Beethovenstraat 23" },
  { label: "Rembrandtplein 45" },
  { label: "Van Goghlaan 67" },
  { label: "Jordaan 89" },
  { label: "Leidseplein 1011" },
  { label: "Vondelstraat 1213" },
  { label: "Museumplein 1415" },
  { label: "Rozengracht 1617" },
  { label: "Nieuwendijk 1819" },
  { label: "Singel 2021" },
  { label: "Oudezijds Voorburgwal 2223" },
  { label: "Kalverstraat 2425" },
  { label: "Westerstraat 2627" },
  { label: "Haarlemmerdijk 2829" },
  { label: "Albert Cuypstraat 3031" },
  { label: "Ferdinand Bolstraat 3233" },
  { label: "Utrechtsestraat 3435" },
  { label: "Kinkerstraat 3637" },
  { label: "Sarphatistraat 3839" },
  { label: "Javastraat 4041" },
  { label: "Ceintuurbaan 4243" },
  { label: "Linnaeusstraat 4445" },
  { label: "De Pijp 4647" },
  { label: "Prinsengracht 4849" },
  { label: "Overtoom 5051" },
  { label: "Weesperstraat 5253" },
  { label: "Prinsengracht 123" },
  { label: "Keizersgracht 456" },
  { label: "Herengracht 789" },
  { label: "Damstraat 10" },
  { label: "Beethovenstraat 23" },
  { label: "Rembrandtplein 45" },
  { label: "Van Goghlaan 67" },
  { label: "Jordaan 89" },
  { label: "Leidseplein 1011" },
  { label: "Vondelstraat 1213" },
  { label: "Museumplein 1415" },
  { label: "Rozengracht 1617" },
  { label: "Nieuwendijk 1819" },
  { label: "Singel 2021" },
  { label: "Oudezijds Voorburgwal 2223" },
  { label: "Kalverstraat 2425" },
  { label: "Westerstraat 2627" },
  { label: "Haarlemmerdijk 2829" },
  { label: "Albert Cuypstraat 3031" },
  { label: "Ferdinand Bolstraat 3233" },
  { label: "Utrechtsestraat 3435" },
  { label: "Kinkerstraat 3637" },
  { label: "Sarphatistraat 3839" },
  { label: "Javastraat 4041" },
  { label: "Ceintuurbaan 4243" },
  { label: "Linnaeusstraat 4445" },
  { label: "De Pijp 4647" },
  { label: "Prinsengracht 4849" },
  { label: "Overtoom 5051" },
  { label: "Weesperstraat 5253" },
  { label: "Prinsengracht 123" },
  { label: "Keizersgracht 456" },
  { label: "Herengracht 789" },
  { label: "Damstraat 10" },
  { label: "Beethovenstraat 23" },
  { label: "Rembrandtplein 45" },
  { label: "Van Goghlaan 67" },
  { label: "Jordaan 89" },
  { label: "Leidseplein 1011" },
  { label: "Vondelstraat 1213" },
  { label: "Museumplein 1415" },
  { label: "Rozengracht 1617" },
  { label: "Nieuwendijk 1819" },
  { label: "Singel 2021" },
  { label: "Oudezijds Voorburgwal 2223" },
  { label: "Kalverstraat 2425" },
  { label: "Westerstraat 2627" },
  { label: "Haarlemmerdijk 2829" },
  { label: "Albert Cuypstraat 3031" },
  { label: "Ferdinand Bolstraat 3233" },
  { label: "Utrechtsestraat 3435" },
  { label: "Kinkerstraat 3637" },
  { label: "Sarphatistraat 3839" },
  { label: "Javastraat 4041" },
  { label: "Ceintuurbaan 4243" },
  { label: "Linnaeusstraat 4445" },
  { label: "De Pijp 4647" },
  { label: "Prinsengracht 4849" },
  { label: "Overtoom 5051" },
  { label: "Weesperstraat 5253" },
];
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
            {/* <Input
              sx={styles.inputField}
              color="neutral"
              placeholder="Bijv. Netelweg 13, 9021 WD Amstelhaeghe"
              size="lg"
              variant="outlined"
            /> */}
            <Autocomplete
              placeholder="Adres invullen"
              options={adresses}
              sx={{ width: 300 }}
            />
            <Link to="/productDisplay">
              <Button
                sx={styles.zoekButton}
                color="neutral"
                loading={false}
                size="lg"
                variant="solid"
              >
                Zoek
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}

export default Home;
