
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string; // If the button acts as a link
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}) => {
  const baseStyles = "font-semibold rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500";
      break;
    case 'secondary':
      variantStyles = "bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-400";
      break;
    case 'outline':
      variantStyles = "bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500";
      break;
  }

  let sizeStyles = "";
  switch (size) {
    case 'sm':
      sizeStyles = "px-4 py-2 text-sm";
      break;
    case 'md':
      sizeStyles = "px-6 py-3 text-base";
      break;
    case 'lg':
      sizeStyles = "px-8 py-3 text-lg";
      break;
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className} inline-block text-center`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
