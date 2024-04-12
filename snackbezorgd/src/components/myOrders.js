import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, Grid, Typography } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 800,
    },
  });

const MyOrders = () => {
  return (
    <ThemeProvider theme={theme}>
        <div style={{ marginTop: '15vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '70%' }}>
                <h1 style={{ display: 'flex', alignItems: 'center', marginBottom:'4vh' }}> 
                    <ShoppingCartIcon sx={{ fontSize: '1em', marginRight: '0.5em' }} /> 
                    Mijn Bestellingen
                </h1>

                {/* ORDER CARD LABELS*/}
                <Grid container justifyContent="center">
                    <Grid item xs={11}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="subtitle2" fontWeight={800} gutterBottom>
                                Username
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Delivery Address
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Order Date
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Amount products
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Last Order
                                <ArrowDownwardIcon sx={{ fontSize:'1.2em'}}/>
                            </Typography>
                        </div>
                    </Grid>

                    {/* ORDER CARD */}
                    <Grid item xs={12} sx={{marginBottom:'1.5vh'}}>
                        <Card style={{ borderRadius: '20px', padding: '3vh',  textAlign: 'center', display: 'flex', justifyContent:'space-between' }}>
                                <Typography variant="body2" fontWeight={800} gutterBottom sx={{paddingLeft:'15px'}}>
                                    John Doe
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{maxWidth: '16vh'}}>
                                    123 Main Street, 
                                    Groningen, The Netherlands
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    January 1, 2023
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    24 product(s)
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{paddingRight:'15px'}}>
                                    January 1, 2023
                                </Typography>
                        </Card>
                    </Grid>

                    {/* ORDER CARD */}
                    <Grid item xs={12} sx={{marginBottom:'1.5vh'}}>
                        <Card style={{ borderRadius: '20px', padding: '3vh',  textAlign: 'center', display: 'flex', justifyContent:'space-between' }}>
                                <Typography variant="body2" fontWeight={800} gutterBottom sx={{paddingLeft:'15px'}}>
                                    John Doe
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{maxWidth: '16vh'}}>
                                    123 Main Street, 
                                    Groningen, The Netherlands
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    January 1, 2023
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    24 product(s)
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{paddingRight:'15px'}}>
                                    January 1, 2023
                                </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    </ThemeProvider>
  );
};

export default MyOrders;
