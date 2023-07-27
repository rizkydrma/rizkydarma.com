'use client';
import { cn } from '@/lib/utils';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '../themetoggle';

interface NavbarProps {}

let tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'blog', label: '✨ Blog' },
];

const Navbar: FC<NavbarProps> = ({}) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id);
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-stone-950/75 z-[9999] top-0 left-0 right-0 h-20 border-b border-slate-50 dark:border-slate-700 shadow-sm flex items-center">
      <div className="z-[9999] container max-w-7xl mx-auto w-full items-center justify-between flex">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                `relative rounded-full px-3 py-1.5 text-sm font-medium text-stone-800  dark:text-white outline-sky-400 transition focus-visible:outline-2 z-[10000]`,
                activeTab === tab.id ? '' : 'dark:hover:text-white/60 hover:text-blue-900',
              )}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-stone-100/50 shadow  dark:bg-stone-700/50  rounded-full"
                  transition={{ type: 'spring', bounce: 0.5, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
