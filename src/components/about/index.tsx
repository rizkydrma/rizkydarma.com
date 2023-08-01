'use client';

import { FC } from 'react';
import { SetStateAction, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

interface AboutProps {
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
  text: string;
  masking?: boolean;
}

const About: FC<AboutProps> = ({ setIsHovered, text, masking = false }) => {
  const container = useRef(null);
  const body = useRef(null);
  const refs = useRef<any>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top center`,
        end: `+=400`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
  };

  const splitWords = (text: string) => {
    let body: any = [];
    text.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p className="mr-2.5" key={word + '_' + i}>
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
          className="opacity-20"
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
    <div className="h-[80vh] lg:h-[100vh] grid place-items-center text-stone-950 dark:text-stone-50" ref={container}>
      <div className="flex px-10 lg:px-32 flex-col max-h-[600px]">
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
            masking ? 'text-stone-50 dark:text-stone-950' : '',
          )}
          ref={body}
        >
          {masking ? text : splitWords(text)}
        </div>
      </div>
    </div>
  );
};

export default About;
