import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, Stack } from "@mui/material/";
import ProductList from "../components/productList";
import ShoppingCart from "../components/shoppingCart";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import { useEffect } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 800,
  },
});

const styles = {
  productList: {
    marginTop: "0",
    "@media (max-width: 833px)": {
      marginTop: "50px",
      alignItems: "center",
    },
    "@media (max-width: 376px)": {
      marginTop: "50px",
      alignItems: "center",
    },
    "@media (min-width: 2200px)": {
      marginTop: "50px",
      alignItems: "center",
    },
  },
};

const CategoryTitle = ({ title }) => {
  return (
    <Typography variant="h5" sx={{ marginLeft: "10vw", marginTop: "8vw" }}>
      {title}
    </Typography>
  );
};

const ProductDisplay = () => {
  const [tvSnacks, setTvSnacks] = React.useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/product/`);
        setTvSnacks(
          response.data.map((product) => ({
            title: product.title,
            src: product.photo,
            price: product.price,
            description: product.description,
          }))
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={styles.productList}>
        <CategoryTitle title="Ons Assortiment" />
        <ProductList products={tvSnacks} maxProductsPerRow={3} />
        <ShoppingCart />
      </Stack>
    </ThemeProvider>
  );
};

export default ProductDisplay;
