'use client';

import { Box, Typography } from '@mui/material';
import { ProductList } from '@/components/ProductList';
import ProductsCategories from '@/components/ProductsCategories';
import { Product } from '@/types';

type Props = {
  products: Product[];
  categories: string[];
};

const HomeView = ({ products, categories }: Props) => {
  return (
    <Box component="section">
      <Typography textAlign="center" variant="h2" gutterBottom>
        Product List
      </Typography>

      <ProductsCategories categories={categories} />
      <ProductList products={products} />
    </Box>
  );
};

export default HomeView;
