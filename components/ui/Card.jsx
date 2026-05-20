'use client';

import { cn } from '@/utils';

export default function Card({ className, hover = true, glass = false, gradient, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/8 bg-surface',
        hover && 'transition-all duration-300 hover:border-white/15 hover:shadow-card-hover hover:-translate-y-1',
        glass && 'backdrop-blur-xl bg-white/[0.04]',
        gradient && `bg-gradient-to-br ${gradient}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>;
}

export function CardBody({ className, children }) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return (
    <div className={cn('p-6 pt-0 border-t border-white/8 mt-auto', className)}>{children}</div>
  );
}
