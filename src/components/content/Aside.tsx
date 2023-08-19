'use client';
import useScrollSpy from '@/hook/useScrollspy';
import { FC, useEffect, useState } from 'react';
import TableOfContents, { HeadingScrollSpy } from './TableOfContents';

interface AsideProps {}

const Aside: FC<AsideProps> = () => {
  const activeSection = useScrollSpy();

  const [toc, setToc] = useState<HeadingScrollSpy>();
  const minLevel = toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, []);
  return <TableOfContents toc={toc} minLevel={minLevel} activeSection={activeSection} />;
};

export default Aside;
