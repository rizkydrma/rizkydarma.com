import ViewCounter from '@/components/Counter';
import Footer from '@/components/content/Footer';
import Header from '@/components/content/Header';
import MainContent from '@/components/content/MainContent';
import getPosts, { getRecommendations } from '@/lib/get-posts';
import { Post } from '@/lib/types';
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
    metadataBase: new URL('https://rizkydarma.com'),
    title: `${post?.title} | Rizky Darma`,
    description: post?.description,
    alternates: {
      canonical: `https://rizkydarma.com/blog/${params?.slug}`,
    },
    openGraph: {
      images: post?.image,
      url: `https://rizkydarma.com/blog/${params?.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.description,
      siteId: '@rizkydrmar',
      creator: 'Rizky Darma R',
      creatorId: '@rizkydrmar',
      images: post?.image ? [post?.image] : '',
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
      <Header {...post} shouldRegisterView={true} />
      <MainContent>{children}</MainContent>
      <Footer post={post} recommendations={recommendations} url={`https://rizkydarma.com/blog/${post?.slug}`} />
    </div>
  );
};

export default layout;
