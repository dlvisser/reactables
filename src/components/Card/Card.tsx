import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    padding = 'md', 
    shadow = 'md', 
    children, 
    ...props 
  }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
    };
    
    const shadowClasses = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-soft',
      lg: 'shadow-lg',
    };
    
    const classes = cn(
      'bg-white rounded-lg border border-secondary-200',
      paddingClasses[padding],
      shadowClasses[shadow],
      className
    );
    
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card'; 