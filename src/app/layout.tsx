import { Roboto } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import AppProviders from '@/components/AppProviders';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: {
    default: 'E-commerce Next.js App',
    template: '%s | E-commerce Next.js App',
  },
  description: 'E-commerce Next.js App with Material-UI and TypeScript',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

// -----------------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
