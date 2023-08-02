'use client';
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressBarScroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[6px] z-[999999] bg-yellow-400 dark:bg-indigo-600"
      style={{ scaleX }}
    />
  );
};

export default ProgressBarScroll;
