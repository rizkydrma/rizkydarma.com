import Home from '@/components/Homepage';
import getPosts from '@/lib/get-posts';
import { getProjects } from '@/lib/get-projects';
import { Post } from '@/lib/types';

const page = async () => {
  const posts = (await getPosts()) as Post[];
  const projects = (await getProjects()) as Post[];

  return <Home posts={posts} projects={projects} />;
};

export default page;
