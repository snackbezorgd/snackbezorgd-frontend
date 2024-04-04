import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/joy/Stack";
import ProductItem from "./productItem.js";
import Grid from "@mui/material/Grid";

const StyledStack = styled(Stack)(({ theme }) => ({
  marginTop: "1vw",
  marginLeft: "10vw",
}));

const ProductList = ({ products, maxProductsPerRow }) => {
  const renderProducts = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += maxProductsPerRow) {
      const rowProducts = products.slice(i, i + maxProductsPerRow);
      rows.push(
        <Grid container spacing={0.5} key={i}>
          {rowProducts.map((product, index) => (
            <Grid item xs={10.8 / maxProductsPerRow} key={index}>
              <ProductItem
                title={product.title}
                price={product.price}
                description={product.description}
                src={product.src}
                alt={product.alt}
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
