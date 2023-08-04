'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC, ReactNode, SetStateAction, useRef } from 'react';
import { slideUp } from './anim';

interface LandingProps {
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
  isHovered: boolean;
  content: ReactNode;
}

const Landing: FC<LandingProps> = ({ setIsHovered, isHovered, content }) => {
  return (
    <main className={cn('relative flex h-[80vh] lg:h-[100vh] container max-w-7xl')}>
      <div
        className="flex flex-col lg:px-6 pt-[30vh]"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {content}
      </div>
    </main>
  );
};

export default Landing;
