import { Typography, Container } from '@mui/material';
import ShoppingCartList from './ShoppingCartList';
import TotalShoppingCartPrice from './TotalShoppingCartPrice';

export const CartView = () => {
  return (
    <Container>
      <Typography
        style={{
          textAlign: 'center',
        }}
        variant="h3"
        gutterBottom
      >
        Shopping Cart
      </Typography>

      <ShoppingCartList />

      <TotalShoppingCartPrice />
    </Container>
  );
};
