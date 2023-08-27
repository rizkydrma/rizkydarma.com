import { FC, useRef } from 'react';
import { LargeHeading } from '../ui/LargeHeading';
import Icons from '../Icons';
import Image from 'next/image';
import Magnetic from '@/common/magnetic';
import { motion, useInView } from 'framer-motion';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        delay: 1,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className="w-full bg-gradient-to-br from-stone-50 dark:from-sky-300 to-yellow-100 dark:to-indigo-700 p-6 rounded-2xl mt-6 shadow-sm shadow-yellow-200 dark:shadow-indigo-600 relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2">
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/de3n7a1r0/image/upload/v1691370960/siesta_logo_xn0vti.png"
            alt="Siesta"
            width={50}
            height={0}
            className="h-auto mr-2"
          />
          <LargeHeading className="text-2xl">Siesta</LargeHeading>
        </div>

        <Magnetic>
          <div className="h-fit w-fit rounded-md bg-gradient-to-r from-yellow-500 dark:from-sky-400 via-orange-500 dark:via-blue-500 to-pink-500 dark:to-indigo-600 p-0.5 lg:p-1 shadow-md">
            <div className="flex h-full w-full items-center justify-center back">
              <h1 className="text-xs lg:text-sm font-medium p-2 text-white">Frontend Developer</h1>
            </div>
          </div>
        </Magnetic>
      </div>

      <div className="pt-6">
        <h1 className="text-base lg:text-lg font-medium">🚀 April 2022 - Present</h1>

        <p className="pt-4 lg:w-[80%] font-medium lg:text-base text-sm">
          Working on the core web experience team that focusing on developer experience, user interface & maintain
          product.
        </p>
      </div>

      <div className="pt-6">
        <h1 className="text-sm lg:text-lg font-medium">
          <Icons.CheckIcon size={20} className="inline-flex mr-1" />
          Responsibilities and things I did
        </h1>

        <ul className="list-disc pl-3 lg:pl-6 pt-4 w-[90%]">
          <li className="tracking-wide leading-relaxed text-xs lg:text-base">
            Handle several interrelated projects to integrate with each other.
          </li>
          <li className="tracking-wide leading-relaxed text-xs lg:text-base">
            Ship a high quality code and result with minimum bug deployed to production
          </li>
          <li className="tracking-wide leading-relaxed text-xs lg:text-base">
            Collaborate with cross-functional teams in delivering customer-centric tech products and services.
          </li>
          {/* <li className="tracking-wide leading-relaxed text-xs lg:text-base">
            Have a good way to explain things clearly to the team even to the non-technical person.
          </li> */}
        </ul>
      </div>

      <Image
        src="/burst.svg"
        alt="burst"
        width={400}
        height={0}
        className="h-auto absolute bottom-0 right-0 opacity-10 z-0 dark:invert"
      />
    </motion.div>
  );
};

export default Experience;
