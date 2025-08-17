"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const ModernButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  let variantClasses = "";
  let sizeClasses = "";

  // Variants
  if (variant === "default") {
    variantClasses =
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl";
  } else if (variant === "outline") {
    variantClasses =
      "border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800";
  } else if (variant === "ghost") {
    variantClasses =
      "bg-transparent text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800";
  }

  // Sizes
  if (size === "sm") {
    sizeClasses = "px-3 py-1 text-sm";
  } else if (size === "md") {
    sizeClasses = "px-5 py-2 text-base";
  } else if (size === "lg") {
    sizeClasses = "px-7 py-3 text-lg";
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 transform hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed 
        ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ModernButton;
