import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Product } from "../types";
import { useCart } from "../CartContext";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCartClick = (product: Product) => {
    addToCart(product);
  };

  return (
    <Box sx={{ cursor: "pointer" }}>
      <Box
        onClick={() => router.push(`/products/${product?.id}/product-details`)}
      >
        <Image
          priority
          src={product?.image}
          alt={product?.title}
          width={300}
          height={300}
        />
        <Typography variant="h6">{product?.title}</Typography>
        <Typography variant="subtitle1">{product?.category}</Typography>
        <Typography variant="subtitle1">
          ${product?.price?.toFixed(2)}
        </Typography>
      </Box>
      <Box mt={1}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleAddToCartClick(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
