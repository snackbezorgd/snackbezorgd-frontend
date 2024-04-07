import { Card, CardContent } from "@mui/joy/";
import * as React from "react";
import { Box, Typography, Stack, TextField, Grid } from "@mui/material/";
import axios from "axios";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/joy/Button";
import AssessmentIcon from "@mui/icons-material/Assessment";

const apiUrl = process.env.REACT_APP_API_URL;

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
  },
  addProductBackgorund: {
    marginTop: "2vw",
    height: "5vw",
    backgroundColor: "#fff",
    padding: 2,
    maxWidth: "1150px",
    borderRadius: 3,
  },
  titleContainer: {
    border: "none",
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
  addButton: {
    backgroundColor: "#008000",
    color: "#fff",
    boxShadow: 0,
    border: 0,
    borderRadius: "5px",
    width: "100px",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#013220",
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

export default function Products() {
  const [rows, setRows] = React.useState([]);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [newProduct, setNewProduct] = React.useState({
    title: "",
    description: "",
    price: "",
    photo: "",
    locatie: "",
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/product/`);
      setRows(
        response.data.map((product) => ({
          id: product.product_number,
          title: product.title,
          description: product.description,
          price: "€" + product.price.replace(/\./g, ","),
          active: product.active,
          locatie: product.locatie,
        }))
      );
      setTotalProducts(response.data.length);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const deleteProduct = async (productID) => {
    try {
      await axios.delete(`${apiUrl}/api/product/${productID}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const saveProduct = async (product) => {
    try {
      if (product.id) {
        await axios.put(`${apiUrl}/api/product/${product.id}`, product);
      } else {
        await axios.post(`${apiUrl}/api/product/`, product);
      }
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      description: "Het unieke ID van het product. Dit is altijd P2400XXX",
      width: 120,
    },
    {
      field: "title",
      headerName: "Titel",
      description: "De titel van het product",
      sortable: false,
      width: 260,
      editable: true,
    },
    {
      field: "description",
      headerName: "Beschrijving",
      description: "De beschrijving van het product.",
      type: "textfield",
      width: 300,
      editable: true,
    },
    {
      field: "price",
      headerName: "Prijs",
      description: "Prijs van het product",
      width: 120,
      editable: true,
    },
    {
      field: "locatie",
      headerName: "Locatie",
      description: "Locatie van het product",
      width: 170,
      editable: true,
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
              onClick={() => deleteProduct(params.row.id)}
            >
              Verwijderen
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <Grid container mt={1} spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Card sx={styles.card} variant="solid">
            <CardContent orientation="horizontal">
              <CardContent>
                <Typography sx={styles.cardTextTitle} level="body-md">
                  Totaal producten
                </Typography>
                <Typography sx={styles.cardTextValue} level="h2">
                  {totalProducts}
                </Typography>
                <AssessmentIcon sx={styles.svgIcon} />
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={styles.addProductBackgorund}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Title"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <TextField
            label="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                description: e.target.value,
              })
            }
          />
          <TextField
            label="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <TextField
            label="Photo"
            value={newProduct.photo}
            sx={styles.addProcuctField}
            onChange={(e) =>
              setNewProduct({ ...newProduct, photo: e.target.value })
            }
          />
          <TextField
            label="Location"
            value={newProduct.locatie}
            onChange={(e) =>
              setNewProduct({ ...newProduct, locatie: e.target.value })
            }
          />
          <Button
            variant="contained"
            sx={styles.addButton}
            onClick={() => saveProduct(newProduct)}
          >
            Product Toevoegen
          </Button>
        </Stack>
      </Box>

      <Box sx={styles.tableBackground}>
        <Box sx={{ height: 400 }}>
          <StyledDataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            getRowClassName={() => `super-app-theme`}
            onEditRowModelChange={(newModel) => {
              const editedRow =
                newModel && newModel.length ? newModel[0] : null;
              if (editedRow) {
                saveProduct(editedRow);
              }
            }}
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
    </React.Fragment>
  );
}
