import React from 'react';
import { tw } from 'twind';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = `
    font-sans font-medium py-2 px-4 border rounded-md text-[14px]
    outline-none focus:outline-none focus:ring-0 active:outline-none active:ring-0
    transition-transform duration-200 ease-in-out transform hover:scale-105
  `;

  const variants: Record<'filled' | 'outlined', string> = {
    filled:
      'bg-[#38B89A] text-white border-[#38B89A] hover:bg-[#38B89A]',
    outlined:
      'bg-white text-[#38B89A] border-teal-500 hover:bg-[#38B89A] hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={tw(
        `${baseStyles} ${variants[variant]} ${className} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
