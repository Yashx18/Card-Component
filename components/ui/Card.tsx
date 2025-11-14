import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'flex h-full w-full max-w-90 flex-col items-center justify-between gap-3 divide-x-4 overflow-hidden rounded-xl bg-white p-4 shadow-xl divide-x-reverse dark:bg-[#121212] dark:shadow-black/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn('w-full border-none', className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children, ...props }: CardProps) => {
  return (
    <h3
      className={cn(
        'flex items-center justify-start gap-1 text-lg font-medium text-zinc-800 dark:text-neutral-400',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn('text-start text-base text-zinc-500 dark:text-neutral-500', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn('w-full border-none', className)} {...props}>
      {children}
    </div>
  );
};
