import getPosts from '@/lib/get-posts';
import { getProjects } from '@/lib/get-projects';

export default async function sitemap() {
  const posts = await getPosts();
  const listProjects = await getProjects();

  const now = new Date().toISOString().split('T')[0];
  const blogs = posts?.map((post) => ({
    url: `https://rizkydarma.com/blog/${post?.slug}`,
    lastModified: post?.lastModified ? new Date(post.lastModified).toISOString().split('T')[0] : now,
  }));

  const projects = listProjects?.map((project) => ({
    url: `https://rizkydarma.com/project/${project?.slug}`,
    lastModified: project?.lastModified ? new Date(project.lastModified).toISOString().split('T')[0] : now,
  }));

  const routes = ['', '/about', '/guestbook'].map((route) => ({
    url: `https://rizkydarma.com${route}`,
    lastModified: now,
  }));

  return [...routes, ...blogs, ...projects];
}
