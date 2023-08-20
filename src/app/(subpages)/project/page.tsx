import ProjectList from '@/components/project-list';
import { getProjects } from '@/lib/get-projects';
import { Post } from '@/lib/types';

export const generateMetadata = () => {
  return {
    title: 'Projects | Rizky Darma',
    description: 'Showcase for my projects',
    alternates: {
      canonical: `https://rizkydarma.com/projects`,
    },
  };
};

const Project = async () => {
  const projects = (await getProjects()) as Post[];
  return <ProjectList projects={projects} />;
};

export default Project;
