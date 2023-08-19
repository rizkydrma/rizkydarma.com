import Home from '@/components/Homepage';
import PostList from '@/components/posts-list/post';
import { buttonVariants } from '@/components/ui/Button';
import Highlight from '@/components/ui/Highlight';
import getPosts from '@/lib/get-posts';
import { Post } from '@/lib/types';
import Link from 'next/link';

const page = async () => {
  const posts = (await getPosts()) as Post[];

  const FeaturedPost = () => {
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

  return <Home FeaturedPost={<FeaturedPost />} />;
};

export default page;
