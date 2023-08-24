'use client';
import { IMAGES, TLogoKey } from '@/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
// import { ITechProject } from '..';

export interface ProjectProps {
  index: number;
  manageModal?: (active: boolean, index: number, x: number, y: number) => void;
  title: string;
  subtitle: string;
  tech?: string;
  slug: string;
}

const Project: FC<ProjectProps> = ({ index, title, subtitle, manageModal, tech, slug }) => {
  const arrTech = tech?.split(',') as TLogoKey[];
  return (
    <Link
      href={`/project/${slug}`}
      onMouseEnter={
        manageModal
          ? (e) => {
              manageModal(true, index, e?.clientX, e?.clientY);
            }
          : undefined
      }
      onMouseLeave={
        manageModal
          ? (e) => {
              manageModal(false, index, e?.clientX, e?.clientY);
            }
          : undefined
      }
      className="flex w-full justify-between items-center py-4 border-t-2 border-t-gray-300 cursor-pointer transition-all text-stone-950 dark:text-stone-50"
    >
      <div>
        <h2 className="text-base lg:text-2xl font-bold">{title}</h2>
        <p className="text-xs lg:text-sm font-light tracking-wide">{subtitle}</p>
      </div>

      <div>
        <p className="text-xs tracking-wide text-right pb-2 font-medium">Tech Stack</p>
        <div className="flex items-center gap-4">
          {arrTech?.map((item) => (
            <Image
              key={item}
              src={IMAGES[item]}
              width={25}
              height={0}
              alt="image"
              className="h-auto dark:invert opacity-80"
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Project;
