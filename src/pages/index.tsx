import Head from "next/head";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../products-service";
import { Product } from "@/types";
import { Box } from "@mui/material";

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  return (
    <>
      <Head>
        <title>Product List</title>
        <meta
          name="description"
          content="Discover the best deals and shop for your favorite products at our online store. With a wide range of categories and brands, our eCommerce app makes shopping easy and convenient. Get free shipping on orders over $50 and enjoy hassle-free returns. Download our app now and start shopping!"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box>
        <ProductList products={products} />
      </Box>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

export async function getStaticProps() {
  // Call an external API endpoint to get products.
  // You can use any data fetching library and can also query the database directly.
  const products: Product[] = await getProducts();
  // By returning { props: { products } }, the Home component
  // will receive `products` as a prop at build time in Production
  return {
    props: {
      products,
    },
  };
}
