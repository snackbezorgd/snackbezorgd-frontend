import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, Stack } from "@mui/material/";
import ProductList from "../components/productList";
import ShoppingCart from "../components/shoppingCart";
import { createTheme } from "@mui/material/styles";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 800,
  },
});

const styles = {
  productList: {
    marginTop: "1vw",
    marginLeft: "10vw",
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
  const [cartItems, setCartItems] = useState([]);
  const [tvSnacks, setTvSnacks] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);  

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

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.title === item.title);
  
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={styles.productList}>
        <CategoryTitle title="Ons Assortiment" />
        <ProductList products={tvSnacks} maxProductsPerRow={3} addToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} />
      </Stack>
    </ThemeProvider>
  );
};

export default ProductDisplay;