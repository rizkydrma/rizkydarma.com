import About from '@/components/about';

export const generateMetadata = () => {
  return {
    metadataBase: new URL('https://rizkydarma.com'),
    title: 'About | Rizky Darma',
    description:
      'I created this website with the goal of sharing what I`ve learned. Additionally, this platform serves as a showcase for the projects I`ve worked on. I also aim to leverage this space to helps others through the content I create, be it in the form of written articles or videos.',
    alternates: {
      canonical: `https://rizkydarma.com/about`,
    },
  };
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
