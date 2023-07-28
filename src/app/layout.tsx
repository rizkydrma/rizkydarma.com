import Meta from '@/components/Meta';
import Providers from '@/components/Providers';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Cursor from '@/components/Cursor';
import MediaSocial from '@/components/MediaSocial';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rizky Darma',
  description:
    'An online portfolio and blog by Rizky Darma. Showcase of my projects, and some of my thoughts about website development.',
  robots: 'follow, index',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Meta />
      <body className={cn('bg-stone-50 dark:bg-stone-950 antialiased', inter.className)}>
        <Providers>
          <Cursor />
          <Navbar />
          {children}
          <MediaSocial />
        </Providers>
      </body>
    </html>
  );
}
