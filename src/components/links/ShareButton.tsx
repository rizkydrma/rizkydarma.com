'use client';
import { FC } from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import { paragraphVariants } from '../ui/Paragraph';
import Tooltip from '../Tooltip';
import { Post } from '@/lib/types';

interface ShareButtonProps {
  url: string;
  post: Post;
}

const ShareButton: FC<ShareButtonProps> = ({ url, post }) => {
  const { slug, description, title } = post;

  const tags = post?.tags?.split(',');

  return (
    <div className="py-4">
      <p className={paragraphVariants()}>Share this article</p>
      <div className="flex items-center gap-2">
        <FacebookShareButton url={url} hashtag={tags?.length ? `#${tags?.[0]}` : ''}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton title={title} hashtags={tags} url={url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton title={title} url={url} source={url} summary={description}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default ShareButton;
