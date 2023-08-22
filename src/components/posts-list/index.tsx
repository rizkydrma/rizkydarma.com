'use client';
import { Post, Views } from '@/lib/types';
import { motion } from 'framer-motion';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import BlogCard from '../content/BlogCard';
import { StyledInput } from '../form/styledInput';
import { Button } from '../ui/Button';
import Highlight from '../ui/Highlight';
import { headingVariants } from '../ui/LargeHeading';
import { paragraphVariants } from '../ui/Paragraph';
import { slideUp } from '@/common/slideup';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

interface PostListProps {
  posts: Post[];
  paginate?: boolean;
}

const PostList: FC<PostListProps> = ({ posts, paginate }) => {
  const { data, error } = useSWR<Views[]>('/api/views/all', fetcher);
  const [showMore, setShowMore] = useState(6);
  const [clicked, setClicked] = useState(false);
  const [search, setSearch] = useState('');

  const populatedPost = posts?.map((post) => {
    if (!data) return post;
    const find = data?.find((item) => item?.slug == post?.slug);

    if (find) {
      return {
        ...post,
        count: find?.count,
      };
    }

    return {
      ...post,
      count: 0,
    };
  });

  const [filteredPosts, setFilteredPosts] = useState<Post[]>(populatedPost);

  const onHandleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  useEffect(() => {
    const results = populatedPost?.filter(
      (post) =>
        post?.title.toLowerCase().includes(search?.toLowerCase()) ||
        post?.description?.toLowerCase().includes(search?.toLowerCase()),
    );

    setFilteredPosts(results);
  }, [posts, search]);

  return (
    <>
      <div className="bg-[url('/images/blog/blog-banner.jpeg')] relative h-[400px] bg-bottom bg-cover z-0 pt-24 before:absolute before:inset-0 before:backdrop-blur-sm before:bg-gradient-to-b before:from-transparent before:dark:to-stone-950 before:to-stone-50 before:dark:grayscale">
        <div className="container max-w-7xl pt-24 z-20 relative">
          <motion.div animate="visible" initial="hidden" variants={slideUp} custom={1} className={headingVariants()}>
            <Highlight>Blog</Highlight>
          </motion.div>
          <motion.p
            animate="visible"
            initial="hidden"
            variants={slideUp}
            custom={1.5}
            className={paragraphVariants({ size: 'sm', className: 'w-full lg:w-[75%]' })}
          >
            From the latest web development frameworks and design trends to practical coding tips and interactive UI/UX
            experiences, we`re here to unravel the mysteries of crafting captivating digital interfaces.
          </motion.p>
          <motion.div animate="visible" initial="hidden" variants={slideUp} custom={2}>
            <StyledInput className="max-w-2xl" placeholder="Search ..." onChange={onHandleSearch} />
          </motion.div>
        </div>
      </div>

      <section className="min-h-[50vh] container max-w-7xl mx-auto mt-20 lg:mt-4 pb-24">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
          {filteredPosts.slice(0, paginate && !search ? showMore : undefined).map((post, index) => (
            <motion.li
              animate="visible"
              initial="hidden"
              variants={slideUp}
              custom={clicked || search ? index * 0.1 : 2.5 + index * 0.2}
              key={post?.slug + index}
            >
              <BlogCard post={post} url={`/blog/${post?.slug}`} urlImage={post?.banner as string} />
            </motion.li>
          ))}
        </ul>

        {paginate && !search && showMore < posts.length && (
          <motion.div
            animate="visible"
            initial="hidden"
            variants={slideUp}
            custom={2 + posts.length * 0.2}
            className="flex items-center justify-center mt-6"
          >
            <Button
              onClick={() => {
                setClicked(true);
                setShowMore(showMore + 6);
              }}
            >
              Show More
            </Button>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default PostList;
