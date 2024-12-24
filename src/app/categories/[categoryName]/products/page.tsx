import { Box, Typography } from '@mui/material';
import { ProductList } from '@/components/ProductList';
import { decodeCategoryName, unslugify } from '@/lib/utils';
import {
  getCategories,
  getCategoryProducts,
} from '@/services/products.service';

type Props = {
  params: Promise<{ categoryName: string }>;
};

// Return a list of `params` to populate the [id] dynamic segment
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

  const products = await getCategoryProducts(unslugify(categoryName));

  const displacedCategoryName = decodeCategoryName(unslugify(categoryName));

  return (
    <Box>
      <Typography variant="h4" paragraph>
        {displacedCategoryName} Products
      </Typography>
      <ProductList products={products} />
    </Box>
  );
}
