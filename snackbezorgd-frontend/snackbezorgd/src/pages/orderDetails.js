import React, { Component } from "react";
import { Stack, Box, Breadcrumbs, Link, Typography } from "@mui/material/";
import "@fontsource/inter";
import { Card, CardContent } from "@mui/joy/";
import EnhancedTable from "../components/orderTable";
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
  container: {
    // position: "absolute",
    // top: "10%",
    // // backgroundColor: "#fff",
    // width: "60vw",
    // height: "63.9vh",
  },
};

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
    <Link underline="hover" key="1" color="inherit" href="/admin">
    Admin Paneel
  </Link>,
  <Typography key="3" color="text.primary">
    Order Detail
  </Typography>,
];

class OrderDetails extends Component {
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
            Order verwerking
          </Typography>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Stack sx={styles.container} >

          </Stack>
          <Box sx={styles.tableBackground}>
            <EnhancedTable />
          </Box>
        </Stack>
      </Stack>
    );
  }
}

export default OrderDetails;
