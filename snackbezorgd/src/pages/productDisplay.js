import React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/material/Typography";
import FilterItem from "../components/filterItem";
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

const CategoryTitle = ({ title }) => {
  return (
    <Typography variant="h5" sx={{ marginLeft: "10vw", marginTop: "4vw" }}>
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
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ marginTop: "7vw", justifyContent: "center" }}
      >
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
      </Stack>
      <CategoryTitle title="Tv-Snacks" />
      <ProductList products={tvSnacks} maxProductsPerRow={8} />

      <ShoppingCart />
    </ThemeProvider>
  );
};

export default ProductDisplay;
