import matter from 'gray-matter';
import path from 'path';
import type { Post } from './types';
import fs from 'fs/promises';
import { cache } from 'react';

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const posts = await fs.readdir('./posts/');

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      }),
  );
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post?.slug === slug);
}

export async function getRecommendations(currSlug: string) {
  const posts = await getPosts();

  const currPost = posts?.find((post) => post?.slug === currSlug);
  const otherPosts = posts
    ?.filter((post) => post?.slug !== currPost?.slug)
    .filter((post) => post?.tags.split(',').some((p) => currPost?.tags?.split(',').includes(p)));

  return otherPosts?.slice(0, 3);
}

export default getPosts;
