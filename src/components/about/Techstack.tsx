'use client';
import { IMAGES, TLogoKey } from '@/lib/image';
import Image from 'next/image';
import { FC } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';

interface TechstackProps {}

const TechStacks: { name: string; key: TLogoKey }[] = [
  {
    name: 'Remix',
    key: 'remix',
  },
  {
    name: 'React',
    key: 'react',
  },
  {
    name: 'NextJS',
    key: 'nextjs',
  },
  {
    name: 'Tailwind',
    key: 'tailwind',
  },
  {
    name: 'NodeJs',
    key: 'nodejs',
  },
];

const Techstack: FC<TechstackProps> = ({}) => {
  return (
    <div className="flex items-center gap-2">
      {TechStacks.map((tech, index: number) => (
        <figure className="p-2" key={tech?.key}>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src={IMAGES[tech?.key]}
                width={index == 0 ? 25 : 35}
                height={0}
                alt="image"
                className="h-auto dark:invert opacity-80 grayscale"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tech?.name}</p>
            </TooltipContent>
          </Tooltip>
        </figure>
      ))}
    </div>
  );
};

export default Techstack;
