'use client';
import clsx from 'clsx';
import { useInView } from 'framer-motion';
import { FC, ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';

interface HighlightProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Highlight: FC<HighlightProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={clsx('relative w-full inline z-20', className)}>
      {children}
      <motion.span
        className="absolute w-[calc(100%+4px)] h-[60%] -left-1 -z-10 bg-gradient-to-r from-yellow-400 to-yellow-200/50 dark:from-indigo-600 dark:to-indigo-400/50 bottom-0"
        animate={{
          scaleX: isInView ? 1 : 0,
          rotate: -1,
          transformOrigin: '0% 100%',
        }}
        transition={{
          delay: delay + 0.7,
          ease: 'easeInOut',
          duration: 0.5,
        }}
      ></motion.span>
    </span>
  );
};

export default Highlight;
