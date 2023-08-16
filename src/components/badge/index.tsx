import { FC } from 'react';

interface BadgeProps {
  value: string;
}

const Badge: FC<BadgeProps> = ({ value }) => {
  return (
    <div className="rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60  bg-gray-400 text-white text-xs py-0.5 px-2">
      {value}
    </div>
  );
};

export default Badge;
