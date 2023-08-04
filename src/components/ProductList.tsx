import { Button, Grid, Stack, Typography } from "@mui/material";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { type } from "os";
import Link from "next/link";
import { useRouter } from "next/router";

// ProductList will be passed an Array of Products as Props
type Props = {
  products: Product[];
};

export const ProductList = ({ products }: Props) => {
  const router = useRouter();

  return (
    <>
      <Grid container spacing={4}>
        {/* Listing All Product Cards */}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
