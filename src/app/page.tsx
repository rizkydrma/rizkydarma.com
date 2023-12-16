import Home from '@/components/Homepage';
import getPosts from '@/lib/get-posts';
import { getProjects } from '@/lib/get-projects';
import { Post } from '@/lib/types';

const page = async () => {
  const posts = (await getPosts()) as Post[];
  const projects = (await getProjects()) as Post[];

  const sortedPost = posts?.sort(
    (postA, postB) => new Date(postB.publishedAt).getTime() - new Date(postA.publishedAt).getTime(),
  );

  return <Home posts={sortedPost} projects={projects} />;
};

export default page;
