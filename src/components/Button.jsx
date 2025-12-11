import React from "react";

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
    secondary: "bg-white text-blue-900 border border-gray-200 hover:border-blue-300 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-600",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
