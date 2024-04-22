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
      <Grid container spacing={1} sx={{marginTop:'10vh', padding:'15px'}} >
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 5,
              padding: 2,
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">
              Afrekenen
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Bezorgadres
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField label="Straat" fullWidth margin="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Huisnummer" fullWidth margin="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Postcode" fullWidth margin="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Woonplaats" fullWidth margin="small" />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="subtitle1" gutterBottom>
                Persoonlijke gegevens
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField label="Voornaam" fullWidth margin="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Tussenvoegsels (optioneel)" fullWidth margin="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Achternaam" fullWidth margin="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="E-mailadres" fullWidth margin="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Telefoon" fullWidth margin="small" />
                </Grid>
              </Grid>

              <Grid container spacing={1} sx={{ marginTop: 2 }}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                Bestel en betaal (€29,43)
              </Button>
            </form>
          </Box>
        </Grid>
            
        {/* Sidebar */}
        <Grid item xs={0} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: 2,
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight={800} sx={{ textAlign: 'center'}}>
              Winkelmandje
            </Typography>
            {/* PRODUCT */}
            <Box sx={{ flex: 1, overflowY: 'auto' }}> 
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="subtitle2" fontWeight={800}>1x</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="subtitle2" fontWeight={800}>Pokebowl large</Typography>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'right' }}>
                  <Typography variant="subtitle2" fontWeight={800}>€16,45</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="body2">Poké bowl met sushi rijst, Poké Citrus dressing, Zalm, Komkommer, Sesam-mix, Sesam-mix, Ja, stokjes, sojasaus en wasabi erbij, Toeslag verpakking</Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: 2 }} />

              {/* PRODUCT */}
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="subtitle2" fontWeight={800}>1x</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="subtitle2" fontWeight={800}>Gyoza met kip en groente</Typography>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'right' }}>
                  <Typography variant="subtitle2" fontWeight={800}>€9,00</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="body2"></Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: 2 }} />
            </Box>

            {/* EXTRA KOSTEN */}
            <Box sx={{ mt: 'auto' }}>
              <Box>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={9}>
                    <Typography variant="subtitle2">Subtotaal</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2" fontWeight={800}>€25,45</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={9}>
                    <Typography variant="subtitle2">Bezorgkosten</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2" fontWeight={800}>€2,99</Typography>
                  </Grid>
                </Grid>
              
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={9}>
                    <Typography variant="subtitle2">Servicekosten</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2" fontWeight={800}>€0,99</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />

                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={9}>
                    <Typography variant="subtitle2" fontWeight={800}>Totaal</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2" fontWeight={800}>€29,43</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default CheckoutPage;
