import React, { Component } from "react";
import { Stack, Box, Breadcrumbs, Link, Typography } from "@mui/material/";
import "@fontsource/inter";
import { Card, CardContent } from "@mui/joy/";
import DataTable from "../components/orderTable";
const styles = {
  titleContainer: {
    position: "absolute",
    top: "10%",
    left: "20vw",
  },
  text: {
    fontFamily: "inter",
    fontWeight: 800,
  },
  cards: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginTop: "2vw",
  },
  card: {
    height: "10vw",
    width: "20vw",
    backgroundColor: "#fff",
    borderRadius: 35,
  },
  cardTextTitle: {
    color: "#000",
    marginLeft: "1vw",
  },
  cardTextValue: {
    color: "#000",
    marginLeft: "1vw",
    fontWeight: 800,
    fontSize: "3vw",
  },
  tableBackground: {
    marginTop: "2vw",
    backgroundColor: "#fff",
    borderRadius: 7,
  },
};

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Typography key="3" color="text.primary">
    Adminpaneel
  </Typography>,
];

class Admin extends Component {
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
        <Stack sx={styles.titleContainer}>
          <Typography sx={styles.text} variant="h4" color="initial">
            Admin Paneel
          </Typography>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Box sx={styles.cards}>
            <Card sx={styles.card} variant="solid">
              <CardContent orientation="horizontal">
                <CardContent>
                  <Typography sx={styles.cardTextTitle} level="body-md">
                    Orders
                  </Typography>
                  <Typography sx={styles.cardTextValue} level="h2">
                    4
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
            <Card sx={styles.card} variant="solid">
              <CardContent orientation="horizontal">
                <CardContent>
                  <Typography sx={styles.cardTextTitle} level="body-md">
                    Opbrengst
                  </Typography>
                  <Typography sx={styles.cardTextValue} level="h2">
                    €512,18
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
            <Card sx={styles.card} variant="solid">
              <CardContent orientation="horizontal">
                <CardContent>
                  <Typography sx={styles.cardTextTitle} level="body-md">
                    Totaal Orders
                  </Typography>
                  <Typography sx={styles.cardTextValue} level="h2">
                    72
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Box>
          <Box sx={styles.tableBackground}>
            <DataTable />
          </Box>
        </Stack>
      </Stack>
    );
  }
}

export default Admin;
