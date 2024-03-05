import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Box from "@mui/material/Box";

const styles = {
  titleContainer: {
    border: "none",
  },
};
const columns = [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "fullName",
    headerName: "Naam",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 250,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "time",
    headerName: "Besteltijd",
    type: "Date",
    dateSetting: { locale: "en-GB" },
    width: 250,
  },
  {
    field: "paid",
    headerName: "Betaal Status",
    type: "boolean",
    width: 200,
  },
  {
    field: "total",
    headerName: "Totaal",
    width: 70,
  },
];

export default function DataTable() {
  const [rows, setRows] = React.useState([]);

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
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Box sx={{ height: 400 }}>
      <DataGrid
        sx={styles.dataGrid}
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </Box>
  );
}
