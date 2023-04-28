import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { CartItem } from "../types";
import { useCart } from "../CartContext";
import { DeleteOutlineOutlined, Add, Remove } from "@mui/icons-material";

interface Props {
  item: CartItem;
}

export const CartItemView = ({ item }: Props) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.product.id);
  };

  return (
    <Grid ml={0} alignItems="center" container spacing={10}>
      {/* Product Image and Title */}
      <Grid
        display="flex"
        direction="column"
        alignItems="center"
        gap={1}
        alignSelf="center"
        item
        xs={12}
        sm={4}
      >
        <Box>
          <Image
            src={item.product.image}
            alt={item.product.title}
            width={150}
            height={150}
          />
        </Box>
        <Box>
          <Typography variant="subtitle1">{item.product.title}</Typography>
        </Box>
      </Grid>
      {/* Prooduct Quantity */}
      <Grid alignItems="center" item xs={12} sm={4}>
        <Stack direction="row" spacing={4} alignItems="center">
          <Typography variant="h5">
            ${(item.product.price * item.quantity).toFixed(2)}
          </Typography>
          <Box>
            {/* Icreasing/Deacreasing Product Quantity Button  */}
            <Stack alignItems="center" direction="row" spacing={1}>
              <IconButton
                aria-label="decrease"
                onClick={() => {
                  handleQuantityChange(item.quantity - 1);
                }}
              >
                <Remove fontSize="medium" htmlColor="#000" />
              </IconButton>
              <Typography color="grey" variant="h6">
                &nbsp;{item.quantity}&nbsp;
              </Typography>
              <IconButton
                aria-label="increase"
                onClick={() => {
                  handleQuantityChange(item.quantity + 1);
                }}
              >
                <Add fontSize="medium" htmlColor="#000" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Grid>
      {/* Removing Product From Cart */}
      <Grid item xs={12} sm={4}>
        <IconButton
          aria-label="remove"
          color="error"
          size="large"
          onClick={handleRemoveClick}
        >
          <DeleteOutlineOutlined />
        </IconButton>
      </Grid>
    </Grid>
  );
};
