import { Post } from '@/lib/types';
import { FC } from 'react';
import CloudinaryImg from '../images/CloudinaryImage';
import UnstyledLink from '../links/UnstyledLink';
import { formatDate, truncateStringByWords } from '@/lib/utils';
import Badge from '../badge';
import Icons from '../Icons';

interface BlogCardProps {
  post: Post;
  url: string;
  urlImage: string;
}

const BlogCard: FC<BlogCardProps> = ({ post, url, urlImage }) => {
  return (
    <UnstyledLink href={url} className="group">
      <div className="bg-white dark:bg-stone-900 rounded-lg h-full shadow-md dark:shadow-stone-900  overflow-hidden">
        <div className="relative">
          <CloudinaryImg
            noStyle
            className="pointer-events-none overflow-hidden rounded-t-lg group-hover:scale-105 transition duration-200"
            publicId={urlImage}
            alt="Photo taken from unsplash"
            width={1200}
            height={(1200 * 2) / 5}
            aspect={{ height: 2, width: 5 }}
            preview={false}
          />

          <div className="group-hover:before:inset-0 group-hover:before:bg-stone-900/40 group-hover:before:absolute group-hover:before:z-[999] group-hover:before:flex group-hover:before:items-center group-hover:before:justify-center group-hover:before:content-[url('/eye.svg')]  font-bold group-hover:before:scale-105 transition duration-200"></div>

          <div className="flex absolute top-3 left-4 gap-2 flex-wrap">
            {post?.tags?.split(',').map((tag) => (
              <Badge value={tag} key={tag} />
            ))}
          </div>
        </div>

        <div className="p-4">
          <h1 className="text-md font-medium mt-2">{post?.title}</h1>

          <div className="flex items-center gap-4">
            <p className="text-xs text-stone-500 mt-4">{formatDate(post?.publishedAt)}</p>
            <p className="text-xs text-stone-500 mt-4">
              <Icons.EyeIcon size={16} className="inline-flex mr-1 items-center" />
              {post?.count} views
            </p>
          </div>
          <p className="text-sm text-stone-700 dark:text-stone-300 mt-2">
            {truncateStringByWords(post?.description, 23)}
          </p>
        </div>
      </div>
    </UnstyledLink>
  );
};

export default BlogCard;
