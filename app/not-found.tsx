'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Compass } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-bright/5 rounded-full blur-[100px]"></div>

            <div className="relative z-10 text-center max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-secondary-light to-secondary-bright bg-clip-text text-transparent opacity-20 select-none">
                        404
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative -mt-12 md:-mt-16"
                >
                    <div className="w-20 h-20 mx-auto bg-dark border-2 border-secondary-bright/30 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-secondary-bright/10 backdrop-blur-xl">
                        <Compass className="w-10 h-10 text-secondary-bright animate-spin-slow" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Signal Lost in the <span className="text-secondary-bright">Quantum Realm</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
                        The page you&apos;re looking for seems to have drifted into an alternate dimension. Let&apos;s get you back on course.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary-bright to-secondary-light text-dark-black font-bold rounded-xl hover:shadow-lg hover:shadow-secondary-bright/30 transition-all hover:-translate-y-1 group"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Return to Base
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
