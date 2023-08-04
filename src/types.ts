import { type } from "os";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
