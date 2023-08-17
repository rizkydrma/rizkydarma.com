import Home from '@/components/Homepage';
import Experiences from '@/components/experiences';
import FeaturedPost from '@/components/landing/FeaturedPost';
import Projects from '@/components/projects';
import getPosts from '@/lib/get-posts';
import { Post } from '@/lib/types';

const page = async () => {
  const posts = (await getPosts()) as Post[];

  return <Home FeaturedPost={<FeaturedPost posts={posts} />} />;
};

export default page;
