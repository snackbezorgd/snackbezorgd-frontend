import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import { Fab, Modal, Button, Typography, Box, Stack, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

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
  padding: '20px',
  backgroundColor: 'white',
  maxWidth: '450px',
  borderRadius: '20px',
});

const StyledCartItem = styled(Stack)({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto', 
  gridGap: '10px',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px',
  padding: '10px',
  marginBottom: '10px',
  width: '100%',
});

const StyledProductAmount = styled(Typography)({
  fontWeight: 'bold',
});

const StyledProductTitle = styled(Typography)({
  gridColumn: '2 ',
  fontWeight: 'bold',
});

const StyledProductDescription = styled(Typography)({
  gridColumn: '2 / span 2', 
  width: '70%',
});

const StyledProductPrice = styled(Typography)({
  gridColumn: '3', 
  fontWeight: 'bold',
  width: '75px', 
  justifySelf: 'end'
});

const CloseButton = styled(Button)({
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
})

const PriceRow = ({ label, price }) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} sx={{ maxWidth: 280, width: '100%', mt: 2.5 }}>
    <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
      {label}
    </Typography>
    <Typography variant="body1" fontWeight="bold">
      {price}
    </Typography>
  </Stack>
);

const ShoppingCart = ({ cartItems }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledFab onClick={handleOpen}>
        <AddShoppingCartIcon />
      </StyledFab>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContainer>
          <CloseButton onClick={handleClose}><CloseIcon /></CloseButton>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mt={2.5} mb={2.5}>
            Winkelmandje
          </Typography>
          {cartItems.map((product, index) => (
            <StyledCartItem key={index}>
              <StyledProductAmount variant="body1">
                {product.quantity}x
              </StyledProductAmount>
              <StyledProductTitle variant="body1">
                {product.title}
              </StyledProductTitle>
              <StyledProductPrice variant="body1">
                €{product.price}
              </StyledProductPrice>
              <StyledProductDescription variant="body2">
                {product.description}
              </StyledProductDescription>
            </StyledCartItem>
          ))}
          <Divider sx={{ mt: 2, maxWidth: '100%', height: '1px', bgcolor: 'divider', width: 280 }} />
          <PriceRow label="Subtotaal" price="€ 0,00" />
          <PriceRow label="Bezorgkosten" price="€ 2,99" />
          <PriceRow label="Servicekosten" price="€ 0,99" />
          <Divider sx={{ mt: 2, maxWidth: '100%', height: '1px', bgcolor: 'divider', width: 280 }} />
          <Stack direction="row" spacing={1} mt={1} sx={{ maxWidth: '100%', width: 280, justifyContent: 'center', justifyContent: 'space-between'}}>
            <Typography variant="body1" fontWeight="bold" color="black">
              Totaal
            </Typography>
            <Typography variant="body1" fontWeight="bold" color="black" textAlign="right">
              € 0,00
            </Typography>
          </Stack>
          <Button
            sx={{
              mt: 4,
              p: 2,
              fontSize: 12,
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: '#FFA500',
              color: 'white',
              whiteSpace: 'nowrap',
              borderRadius: '2xl',
              boxShadow: 'lg',
              width: '40vh'
            }}
            onClick={handleClose}
          >
            Afrekenen
          </Button>
        </ModalContainer>
      </StyledModal>
    </div>
  );
};

export default ShoppingCart;
