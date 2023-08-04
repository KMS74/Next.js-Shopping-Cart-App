import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "@/types";
import { getProduct } from "@/products-service";
import { Stack, Typography } from "@mui/material";
import ProductCard from "@/components/ProductCard";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (id) {
        const product: Product = await getProduct(id as string);

        setProduct(product);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!id) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Stack>
      <Typography variant="h4" paragraph>
        Product Details
      </Typography>
      <ProductCard product={product as Product} />
    </Stack>
  );
};

export default ProductDetails;
