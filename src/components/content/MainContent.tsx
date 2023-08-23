'use client';
import { slideUp } from '@/common/slideup';
import Aside from '@/components/content/Aside';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { paragraphVariants } from '../ui/Paragraph';

interface MainContentProps {
  demo?: string;
}

const MainContent: FC<PropsWithChildren<MainContentProps>> = ({ children, demo }) => {
  return (
    <motion.section
      custom={2.8}
      animate="visible"
      initial="hidden"
      variants={slideUp}
      className="container max-w-7xl flex gap-4 pt-8 pb-12 lg:pb-24 justify-between"
    >
      <article className="mdx w-full lg:w-9/12 max-w-full prose prose-sm lg:prose-base prose-slate dark:!prose-invert">
        {children}
      </article>

      <aside className="sticky w-3/12 top-24 h-fit hidden lg:block">
        {demo && (
          <div className="mb-4">
            <h3 className="text-gray-900 dark:text-gray-100 md:text-xl">Demo</h3>
            <Link
              href={demo}
              target="_blank"
              className="text-stone-950 font-medium dark:text-stone-50 text-xs inline-flex items-center hover:underline transition"
            >
              {demo}
            </Link>
          </div>
        )}
        <Aside />
      </aside>
    </motion.section>
  );
};

export default MainContent;
