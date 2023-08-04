'use client';

import { FC, useCallback } from 'react';
import { SetStateAction, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface AboutProps {
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
  text: string;
  masking?: boolean;
}

const About: FC<AboutProps> = ({ setIsHovered, text, masking = false }) => {
  const { theme } = useTheme();
  const container = useRef(null);

  const refs = useRef<any>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createAnimation = useCallback(() => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top center`,
        end: `+=400`,
      },
      opacity: 1,
      color: theme === 'light' ? '#0c0a09' : '#fafaf9',
      ease: 'none',
      stagger: 0.1,
    });
  }, [theme]);

  const splitWords = (text: string) => {
    let body: any = [];
    text.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p className="mr-2.5 text-red-600" key={word + '_' + i}>
          {letters}
        </p>,
      );
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: any = [];
    word.split('').forEach((letter, i) => {
      letters.push(
        <span
          className="dark:text-white/50 text-stone-950/20"
          key={letter + '_' + i}
          ref={(el: any) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  return (
    <div className="h-[80vh] lg:h-[100vh] text-stone-950 dark:text-stone-50" ref={container}>
      <div className="flex px-10 lg:px-32 2xl:px-60 flex-col pt-[35vh]">
        <h1
          className={cn(
            'text-sm lg:text-lg font-mono uppercase my-3',
            masking ? 'text-stone-50 dark:text-stone-950' : '',
          )}
        >
          About Me
        </h1>
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={cn(
            'text-2xl lg:text-6xl font-bold w-full flex flex-wrap',
            masking ? 'text-stone-950 dark:text-stone-50' : '',
          )}
        >
          {masking ? text : splitWords(text)}
        </div>
      </div>
    </div>
  );
};

export default About;
