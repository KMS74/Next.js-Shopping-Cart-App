'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { CartProvider } from '@/contexts/CartContext';
import ResponsiveAppBar from '@/components/Navbar';
import { Container, CssBaseline } from '@mui/material';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouterCacheProvider>
        <CartProvider>
          <ResponsiveAppBar />
          <Container
            sx={{
              marginTop: 10,
            }}
          >
            <CssBaseline />
            {children}
          </Container>
        </CartProvider>
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
