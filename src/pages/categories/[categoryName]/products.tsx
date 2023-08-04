import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "@/types";
import { getCategoyProducts } from "@/products-service";
import { ProductList } from "@/components/ProductList";
import { Box, Typography } from "@mui/material";

const CategoryProducts = () => {
  const router = useRouter();
  const { categoryName } = router.query;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      if (categoryName) {
        const products: Product[] = await getCategoyProducts(
          categoryName as string
        );

        setProducts(products);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  if (!categoryName) {
    return <Typography>Loading...</Typography>;
  }

  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Box>
      <Typography variant="h4" paragraph>
        {capitalizeFirstLetter(categoryName as string)} Products
      </Typography>
      <ProductList products={products} />
    </Box>
  );
};

export default CategoryProducts;
