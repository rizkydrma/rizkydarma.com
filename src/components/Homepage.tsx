'use client';
import Globe from '@/components/Globe';
import Experiences from '@/components/experiences';
import Landing from '@/components/landing';
import ContentLanding from '@/components/landing/ContentLanding';
import ContentLandingMask from '@/components/landing/ContentLandingMask';
import Preloader from '@/components/preloader';
import Projects from '@/components/projects';
import useMousePosition from '@/hook/useMousePosition';
import { Post, Views } from '@/lib/types';
import { cn, populatePost } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import FeaturedPost from './landing/FeaturedPost';
import AboutLanding from './landing/AboutLanding';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

interface HomeInterface {
  posts: Post[];
  projects: Post[];
}

const Home: FC<HomeInterface> = ({ posts, projects }) => {
  const { data, error } = useSWR<Views[]>('/api/views/all', fetcher);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const {
    mousePosition: { x, y },
    scrollPosition,
  } = useMousePosition();
  const size = isHovered ? 300 : 40;

  const populatedPost = populatePost(posts, data);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <motion.main
          className={cn(
            `mask dark:bg-indigo-700 bg-yellow-300 text-stone-50 dark:text-stone-950`,
            isHovered ? 'z-[99]' : '',
          )}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y + scrollPosition - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <Landing isHovered={isHovered} setIsHovered={setIsHovered} content={<ContentLandingMask />} />
          <AboutLanding
            setIsHovered={setIsHovered}
            masking
            text="My code dances to the beat of its own drum, swaying gracefully between reality and imagination.I conjure
          interactive spells and lead them on magical journeys."
          />
          <Projects projects={projects} />
          <FeaturedPost posts={populatedPost} />
          <Experiences />
        </motion.main>
      </div>

      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <Landing isHovered={isHovered} setIsHovered={setIsHovered} content={<ContentLanding />} />
      <Globe />
      <AboutLanding
        setIsHovered={setIsHovered}
        text="In the world of frontend development, I`m not just a developer; I`m a mad scientist of pixels, a dreamweaver
          of interfaces, and a conductor of digital symphonies."
      />
      <Projects projects={projects} />
      <FeaturedPost posts={populatedPost} />
      <Experiences />
    </>
  );
};

export default Home;
