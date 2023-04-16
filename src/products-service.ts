import axios from "axios";

const API_URL = "https://fakestoreapi.com";

// Getting all products from fake store API
export const getProducts = async () => {
  const { data } = await axios.get(`${API_URL}/products`);
  return data;
};

// Getting specific product by id
export const getProduct = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/products/${id}`);
  return data;
};
