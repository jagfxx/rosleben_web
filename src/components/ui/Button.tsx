"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-[#d93a5e] shadow-sm shadow-primary/20",
  secondary:
    "bg-primary-light/20 text-primary hover:bg-primary-light/30",
  outline:
    "border border-primary/30 bg-transparent text-primary hover:border-primary hover:bg-primary/5",
  ghost: "bg-transparent text-foreground hover:bg-background",
  white: "bg-white text-primary hover:bg-white/90 shadow-sm",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs tracking-wide",
  md: "px-7 py-3 text-sm tracking-wide",
  lg: "px-9 py-3.5 text-sm tracking-wider",
  xl: "px-12 py-4.5 text-base tracking-widest",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold uppercase
        transition-all duration-300
        hover:scale-[1.02] active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
