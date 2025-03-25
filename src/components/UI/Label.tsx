import React from 'react';
import { cn } from '@/lib/twMerge';

type LabelProps = {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

const Label: React.FC<LabelProps> = ({ children, className = '', htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={cn('block text-sm font-medium text-[#303030] mb-1', className)}>
      {children}
    </label>
  );
};

export default Label;
