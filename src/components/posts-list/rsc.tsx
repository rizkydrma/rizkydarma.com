import getPosts from '@/lib/get-posts';
import { Post } from '@/lib/types';
import PostsList from '.';

export async function PostListRSC({ paginate }: { paginate?: boolean }) {
  const posts = (await getPosts()) as Post[];
  return <PostsList posts={posts} paginate={paginate} />;
}
