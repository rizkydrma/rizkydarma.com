import getPosts from '@/lib/get-posts';
import { Post } from '@/lib/types';
import PostsList from '.';

export async function PostListRSC({ paginate }: { paginate?: boolean }) {
  const posts = (await getPosts()) as Post[];
  const sortedPost = posts?.sort(
    (postA, postB) => new Date(postB.publishedAt).getTime() - new Date(postA.publishedAt).getTime(),
  );

  return <PostsList posts={sortedPost} paginate={paginate} />;
}
