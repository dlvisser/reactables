import React from 'react';
import { cn } from '../../utils/cn';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  show?: boolean;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, children, position = 'top', show = false, ...props }, ref) => {
    const positionClasses = {
      top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    };
    
    return (
      <div ref={ref} className={cn('relative inline-block', className)} {...props}>
        {children}
        {show && (
          <div
            className={cn(
              'absolute z-50 px-2 py-1 text-xs text-white bg-secondary-900 rounded shadow-lg',
              positionClasses[position]
            )}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip'; 