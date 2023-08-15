import Aside from '@/components/content/Aside';
import getPosts from '@/lib/get-posts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post?.slug }));
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const post = (await getPosts()).find((item) => item?.slug === params?.slug);

  return {
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: `https://rizkydarma.com/blog/${params?.slug}`,
    },
  };
};

async function getData({ slug }: { slug: string }) {
  const posts = await getPosts();
  const postIndex = posts.findIndex((item) => item?.slug === slug);

  if (postIndex == -1) return notFound();
  const post = posts[postIndex];
  const { ...rest } = post;

  return {
    previous: posts[postIndex - 1] || null,
    next: posts[postIndex + 1] || null,
    ...rest,
  };
}

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}) => {
  const { previous, next, title, lastModified, date } = await getData(params);

  return (
    <section className="flex py-24 container relative max-w-7xl justify-between">
      <article className="mdx w-9/12 prose prose-sm md:prose-base lg:prose-lg prose-slate dark:!prose-invert">
        {children}
      </article>

      <aside className="sticky w-3/12 top-24 h-fit">
        <Aside />
      </aside>
    </section>
  );
};

export default layout;