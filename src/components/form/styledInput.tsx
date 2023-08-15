import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 dark:focus:ring-indigo-600 sm:text-sm sm:leading-6',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
StyledInput.displayName = 'StyleInput';

export { StyledInput };
