'use client';
import { useCart } from '@/contexts/CartContext';
import { Box, Typography } from '@mui/material';
import { CartItemView } from './CartItem';

const ShoppingCartList = () => {
  const { cartItems } = useCart();

  return (
    <>
      {cartItems.length === 0 ? (
        <Typography
          style={{
            textAlign: 'center',
          }}
          variant="subtitle1"
          gutterBottom
        >
          Your cart is empty
        </Typography>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <Box key={item.product.id} mb={6}>
              <CartItemView item={item} />
            </Box>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShoppingCartList;
