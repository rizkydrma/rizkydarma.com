import Tippy from '@tippyjs/react';
import { FC, ReactNode } from 'react';

interface TooltipProps {
  children: JSX.Element;
  tooltip: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ children, tooltip }) => {
  return (
    <Tippy content={tooltip} className="bg-stone-50 dark:bg-stone-800 p-3 rounded-lg border text-xs border-stone-400">
      {children}
    </Tippy>
  );
};

export default Tooltip;
