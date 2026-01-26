import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, className = '', hoverEffect = false }: CardProps) {
    return (
        <div
            className={`
        bg-[#0F1A0F] 
        border border-[rgba(58,255,58,0.15)] 
        rounded-[16px] 
        backdrop-blur-sm 
        shadow-[0_0_30px_rgba(58,255,58,0.05)]
        ${hoverEffect ? 'transition-all duration-300 hover:border-[rgba(58,255,58,0.35)] hover:shadow-[0_0_30px_rgba(58,255,58,0.15)] hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
