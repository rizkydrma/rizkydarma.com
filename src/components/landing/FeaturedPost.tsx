'use client';
import { Post } from '@/lib/types';
import { FC } from 'react';
import BlogCard from '../content/BlogCard';
import Highlight from '../ui/Highlight';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';

interface FeaturedPostProps {
  posts: Post[];
}

const FeaturedPost: FC<FeaturedPostProps> = ({ posts }) => {
  return (
    <section id="featured-post" className="container max-w-7xl mx-auto min-h-[80vh] relative lg:pt-4 mb-20">
      <div className="lg:px-6">
        <Highlight className="text-sm lg:text-lg font-mono uppercase my-3">Featured Post</Highlight>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
        {posts.slice(0, 6).map((post, index) => (
          <li key={post?.slug + index}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <Link href="/blog" className={buttonVariants({ className: 'mt-4 lg:mt-8 ' })}>
          See more post
        </Link>
      </div>
    </section>
  );
};

export default FeaturedPost;
