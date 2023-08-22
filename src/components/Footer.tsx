'use client';
import React from 'react';
import Tooltip from './Tooltip';
import Link from 'next/link';
import { socials } from './MediaSocial';

const footerLinks = [
  {
    text: 'Guestbook',
    href: '/guestbook',
    tooltip: 'Leave your sign on my website',
  },
  {
    text: 'Docs',
    href: '/docs',
    tooltip: 'The documentation about development that I have bookmarked',
  },
];

const Footer = () => {
  return (
    <div className="container min-h-[70px] border-t border-t-stone-700 dark:border-t-stone-300 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between text-xs text-stone-700 dark:text-stone-300 font-medium gap-4 py-4">
      <span className="">© 2023 Rizky Darma. All rights reserved.</span>

      <div className="lg:hidden text-center">
        <h1 className="font-bold">Reach me out</h1>
        <div className="flex gap-2">
          {socials?.map((social) => (
            <Link key={social?.href} href={social?.href} className="p-2 transition-colors rounded-full">
              {social?.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-x-4 flex flex-wrap">
        {footerLinks?.map((footer) => (
          <Link key={footer?.href} href={footer?.href} className="animated-underline inline-block">
            {footer?.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
