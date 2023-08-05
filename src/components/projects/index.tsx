'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Project, { ProjectProps } from './components/Project';
import gsap from 'gsap';
import { Button, buttonVariants } from '../ui/Button';
import Link from 'next/link';

type TLogoKey = 'tailwind' | 'leaflet' | 'nextjs' | 'react' | 'sass';

export interface ITechProject {
  name: string;
  logo_key: TLogoKey;
}

export type IProject = {
  title: string;
  subtitle: string;
  src: string;
  color: string;
  tech: ITechProject[];
};

const projects: IProject[] = [
  {
    title: 'Find Medical Vaccine',
    subtitle: 'lorem epsum dolor sit amet',
    src: 'https://res.cloudinary.com/de3n7a1r0/image/upload/v1690243161/Screenshot_2023-07-25_at_06.57.24-min_ewvdn0.png',
    color: '#000000',
    tech: [
      {
        name: 'Tailwind',
        logo_key: 'tailwind',
      },
      {
        name: 'Next JS 13',
        logo_key: 'nextjs',
      },
      {
        name: 'Leaflet',
        logo_key: 'leaflet',
      },
    ],
  },
  {
    title: 'Karyamultisejatiwood',
    subtitle: 'lorem epsum dolor sit amet',
    src: 'https://res.cloudinary.com/de3n7a1r0/image/upload/v1691245870/Screenshot_2023-08-05_at_21.26.50-min_1_zlpyjz.png',
    color: '#8C8C8C',
    tech: [
      {
        name: 'React',
        logo_key: 'react',
      },
      {
        name: 'Sass',
        logo_key: 'sass',
      },
    ],
  },
  {
    title: 'Kerabat Motret',
    subtitle: 'lorem epsum dolor sit amet',
    src: 'https://res.cloudinary.com/de3n7a1r0/image/upload/v1691245436/Screenshot_2023-08-05_at_21.21.18-min_o0ajaw.png',
    color: '#EFE8D3',
    tech: [
      {
        name: 'React',
        logo_key: 'react',
      },
      {
        name: 'Sass',
        logo_key: 'sass',
      },
    ],
  },
  {
    title: 'Gheebat App',
    subtitle: 'lorem epsum dolor sit amet',
    src: 'https://res.cloudinary.com/de3n7a1r0/image/upload/v1691245879/Screenshot_2023-08-05_at_21.28.40-min_cwxjro.png',
    color: '#706D63',
    tech: [
      {
        name: 'React',
        logo_key: 'react',
      },
      {
        name: 'Tailwind',
        logo_key: 'tailwind',
      },
    ],
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef<any>(null);
  let yMoveContainer = useRef<any>(null);
  let xMoveCursor = useRef<any>(null);
  let yMoveCursor = useRef<any>(null);
  let xMoveCursorLabel = useRef<any>(null);
  let yMoveCursorLabel = useRef<any>(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', { duration: 0.8, ease: 'power3' });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', { duration: 0.8, ease: 'power3' });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' });
    yMoveCursor.current = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', { duration: 0.45, ease: 'power3' });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', { duration: 0.45, ease: 'power3' });
  }, []);

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section className="container max-w-7xl mx-auto h-[80vh] relative mt-[300px]">
      <h1 className="text-sm lg:text-lg font-mono uppercase my-3 lg:px-6">Featured Project</h1>

      <main
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className="flex items-center flex-col lg:px-6 pt-6"
      >
        <div className="max-w-[1400px] w-full flex flex-col items-center justify-center mb-[100px]">
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                manageModal={manageModal}
                key={index}
                subtitle={project?.subtitle}
                tech={project?.tech}
              />
            );
          })}
          <Link href="/projects" className={buttonVariants({})}>
            See more project
          </Link>
        </div>
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
            className="h-[350px] w-[400px] fixed top-[50%] left-[50%] bg-stone-50 pointer-events-none overflow-hidden z-[999]"
          >
            <div
              style={{ top: index * -100 + '%', transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)' }}
              className="h-full w-full relative"
            >
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className="h-full w-full flex items-center justify-center"
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <Image src={src} width={350} height={0} alt="image" className="h-auto" />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={cursor}
            className="w-[80px] h-[80px] rounded-full bg-yellow-400 dark:bg-indigo-600 text-white fixed z-[999] flex items-center justify-center text-lg pointer-events-none"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
          ></motion.div>
          <motion.div
            ref={cursorLabel}
            className="w-[80px] h-[80px] rounded-full bg-yellow-400 dark:bg-indigo-600 text-white fixed z-[999] flex items-center justify-center text-lg pointer-events-none bg-transparent"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
          >
            View
          </motion.div>
        </>
      </main>
    </section>
  );
};

export default Projects;
