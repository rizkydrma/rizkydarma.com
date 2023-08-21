'use client';
import Link from 'next/link';
import { FC } from 'react';
import ThemeToggle from '../themetoggle';

interface NavbarProps {}

let tabs = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'projects', label: 'Projects', href: '/project' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'blog', label: '✨ Blog', href: '/blog' },
];

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed backdrop-blur-sm z-[999] top-0 left-0 right-0 h-20 border-b border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-950 shadow-sm dark:shadow-stone-900 flex items-center ">
      <div className="z-[9999] container max-w-7xl mx-auto w-full items-center justify-between flex">
        <div className="flex space-x-1">
          {tabs?.map((tab) => (
            <Link
              href={tab?.href}
              key={tab?.id}
              className="relative rounded-full px-1.5 lg:px-3 py-1.5 font-medium text-stone-800  dark:text-white outline-yellow-400 transition focus-visible:outline-2 text-xs lg:text-sm"
            >
              {tab?.label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
