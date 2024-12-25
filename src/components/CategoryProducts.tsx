import { ProductList } from './ProductList';
import { getCategoryProducts } from '@/services/products.service';
import { unslugify } from '@/lib/utils';

type Props = {
  categoryName: string;
};

const CategoryProducts = async ({ categoryName }: Props) => {
  const products = await getCategoryProducts(unslugify(categoryName));
  return <ProductList products={products} />;
};

export default CategoryProducts;
