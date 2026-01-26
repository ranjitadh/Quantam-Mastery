'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface PremiumCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode
    variant?: 'default' | 'luxury' | 'glass' | 'gradient'
    hoverable?: boolean
    glowColor?: 'lime' | 'cyan' | 'mint'
    className?: string
}

export default function PremiumCard({
    children,
    variant = 'default',
    hoverable = true,
    glowColor = 'lime',
    className = '',
    ...props
}: PremiumCardProps) {
    const glowColors = {
        lime: 'rgba(192, 245, 61, 0.2)',
        cyan: 'rgba(0, 242, 255, 0.2)',
        mint: 'rgba(135, 213, 147, 0.2)',
    }

    const variantStyles = {
        default: `
      bg-white/5 backdrop-blur-sm 
      border border-white/10 
      rounded-xl 
      shadow-lg
      ${hoverable ? 'hover:border-secondary-bright/30 hover:bg-white/10' : ''}
    `,
        luxury: `
      bg-gradient-to-br from-white/10 via-white/5 to-transparent 
      backdrop-blur-xl 
      border border-white/20 
      rounded-2xl 
      shadow-2xl
      ${hoverable ? 'hover:border-secondary-bright/40' : ''}
    `,
        glass: `
      bg-white/5 backdrop-blur-xl 
      border border-white/10 
      rounded-2xl
      ${hoverable ? 'hover:border-white/20' : ''}
    `,
        gradient: `
      bg-gradient-to-br from-secondary-bright/10 via-transparent to-primary-cyan/10
      backdrop-blur-sm 
      border border-white/20 
      rounded-2xl
      ${hoverable ? 'hover:border-secondary-bright/30' : ''}
    `,
    }

    return (
        <motion.div
            {...props}
            className={`
        ${variantStyles[variant]}
        ${hoverable ? 'transition-all duration-300' : ''}
        relative overflow-hidden
        ${className}
      `}
            whileHover={hoverable ? { y: -4, scale: 1.01 } : undefined}
            style={{
                boxShadow: `
          0 20px 40px -12px rgba(0, 0, 0, 0.4),
          0 0 0 1px rgba(255, 255, 255, 0.1) inset,
          0 0 30px ${glowColors[glowColor]}
        `,
                ...props.style,
            }}
        >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 rounded-[inherit] opacity-50 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${glowColors[glowColor]}, transparent)`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    )
}
