'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ParticleBackground from '../animations/ParticleBackground'
import GlowingOrb from '../animations/GlowingOrb'
import WaveBackground from '../animations/WaveBackground'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 bg-dark overflow-hidden min-h-[90vh] flex items-center">
      {/* Wave Background */}
      <WaveBackground variant="both" opacity={0.4} />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Background gradient glows - neon green */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black"></div>

      {/* Animated Glowing Orbs */}
      <GlowingOrb size={600} color="rgba(192, 245, 61, 0.15)" className="top-0 left-0" />
      <GlowingOrb size={500} color="rgba(135, 213, 147, 0.2)" className="bottom-0 right-0" />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(192, 245, 61, 0.2), transparent)',
          x: '-50%',
          y: '-50%'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(192, 245, 61, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 245, 61, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>

      <div className="relative mx-auto max-w-7xl w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 z-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Quantum Trading
              <br />
              <span className="text-secondary-bright">
                Mastery
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              A unified, education-first ecosystem that combines structured learning, psychological development, performance tracking, community, and competition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary-bright text-dark-black rounded-lg font-semibold text-lg hover:bg-secondary-light transition-all shadow-lg shadow-secondary-bright/50 hover:shadow-secondary-bright/70 hover:scale-105"
              >
                Sign Up
              </Link>
              <Link
                href="/program"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-bright text-white rounded-lg font-semibold text-lg bg-transparent hover:bg-secondary-bright/10 hover:border-secondary-light transition-all"
              >
                Explore Program
              </Link>
            </div>
          </motion.div>

          {/* Right Visual - Brand Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* Floating Dashboard Preview */}
            <motion.div
              className="relative w-full max-w-lg"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl border-4 border-secondary-bright/40 shadow-2xl shadow-secondary-bright/30"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/images/brandkit/QM brand_pages-to-jpg-0007.jpg"
                  alt="Quantum Mastery Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

                {/* Floating Badges */}
                <motion.div
                  className="absolute top-4 right-4 bg-secondary-bright/90 backdrop-blur-sm rounded-lg px-4 py-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-dark font-bold text-sm">LIVE</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 bg-dark/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-secondary-bright/40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <p className="text-secondary-bright font-bold text-sm">Real-Time Analytics</p>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-bright/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-cyan/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
