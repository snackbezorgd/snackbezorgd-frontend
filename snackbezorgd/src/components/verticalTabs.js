import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stats from "./orders";
import Orders from "./orders";
import { Breadcrumbs, Link } from "@mui/material/";
import Products from "./products";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const orderBreadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/">
    Adminpaneel
  </Link>,
  <Typography key="3" color="text.primary">
    Orders
  </Typography>,
];

const productBreadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/">
    Adminpaneel
  </Link>,
  <Typography key="3" color="text.primary">
    Producten
  </Typography>,
];

const accountBreadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/">
    Adminpaneel
  </Link>,
  <Typography key="3" color="text.primary">
    Accounts
  </Typography>,
];

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
    fontSize: "2vw",
  },
  tableBackground: {
    marginTop: "2vw",
    backgroundColor: "#fff",
    borderRadius: 7,
  },

  svgIcon: {
    height: "6vw",
    marginTop: "1vw",
    position: "absolute",
    right: -100,
    width: "100%",
    filter:
      "invert(75%) sepia(15%) saturate(4787%) hue-rotate(350deg) brightness(101%) contrast(98%)",
  },
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          "& .MuiTabs-indicator": {
            backgroundColor: "#fda912 !important",
          },
          "& .Mui-selected": {
            color: "#fda912 !important",
          },
        }}
      >
        <Tab sx={styles.verticalText} label="Open Orders" {...a11yProps(0)} />
        <Tab sx={styles.verticalText} label="Producten" {...a11yProps(1)} />
        <Tab sx={styles.verticalText} label="Accounts" {...a11yProps(2)} />
        {/* <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography sx={styles.text} variant="h4" color="initial">
          Admin Paneel
        </Typography>
        <Breadcrumbs separator="›" aria-label="orderBreadcrumb">
          {orderBreadcrumbs}
        </Breadcrumbs>
        <Box>
          <Orders />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography sx={styles.text} variant="h4" color="initial">
          Admin Paneel
        </Typography>
        <Breadcrumbs separator="›" aria-label="productBreadcrumbs">
          {productBreadcrumbs}
        </Breadcrumbs>
        <Box>
          <Products />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography sx={styles.text} variant="h4" color="initial">
          Admin Paneel
        </Typography>
        <Breadcrumbs separator="›" aria-label="accountBreadcrumbs">
          {accountBreadcrumbs}
        </Breadcrumbs>{" "}
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel> */}
    </Box>
  );
}
