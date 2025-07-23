import React from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = 'md', children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };
    
    const classes = cn(
      'rounded-full bg-secondary-200 flex items-center justify-center overflow-hidden',
      sizeClasses[size],
      className
    );
    
    return (
      <div ref={ref} className={classes} {...props}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          children || <span className="text-secondary-600 font-medium">{alt?.[0]}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar'; 