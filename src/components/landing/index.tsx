'use client';
import { cn } from '@/lib/utils';
import { FC, useEffect, useRef } from 'react';
import { opacity, slideUp, slideUpText } from './anim';
import { useHover } from 'usehooks-ts';
import LargeHeading from '../ui/LargeHeading';
import Paragraph from '../ui/Paragraph';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion, useInView } from 'framer-motion';

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
  const { theme } = useTheme();
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const description = useRef(null);
  const isInView = useInView(description);
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
      <div className="flex flex-col" ref={description}>
        <div ref={hoverRef} className="px-6 py-4  lg:max-w-2xl -translate-x-6">
          <LargeHeading size="sm">Hi, I`m</LargeHeading>
          <LargeHeading>Rizky Darma Razak</LargeHeading>
          <Paragraph className="relative z-20">
            a passionate{' '}
            <span className="bg-yellow-300/60 dark:bg-indigo-700 -rotate-3 relative inline-block px-1 z-20">
              Frontend Developer.
            </span>
            I craft captivating user interfaces and bring ideas to life through code.{' '}
            <motion.span
              className="absolute inset-0 top-24 lg:top-20 w-36 left-56 z-10 opacity-0 hidden lg:block"
              variants={opacity}
              animate={isInView ? 'open' : 'closed'}
            >
              <Image
                src={theme === 'light' ? '/arrow-dark.png' : '/arrow-light.png'}
                width={90}
                height={40}
                alt="Arrow Dark"
                className="transform -scale-x-100 rotate-[30deg]"
              />

              <span className="whitespace-nowrap text-xs -right-[70%] -top-6 -rotate-3 inline-flex font-mono tracking-tight text-stone-950 dark:text-stone-50 relative">
                I Work with <br /> React Ecosystem right now.
              </span>
            </motion.span>{' '}
            Let`s create something extraordinary together! 🚀
          </Paragraph>

          {/* <div className="absolute bottom-0 left-52 rotate-[45deg] opacity-50">
            <p className="text-xs absolute -right-[50%] top-10 -rotate-45">Lorem ipsum dolor sit amet.</p>
            <Image src="/arrow-dark.png" alt="Arrow Dark" width={170} height={460} />
          </div> */}
        </div>

        <Button className="w-fit">Learn about me</Button>
      </div>
    </motion.main>
  );
};

export default Landing;
