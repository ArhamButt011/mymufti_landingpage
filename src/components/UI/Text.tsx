import React, { forwardRef } from 'react';
import { cn } from '@/lib/twMerge';

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>((props, ref) => {
  const { children, className, as, onClick, id = '' } = props;

  if (as === 'h1') {
    return (
      <h1
        ref={ref}
        className={cn('font-sans font-bold text-[34px] sm:text-[48px] leading-[44px] sm:leading-[55px]', className)}
        onClick={onClick}
        id={id}
      >
        {children}
      </h1>
    );
  }

  if (as === 'h2') {
    return (
      <h2 ref={ref} className={cn('font-sans font-bold text-3xl md:text-4xl', className)} id={id} onClick={onClick}>
        {children}
      </h2>
    );
  }

  if (as === 'h3') {
    return (
      <h3
        ref={ref}
        className={cn('font-sans font-bold text-[19.05px] md:text-[32px] ', className)}
        id={id}
        onClick={onClick}
      >
        {children}
      </h3>
    );
  }

  if (as === 'h4') {
    return (
      <h4
        ref={ref}
        className={cn('font-sans font-semibold text-[19px] sm:text-[22px]', className)}
        id={id}
        onClick={onClick}
      >
        {children}
      </h4>
    );
  }
  if (as === 'p1') {
    return (
      <p
        ref={ref}
        className={cn('font-sans font-normal text-[#78827F] text-[16px] sm:text-[18px]', className)}
        id={id}
        onClick={onClick}
      >
        {children}
      </p>
    );
  }
  return (
    <p
      ref={ref}
      className={cn('font-sans text-[14px] sm:text-[16px] font-normal text-[#78827F]', className)}
      onClick={onClick}
      id={id}
    >
      {children}
    </p>
  );
});

Text.displayName = 'Text';

export default Text;
