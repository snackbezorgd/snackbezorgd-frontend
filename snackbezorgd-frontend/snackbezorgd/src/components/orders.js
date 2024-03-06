import { Card, CardContent } from "@mui/joy/";
import * as React from "react";
import { Box, Typography } from "@mui/material/";
import axios from "axios";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import { darken, lighten, styled } from "@mui/material/styles";

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
  titleContainer: {
    border: "none",
  },
  paidButton: {
    backgroundColor: "#E3FBE3",
    color: "#1F7A1F",
    border: 0,
    borderRadius: "5px",
    width: "100px",
    fontWeight: 600,
  },
  unpaidButton: {
    backgroundColor: "#FBE3E3",
    color: "#C41C1C",
    border: 0,
    borderRadius: "5px",
    width: "100px",
    fontWeight: 600,
  },
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .super-app-theme": {
    "&.Mui-selected": {
      backgroundColor: "#feedcd",
      "&:hover": {
        backgroundColor: "#fedb9a",
      },
    },
  },
}));

const columns = [
  {
    field: "id",
    headerName: "ID",
    description: "Het unieke ID van de order. Dit is altijd E2400XXX",
    width: 250,
  },
  {
    field: "fullName",
    headerName: "Naam",
    description: "De naam van de persoon.",
    sortable: false,
    width: 250,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "time",
    headerName: "Besteltijd",
    description: "De tijd dat de bestelling is geplaatst.",
    type: "Date",
    dateSetting: { locale: "en-GB" },
    width: 250,
  },
  {
    field: "paid",
    headerName: "Betaal Status",
    description:
      "De status van de bestelling. Dit kan betaald zijn of onbetaald.",
    type: "boolean",
    sortable: false,
    renderCell: (params) => {
      const isPaid = params.value === true;

      return (
        <Chip
          label={isPaid ? "Betaald" : "Onbetaald"}
          variant="outlined"
          color={isPaid ? "success" : "error"}
          sx={isPaid ? styles.paidButton : styles.unpaidButton}
        />
      );
    },
    width: 200,
  },

  {
    field: "total",
    headerName: "Totaal",
    description: "Totaal dat de bestelling heeft gekost in euro's.",
    width: 170,
  },
];

export default function Orders() {
  const [rows, setRows] = React.useState([]);
  const [totalOrders, setTotalOrders] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState(0);

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/order/");
        setRows(
          response.data.map((order) => ({
            id: order.order_number,
            firstName: order.first_name,
            lastName: order.last_name,
            time: order.time,
            paid: order.paid,
            total: "€" + order.total.replace(/\./g, ","),
            fullName: `${order.first_name || ""} ${order.last_name || ""}`,
          }))
        );
        const calculatedTotalCost = response.data.reduce((total, order) => {
          const orderCost = parseFloat(order.total) || 0;
          return total + orderCost;
        }, 0);
        setTotalCost("€" + calculatedTotalCost.toFixed(2).replace(/\./g, ","));
        setTotalOrders(response.data.length);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);
  return (
    <Box>
      <Box sx={styles.cards}>
        <Card sx={styles.card} variant="solid">
          <CardContent orientation="horizontal">
            <CardContent>
              <Typography sx={styles.cardTextTitle} level="body-md">
                Orders
              </Typography>
              <Typography sx={styles.cardTextValue} level="h2">
                {totalOrders}
              </Typography>
              <svg
                style={styles.svgIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
              </svg>
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
                {totalCost}
              </Typography>
              <svg
                style={styles.svgIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
              </svg>
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
              <svg
                style={styles.svgIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
            </CardContent>
          </CardContent>
        </Card>
      </Box>
      <Box sx={styles.tableBackground}>
        <Box sx={{ height: 400 }}>
          <StyledDataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            getRowClassName={() => `super-app-theme`}
            sx={{
              border: 0,
              marginTop: 2,
              "& .MuiDataGrid-cell:hover": {
                color: "#000",
              },
              [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
                {
                  outline: "none",
                },
              [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
                {
                  outline: "none",
                },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
