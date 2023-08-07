'use client';
import React from 'react';
import Tooltip from './Tooltip';
import Link from 'next/link';

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
    <div className="container h-[70px] border-t border-t-stone-700 dark:border-t-stone-300  flex items-center justify-between text-xs text-stone-700 dark:text-stone-300 font-medium">
      <span className="">© 2023 Rizky Darma. All rights reserved.</span>

      <div className="space-x-4">
        {footerLinks?.map((footer) => (
          <Tooltip key={footer?.text} tooltip={footer?.tooltip}>
            <Link href={footer?.href} className="animated-underline inline-block">
              {footer?.text}
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Footer;
