'use client';
import Globe from '@/components/Globe';
import About from '@/components/about';
import Landing from '@/components/landing';
import Preloader from '@/components/preloader';
import useMousePosition from '@/hook/useMousePosition';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const {
    mousePosition: { x, y },
    scrollPosition,
  } = useMousePosition();
  const size = isHovered ? 400 : 40;

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
    <>
      <motion.main
        className="mask dark:bg-stone-50 bg-stone-950 text-stone-50 dark:text-stone-950"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y + scrollPosition - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <Landing />
        <About
          setIsHovered={setIsHovered}
          masking
          text="My code dances to the beat of its own drum, swaying gracefully between reality and imagination.I conjure
          interactive spells that captivate users and lead them on magical journeys."
        />
      </motion.main>
      <main className="overflow-hidden">
        <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
        <Landing />
        <Globe />
        <About
          setIsHovered={setIsHovered}
          text="In the world of frontend development, I`m not just a developer; I`m a mad scientist of pixels, a dreamweaver
          of interfaces, and a conductor of digital symphonies."
        />
      </main>
    </>
  );
}
