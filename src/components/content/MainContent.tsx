'use client';
import Aside from '@/components/content/Aside';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import { slideUp } from './anim';

const MainContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.section
      custom={2.8}
      animate="visible"
      initial="hidden"
      variants={slideUp}
      className="container max-w-7xl flex gap-4 pt-8 pb-24 justify-between"
    >
      <article className="mdx w-full lg:w-9/12 max-w-full prose prose-sm lg:prose-base prose-slate dark:!prose-invert">
        {children}
      </article>

      <aside className="sticky w-3/12 top-24 h-fit hidden lg:block">
        <Aside />
      </aside>
    </motion.section>
  );
};

export default MainContent;
