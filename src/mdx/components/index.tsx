import { MDXComponents } from 'mdx/types';
import NextImage from 'next/image';
import { Code } from 'bright';
import { MDXImage } from './mdx-image';
import { Tweet } from 'react-tweet';
import BaseCloudinaryImg from '@/components/images/BaseImage';
import CloudinaryImage from '@/components/images/CloudinaryImage';
import SplitImage, { Split } from '@/components/content/SplitImage';
import Techstack from '@/components/about/Techstack';

export const mdxComponents: MDXComponents = {
  pre: ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLPreElement>) => {
    return (
      <Code {...props} theme="material-default">
        {children as any}
      </Code>
    );
  },
  // @ts-expect-error types
  img: MDXImage,
  Image: NextImage,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDetailsElement> & {
    summary: string;
  }) => (
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Tweet: (props) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tweet {...props} />
    </div>
  ),
  CloudinaryImg: CloudinaryImage,
  Split: Split,
  SplitImage: SplitImage,
  BaseCloudinaryImg: BaseCloudinaryImg,
  Techstack: Techstack,
};
