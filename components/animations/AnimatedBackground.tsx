'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <motion.div
                className="absolute -top-40 -left-40 w-80 h-80 bg-secondary-bright/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute top-1/2 -right-40 w-96 h-96 bg-secondary-light/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary-cyan/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Animated Grid */}
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(192, 245, 61, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192, 245, 61, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '60px 60px'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    )
}
