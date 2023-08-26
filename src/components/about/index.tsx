'use client';
import { slideUp } from '@/common/slideup';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import CloudinaryImg from '../images/CloudinaryImage';
import Highlight from '../ui/Highlight';
import { headingVariants } from '../ui/LargeHeading';
import Techstack from './Techstack';

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  const techs = 'remix,react,nextjs,tailwind,nodejs';

  return (
    <section className="container max-w-7xl mx-auto py-40 min-h-[90vh]">
      <motion.h1 custom={1} animate="visible" initial="hidden" variants={slideUp} className={headingVariants({})}>
        About Me
      </motion.h1>
      <motion.div custom={1.8} animate="visible" initial="hidden" variants={slideUp} className="mt-8">
        <CloudinaryImg
          className="float-right ml-6 w-40 md:w-72"
          publicId="profile/lpme8twv6v7xfaqaerq2"
          width="1500"
          height="1800"
          alt="Photo of me"
          preview={false}
        />

        <article className="max-w-full prose-sm prose lg:prose-base prose-slate dark:!prose-invert">
          <p>
            Hello there! My name is <Highlight className="font-bold">Rizky Darma</Highlight>. I have a tremendous
            enthusiasm for the world of development. My learning journey began during my time in high school and
            continued into university. However, it was during the final semester of my college years, around 2020, that
            I truly deepened my knowledge and skills in development. Since then, I`ve been actively engaging with
            tutorials, courses, and bootcamps related to development. <Link href="#">You can check my resume</Link>
          </p>
          <p>
            I even secured a professional position in 2022 as a{' '}
            <Highlight className="font-bold">Frontend Developer</Highlight>, which means I`ve been immersed in the
            technology industry for over a year and a half. I`ve absorbed a wealth of knowledge about frontend and the
            development realm, and to this day, my thirst for learning remains insatiable. I`m incredibly hungry for
            knowledge and addicted to continuous learning.
          </p>

          <p>
            In August 2023, I created this website with the goal of sharing what I`ve learned. Additionally, this
            platform serves as a showcase for the projects I`ve worked on. I also aim to leverage this space to helps
            others through the content I create, be it in the form of written articles or videos.
          </p>

          <p>
            If you`re interested in having a discussion, please feel free to reach out to me through my social media
            accounts. I`m always thrilled when someone wants to talk about projects, work, or anything else. I believe
            that collaboration is a key to success in the development world, and I`m always open to sharing ideas and
            experiences.
          </p>

          <p>
            Thank you for visiting my website and taking the time to learn more about me.{' '}
            <Highlight className="font-bold">Let`s collaborate</Highlight>,{' '}
            <Highlight className="font-bold">learn together</Highlight>, and create a better digital world!
          </p>
        </article>
      </motion.div>

      <motion.div custom={2.5} animate="visible" initial="hidden" variants={slideUp} className="mt-8">
        <h1 className={headingVariants({ size: 'xs' })}>Current Favorite Tech Stack</h1>

        <Techstack techs={techs} />
      </motion.div>
    </section>
  );
};

export default About;
