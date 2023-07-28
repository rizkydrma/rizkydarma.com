'use client';
import useMouseCursor from '@/hook/useMouseCursor';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface CursorProps {}

const Cursor: FC<CursorProps> = ({}) => {
  const { cursorXSpring, cursorYSpring } = useMouseCursor();

  return (
    <motion.div
      className="cursor"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
