import Footer from '@/components/content/Footer';
import Header from '@/components/content/Header';
import MainContent from '@/components/content/MainContent';
import { getProjects } from '@/lib/get-projects';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({ slug: project?.slug }));
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const project = (await getProjects()).find((item) => item?.slug === params?.slug);

  return {
    title: project?.title,
    description: project?.description,
    alternates: {
      canonical: `https://rizkydarma.com/projects/${params?.slug}`,
    },
  };
};

async function getData({ slug }: { slug: string }) {
  const projects = await getProjects();
  const projectIndex = projects?.findIndex((item) => item?.slug === slug);

  if (projectIndex == -1) return notFound();

  const project = projects[projectIndex];
  const { ...rest } = project;

  return {
    previous: projects[projectIndex - 1] || null,
    next: projects[projectIndex + 1] || null,
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
  const project = await getData(params);

  return (
    <div className="pt-20">
      <Header {...project} shouldRegisterView={true} />
      <MainContent demo={project?.link}>{children}</MainContent>
      <Footer
        post={project}
        recommendations={[]}
        url={`https://rizkydarma.com/project/${project?.slug}`}
        showRecommendation={false}
      />
    </div>
  );
};

export default layout;
