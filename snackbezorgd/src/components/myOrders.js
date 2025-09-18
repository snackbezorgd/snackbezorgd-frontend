import React, { useEffect, useCallback } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 800,
  },
});

const MyOrders = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const loggedInUsername = localStorage.getItem("usernameReal");
  const [filteredOrders, setFilteredOrders] = React.useState([]);

  const fetchOrders = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/order/`);
      const allOrders = response.data;
      const filteredOrders = allOrders.filter(
        (order) => order.account.username === loggedInUsername
      );
      setFilteredOrders(filteredOrders);
    } catch (error) {}
  }, [apiUrl, loggedInUsername]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

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
