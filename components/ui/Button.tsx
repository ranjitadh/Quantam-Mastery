import React from 'react';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-b from-[#3AFF3A] to-[#22C522] text-[#050705] shadow-primary-glow hover:-translate-y-[1px] hover:shadow-hover-glow rounded-[12px]",
        outline: "bg-transparent border border-[#3AFF3A] text-[#3AFF3A] hover:bg-[#3AFF3A]/10 hover:shadow-[0_0_20px_rgba(58,255,58,0.25)] rounded-[12px]",
        ghost: "text-[#A8B0A8] hover:text-[#3AFF3A] hover:bg-[#3AFF3A]/5 rounded-lg"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
