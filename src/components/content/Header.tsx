'use client';
import { useWindowSize } from '@/hook/useCurrentDimension';
import { Post } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import Badge from '../badge';
import CloudinaryImg from '../images/CloudinaryImage';
import { headingVariants } from '../ui/LargeHeading';
import { paragraphVariants } from '../ui/Paragraph';
import { slideUp } from '@/common/slideup';

interface HeaderProps extends Post {}

const Header: FC<HeaderProps> = ({ banner, title, description, publishedAt, tags }) => {
  const { width } = useWindowSize();

  const heightImage = width < 640 ? width : (width * 2) / 6;
  const aspectRatio = width < 640 ? { height: 1, width: 1 } : { height: 2, width: 6 };

  return (
    <header className="relative max-h-[600px] lg:max-h-[400px] overflow-hidden">
      <CloudinaryImg
        publicId={banner as string}
        alt={`Photo from unsplash: ${banner}`}
        className={cn(
          'object-cover bg-cover w-full before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b',
          'before:from-transparent before:to-stone-50',
          'before:dark:from-transparent before:dark:to-stone-950 ',
        )}
        width={width}
        height={heightImage}
        aspect={aspectRatio}
      />
      <div className="container max-w-7xl  absolute bottom-[40%] left-0 right-0 z-10">
        <motion.h1
          custom={0.6}
          animate="visible"
          initial="hidden"
          variants={slideUp}
          className={headingVariants({ size: 'sm', className: 'w-full lg:w-[75%]' })}
        >
          {title}
        </motion.h1>
        <motion.p
          custom={1.6}
          animate="visible"
          initial="hidden"
          variants={slideUp}
          className={paragraphVariants({ size: 'sm' })}
        >
          {description}
        </motion.p>
      </div>

      <div className="container max-w-7xl absolute bottom-[5%] left-0 right-0 z-10">
        <div className="grid grid-cols-12 gap-3">
          <motion.div
            custom={2}
            animate="visible"
            initial="hidden"
            variants={slideUp}
            className="col-span-6 lg:col-span-2 flex flex-col gap-2 h-full justify-center"
          >
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
          </motion.div>
          <motion.div
            custom={2.2}
            animate="visible"
            initial="hidden"
            variants={slideUp}
            className="col-span-6 lg:col-span-7 flex flex-col gap-2 h-full justify-center"
          >
            <p className="text-xs">Published on</p>
            <div className="text-xs">{formatDate(publishedAt)}</div>
          </motion.div>
          <motion.div
            custom={2.4}
            animate="visible"
            initial="hidden"
            variants={slideUp}
            className="col-span-12 lg:col-span-3 flex flex-col gap-2 h-full justify-center"
          >
            <p className="text-xs">Tags</p>
            <div className="flex gap-2">
              {tags?.split(',').map((tag) => (
                <Badge value={tag} key={tag} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
