// import { tw } from 'twind';

// interface IButton {
//   primary?: boolean;
//   children: React.ReactNode;
//   modifier?: string;
// }

// const Button = ({ primary, modifier, children, ...rest }: IButton) => {
//   const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
//   const styles = primary
//     ? `bg-teal-500 text-white border-teal-500 hover:bg-teal-500`
//     : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

//   return (
//     <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
//       {children}
//     </button>
//   );
// };

// export default Button;

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
  const baseStyles = 'font-sans font-medium py-2 px-4 border rounded-md text-[14px]';

  const variants: Record<'filled' | 'outlined', string> = {
    filled: 'bg-teal-500 text-white border-teal-500 hover:bg-teal-600',
    outlined: 'bg-white text-[#38B89A] border-teal-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={tw(`${baseStyles} ${variants[variant]} ${className} ${disabled && 'opacity-50 cursor-not-allowed'}`)}
    >
      {children}
    </button>
  );
};

export default Button;
