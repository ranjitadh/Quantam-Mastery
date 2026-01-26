'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
    delay?: number
    duration?: number
    className?: string
    once?: boolean
}

export default function ScrollRevealEnhanced({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (once) {
                        observer.disconnect()
                    }
                } else if (!once) {
                    setIsVisible(false)
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [once])

    const directions = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { y: 0, x: 50 },
        right: { y: 0, x: -50 },
        fade: { y: 0, x: 0 },
    }

    const initial = {
        opacity: 0,
        ...directions[direction],
    }

    const animate = {
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : directions[direction].x,
        y: isVisible ? 0 : directions[direction].y,
    }

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{
                duration,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Export a hook version for custom implementations
export function useScrollReveal(options?: { threshold?: number; once?: boolean }) {
    const ref = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (options?.once !== false) {
                        observer.disconnect()
                    }
                } else if (options?.once === false) {
                    setIsVisible(false)
                }
            },
            {
                threshold: options?.threshold || 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [options?.threshold, options?.once])

    return { ref, isVisible }
}
