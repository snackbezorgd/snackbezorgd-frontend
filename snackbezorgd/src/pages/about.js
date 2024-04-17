import React from "react";
import "@fontsource/inter";
import { Card, CardContent } from "@mui/joy/";
import { Box, Typography, Stack, Grid } from "@mui/material/";
import Background from "../assets/background.png";

const styles = {
  text: {
    fontFamily: "inter",
    fontWeight: 800,
  },
  imageFood: {
    "-webkit-filter": "drop-shadow(10px 5px 5px #BEBEBE)",
    filter: "drop-shadow(5px 5px 20px #BEBEBE)",
    width: "250px",
    height: "250px",
    marginLeft: "60%",
    position: "absolute",
    "@media (max-width: 833px)": {
      visibility: "hidden",
      display: "none",
    },
  },
  background: {
    "-webkit-filter": "drop-shadow(10px 5px 5px #BEBEBE)",
    filter: "drop-shadow(5px 5px 20px #BEBEBE)",
    overflow: "hidden",
    width: "680px",
    "@media (max-width: 710px)": {
      visibility: "hidden",
      display: "none",
    },
  },
  card1: {
    height: "100%",
    width: "100%",
    marginTop: "160px",
    marginLeft: "40px",
    backgroundColor: "#fff",
    borderRadius: 35,
    "@media (max-width: 833px)": {
      marginTop: "80px",
      width: "90%",
      marginLeft: 3,
      height: "auto",
    },
  },
  bigCard: {
    "-webkit-filter": "drop-shadow(10px 5px 5px #BEBEBE)",
    filter: "drop-shadow(5px 5px 20px #BEBEBE)",
    backgroundColor: "#fff",
    borderRadius: 35,
    width: "680px",
    height: "323px",
    marginTop: "40px",
    marginLeft: "40px",
    "@media (max-width: 833px)": {
      width: "90%",
      alignItems: "center",
      marginTop: "40px",
      marginLeft: 3,
      marginBottom: 3,
      height: "auto",
    },
  },
  smallCard: {
    height: "120px",
    width: "250px",
    backgroundColor: "#FFE6B8",
    borderRadius: 25,
    "@media (max-width: 233px)": {
      width: "100%",
      height: "auto",
    },
  },
  smallCardGrid: {
    // display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    "@media (max-width: 833px)": {
      gridTemplateColumns: "repeat(1, 1f)!important",
      alignItems: "center!important",
    },
  },
  texthead1: {
    color: "black",
    textAlign: "left",
    fontFamily: "inter",
    "@media (max-width: 833px)": {
      fontSize: "1.5rem",
    },
  },
  textSmallCard: {
    color: "black",
    textAlign: "left",
    fontFamily: "inter",
    "@media (max-width: 833px)": {
      fontSize: "1rem",
    },
  },
  cardTextTitle: {
    fontFamily: "inter",
    marginTop: "50px",
    color: "orange",
    fontWeight: "900",
    marginLeft: "1vw",
    fontSize: "25px",
    "@media (max-width: 833px)": {
      marginTop: "20px",
      fontSize: "1.5rem",
    },
  },
  cardTextValue: {
    fontFamily: "inter",
    color: "#000",
    marginTop: "30px",
    marginLeft: "1vw",
    fontWeight: 900,
    fontSize: "50px",
    "@media (max-width: 833px)": {
      marginTop: "10px",
      fontSize: "2rem",
    },
  },
  cardtextparagraph: {
    fontFamily: "inter",
    color: "#000",
    marginLeft: "1vw",
    marginTop: "30px",
    marginRight: "20px",
    fontWeight: 500,
    fontSize: "20px",
    "@media (max-width: 833px)": {
      fontSize: "1rem",
    },
  },
  sloganCard: {
    fontFamily: "inter",
    marginTop: "80px",
    marginLeft: "40px",
    "@media (max-width: 833px)": {
      visibility: "hidden",
      display: "none",
    },
  },
};

export default function About() {
  return (
    <React.Fragment>
      <Grid container mt={1}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Card sx={styles.card1} variant="solid shadow">
            <CardContent>
              <Stack>
                <Typography sx={styles.cardTextTitle} level="body-md">
                  Wie zijn wij?
                </Typography>
                <Typography sx={styles.cardTextValue} level="h2">
                  De klant is <br />
                  altijd koning
                </Typography>
                <Typography sx={styles.cardtextparagraph} level="h4">
                  Welkom bij Snackbezorgd! Bij ons draait alles om heerlijk
                  eten, gemak en plezier. Of je nu zin hebt in pizza, lasagne of
                  salade, wij hebben voor elk wat wils en bezorgen het direct
                  bij je thuis of op kantoor. Ons team van gepassartaegerde
                  chefs en foodies werkt met lokale leveranciers om verse,
                  hoogwaardige gerechten te leveren waar je keer op keer van
                  zult genieten. Klanttevredenheid staat bij ons voorop, en we
                  streven ernaar om elke bestelling perfect af te handelen. Dus
                  waar wacht je nog op? Ontdek ons menu en laat ons je volgende
                  maaltijd onvergetelijk maken!
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Box sx={styles.sloganCard}>
            <img src={Background} style={styles.background} alt="Logo" />
          </Box>
          <Card sx={styles.bigCard} variant="solid">
            <Grid container spacing={3} sx={styles.smallCardGrid}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card sx={styles.smallCard} variant="solid">
                  <CardContent>
                    <Typography sx={styles.texthead1} variant="h3">
                      <Stack>1</Stack>
                    </Typography>
                    <Typography sx={styles.textSmallCard} variant="h6">
                      Jaar bestaan
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card sx={styles.smallCard} variant="solid">
                  <CardContent>
                    <Typography sx={styles.texthead1} variant="h3">
                      <Stack>312</Stack>
                    </Typography>
                    <Typography sx={styles.textSmallCard} variant="h6">
                      Positieve Reviews
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card sx={styles.smallCard} variant="solid">
                  <CardContent>
                    <Typography sx={styles.texthead1} variant="h3">
                      <Stack>720</Stack>
                    </Typography>
                    <Typography sx={styles.textSmallCard} variant="h6">
                      Bestellingen
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card sx={styles.smallCard} variant="solid">
                  <CardContent>
                    <Typography sx={styles.texthead1} variant="h3">
                      <Stack>5</Stack>
                    </Typography>
                    <Typography sx={styles.textSmallCard} variant="h6">
                      Vestigingen
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
