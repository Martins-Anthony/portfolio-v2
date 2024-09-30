import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      className={cn(
        'bg-acccent/30 font-mono hover:bg-accent/50 transition-colors text-primary border border-accent px-1 py-0.5 rounded-sm',
        className
      )}
      {...props}
    />
  );
};
