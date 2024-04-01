import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/joy/Stack";
import ProductItem from "./productItem.js";

const StyledStack = styled(Stack)(({ theme }) => ({
  marginTop: "1vw",
  marginLeft: "10vw",
}));

const ProductList = ({ products }) => {
  return (
    <StyledStack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      {products.map((product, index) => (
        <ProductItem
          key={index}
          title={product.title}
          price={product.price}
          description={product.description}
          src={product.src}
          alt={product.alt}
        />
      ))}
    </StyledStack>
  );
};

export default ProductList;
