'use client';
import { Post } from '@/lib/types';
import { FC } from 'react';
import PostList from '@/components/posts-list/post';
import Comment from '@/components/content/Comment';
import { headingVariants } from '@/components/ui/LargeHeading';
import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import Icons from '@/components/Icons';
import { motion } from 'framer-motion';
import { slideUp } from './anim';
import ShareButton from '../links/ShareButton';

interface FooterProps {
  post: Post;
  recommendations: Post[];
}

const Footer: FC<FooterProps> = ({ post, recommendations }) => {
  return (
    <motion.footer
      custom={4}
      animate="visible"
      initial="hidden"
      variants={slideUp}
      className="container max-w-7xl mt-4 lg:mt-12"
    >
      <ShareButton post={post} url={`https://rizkydarma.com/blog/${post?.slug}`} />
      <Comment />
      <PostList posts={recommendations} className="lg:my-12 my-4">
        {recommendations?.length && (
          <PostList.Header>
            <h1 className={headingVariants({ size: 'sm' })}>Other Post You Might Like</h1>
          </PostList.Header>
        )}

        <PostList.Footer>
          <Link href="/blog" className={buttonVariants({ className: 'mt-4 lg:mt-8' })}>
            <Icons.MoveLeftIcon size={18} className="inline-flex mr-2" />
            Back to blog
          </Link>
        </PostList.Footer>
      </PostList>
    </motion.footer>
  );
};

export default Footer;
