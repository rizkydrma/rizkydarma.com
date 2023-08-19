import Icons from '@/components/Icons';
import Comment from '@/components/content/Comment';
import Footer from '@/components/content/Footer';
import Header from '@/components/content/Header';
import MainContent from '@/components/content/MainContent';
import PostList from '@/components/posts-list/post';
import { buttonVariants } from '@/components/ui/Button';
import { headingVariants } from '@/components/ui/LargeHeading';
import getPosts, { getRecommendations } from '@/lib/get-posts';
import { Post } from '@/lib/types';
import { Metadata } from 'next';
import Link from 'next/link';
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
  const post = await getData(params);
  const recommendations = (await getRecommendations(params?.slug)) as Post[];

  return (
    <div className="pt-20">
      <Header {...post} />
      <MainContent>{children}</MainContent>
      <Footer recommendations={recommendations} />
    </div>
  );
};

export default layout;
