'use client';
import Landing from '@/components/landing';
import Preloader from '@/components/preloader';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="bg-white dark:bg-stone-900">
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <Landing />
    </main>
  );
}
