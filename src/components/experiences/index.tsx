import { FC } from 'react';
import Highlight from '../ui/Highlight';
import Experience from './Experience';

interface ExperiencesProps {}

const Experiences: FC<ExperiencesProps> = ({}) => {
  return (
    <section id="experience" className="container max-w-7xl mx-auto h-[80vh] relative lg:pt-4 mb-20">
      <div className="lg:px-6">
        <Highlight className="text-sm lg:text-lg font-mono uppercase my-3">Work Experience</Highlight>
      </div>
      <Experience />
    </section>
  );
};

export default Experiences;
