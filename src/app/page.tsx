import { Metadata } from 'next';
import { getCategories, getProducts } from '@/products-service';
import HomeView from '@/components/HomeView';

export const metadata: Metadata = {
  title: 'Products List',
};

export default async function HomePage() {
  const products = await getProducts();
  const categories = await getCategories();

  console.log('products', products);
  console.log('categories', categories);

  return <HomeView products={products} categories={categories} />;
}
