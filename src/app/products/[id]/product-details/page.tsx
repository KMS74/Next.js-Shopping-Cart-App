import ProductCard from '@/components/ProductCard';
import { API_URL, getProduct } from '@/services/products.service';
import { Product } from '@/types';
import { Stack, Typography } from '@mui/material';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/products`);
  const products: Product[] = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const product = await getProduct(id);

  return (
    <Stack>
      <Typography variant="h4" paragraph>
        Product Details
      </Typography>
      <ProductCard product={product} />
    </Stack>
  );
}
