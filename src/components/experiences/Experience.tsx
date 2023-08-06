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
      <div className="flex justify-between">
        <LargeHeading className="">Siesta</LargeHeading>

        <Magnetic>
          <div className="rounded-md bg-gradient-to-r from-yellow-500 dark:from-sky-400 via-orange-500 dark:via-blue-500 to-pink-500 dark:to-indigo-600 p-1 shadow-md">
            <div className="flex h-full w-full items-center justify-center back">
              <h1 className="text-sm font-medium p-2 text-white">Frontend Developer</h1>
            </div>
          </div>
        </Magnetic>
      </div>

      <div className="pt-6">
        <h1 className="text-lg font-medium">🚀 April 2022 - Present</h1>

        <p className="pt-4 w-[70%] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, modi nulla. Eaque consectetur sapiente
          asperiores maiores deserunt! Ad, voluptate optio. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptates, rem!
        </p>
      </div>

      <div className="pt-6">
        <h1 className="text-lg font-medium">
          <Icons.CheckIcon size={22} className="inline-flex mr-1" />
          Responsibilities and things I did
        </h1>

        <ul className="list-disc pl-6 pt-4 w-[90%]">
          <li className="tracking-wide leading-relaxed">
            Lead or contribute to technical design, implementation, deployment, and operational excellence efforts to
            build and run scalable solutions for complex engineering challenges.
          </li>
          <li className="tracking-wide leading-relaxed">
            Champion high-quality products and services through adopting best practices in resilience, observability,
            maintainability, and testing.
          </li>
          <li className="tracking-wide leading-relaxed">
            Collaborate with cross-functional teams in delivering customer-centric tech products and services.
          </li>
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
