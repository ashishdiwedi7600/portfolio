'use client';

import { forwardRef } from 'react';
import { cn } from '@/utils';

const variants = {
  primary:
    'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-glow-blue hover:shadow-glow-purple hover:from-blue-600 hover:to-purple-700',
  secondary:
    'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20',
  outline:
    'border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400',
  ghost: 'text-zinc-400 hover:text-white hover:bg-white/5',
  danger: 'bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-xl',
  xl: 'px-10 py-4 text-lg rounded-2xl',
  icon: 'p-2.5 rounded-xl',
};

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 font-medium',
          'transition-all duration-200 ease-in-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'active:scale-95',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </span>
        )}
        <span className={cn('flex items-center gap-2', isLoading && 'opacity-0')}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
