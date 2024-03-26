import React, { useState } from 'react';
import { Fab, Modal, Button, Typography, styled, Box, Stack, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  backgroundColor: '#FFA500',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FFC04D',
  },
});

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 60px',
  backgroundColor: 'white',
  maxWidth: '522px',
  borderRadius: '29px',
});

interface PriceRowProps {
  label: string;
  price: string;
}

const PriceRow: React.FC<PriceRowProps> = ({ label, price }) => (
  <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ maxWidth: 350, width: '100%', mt: 2.5 }}>
    <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
      {label}
    </Typography>
    <Typography variant="body1" fontWeight="bold">
      {price}
    </Typography>
  </Stack>
);

const ShoppingCart: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const priceRows = [
    { label: 'Subtotaal', price: '€ 21,25' },
    { label: 'Bezorgkosten', price: '€ 2,99' },
    { label: 'Servicekosten', price: '€ 0,99' },
  ];

  return (
    <div>
      <StyledFab onClick={handleOpen}>
        <AddShoppingCartIcon />
      </StyledFab>
      <StyledModal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <ModalContainer>
          <Typography variant="h4" fontWeight="bold" textAlign="right" mt={2.5}>
            Winkelmandje
          </Typography>
          <Stack spacing={5} mt={5}>
            <Stack direction="row" spacing={5}>
              <Box sx={{ width: '70%' }}>
                <Typography variant="body1" mt={10}>
                  Pokebowl large
                </Typography>
                <Typography variant="body2">
                  Poké bowl met sushi rijst, Poké Citrus dressing, Zalm, Komkommer, Sesam-mix, Sesam-mix, Ja, stokjes,
                  sojasaus en wasabi erbij, Toeslag verpakking
                </Typography>
              </Box>
              <Box sx={{ width: '30%', ml: 5 }}>
                <Typography variant="body1" fontWeight="bold" mt={20}>
                  € 16,45
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={5}>
              <Box sx={{ width: '70%' }}>
                <Typography variant="body1">Gyoza met kip en groente</Typography>
              </Box>
              <Box sx={{ width: '30%', ml: 5 }}>
                <Typography variant="body1" fontWeight="bold">
                  € 4,80
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Divider sx={{ mt: 10, maxWidth: '100%', height: '1px', bgcolor: 'divider', width: 349 }} />
          {priceRows.map((priceRow, index) => (
            <PriceRow key={index} {...priceRow} />
          ))}
          <Divider sx={{ mt: 3, maxWidth: '100%', height: '1px', bgcolor: 'divider', width: 350 }} />
          <Stack direction="row" spacing={1} mt={3} sx={{ maxWidth: '100%', width: 350 }}>
            <Typography variant="body1" fontWeight="bold" color="black" alignSelf="flex-start">
              Totaal
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 0,
                width: 'fit-content',
              }}
            >
              <Typography variant="body1" fontWeight="bold" color="black" textAlign="right">
                € 25,23
              </Typography>
              <Button
                variant="contained"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  m: 1,
                  p: 2,
                  fontSize: 12,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                  whiteSpace: 'nowrap',
                  borderRadius: '2xl',
                  boxShadow: 'lg',
                }}
              >
                Afrekenen
              </Button>
            </Box>
          </Stack>
          <Button onClick={handleClose} sx={{ mt: 4 }}>
            X
          </Button>
        </ModalContainer>
      </StyledModal>
    </div>
  );
};

export default ShoppingCart;