import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, Grid, Typography } from '@mui/material';
import axios from 'axios';

const theme = createTheme({
    typography: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 800,
    },
  });

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [rows, setRows] = React.useState([]);
  const [totalOrders, setTotalOrders] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState(0);
  const loggedInUsername = localStorage.getItem("usernameReal");
  const [filteredOrders, setFilteredOrders] = React.useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/order/`);
      const allOrders = response.data;
      const filteredOrders = allOrders.filter(
        (order) => order.account.username === loggedInUsername
      );
      setTotalOrders(filteredOrders.length);
      setFilteredOrders(filteredOrders);
      const calculatedTotalCost = filteredOrders.reduce((total, order) => {
        const orderCost = parseFloat(order.total) || 0;
        return total + orderCost;
      }, 0);
      setTotalCost("€" + calculatedTotalCost.toFixed(2).replace(/\./g, ","));
      setRows(
        filteredOrders.map((order) => ({
          id: order.order_number,
          firstName: order.account.first_name,
          lastName: order.account.last_name,
          email: order.account.email,
          address_1: order.address_1,
          city: order.city,
          province: order.province,
          zip_code: order.zip_code,
          time: order.time,
          paid: order.paid,
          total: new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency: "EUR",
          }).format(parseFloat(order.total)),
          fullName: `${order.account.first_name || ""} ${
            order.account.last_name || ""
          }`,
        }))
      );
    } catch (error) {}
  };

  console.log(filteredOrders);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ marginTop: "15vh", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "70%" }}>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4vh",
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: "1em", marginRight: "0.5em" }} />
            Mijn Bestellingen
          </h1>

          <Grid container justifyContent="center">
            <Grid item xs={11}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" fontWeight={800} gutterBottom>
                  Gebruikersnaam
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Aflever Adres
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Order Datum
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Aantal Producten
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Totaal
                </Typography>
              </div>
            </Grid>

            {filteredOrders.map((order) => (
              <Grid item xs={12} key={order.id} sx={{ marginBottom: "1.5vh" }}>
                <Card
                  style={{
                    borderRadius: "20px",
                    padding: "3vh",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight={800}
                    gutterBottom
                    sx={{ paddingLeft: "15px" }}
                  >
                    {order.account.first_name + " " + order.account.last_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ maxWidth: "16vh" }}
                  >
                    {order.address_1 +
                      ", " +
                      order.zip_code +
                      " " +
                      order.province}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {order.time}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {order.products.length} product(en)
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ paddingRight: "15px" }}
                  >
                    {order.total.toLocaleString("nl-NL", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    })}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyOrders;
