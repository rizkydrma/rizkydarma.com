'use client';
import { IMAGES, TLogoKey } from '@/lib/image';
import Image from 'next/image';
import { FC } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';
import { cn } from '@/lib/utils';

interface TechstackProps {
  techs: string;
  className?: string;
}

const Techstack: FC<TechstackProps> = ({ techs, className }) => {
  const techStacks = techs?.split(',') as TLogoKey[];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {techStacks.map((tech, index: number) => (
        <figure className="p-2" key={tech}>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src={IMAGES[tech]}
                width={index == 0 ? 25 : 35}
                height={0}
                alt={tech}
                className="h-auto dark:invert opacity-80 grayscale"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{tech}</p>
            </TooltipContent>
          </Tooltip>
        </figure>
      ))}
    </div>
  );
};

export default Techstack;
