'use client'

import { motion } from 'framer-motion'

interface GlowingOrbProps {
    size?: number
    color?: string
    className?: string
}

export default function GlowingOrb({
    size = 400,
    color = 'rgba(192, 245, 61, 0.15)',
    className = ''
}: GlowingOrbProps) {
    return (
        <motion.div
            className={`absolute rounded-full blur-3xl ${className}`}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            }}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    )
}
