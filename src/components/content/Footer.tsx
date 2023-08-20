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
import ShareButton from '../links/ShareButton';
import { slideUp } from '@/common/slideup';

interface FooterProps {
  post: Post;
  recommendations: Post[];
  showRecommendation?: boolean;
  url: string;
}

const Footer: FC<FooterProps> = ({ post, recommendations, url, showRecommendation = true }) => {
  return (
    <motion.footer
      custom={4}
      animate="visible"
      initial="hidden"
      variants={slideUp}
      className="container max-w-7xl my-4 lg:my-12"
    >
      <ShareButton post={post} url={url} />
      <Comment />

      {showRecommendation && (
        <PostList posts={recommendations}>
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
      )}
    </motion.footer>
  );
};

export default Footer;
