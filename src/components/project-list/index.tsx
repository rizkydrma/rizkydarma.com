'use client';
import { Post, Views } from '@/lib/types';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/common/slideup';
import { headingVariants } from '../ui/LargeHeading';
import BlogCard from '../content/BlogCard';
import { Button } from '../ui/Button';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';
import { populatePost } from '@/lib/utils';

interface ProjectListProps {
  projects: Post[];
  paginate?: boolean;
}

const ProjectList: FC<ProjectListProps> = ({ projects, paginate }) => {
  const { data, error } = useSWR<Views[]>('/api/views/all', fetcher);
  const populateProjects = populatePost(projects, data);

  const [showMore, setShowMore] = useState(6);
  return (
    <section className="container max-w-7xl mx-auto pt-40 min-h-[90vh]">
      <motion.h1
        custom={1}
        animate="visible"
        initial="hidden"
        variants={slideUp}
        className={headingVariants({ size: 'sm' })}
      >
        Projects
      </motion.h1>

      <div className="mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
          {populateProjects.slice(0, paginate ? showMore : undefined).map((post, index) => (
            <motion.li
              animate="visible"
              initial="hidden"
              variants={slideUp}
              custom={1.5 + index * 0.2}
              key={post?.slug + index}
            >
              <BlogCard post={post} url={`/project/${post?.slug}`} urlImage={post?.banner as string} />
            </motion.li>
          ))}
        </ul>

        {paginate && showMore < populateProjects.length && (
          <motion.div
            animate="visible"
            initial="hidden"
            variants={slideUp}
            custom={2 + populateProjects.length * 0.2}
            className="flex items-center justify-center mt-6"
          >
            <Button onClick={() => setShowMore(showMore + 6)}>Show More</Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
