import { getProject } from '@/lib/get-projects';
import { PostBody } from '@/mdx/post-body';
import { notFound } from 'next/navigation';
import React from 'react';

const DetailProject = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const project = await getProject(params?.slug);

  if (!project) return notFound();

  return <PostBody>{project?.body}</PostBody>;
};

export default DetailProject;
