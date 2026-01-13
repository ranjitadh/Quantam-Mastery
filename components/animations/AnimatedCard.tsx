'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
    children: ReactNode
    className?: string
    delay?: number
    glowColor?: string
}

export default function AnimatedCard({
    children,
    className = '',
    delay = 0,
    glowColor = 'rgba(192, 245, 61, 0.4)'
}: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: `0 20px 60px ${glowColor}`,
                transition: { duration: 0.3 }
            }}
            className={`transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    )
}
