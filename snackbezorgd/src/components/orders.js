import { Card, CardContent } from "@mui/joy/";
import * as React from "react";
import { Box, Stack, Grid } from "@mui/material/";
import axios from "axios";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/joy/Button";
import { styled } from "@mui/material/styles";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentsIcon from "@mui/icons-material/Payments";
import SsidChartIcon from "@mui/icons-material/SsidChart";

const styles = {
  text: {
    fontFamily: "inter",
    fontWeight: 800,
  },
  card: {
    height: "180px",
    width: "330px",
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
    fontSize: "30px",
  },
  svgIcon: {
    height: "100px",
    marginTop: "1vw",
    position: "absolute",
    right: -100,
    color: "#fda912",
    width: "100%",
  },
  tableBackground: {
    marginTop: "2vw",
    backgroundColor: "#fff",
    borderRadius: 7,
    borderColor: "#000",
  },
  titleContainer: {
    border: "none",
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 600,
  },
  primaryButton: {
    backgroundColor: "#fda912",
    color: "#fff",
    boxShadow: 0,
    border: 0,
    borderRadius: "5px",
    width: "100px",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#fdb735",
    },
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
  paidButtonOI: {
    backgroundColor: "#E3FBE3",
    color: "#1F7A1F",
    border: 0,
    float: "right",
    borderRadius: "5px",
    marginRight: "1vw",
    width: "150px",
    height: "50px",
    fontSize: "20px",

    fontWeight: 600,
  },
  unpaidButtonOI: {
    backgroundColor: "#FBE3E3",
    color: "#C41C1C",
    border: 0,
    float: "right",
    borderRadius: "5px",
    marginRight: "1vw",
    width: "150px",
    height: "50px",
    fontSize: "20px",
    fontWeight: 600,
  },
  orderItemTitle: {
    fontSize: 30,
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

export default function Orders() {
  const [rows, setRows] = React.useState([]);
  const [OrderAccountRows, setOrderAccountRows] = React.useState([]);
  const [orderItemRows, setOrderItemRows] = React.useState([]);
  const [totalOrders, setTotalOrders] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState(0);
  const [customerFirstName, setCustomerFirstname] = React.useState(0);
  const [customerEmail, setCustomerEmail] = React.useState(0);
  const [customerAddress, setCustomerAddress] = React.useState(0);
  const [orderNumber, setOrderNumber] = React.useState(0);
  const [Paid, setPaid] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  const isPaid = Paid === true;

  const handleRowClick = (params) => {
    setOrderItemRows([]);
    setOrderAccountRows([]);
    fetchOrderItems(params.row.id);
    fetchOrderAccount(params.row.id);
  };

  const fetchOrderItems = async (orderId) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/orderitem/?order=${orderId}`
      );
      setOrderItemRows(
        response.data.map((orderItem, index) => ({
          id: `${orderId}-${index}`,
          product: orderItem.product,
          quantity: orderItem.quantity,
          locatie: orderItem.locatie,
        }))
      );
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const fetchOrderAccount = async (orderId) => {
    try {
      const response = await axios.get(`${apiUrl}/api/order/${orderId}/`);
      const order = response.data;
      setOrderAccountRows([
        {
          id: order.order_number,
          accountFirstName: order.account.first_name,
          accountLastName: order.account.last_name,
          email: order.account.email,
          time: order.time,
          paid: order.paid,
          address_1: order.address_1,
          city: order.city,
          province: order.province,
          zip_code: order.zip_code,
          total: new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency: "EUR",
          }).format(parseFloat(order.total)),
        },
      ]);
      setCustomerFirstname(
        order.account.first_name + " " + order.account.last_name
      );
      setCustomerEmail(order.account.email);
      setPaid(order.paid);
      setOrderNumber(order.order_number);
      setCustomerAddress(
        order.address_1 +
          ", " +
          order.zip_code +
          " " +
          order.province +
          ", " +
          order.city
      );
    } catch (error) {
      console.error("Error fetching order account details:", error);
    }
  };

  const orderDetailColumns = [
    {
      field: "product",
      headerName: "Product",
      description: "De naam van het product.",
      sortable: false,
      type: "string",
      width: 250,
    },
    {
      field: "quantity",
      headerName: "Aantal",
      description: "Het aantal van de product",
      type: "string",
      width: 220,
    },
    {
      field: "locatie",
      headerName: "Locatie",
      description: "Locatie van het product",
      width: 170,
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      description: "Het unieke ID van de order. Dit is altijd E2400XXX",
      width: 120,
    },
    {
      field: "fullName",
      headerName: "Naam",
      description: "De naam van de persoon.",
      sortable: false,
      width: 120,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "email",
      description: "De email van de persoon.",
      sortable: false,
      width: 170,
    },
    {
      field: "time",
      headerName: "Besteltijd",
      description: "De tijd dat de bestelling is geplaatst.",
      type: "Date",
      dateSetting: { locale: "en-GB" },
      width: 220,
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
      width: 100,
    },
    {
      field: "Acties",
      headerName: "Acties",
      width: 180,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={styles.primaryButton}
              onClick={() => {
                setOpen(true);
                handleRowClick(params);
              }}
            >
              Bekijken
            </Button>
          </Stack>
        );
      },
    },
  ];

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/order/`);
        setRows(
          response.data.map((order) => ({
            id: order.order_number,
            firstName: order.account.first_name,
            lastName: order.account.last_name,
            email: order.account.email,
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
    <React.Fragment>
      <Grid container mt={1} spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Card sx={styles.card} variant="solid">
            <CardContent orientation="horizontal">
              <CardContent>
                <Typography sx={styles.cardTextTitle} level="body-md">
                  Orders
                </Typography>
                <Typography sx={styles.cardTextValue} level="h2">
                  {totalOrders}
                </Typography>
                <BarChartIcon sx={styles.svgIcon} />
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Card sx={styles.card} variant="solid">
            <CardContent orientation="horizontal">
              <CardContent>
                <Typography sx={styles.cardTextTitle} level="body-md">
                  Opbrengst
                </Typography>
                <Typography sx={styles.cardTextValue} level="h2">
                  {totalCost}
                </Typography>
                <PaymentsIcon sx={styles.svgIcon} />
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Card sx={styles.card} variant="solid">
            <CardContent orientation="horizontal">
              <CardContent>
                <Typography sx={styles.cardTextTitle} level="body-md">
                  Totaal Orders
                </Typography>
                <Typography sx={styles.cardTextValue} level="h2">
                  72
                </Typography>
                <SsidChartIcon sx={styles.svgIcon} />
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
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
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              width: "70vw",
              height: "40vw",
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Box display="flex" flexDirection="column">
              <Typography
                sx={styles.orderItemTitle}
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                fontWeight="lg"
                mb={1}
              >
                Order #{orderNumber}, {customerFirstName}
              </Typography>
            </Box>
            <Chip
              label={isPaid ? "Betaald" : "Onbetaald"}
              variant="outlined"
              color={isPaid ? "success" : "error"}
              sx={isPaid ? styles.paidButtonOI : styles.unpaidButtonOI}
            />
            <Box>
              <Typography
                variant="h5"
                fontSize="xl"
                sx={{ mb: 0.5, fontWeight: 600 }}
              >
                Klant Info
              </Typography>

              <Typography>{customerFirstName}</Typography>
              <Typography>{customerEmail}</Typography>
              <Typography>{customerAddress}</Typography>
            </Box>
            <Box sx={styles.tableBackground}>
              <Box sx={{ height: 400 }}>
                <StyledDataGrid
                  rows={orderItemRows}
                  columns={orderDetailColumns}
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
          </Sheet>
        </Modal>
      </Grid>
    </React.Fragment>
  );
}
