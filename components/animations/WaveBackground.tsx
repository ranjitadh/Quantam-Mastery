'use client'

import { motion } from 'framer-motion'

interface WaveBackgroundProps {
    variant?: 'top' | 'bottom' | 'both'
    opacity?: number
}

export default function WaveBackground({ variant = 'both', opacity = 0.3 }: WaveBackgroundProps) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top Waves */}
            {(variant === 'top' || variant === 'both') && (
                <motion.div
                    className="absolute top-0 left-0 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity }}
                    transition={{ duration: 1 }}
                >
                    {/* Wave 1 - Lime Green */}
                    <motion.svg
                        className="absolute top-0 left-0 w-full"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ height: '300px' }}
                        animate={{
                            x: [0, -50, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <path
                            fill="rgba(192, 245, 61, 0.15)"
                            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        />
                    </motion.svg>

                    {/* Wave 2 - Mint Green */}
                    <motion.svg
                        className="absolute top-0 left-0 w-full"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ height: '250px' }}
                        animate={{
                            x: [0, 50, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <path
                            fill="rgba(135, 213, 147, 0.1)"
                            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        />
                    </motion.svg>
                </motion.div>
            )}

            {/* Bottom Waves */}
            {(variant === 'bottom' || variant === 'both') && (
                <motion.div
                    className="absolute bottom-0 left-0 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity }}
                    transition={{ duration: 1 }}
                >
                    {/* Wave 3 - Lime Green */}
                    <motion.svg
                        className="absolute bottom-0 left-0 w-full"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ height: '300px' }}
                        animate={{
                            x: [0, 50, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <path
                            fill="rgba(192, 245, 61, 0.15)"
                            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        />
                    </motion.svg>

                    {/* Wave 4 - Mint Green */}
                    <motion.svg
                        className="absolute bottom-0 left-0 w-full"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ height: '250px' }}
                        animate={{
                            x: [0, -50, 0],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <path
                            fill="rgba(135, 213, 147, 0.1)"
                            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        />
                    </motion.svg>
                </motion.div>
            )}
        </div>
    )
}
