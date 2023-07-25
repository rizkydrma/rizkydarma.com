import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rizky Darma',
  description:
    'An online portfolio and blog by Rizky Darma. Showcase of my projects, and some of my thoughts about website development.',
  robots: 'follow, index',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  type Favicons = {
    rel: string;
    href: string;
    sizes?: string;
    type?: string;
  };

  const favicons: Array<Favicons> = [
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: '/favicon/apple-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: '/favicon/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '/favicon/apple-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: '/favicon/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/favicon/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/favicon/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/favicon/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/favicon/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-icon-180x180.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/favicon/android-icon-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/favicon/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/favicon/manifest.json',
    },
  ];
  return (
    <html lang="en">
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
