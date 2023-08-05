'use client';
import Tooltip from '@/components/Tooltip';
import { FC } from 'react';
import { ITechProject } from '..';
import Image from 'next/image';
import { IMAGES } from '@/lib/image';

export interface ProjectProps {
  index: number;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  title: string;
  subtitle: string;
  tech: ITechProject[];
}

const Project: FC<ProjectProps> = ({ index, title, subtitle, manageModal, tech }) => {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="flex w-full justify-between items-center py-4 border-t-2 border-t-gray-300 cursor-pointer transition-all text-stone-950 dark:text-stone-50"
    >
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm font-light tracking-wide">{subtitle}</p>
      </div>

      <div>
        <p className="text-xs tracking-wide text-right pb-2 font-medium">Tech Stack</p>
        <div className="flex items-center gap-4">
          {tech?.map((item) => (
            <Image
              key={item?.logo_key}
              src={IMAGES[item?.logo_key]}
              width={25}
              height={0}
              alt="image"
              className="h-auto dark:invert opacity-80"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
