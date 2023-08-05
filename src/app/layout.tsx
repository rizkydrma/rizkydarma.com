import MediaSocial from '@/components/MediaSocial';
import Meta from '@/components/Meta';
import ProgressBarScroll from '@/components/ProgressBarScroll';
import Providers from '@/components/Providers';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

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
          'bg-gradient-to-br from-white via-stone-50 to-stone-100 dark:from-stone-950 dark:via-stone-950 dark:to-stone-950 antialiased min-h-[100vh]',
          inter.className,
        )}
      >
        <Providers>
          {/* <Cursor /> */}
          <ProgressBarScroll />
          <Navbar />
          {children}
          <MediaSocial />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
