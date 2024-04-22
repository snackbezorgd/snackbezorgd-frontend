import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/joy/Stack";
import ProductItem from "./productItem.js";
import Grid from "@mui/material/Grid";

const StyledStack = styled(Stack)(({ theme }) => ({
  marginTop: "1vw",
}));

const styles = {
  products: {
    display: "flex",
    alignItems: "center",
  },
};

const ProductList = ({ products, maxProductsPerRow, addToCart }) => {
  const renderProducts = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += maxProductsPerRow) {
      const rowProducts = products.slice(i, i + maxProductsPerRow);
      rows.push(
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          key={i}
        >
          {rowProducts.map((product, index) => (
            <Grid sx={styles.products} item xs={4} sm={4} md={4} key={index}>
              <ProductItem
                id={product.id} 
                title={product.title}
                price={product.price}
                description={product.description}
                src={product.src}
                alt={product.alt}
                addToCart={addToCart} 
              />
            </Grid>
          ))}
        </Grid>
      );
    }
    return rows;
  };

  return <StyledStack direction="column">{renderProducts()}</StyledStack>;
};

export default ProductList;