import Cursor from '@/components/Cursor';
import MediaSocial from '@/components/MediaSocial';
import Meta from '@/components/Meta';
import Providers from '@/components/Providers';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
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
  return (
    <html lang="en">
      <Meta />
      <body
        className={cn(
          'bg-gradient-to-br from-stone-50 via-stone-200 to-stone-300 dark:from-stone-800 dark:via-stone-900 dark:to-stone-950 antialiased overflow-hidden',
          inter.className,
        )}
      >
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
