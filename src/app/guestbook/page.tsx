'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { headingVariants } from '@/components/ui/LargeHeading';
import { paragraphVariants } from '@/components/ui/Paragraph';
import Comment from '@/components/content/Comment';

const slideUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.3, delay: 1 * i } }),
};

const Guestbook = () => {
  return (
    <div className="container max-w-7xl mx-auto pt-40 min-h-[90vh]">
      <motion.h1
        custom={1}
        animate="visible"
        initial="hidden"
        variants={slideUp}
        className={headingVariants({ size: 'sm' })}
      >
        Guestbook !
      </motion.h1>

      <motion.p
        custom={2}
        animate="visible"
        initial="hidden"
        variants={slideUp}
        className={paragraphVariants({ className: 'relative z-20 mt-4 w-full' })}
      >
        I invite you to leave a mark in this guest book, in the form of appreciation, questions or whatever :)
      </motion.p>

      <motion.div className="mt-4" custom={3} animate="visible" initial="hidden" variants={slideUp}>
        <Comment />
      </motion.div>
    </div>
  );
};

export default Guestbook;
