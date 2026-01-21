import React from 'react';


export const Textarea = ({
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <textarea
      disabled={disabled}
      className={`w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E69419]/20 focus:border-[#E69419] transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  );
};
