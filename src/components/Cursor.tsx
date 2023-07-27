'use client';
import useMouseCursor from '@/hook/useMouseCursor';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface CursorProps {}

const Cursor: FC<CursorProps> = ({}) => {
  const { cursorXSpring, cursorYSpring } = useMouseCursor();

  return (
    <motion.div
      className="fixed left-0 top-0 w-8 h-8 rounded-full bg-stone-950 dark:bg-white z-[999] pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
