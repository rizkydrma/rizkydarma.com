import matter from 'gray-matter';
import path from 'path';
import type { Post } from './types';
import fs from 'fs/promises';
import { cache } from 'react';

export const getProjects = cache(async () => {
  const projects = await fs.readdir('./content/projects/');

  return Promise.all(
    projects
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./content/projects/${file}`;
        const projectContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(projectContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      }),
  );
});

export async function getProject(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => slug === project?.slug);
}
