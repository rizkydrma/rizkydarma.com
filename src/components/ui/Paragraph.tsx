import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const paragraphVariants = cva('text-stone-800 dark:text-stone-300 my-2 lg:text-left', {
  variants: {
    size: {
      default: 'text-base sm:text-lg',
      sm: 'text-sm sm:text-base',
      xs: 'text-xs sm:text-sm',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn(paragraphVariants({ size, className }))}>
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
