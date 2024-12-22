import { Product } from '@/types';

export const API_URL = 'https://fakestoreapi.com';

// Getting all products from fake store API
export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`, {
    next: {
      revalidate: 3600, // Re-fetch products every hour
    },
  });
  const data: Product[] = await res.json();
  return data;
};

// Getting all categories from fake store API
export const getCategories = async () => {
  const res = await fetch(`${API_URL}/products/categories`, {
    cache: 'force-cache', // Force cache the categories data
  });
  const data: string[] = await res.json();
  return data;
};

// Getting all products in a specific category from fake store API
export const getCategoryProducts = async (categoryName: string) => {
  const res = await fetch(`${API_URL}/products/category/${categoryName}`, {
    next: {
      revalidate: 3600, // Re-fetch products every hour
    },
  });
  const data: Product[] = await res.json();
  return data;
};

// Getting specific product by id
export const getProduct = async (id: string) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    next: {
      revalidate: 3600, // Re-fetch product every hour
    },
  });
  const data: Product = await res.json();
  return data;
};
