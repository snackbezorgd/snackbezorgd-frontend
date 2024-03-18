import { Card, CardContent } from "@mui/joy/";
import * as React from "react";
import { Box, Typography, Stack } from "@mui/material/";
import axios from "axios";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/joy/Button";
import { styled } from "@mui/material/styles";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

const apiUrl = process.env.REACT_APP_API_URL;

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
  deleteButton: {
    backgroundColor: "#b30000b9",
    color: "#fff",
    boxShadow: 0,
    border: 0,
    borderRadius: "5px",
    width: "100px",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#7a000b",
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

export default function AccountsTable() {
  const [rows, setRows] = React.useState([]);
  const [totalAccounts, setTotalAccounts] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      description: "Het unieke ID van de order. Dit is altijd E2400XXX",
      width: 200,
    },
    {
      field: "firstName",
      headerName: "Voornaam",
      description: "De voornaam van de persoon.",
      sortable: false,
      width: 200,
    },
    {
      field: "lastName",
      headerName: "Achternaam",
      description: "De achternaam van de persoon.",
      sortable: false,
      width: 200,
    },
    {
      field: "email",
      headerName: "email",
      description: "De email van de persoon.",
      sortable: false,
      width: 200,
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
              sx={styles.deleteButton}
              onClick={console.log("clicked!")}
            >
              Verwijderen
            </Button>
          </Stack>
        );
      },
    },
  ];

  React.useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/account/`);
        setRows(
          response.data.map((account) => ({
            id: account.account_id,
            firstName: account.first_name,
            lastName: account.last_name,
            email: account.email,
          }))
        );
        setTotalAccounts(response.data.length);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);
  return (
    <Box>
      <Box sx={styles.cards}>
        <Card sx={styles.card} variant="solid">
          <CardContent orientation="horizontal">
            <CardContent>
              <Typography sx={styles.cardTextTitle} level="body-md">
                Accounts
              </Typography>
              <Typography sx={styles.cardTextValue} level="h2">
                {totalAccounts}
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
