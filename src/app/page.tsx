import { Suspense } from 'react';
import { Metadata } from 'next';
import { Box, Typography } from '@mui/material';
import ProductsCategories from '@/components/ProductsCategories';
import LoadingSpinner from '@/components/LoadingSpinner';
import AllProducts from '@/components/AllProducts';

export const metadata: Metadata = {
  title: 'Products List',
};

export default async function HomePage() {
  return (
    <Box component="section">
      <Typography variant="h2" gutterBottom>
        Product List
      </Typography>

      <Suspense fallback={<LoadingSpinner />}>
        <ProductsCategories />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <AllProducts />
      </Suspense>
    </Box>
  );
}
