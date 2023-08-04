import { Button, Stack } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

type Props = {
  categories: string[];
};

const ProductsCategories = ({ categories }: Props) => {
  const router = useRouter();
  return (
    <Stack
      direction={{ lg: "row", sm: "column" }}
      width="100%"
      spacing={5}
      alignItems="start"
      mb={4}
    >
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => {
            router.push(`/categories/${category}/products`);
          }}
        >
          {category}
        </Button>
      ))}
    </Stack>
  );
};

export default ProductsCategories;
