import { FC } from 'react';
import Highlight from '../ui/Highlight';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section id="experience" className="container max-w-7xl mx-auto h-[80vh] relative lg:pt-4">
      <div className="lg:px-6">
        <Highlight className="text-sm lg:text-lg font-mono uppercase my-3">Work Experience</Highlight>
      </div>
    </section>
  );
};

export default Experience;
