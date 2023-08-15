import { PostListRSC } from '@/components/posts-list/rsc';
import { Suspense } from 'react';

export const generateMetadata = () => {
  return {
    title: 'Blog | Rizky Darma',
    description:
      'My blog is a haven for tech enthusiasts, curious minds, and aspiring developers who crave insights into the ever-evolving realm of frontend development. From the latest web development frameworks and design trends to practical coding tips and interactive UI/UX experiences, we`re here to unravel the mysteries of crafting captivating digital interfaces.',
    alternates: {
      canonical: `https://rizkydarma.com/blog`,
    },
  };
};

const Blog = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostListRSC paginate />
    </Suspense>
  );
};

export default Blog;
