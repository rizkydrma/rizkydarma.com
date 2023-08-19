import { Post } from '@/lib/types';
import { cn } from '@/lib/utils';
import { getChildByType } from 'react-nanny';
import BlogCard from '../content/BlogCard';
import { PropsWithChildren } from 'react';

interface PostListProps {
  children: React.ReactNode;
  posts: Post[];
  className?: string;
}

const PostListHeader = ({ children = null }: PropsWithChildren) => {
  return <header>{children}</header>;
};

const PostListFooter = ({ children = null }: PropsWithChildren) => {
  return <footer>{children}</footer>;
};

const PostList = ({ children, posts, className }: PostListProps) => {
  const header = getChildByType(children, PostListHeader);
  const footer = getChildByType(children, PostListFooter);

  return (
    <section className={cn(className)}>
      {header}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
        {posts?.map((post, index) => (
          <li key={post?.slug + index}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>

      {footer}
    </section>
  );
};

PostList.Header = PostListHeader;
PostList.Footer = PostListFooter;

export default PostList;
