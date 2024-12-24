import { ProductList } from './ProductList';
import { getCategoryProducts } from '@/services/products.service';
import { unslugify } from '@/lib/utils';

async function CategoryProducts({ categoryName }: { categoryName: string }) {
  const products = await getCategoryProducts(unslugify(categoryName));

  return <ProductList products={products} />;
}

export default CategoryProducts;
