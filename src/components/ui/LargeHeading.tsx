import { FC } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva('text-stone-950 dark:text-stone-50 lg:text-left font-extrabold', {
  variants: {
    size: {
      default: 'text-3xl md:text-4xl lg:text-4xl',
      lg: 'text-4xl md:text-5xl lg:text-5xl',
      sm: 'text-2xl md:text-2xl lg:text-3xl',
      xs: 'text-base md:text-lg lg:text-xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface LargeHeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  ref?: any;
}

const LargeHeading: FC<LargeHeadingProps> = ({ children, className, size, ref, ...props }) => {
  return (
    <h1 {...props} ref={ref} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export { LargeHeading, headingVariants };
