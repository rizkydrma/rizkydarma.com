import { FC, ReactNode, useRef } from 'react';
import Magnetic from '../magnetic';

interface RoundedProps {
  children: ReactNode;
}

const Rounded: FC<RoundedProps> = ({ children }) => {
  const circle = useRef(null);

  return (
    <Magnetic>
      <div className="rounded-md border cursor-pointer relative flex items-center justify-center p-4">
        {children}

        <div ref={circle} className="w-full h-[150%] absolute rounded-full top-full"></div>
      </div>
    </Magnetic>
  );
};

export default Rounded;
