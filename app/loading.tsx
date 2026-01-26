'use client'

import { motion } from 'framer-motion'

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[#0B1120] flex items-center justify-center z-[100]">
            <div className="relative">
                {/* Pulsing Orb */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-16 h-16 rounded-full bg-secondary-bright blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

                {/* Spinning Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-24 h-24 border-t-2 border-l-2 border-secondary-bright rounded-full"
                />

                {/* Inner static Logo or Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-white/50" />
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 font-mono text-sm tracking-widest uppercase"
            >
                Initializing Quantum Field...
            </motion.p>
        </div>
    )
}
