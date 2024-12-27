'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions,
  Tooltip,
} from '@mui/material';

import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { ShoppingBagOutlined } from '@mui/icons-material';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const onAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 400,
        border: '2px solid',
        borderColor: 'grey.200',
        borderRadius: 2,
      }}
    >
      <CardActionArea
        onClick={() => router.push(`/products/${product?.id}/product-details`)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          height: '100%',
          py: 2,
        }}
      >
        <Image
          src={product?.image}
          alt={product?.title}
          height={300}
          width={300}
          sizes="(max-width: 600px) 100vw, 600px"
          priority
          style={{
            objectFit: 'contain',
            alignSelf: 'center',
          }}
        />

        <CardContent>
          <Tooltip title={product?.title}>
            <Typography gutterBottom variant="h6">
              {product?.title.slice(0, 28) +
                (product?.title.length > 28 ? '...' : '')}
            </Typography>
          </Tooltip>
          <Typography variant="body2" color="text.secondary">
            {product?.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product?.price?.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          paddingY: 2,
        }}
      >
        <Button
          startIcon={<ShoppingBagOutlined />}
          color="primary"
          variant="contained"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
