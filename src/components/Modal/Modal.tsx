import React from 'react';
import { cn } from '../../utils/cn';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, isOpen, onClose, title, children, size = 'md', ...props }, ref) => {
    if (!isOpen) return null;
    
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
    };
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
        <div
          ref={ref}
          className={cn(
            'relative bg-white rounded-lg shadow-xl',
            sizeClasses[size],
            'w-full mx-4',
            className
          )}
          {...props}
        >
          {title && (
            <div className="px-6 py-4 border-b border-secondary-200">
              <h3 className="text-lg font-medium text-secondary-900">{title}</h3>
            </div>
          )}
          <div className="px-6 py-4">{children}</div>
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal'; 