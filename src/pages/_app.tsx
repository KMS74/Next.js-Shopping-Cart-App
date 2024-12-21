import type { AppProps } from 'next/app';
import Container from '@mui/material/Container';
import { CartProvider } from '@/CartContext';
import ResponsiveAppBar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ResponsiveAppBar />
      <Container
        style={{
          marginTop: '100px',
        }}
      >
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
