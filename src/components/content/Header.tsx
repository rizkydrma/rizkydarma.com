'use client';

import { Post } from '@/lib/types';
import { FC } from 'react';
import CloudinaryImg from '../images/CloudinaryImage';
import { LargeHeading } from '../ui/LargeHeading';
import { paragraphVariants } from '../ui/Paragraph';
import { cn, formatDate } from '@/lib/utils';
import Badge from '../badge';
import Image from 'next/image';
import { useWindowSize } from '@/hook/useCurrentDimension';

interface HeaderProps extends Post {}

const Header: FC<HeaderProps> = ({ banner, title, description, publishedAt, tags }) => {
  const { width } = useWindowSize();
  return (
    <header className="relative max-h-[400px] overflow-hidden">
      <CloudinaryImg
        publicId={`/banner/${banner}`}
        alt={`Photo from unsplash: ${banner}`}
        className={cn(
          'object-cover bg-cover w-full before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b',
          'before:from-transparent before:to-stone-50',
          'before:dark:from-transparent before:dark:to-stone-950 ',
        )}
        width={width}
        height={(width * 2) / 6}
        aspect={{ height: 2, width: 6 }}
      />
      <div className="container max-w-7xl  absolute bottom-[40%] left-0 right-0 z-10">
        <LargeHeading className="w-full lg:w-[75%]">{title}</LargeHeading>
        <p className={paragraphVariants({ size: 'sm' })}>{description}</p>
      </div>

      <div className="container max-w-7xl absolute bottom-[5%] left-0 right-0 z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-2 flex flex-col gap-2 h-full justify-center">
            <p className="text-xs">Written by</p>
            <div className="flex gap-2 h-4 items-center">
              <figure className="h-[25px] w-[25px] shrink-0 grow-0 rounded-full overflow-hidden">
                <Image
                  alt="Me"
                  src="https://res.cloudinary.com/de3n7a1r0/image/upload/v1692146059/profile/ntmfol2g7elxi56xgl4t.jpg"
                  width={25}
                  height={25}
                  className="object-cover"
                />
              </figure>
              <p className="text-xs">Rizky Darma</p>
            </div>
          </div>
          <div className="col-span-7 flex flex-col gap-2 h-full justify-center">
            <p className="text-xs">Published on</p>
            <div className="text-xs">{formatDate(publishedAt)}</div>
          </div>
          <div className="col-span-3 flex flex-col gap-2 h-full justify-center">
            <p className="text-xs">Tags</p>
            <div className="flex gap-2">
              {tags?.split(',').map((tag) => (
                <Badge value={tag} key={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
