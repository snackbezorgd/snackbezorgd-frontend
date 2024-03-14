import * as React from "react";
import { Box } from "@mui/material/";
import axios from "axios";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

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

export default function OrderDetailTable() {
  const [rows, setRows] = React.useState([]);
  const [totalOrders, setTotalOrders] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const [selectedOrderId, setSelectedOrderId] = React.useState(null);

  const handleRowClick = (params) => {
    setSelectedOrderId(params.row.id);
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      description: "Het unieke ID van de order. Dit is altijd E2400XXX",
      width: 150,
      onCellClick: handleRowClick,
    },
    {
      field: "product",
      headerName: "Product",
      description: "De naam van het product.",
      sortable: false,
      width: 250,
    },
    {
      field: "quantity",
      headerName: "Aantal",
      description: "De tijd dat de bestelling is geplaatst.",
      type: "Date",
      dateSetting: { locale: "en-GB" },
      width: 220,
    },
    // {
    //   field: "paid",
    //   headerName: "Betaal Status",
    //   description:
    //     "De status van de bestelling. Dit kan betaald zijn of onbetaald.",
    //   type: "boolean",
    //   sortable: false,
    //   renderCell: (params) => {
    //     const isPaid = params.value === true;

    //     return (
    //       <Chip
    //         label={isPaid ? "Betaald" : "Onbetaald"}
    //         variant="outlined"
    //         color={isPaid ? "success" : "error"}
    //         sx={isPaid ? styles.paidButton : styles.unpaidButton}
    //       />
    //     );
    //   },
    //   width: 200,
    // },
    // {
    //   field: "subtotal",
    //   headerName: "Totaal",
    //   description: "Totaal dat de bestelling heeft gekost in euro's.",
    //   width: 100,
    // },
  ];

  React.useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const response = await axios.get(
          `https://snackbezorgd.knightsofni.nl/api/orderitem/?order_id=${selectedOrderId}`
        );
        setRows(
          response.data.map((orderItem) => ({
            id: orderItem.order,
            product: orderItem.product,
            quantity: orderItem.quantity,
            // subtotal: new Intl.NumberFormat("nl-NL", {
            //   style: "currency",
            //   currency: "EUR",
            // }).format(parseFloat(orderItem.subtotal)),
          }))
        );
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrderItems();
  }, []);
  return (
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
  );
}
