import { Metadata } from 'next';
import { getCategories, getProducts } from '@/services/products.service';
import HomeView from '@/components/HomeView';

export const metadata: Metadata = {
  title: 'Products List',
};

export default async function HomePage() {
  const products = await getProducts();
  const categories = await getCategories();

  return <HomeView products={products} categories={categories} />;
}
