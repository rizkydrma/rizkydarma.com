import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Meta from '@/components/Meta';
import Providers from '@/components/Providers';
import { cn } from '@/lib/utils';

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
      <body className={cn('bg-stone-50 dark:bg-stone-900 antialiased', inter.className)}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
