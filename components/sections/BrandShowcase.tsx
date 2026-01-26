'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedCard from '../animations/AnimatedCard'
import FloatingElement from '../animations/FloatingElement'

const brandImages = [
    {
        src: '/images/brandkit/QM brand_pages-to-jpg-0007.jpg',
        title: 'Trading Dashboard',
        description: 'Real-time analytics and performance tracking'
    },
    {
        src: '/images/brandkit/QM brand_pages-to-jpg-0008.jpg',
        title: 'Journal Calendar',
        description: 'Color-coded profit/loss tracking'
    },
    {
        src: '/images/brandkit/QM brand_pages-to-jpg-0009.jpg',
        title: 'Trade Copier',
        description: 'Sync trades across multiple accounts'
    },
    {
        src: '/images/brandkit/QM brand_pages-to-jpg-0010.jpg',
        title: 'Competition Leaderboard',
        description: 'Compete with traders worldwide'
    }
]

export default function BrandShowcase() {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-bright/5 to-transparent" />

            <div className="relative mx-auto max-w-7xl z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Platform Features
                    </h2>
                    <p className="text-xl text-gray-300">
                        Everything you need to master trading in one place
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {brandImages.map((image, index) => (
                        <AnimatedCard
                            key={index}
                            delay={index * 0.15}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl border-2 border-secondary-bright/30 bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5">
                                {/* Image Container */}
                                <motion.div
                                    className="relative h-[400px] overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                    {/* Floating Badge */}
                                    <FloatingElement className="absolute top-4 right-4">
                                        <div className="bg-secondary-bright/90 backdrop-blur-sm rounded-lg px-4 py-2">
                                            <span className="text-dark font-bold text-sm">PREMIUM</span>
                                        </div>
                                    </FloatingElement>
                                </motion.div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                                    <p className="text-gray-300">{image.description}</p>
                                </div>
                            </div>
                        </AnimatedCard>
                    ))}
                </div>

                {/* Additional Brand Images Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">
                        More Platform Views
                    </h3>
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[11, 12, 13, 14, 15, 16, 17, 18].map((num, index) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                className="relative overflow-hidden rounded-xl border-2 border-secondary-bright/20 cursor-pointer group"
                            >
                                <img
                                    src={`/images/brandkit/QM brand_pages-to-jpg-00${num}.jpg`}
                                    alt={`Platform view ${num}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-secondary-bright/0 group-hover:bg-secondary-bright/20 transition-all duration-300" />
                            </motion.div>
                        ))}
                    </div> */}
                </motion.div>
            </div>
        </section>
    )
}
