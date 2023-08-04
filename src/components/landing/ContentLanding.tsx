import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Icons from '../Icons';
import { buttonVariants } from '../ui/Button';
import { headingVariants } from '../ui/LargeHeading';
import { paragraphVariants } from '../ui/Paragraph';
import { bounce, skewed, slideUpText } from './anim';

interface ContentLandingProps {}

const ContentLanding: FC<ContentLandingProps> = ({}) => {
  return (
    <div className={cn(`py-4 lg:max-w-2xl`)}>
      <div data-scroll data-scroll-speed="0.2">
        <motion.h1
          custom={1}
          animate="visible"
          initial="hidden"
          variants={slideUpText}
          className={headingVariants({ size: 'sm' })}
        >
          Hi, I`m
        </motion.h1>

        <motion.h1 custom={2} animate="visible" initial="hidden" variants={slideUpText} className={headingVariants()}>
          Rizky Darma R
        </motion.h1>
      </div>
      <div data-scroll data-scroll-speed="0.3">
        <motion.p
          custom={3}
          animate="visible"
          initial="hidden"
          variants={slideUpText}
          className={paragraphVariants({ className: 'relative z-20 mt-4' })}
        >
          a passionate{' '}
          <motion.span
            animate="enter"
            initial="initial"
            variants={skewed}
            custom={1}
            // whileHover={{ rotate: 0 }}
            className="bg-yellow-300/60 dark:bg-indigo-700 relative inline-block px-1 z-20"
          >
            Frontend Developer.
          </motion.span>
          I craft captivating user interfaces and bring ideas to life through code.{' '}
          <motion.span
            className="absolute top-24 lg:top-20 w-36 right-0 z-10 opacity-0 hidden lg:block"
            custom={4}
            animate="enter"
            initial="initial"
            variants={bounce}
          >
            <Image
              src="/arrow-dark.png"
              width={90}
              height={40}
              alt={`Arrow Dark`}
              className="transform -scale-x-100 rotate-[30deg] dark:invert invert-0"
            />

            <motion.span
              animate="enter"
              initial="initial"
              variants={skewed}
              custom={2}
              className="whitespace-nowrap text-xs -right-[70%] -top-6 -rotate-3 inline-flex font-mono tracking-tight text-stone-950 dark:text-stone-50 relative"
            >
              I Work with <br /> React Ecosystem right now.
            </motion.span>
          </motion.span>{' '}
          Let`s create something extraordinary together! 🚀
        </motion.p>
      </div>

      <div data-scroll data-scroll-speed="0.4">
        <div className="flex items-center gap-4">
          <motion.button
            custom={4}
            animate="visible"
            initial="hidden"
            variants={slideUpText}
            className={buttonVariants({ className: 'w-fit' })}
          >
            Learn about me
          </motion.button>

          <motion.div custom={4} animate="visible" initial="hidden" variants={slideUpText}>
            <Link
              href="/guestbook"
              className="text-stone-950 font-medium dark:text-stone-50 text-sm inline-flex items-center hover:underline transition"
            >
              Sign My Guesbook !
            </Link>
          </motion.div>
        </div>
        <motion.div custom={5} animate="visible" initial="hidden" variants={slideUpText} className="mt-6 flex gap-4">
          <Link
            href="#"
            className="text-stone-600 font-medium dark:text-stone-400 text-sm inline-flex items-center hover:underline transition"
          >
            <Icons.FileTextIcon size={18} className="mr-1" /> Resume
          </Link>
          <Link
            href="https://github.com/rizkydrma"
            className="text-stone-600 font-medium dark:text-stone-400 text-sm inline-flex items-center hover:underline transition"
          >
            <Icons.GithubIcon size={18} className="mr-1" /> rizkydrma
          </Link>
          <Link
            href="https://github.com/rizkydarmar"
            className="text-stone-600 font-medium dark:text-stone-400 text-sm inline-flex items-center hover:underline transition"
          >
            <Icons.TwitterIcon size={18} className="mr-1" /> rizkydarmar
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentLanding;
