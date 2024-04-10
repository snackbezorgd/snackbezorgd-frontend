import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button, Divider, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CheckoutPage = () => {
  const [bezorgtijd, setBezorgtijd] = useState('');
  const [betaalmethoden, setBetaalmethoden] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleBezorgtijdChange = (event) => {
    setBezorgtijd(event.target.value);
  };

  const handleBetaalmethodenChange = (event) => {
    setBetaalmethoden(event.target.value);
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, sans-serif',
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            height: '2vh',
          },
        },
      },
    },
    palette: {
      primary: {
        main: '#FDA912',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8} sx={{ marginTop: '11vh' }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 5,
              padding: 2,
              width: '100%',
              marginLeft: '13vh',
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Afrekenen
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Bezorgadres
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField label="Straat" fullWidth margin="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Huisnummer" fullWidth margin="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Postcode" fullWidth margin="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Woonplaats" fullWidth margin="small" />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3, marginTop:'5vh', height: 1, backgroundColor: '#c4c4c4' }} />

              <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
                Persoonlijke gegevens
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TextField label="Voornaam" fullWidth margin="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Tussenvoegsels (optioneel)" fullWidth margin="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Achternaam" fullWidth margin="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="E-mailadres" fullWidth margin="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Telefoon" fullWidth margin="small" />
                </Grid>
              </Grid>

              <Grid container spacing={1} sx={{ marginTop: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Bezorgtijd
                  </Typography>
                  <Select
                    fullWidth
                    value={bezorgtijd}
                    onChange={handleBezorgtijdChange}
                    size='small'
                  >
                    <MenuItem value="10:00">10:00</MenuItem>
                    <MenuItem value="11:00">11:00</MenuItem>
                    <MenuItem value="12:00">12:00</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Betaalmethoden
                  </Typography>
                  <Select
                    fullWidth
                    value={betaalmethoden}
                    onChange={handleBetaalmethodenChange}
                    size='small'
                  >
                    <MenuItem value="iDeal">iDeal</MenuItem>
                    <MenuItem value="Paypal">Paypal</MenuItem>
                    <MenuItem value="Pinnen aan deur">Pinnen aan deur</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Button type="submit" variant="contained" sx={{ marginTop: 4, color:'#fff', backgroundColor: '#FDA912', '&:hover': {backgroundColor: '#d38c0e'} }}>
                Bestel en betaal (€25,13)
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#fff',
              height: '100vh',
              marginTop: '9vh',
              position: 'fixed',
              width: '20%',
              top: 0,
              right: 0,
              padding: 3,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default CheckoutPage;
