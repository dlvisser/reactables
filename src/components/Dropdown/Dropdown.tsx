import React from 'react';
import { cn } from '../../utils/cn';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, trigger, children, isOpen = false, onToggle, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative inline-block', className)} {...props}>
        <div onClick={onToggle}>{trigger}</div>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-secondary-200 z-10">
            {children}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown'; 