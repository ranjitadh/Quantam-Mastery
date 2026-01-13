// Premium Animation Configurations for Quantum Trading Mastery
// 30+ years experience - Professional grade animations

import { Variants } from 'framer-motion'

// Fade and slide animations
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
        }
    }
}

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

// Scale animations
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const scaleInBounce: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6
        }
    }
}

// Rotation animations
export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

// Stagger children animations
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 }
}

export const hoverGlow = {
    scale: 1.02,
    boxShadow: "0 0 30px rgba(192, 245, 61, 0.4)",
    borderColor: "rgba(192, 245, 61, 0.8)",
    transition: { duration: 0.3 }
}

export const hoverRotate = {
    rotate: [0, -5, 5, -5, 0],
    transition: { duration: 0.5 }
}

// Floating animation
export const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

// Pulse animation
export const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

// Glow pulse animation
export const glowPulse = {
    boxShadow: [
        "0 0 20px rgba(192, 245, 61, 0.3)",
        "0 0 40px rgba(192, 245, 61, 0.6)",
        "0 0 20px rgba(192, 245, 61, 0.3)"
    ],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

// Slide reveal animation
export const slideReveal: Variants = {
    hidden: {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0
    },
    visible: {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

// Text reveal animation
export const textReveal: Variants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

// Card flip animation
export const cardFlip: Variants = {
    hidden: {
        rotateY: 90,
        opacity: 0
    },
    visible: {
        rotateY: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

// Viewport animation config
export const viewportConfig = {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
}

// Page transition
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
}
