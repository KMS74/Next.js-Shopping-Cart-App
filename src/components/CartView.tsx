import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { useCart } from "../CartContext";
import { CartItemView } from "./CartItem";

export const CartView = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <Container>
      <Typography
        style={{
          textAlign: "center",
        }}
        variant="h3"
        mb={10}
      >
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography
          style={{
            textAlign: "center",
          }}
          variant="subtitle1"
          gutterBottom
        >
          Your cart is empty
        </Typography>
      ) : (
        <>
          {/* Listing all items in the cart */}
          {cartItems.map((item: any) => (
            <Box key={item.product.id} mb={6}>
              <CartItemView item={item} />
            </Box>
          ))}

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
    </Container>
  );
};
