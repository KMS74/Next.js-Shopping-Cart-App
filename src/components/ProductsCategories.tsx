import NextLink from 'next/link';
import { Stack, Link as MuiLink } from '@mui/material';
import { getCategories } from '@/services/products.service';
import { capitalizeFirstLetter, slugify } from '@/lib/utils';

const ProductsCategories = async () => {
  const categories = await getCategories();

  return (
    <Stack
      direction={{ lg: 'row', sm: 'column' }}
      width="100%"
      spacing={5}
      alignItems="start"
      mb={4}
    >
      {categories.map((category) => (
        <MuiLink
          component={NextLink}
          key={category}
          href={`/categories/${slugify(category)}/products`}
          sx={{
            fontFamily: 'var(--font-roboto)',
          }}
        >
          {capitalizeFirstLetter(category)}
        </MuiLink>
      ))}
    </Stack>
  );
};

export default ProductsCategories;
