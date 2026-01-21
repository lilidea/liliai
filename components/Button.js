import React from 'react';


export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // primary, secondary, outline, ghost
  className = '', 
  disabled = false,
  icon = null,
  type = 'button',
  ...props 
}) => {
  // Fixed styles for Wizard UI stability
  const baseStyles = "px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-md hover:shadow-lg";
  
  const getStyle = () => {
    switch(variant) {
      case 'primary':
        return { backgroundColor: '#E69419', color: '#ffffff' }; // Liliai Orange
      case 'outline':
        return { backgroundColor: 'transparent', border: `2px solid #E69419`, color: '#E69419' };
      case 'ghost':
        return {}; 
      default:
        return {};
    }
  };

  const getClassName = () => {
     switch(variant) {
        case 'secondary': return "bg-neutral-100 text-neutral-900 hover:bg-neutral-200";
        case 'ghost': return "bg-transparent text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 shadow-none hover:shadow-none";
        default: return "";
     }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${getClassName()} ${className}`}
      style={getStyle()}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};
