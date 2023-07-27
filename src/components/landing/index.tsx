'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from './anim';
import { cn } from '@/lib/utils';
import MediaSocial from '../MediaSocial';

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={cn('relative flex h-[100vh] overflow-hidden')}
    >
      <MediaSocial />
    </motion.main>
  );
};

export default Landing;
