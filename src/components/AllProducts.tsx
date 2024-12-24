import { getProducts } from '@/services/products.service';
import { ProductList } from './ProductList';

const AllProducts = async () => {
  const products = await getProducts();

  return <ProductList products={products} />;
};

export default AllProducts;
