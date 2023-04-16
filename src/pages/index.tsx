import Head from "next/head";
import { ProductList } from "../components/ProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../products-service";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function Home() {
  const [products, setProducts] = useState([]);
  // Fetch Products data When this componet mounted to the DOM
  useEffect(() => {
    getProducts().then((products: any) => {
      setProducts(products);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Product List</title>
        <meta name="description" content="Discover the best deals and shop for your favorite products at our online store. With a wide range of categories and brands, our eCommerce app makes shopping easy and convenient. Get free shipping on orders over $50 and enjoy hassle-free returns. Download our app now and start shopping!" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box>

        <ProductList products={products} />
      </Box>
    </>
  );
}
