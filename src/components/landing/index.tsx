'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from './anim';
import { cn } from '@/lib/utils';

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={cn('relative flex h-[100vh] overflow-hidden bg-stone-900')}
    ></motion.main>
  );
};

export default Landing;
