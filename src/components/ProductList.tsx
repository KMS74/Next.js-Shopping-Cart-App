import {  Grid, Typography } from "@mui/material";
import { Product } from "../types";
import ProductCard from "./ProductCard";


// ProductList will be passed an Array of Products as Props
interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  
  return (
    <>
    <Typography style={{
      textAlign: "center"
    }} variant="h1" gutterBottom>
    Product List
  </Typography>
    <Grid container spacing={4}>
  
      {/* Listing All Product Cards */}
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product}/>
        </Grid>
      ))}
    </Grid>
  
  </>
  );
};
