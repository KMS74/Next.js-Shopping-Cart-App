'use client';

import { Divider, Box, Typography, Button } from '@mui/material';
import { useCart } from '@/contexts/CartContext';

const TotalShoppingCartPrice = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <>
      {cartItems.length > 0 && (
        <>
          <Divider></Divider>
          <Box mt={2}>
            <Typography variant="h5">
              Total Cost: ${cartTotal.toFixed(2)}
            </Typography>
          </Box>
          <Box mt={2} mb={6}>
            <Button variant="outlined">Checkout</Button>
          </Box>
        </>
      )}
    </>
  );
};

export default TotalShoppingCartPrice;
