'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';
import { slideUp } from './anim';
import { useHover } from 'usehooks-ts';
import LargeHeading from '../ui/LargeHeading';
import Paragraph from '../ui/Paragraph';
import { Button } from '../ui/Button';

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    if (isHover) {
      cursor?.classList.add('cursor-big');
    }

    return () => {
      cursor?.classList.remove('cursor-big');
    };
  }, [isHover]);

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={cn('relative flex h-[100vh] overflow-hidden container items-center max-w-7xl')}
    >
      <div className="flex flex-col">
        <div ref={hoverRef} className="px-6 py-4 max-w-2xl -translate-x-6">
          <LargeHeading size="sm">Hi, I`m</LargeHeading>
          <LargeHeading>Rizky Darma Razak</LargeHeading>
          <Paragraph>
            a passionate{' '}
            <span className="bg-yellow-300/60 dark:bg-indigo-700 -rotate-3 relative inline-block px-1">
              Frontend Developer.
            </span>{' '}
            I craft captivating user interfaces and bring ideas to life through code. Let`s create something
            extraordinary together! 🚀
          </Paragraph>
        </div>

        <Button className="w-fit">Learn about me</Button>
      </div>
    </motion.main>
  );
};

export default Landing;
