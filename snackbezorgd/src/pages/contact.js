import React from "react";
import "@fontsource/inter";
import { Card, CardContent } from "@mui/joy/";
import { Box, Typography, Stack, TextField, Grid, ListItemSecondaryAction } from "@mui/material/";
import { useEffect } from "react";
import Customer from "../assets/customer.png";
import Phone from "../assets/phone.png";
import Person from "../assets/person.png";
import RegisterComponent from "../components/registerComponent";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { color, display, fontSize, fontWeight, height, margin, positions, shadows, textAlign, width } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";

const styles = {
  text: {
    fontFamily: "inter",
    fontWeight: 800,
  },

  Phone : {
    width: "75px",
    marginLeft:"295px",
    marginTop:"5px",
    position:"absolute",
  },

  Person : {
    width: "75px",
    marginLeft:"300px"
  },

  Customer: {
    width: "50vw",
    height: "50vw",
    marginTop:"-765px",
    marginLeft:"50%",  
    zIndex:"0",
  },

  card1: {
    height: "325px",
    width: "700px",
    marginTop: "45px",
    marginLeft: "100px",
    backgroundColor: "#fff",
    borderRadius: 35,
    zIndex:"1",
  },
  card2: {
    height: "325px",
    width: "700px",
    marginLeft:"336px",
    marginTop: "389px",
    backgroundColor: "#fff",
    borderRadius: 35,
    zIndex:"2",
  },
  
  cardTextTitle: {
    fontFamily: "inter",
    marginTop: "30px",
    color: "orange",
    fontWeight: "200",
    marginLeft: "100px",
    fontSize: "25px",
  },
  cardTextValue: {
    fontFamily: "inter",
    color: "#000",
    marginTop:"90px",
    marginLeft: "100px",
    fontWeight: 800,
    fontSize: "62px",
  },

  number: {
    fontFamily: "inter",
    color:"black",
    fontWeight:"900",  
    textAlign: "center",
    text: "center",
    marginTop:"200px",
    marginLeft:"260px",
    position: "absolute",
    fontSize:"20px",
  },

  cardtextparagraph: {
    fontFamily: "inter",
    color: "#000",
    fontSize: "20px",
    textAlign: "center",
    text: "center",
    marginTop:"100px",
    marginLeft:"115px",
    position: "absolute",
  },

  cardtextparagraph2: {
    fontFamily: "inter",
    color: "#000",
    fontSize: "20px",
    textAlign: "center",
    text: "center",
    position: "absolute",
    marginLeft:"185px",
    marginTop:"100px",
  },

  cardtextparagraph3: {
    fontFamily: "inter",
    color: "#000",
    fontSize: "20px",
    textAlign: "center",
    position: "absolute",
    marginLeft:"175px",
    marginTop:"150px",
  },

  cardtextparagraph4: {
    fontFamily: "inter",
    color: "#000",
    fontSize: "20px",
    textAlign: "center",
    text: "center",
    position: "absolute",
    marginLeft:"85px",
    marginTop:"200px",
  },
};

export default function Contact() {
  return (
    <React.Fragment>
      <Grid container mt={1}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
        <Typography sx={styles.cardTextValue} level="body-md">
                  De klant wordt <br></br>altijd geholpen.
                </Typography>
                <Typography sx={styles.cardTextTitle} level="h2">
                  We willen graag van je horen.
                  
                </Typography>
          <Card sx={styles.card1} variant="solid shadow">
            <CardContent orientation="horizontal">
            <Box>
                    <img src={Phone} style={styles.Phone} alt="Logo" />
                  </Box>
                  <Typography sx={styles.cardtextparagraph} level="h2">
                  Geef ons altijd een belletje. <br></br> We willen nooit een ontrevreden klant hebben.
                  
                </Typography>
                <Typography sx={styles.number} level="h4">
                085-02445405
                  
                </Typography>
                <CardContent>
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card sx={styles.card2} variant="solid shadow">
            <CardContent orientation="horizontal">
         

                  <Box>
                    <img src={Person} style={styles.Person} alt="Logo" />
                  </Box>
                  <Typography sx={styles.cardtextparagraph2} level="h2">
                  Er wordt snel en goed geholpen.
                  </Typography>
                 
                  <Typography sx={styles.cardtextparagraph3} level="h2">
                  Snel en gemakkelijk via de telefoon.
                  </Typography>
                  <Typography sx={styles.cardtextparagraph4} level="h2">
                  Binnen 35 seconden gekoppeld met een medewerker.
                </Typography>

 </CardContent>
        </Card>
        <Box>
                    <img src={Customer} style={styles.Customer} alt="Logo" />
                  </Box>
                  
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
