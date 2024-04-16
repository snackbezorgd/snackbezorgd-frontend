import React from "react";
import "@fontsource/inter";
import { Card, CardContent } from "@mui/joy/";
import { Box, Typography, Stack, TextField, Grid } from "@mui/material/";
import Homefood from "../assets/home-food.png";
import Background from "../assets/background.png";
import Line from "../assets/line.png";
import Slogan from "../assets/slogan.png";
import Logo from "../assets/snackbezorgd-png-vertical.png";
import { useEffect } from "react";
import RegisterComponent from "../components/registerComponent";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { fontSize, fontWeight, positions, shadows } from "@mui/system";

const styles = {
  text: {
    fontFamily: "inter",
    fontWeight: 800,
  },

  imageFood: {
    "-webkit-filter": "drop-shadow(5px 5px 5px #222)",
    filter: "drop-shadow(5px 5px 5px #222)",
    width: "350px",
    height: "350px",
    position: "absolute",
    marginLeft: "375px",
    marginTop: "-300px",
  },


  Slogan: {
    height: "150px",
    width: "235px",
    marginLeft:"1080px",
    marginTop:"-330px",
    position:"absolute"
  },


  Logo: {
    height: "165px",
    width: "325px",
    marginLeft:"1035px",
    marginTop:"-200px",
    position:"absolute"
  },

  Line: {
    height: "300px",
    width: "325px",
    marginLeft:"1038px",
    marginTop:"-350px",
    position:"absolute"
    
  },

  background: {
    "-webkit-filter": "drop-shadow(5px 5px 5px #BEBEBE)",
    filter: "drop-shadow(5px 5px 5px #BEBEBE)",
    height: "325px",
    width: "800px",
    marginLeft:"795px",
    marginTop:"-335px",
  },

  card1: {
    height: "680px",
    width: "800px",
    marginTop: "80px",
    marginLeft: "40px",
    backgroundColor: "#fff",
    borderRadius: 35,
  },
  card2: {
    height: "325px",
    width: "800px",
    marginLeft:"300px",
    marginTop: "435px",
    backgroundColor: "#fff",
    borderRadius: 35,
 
  },
    card3: {
      height: "125px",
      width: "800px",
      marginLeft:"",
      marginTop: "",
      backgroundColor: "#FFE6B8",
      borderRadius: 25,

  },

  card4: {
    height: "125px",
    width: "800px",
    marginLeft:"",
    marginTop: "",
    backgroundColor: "#FFE6B8",
    borderRadius: 25,

},

card5: {
  height: "125px",
  width: "800px",
  marginLeft:"",
  marginTop: "",
  backgroundColor: "#FFE6B8",
  borderRadius: 25,
  
},


card6: {
  height: "125px",
  width: "800px",
  backgroundColor: "#FFE6B8",
  borderRadius: 25,

},

texthead1: {
  color: "black",
  fontFamily: "inter",
  fontWeight: "800",
  marginLeft: "10px",
},

textparagraph1: {
  color: "black",
  fontFamily: "inter",
  marginTop: "60px",
  marginLeft:"-35px",
},

textparagraph2: {
  color: "black",
  fontFamily: "inter",
  marginTop: "60px",
  marginLeft:"-190px",
},

textparagraph3: {
  color: "black",
  fontFamily: "inter",
  marginTop: "60px",
  marginLeft:"-130px",
},

textparagraph4: {
  color: "black",
  fontFamily: "inter",
  marginTop: "60px",
  marginLeft:"-70px",
},
  
  cardTextTitle: {
    fontFamily: "inter",
    marginTop: "50px",
    color: "orange",
    fontWeight: "900",
    marginLeft: "1vw",
    fontSize: "25px",
  },
  cardTextValue: {
    fontFamily: "inter",
    color: "#000",
    marginTop:"30px",
    marginLeft: "1vw",
    fontWeight: 800,
    fontSize: "50px",
  },

  cardtextparagraph: {
    fontFamily: "inter",
    color: "#000",
    marginLeft: "1vw",
    marginTop: "335px",
    marginRight: "20px",
    fontWeight: 500,
    fontSize: "20px",
    position: "absolute",
  },
};

export default function About() {
  return (
    <React.Fragment>
      <Grid container mt={1}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Card sx={styles.card1} variant="solid shadow">
            <CardContent orientation="horizontal">
              <CardContent>
                <Typography sx={styles.cardTextTitle} level="body-md">
                  Wie zijn we?
                </Typography>
                <Typography sx={styles.cardTextValue} level="h2">
                  De klant is <br></br>altijd koning
                  <Box>
                    <img src={Homefood} style={styles.imageFood} alt="Logo" />
                  </Box>
                  <Box>
                    <img src={Background} style={styles.background} alt="Logo" />
                  </Box>
                  <Box>
                    <img src={Line} style={styles.Line} alt="Logo" />
                  </Box>
                  <Box>
                    <img src={Slogan} style={styles.Slogan} alt="Logo" />
                  </Box>
                  <Box>
                    <img src={Logo} style={styles.Logo} alt="Logo" />
                  </Box>
                </Typography>
                <Typography sx={styles.cardtextparagraph} level="h4">
                  Welkom bij Snackbezorgd! Bij ons draait alles om heerlijk
                  eten, gemak en plezier. Of je nu zin hebt in pizza, lasagne of
                  salade, wij hebben voor elk wat wils en bezorgen het direct
                  bij je thuis of op kantoor. Ons team van gepassioneerde chefs
                  en foodies werkt met lokale leveranciers om verse,
                  hoogwaardige gerechten te leveren waar je keer op keer van
                  zult genieten. Klanttevredenheid staat bij ons voorop, en we
                  streven ernaar om elke bestelling perfect af te handelen. Dus
                  waar wacht je nog op? Ontdek ons menu en laat ons je volgende
                  maaltijd onvergetelijk maken!
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card sx={styles.card2} variant="solid shadow">
            <CardContent orientation="horizontal">

              
            <Card sx={styles.card3} variant="solid">
            <CardContent orientation="horizontal">
            <Typography sx={styles.texthead1} variant="h3"><Stack>1</Stack>
              
            </Typography>
            <Typography sx={styles.textparagraph1} variant="h6"><Stack>Jaar bestaan</Stack>
              
               </Typography>
            </CardContent>
            </Card>
            <Card sx={styles.card4} variant="solid">
            <CardContent orientation="horizontal">
            <Typography sx={styles.texthead1} variant="h3"><Stack>97500+</Stack>
              
              </Typography>
              <Typography sx={styles.textparagraph2} variant="h6"><Stack>Positieve reviews</Stack>
                
                 </Typography>
            </CardContent>
            </Card>
            </CardContent>
            <CardContent orientation="horizontal">
            <Card sx={styles.card5} variant="solid">
            <CardContent orientation="horizontal">
            <Typography sx={styles.texthead1} variant="h3"><Stack>500k</Stack>
              
              </Typography>
              <Typography sx={styles.textparagraph3} variant="h6"><Stack>Bestellingen</Stack>
                
                 </Typography>
            </CardContent>
            </Card>
            <Card sx={styles.card6} variant="solid">
            <CardContent orientation="horizontal">
            <Typography sx={styles.texthead1} variant="h3"><Stack>78</Stack>
              
              </Typography>
              <Typography sx={styles.textparagraph4} variant="h6"><Stack>Vestegingen</Stack>
                
                 </Typography>
            </CardContent>
            </Card>
            </CardContent>
         
      


        </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
