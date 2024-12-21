import type { AppProps } from 'next/app';
import { CartProvider } from '@/contexts/CartContext';
import ResponsiveAppBar from '@/components/Navbar';
import { Container } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ResponsiveAppBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
