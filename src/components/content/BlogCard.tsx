import { Post } from '@/lib/types';
import { FC } from 'react';
import CloudinaryImg from '../images/CloudinaryImage';
import UnstyledLink from '../links/UnstyledLink';

interface BlogCardProps {
  post: Post | null;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <UnstyledLink href={`/blog/${post?.slug}`} className="group">
      <div className="bg-white dark:bg-stone-900 rounded-lg h-full shadow-md dark:shadow-stone-900  overflow-hidden">
        <div className="relative">
          <CloudinaryImg
            noStyle
            className="pointer-events-none overflow-hidden rounded-t-lg group-hover:scale-105 transition duration-200"
            publicId={`/banner/${post?.banner}`}
            alt="Photo taken from unsplash"
            width={1200}
            height={(1200 * 2) / 5}
            aspect={{ height: 2, width: 5 }}
            preview={false}
          />

          <div className="group-hover:before:inset-0 group-hover:before:bg-stone-900/40 group-hover:before:absolute group-hover:before:z-[999] group-hover:before:flex group-hover:before:items-center group-hover:before:justify-center group-hover:before:content-['See'] text-white font-bold group-hover:before:scale-105 transition duration-200"></div>

          <div className="flex absolute top-3 left-4 gap-2">
            {post?.tags?.split(',').map((tag) => (
              <div
                className="rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60  bg-gray-400 text-white text-xs py-0.5 px-2"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h1 className="text-md font-medium mt-2">{post?.title}</h1>
          <p className="text-xs text-stone-500 mt-4">{post?.date}</p>
          <p className="text-sm text-stone-700 dark:text-stone-300 mt-2">{post?.description}</p>
        </div>
      </div>
    </UnstyledLink>
  );
};

export default BlogCard;
