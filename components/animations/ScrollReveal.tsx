'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const y = useTransform(scrollYProgress, [0, 1], [100, 0])

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, y }}
            transition={{ duration: 0.6, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
