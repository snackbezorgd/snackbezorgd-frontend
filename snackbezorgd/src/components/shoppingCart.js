import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Fab,
  Modal,
  Button,
  Typography,
  Box,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledFab = styled(Fab)({
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  backgroundColor: "#FFA500",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFC04D",
  },
});

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "white",
  maxWidth: "450px",
  borderRadius: "20px",
});

const StyledCartItemsContainer = styled(Box)({
  maxHeight: "300px",
  overflowY: "auto",
  width: "100%",
  marginBottom: "10px",
});

const StyledCartItem = styled(Stack)({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto auto",
  gridGap: "10px",
  alignItems: "center",
  padding: "10px",
  marginBottom: "10px",
  width: "100%",
});

const StyledProductAmount = styled(Typography)({
  fontWeight: "bold",
});

const StyledProductTitle = styled(Typography)({
  gridColumn: "2 ",
  fontWeight: "bold",
});

const StyledProductDescription = styled(Typography)({
  gridColumn: "2 / span 2",
  width: "70%",
});

const StyledProductPrice = styled(Typography)({
  gridColumn: "3",
  fontWeight: "bold",
  width: "75px",
  justifySelf: "end",
});

const CloseButton = styled(Button)({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
});

const PriceRow = ({ label, price }) => {
  const formattedPrice = price
    .toLocaleString("nl-NL", { style: "currency", currency: "EUR" })
    .replace(/\./g, ",");

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{ maxWidth: 280, width: "100%", mt: 2.5 }}
    >
      <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
        {label}
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        {formattedPrice}
      </Typography>
    </Stack>
  );
};

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveFromCart = (productId) => {
    const index = cartItems.findIndex((item) => item.id === productId);
    if (index !== -1) {
      removeFromCart(productId);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  const deliveryCost = 2.99;
  const serviceCost = 0.99;
  const total = subtotal + deliveryCost + serviceCost;

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
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mt={2.5}
            mb={2.5}
          >
            Winkelmandje
          </Typography>
          <StyledCartItemsContainer>
            {cartItems.map((product, index) => (
              <StyledCartItem key={index}>
                <StyledProductAmount variant="body1">
                  {product.quantity}x
                </StyledProductAmount>
                <StyledProductTitle variant="body1">
                  {product.title}
                </StyledProductTitle>
                <StyledProductPrice variant="body1">
                  €
                  {product.price
                    .toLocaleString("nl-NL", {
                      style: "currency",
                      currency: "EUR",
                    })
                    .replace(/\./g, ",")}
                </StyledProductPrice>
                <IconButton
                  onClick={() => handleRemoveFromCart(product.id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                <StyledProductDescription variant="body2">
                  {product.description}
                </StyledProductDescription>
              </StyledCartItem>
            ))}
          </StyledCartItemsContainer>
          <Divider
            sx={{
              mt: 2,
              maxWidth: "100%",
              height: "1px",
              bgcolor: "divider",
              width: 280,
            }}
          />
          <PriceRow label="Subtotaal" price={subtotal} />
          <PriceRow label="Bezorgkosten" price={deliveryCost} />
          <PriceRow label="Servicekosten" price={serviceCost} />
          <Divider
            sx={{
              mt: 2,
              maxWidth: "100%",
              height: "1px",
              bgcolor: "divider",
              width: 280,
            }}
          />
          <Stack
            direction="row"
            spacing={1}
            mt={1}
            sx={{
              maxWidth: "100%",
              width: 280,
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="black">
              Totaal
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="black"
              textAlign="right"
            >
              {total
                .toLocaleString("nl-NL", { style: "currency", currency: "EUR" })
                .replace(/\./g, ",")}
            </Typography>
          </Stack>
          <Link to="/checkout" style={{}}>
            <Button
              sx={{
                mt: 4,
                p: 2,
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                backgroundColor: "#FFA500",
                color: "white",
                whiteSpace: "nowrap",
                borderRadius: "2xl",
                boxShadow: "lg",
                width: "40vh",
              }}
              onClick={handleClose}
            >
              Afrekenen
            </Button>
          </Link>
        </ModalContainer>
      </StyledModal>
    </div>
  );
};

export default ShoppingCart;
