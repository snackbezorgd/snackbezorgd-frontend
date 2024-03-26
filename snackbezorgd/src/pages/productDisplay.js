import React, { Component } from "react";
import { styled, ThemeProvider } from '@mui/material/styles';
import Stack from "@mui/joy/Stack";
import Typography from '@mui/material/Typography';
import Homefood from "../assets/home-food.png";
import FilterItem from "../components/filterItem";
import ProductList from "../components/productList";
import ShoppingCart from "../components/shoppingCart"; 
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 800,
    },
});

const CategoryTitle = ({ title }) => {
    return (
        <Typography variant="h5" sx={{ marginLeft: '10vw', marginTop: '4vw' }}>
            {title}
        </Typography>
    );
};

class ProductDisplay extends Component {
    render() {
        const tvSnacks = [
            { src: Homefood, alt: "Product 1" },
            { src: Homefood, alt: "Product 2" },
            { src: Homefood, alt: "Product 3" },
            { src: Homefood, alt: "Product 3" },
            { src: Homefood, alt: "Product 3" },
            { src: Homefood, alt: "Product 3" },
            { src: Homefood, alt: "Product 3" },
            { src: Homefood, alt: "Product 3" },
            { src: Homefood, alt: "Product 3" }
        ];

        const chips = [
            { src: Homefood, alt: "Product 1" },
            { src: Homefood, alt: "Product 2" },
            { src: Homefood, alt: "Product 3" }
        ];

        return (
            <ThemeProvider theme={theme}> 
                <div>
                    <Stack // Filter items
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        sx={{ marginTop: '7vw', justifyContent: 'center' }}
                    >
                        <FilterItem />
                        <FilterItem />
                        <FilterItem />
                        <FilterItem />
                        <FilterItem />
                    </Stack>

                    <CategoryTitle title="Tv-Snacks" />
                    <ProductList products={tvSnacks} />

                    <CategoryTitle title="Chips" />
                    <ProductList products={chips} />

                    <CategoryTitle title="Chips" />
                    <ProductList products={chips} />

                    <ShoppingCart />
                </div>
            </ThemeProvider>
        );
    }
}

export default ProductDisplay;
