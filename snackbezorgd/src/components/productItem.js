import React, { useState } from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
  marginBottom: "30px",
  width: "200px",
  position: "relative",
  backgroundColor: "#F2F2F2",
}));

const Image = styled("img")`
  max-width: 100%;
  max-height: 100%;
`;

const AddButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  color: "gray",
}));

const StyledModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  borderRadius: "15px",
  padding: "2vw",
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FDA912",
  color: "white",
  "&:hover": {
    backgroundColor: "#c78400",
  },
}));

const ProductItem = ({ src, title, description, price, addToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddToCart = () => {
    addToCart({ description, title, price, quantity: 1 });
    handleCloseModal();
  };

  return (
    <StyledPaper>
      <Image src={src} alt={title} />
      <AddButton color="primary" onClick={handleOpenModal}>
        <AddIcon />
      </AddButton>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <StyledModalContent>
          <Image src={src} alt={title} />
          <h2 id="modal-title">{title}</h2>
          <p id="modal-description">{description}</p>
          <p>€ {price}</p>
          <AddToCartButton variant="contained" onClick={handleAddToCart}>
            Toevoegen aan mand
          </AddToCartButton>
        </StyledModalContent>
      </Modal>
    </StyledPaper>
  );
};

export default ProductItem;