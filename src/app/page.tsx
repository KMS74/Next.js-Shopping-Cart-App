import { Metadata } from 'next';
import { Box, Typography } from '@mui/material';
import { getCategories, getProducts } from '@/services/products.service';
import { ProductList } from '@/components/ProductList';
import ProductsCategories from '@/components/ProductsCategories';

export const metadata: Metadata = {
  title: 'Products List',
};

export default async function HomePage() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <Box component="section">
      <Typography variant="h2" gutterBottom>
        Product List
      </Typography>

      <ProductsCategories categories={categories} />
      <ProductList products={products} />
    </Box>
  );
}
