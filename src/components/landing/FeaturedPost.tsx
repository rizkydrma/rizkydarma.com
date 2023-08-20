import { FC } from 'react';
import PostList from '../posts-list/post';
import Highlight from '../ui/Highlight';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { Post } from '@/lib/types';

interface FeaturedPostProps {
  posts: Post[];
}

const FeaturedPost: FC<FeaturedPostProps> = ({ posts }) => {
  return (
    <PostList posts={posts?.slice(0, 6)} className="min-h-[80vh] container max-w-7xl mx-auto relative lg:mt-4 mb-10">
      <PostList.Header>
        <div className="lg:px-6">
          <Highlight className="text-sm lg:text-lg font-mono uppercase my-3">Featured Post</Highlight>
        </div>
      </PostList.Header>
      <PostList.Footer>
        <div className="flex justify-center">
          <Link href="/blog" className={buttonVariants({ className: 'mt-4 lg:mt-8' })}>
            See more post
          </Link>
        </div>
      </PostList.Footer>
    </PostList>
  );
};

export default FeaturedPost;
