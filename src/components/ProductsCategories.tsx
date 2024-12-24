import { Stack, Link as MuiLink } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import { capitalizeFirstLetter, slugify } from '@/lib/utils';

type Props = {
  categories: string[];
};

const ProductsCategories = ({ categories }: Props) => {
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
