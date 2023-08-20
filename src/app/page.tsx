import Home from '@/components/Homepage';
import getPosts from '@/lib/get-posts';
import { Post } from '@/lib/types';

const page = async () => {
  const posts = (await getPosts()) as Post[];

  return <Home posts={posts} />;
};

export default page;
