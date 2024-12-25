import { Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import { decodeCategoryName, unslugify } from '@/lib/utils';
import { getCategories } from '@/services/products.service';
import LoadingSpinner from '@/components/LoadingSpinner';
import CategoryProducts from '@/components/CategoryProducts';

type Props = {
  params: Promise<{ categoryName: string }>;
};

// Return a list of `params` to populate the [categoryName] dynamic segment
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((categoryName) => ({
    categoryName,
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({ params }: Props) {
  const { categoryName } = await params;

  const displacedCategoryName = decodeCategoryName(unslugify(categoryName));

  return {
    title: `${displacedCategoryName} Products`,
  };
}

export default async function CategoryProductsPage({ params }: Props) {
  const { categoryName } = await params;

  const displacedCategoryName = decodeCategoryName(unslugify(categoryName));

  return (
    <Box>
      <Typography variant="h4" paragraph>
        {displacedCategoryName} Products
      </Typography>
      <Suspense fallback={<LoadingSpinner />}>
        <CategoryProducts categoryName={categoryName} />
      </Suspense>
    </Box>
  );
}
