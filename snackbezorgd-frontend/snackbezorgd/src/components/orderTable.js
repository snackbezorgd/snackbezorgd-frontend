import * as React from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import axios from "axios";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const styles = {
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

export default function DataTable() {
  const [rows, setRows] = React.useState([]);
  const [totalOrders, setTotalOrders] = React.useState(0);

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
        setTotalOrders(response.data.length);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Box sx={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        sx={{
          border: 0,
          marginTop: 2,
          "& .MuiDataGrid-cell:hover": {
            color: "#000",
          },
          "&.Mui-selected": {
            backgroundColor: "#FDA912", //TODO: FIX BACKGROUND SELECTED ROW BEING PRIMARY BLUE; NEEDS TO BE PRIMARY ORANGE SB.
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
  );
}
