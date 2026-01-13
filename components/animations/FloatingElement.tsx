'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
    children: ReactNode
    className?: string
    duration?: number
    yOffset?: number
}

export default function FloatingElement({
    children,
    className = '',
    duration = 3,
    yOffset = 20
}: FloatingElementProps) {
    return (
        <motion.div
            animate={{
                y: [0, -yOffset, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
