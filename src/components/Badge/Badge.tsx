import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    children, 
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center rounded-full font-medium';
    
    const variantClasses = {
      default: 'bg-secondary-100 text-secondary-800',
      primary: 'bg-primary-100 text-primary-800',
      secondary: 'bg-secondary-200 text-secondary-900',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
    };
    
    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-sm',
      lg: 'px-3 py-1 text-sm',
    };
    
    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );
    
    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge'; 