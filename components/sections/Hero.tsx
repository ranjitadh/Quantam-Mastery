'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Users } from 'lucide-react'
import ParticleBackground from '../animations/ParticleBackground'
import GlowingOrb from '../animations/GlowingOrb'
import WaveBackground from '../animations/WaveBackground'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[95vh] flex items-center">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#1D1D1B] to-[#0B1120]"></div>

      {/* Wave Background */}
      <WaveBackground variant="both" opacity={0.3} />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Glowing Orbs - Enhanced */}
      <GlowingOrb size={700} color="rgba(192, 245, 61, 0.12)" className="top-0 left-0" />
      <GlowingOrb size={600} color="rgba(135, 213, 147, 0.15)" className="bottom-0 right-0" />

      {/* Center Glow Pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(192, 245, 61, 0.15), transparent 70%)',
          x: '-50%',
          y: '-50%'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Premium Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(192, 245, 61, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 245, 61, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>

      <div className="relative mx-auto max-w-7xl w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-20"
          >
            {/* Main Heading - Clean Gradient Text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white mb-2">Quantum Trading</span>
              <span className="block bg-gradient-to-r from-secondary-bright via-secondary-light to-secondary-bright bg-clip-text text-transparent">
                Mastery
              </span>
            </h1>

            {/* Description - Clean without glass */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              A unified, <span className="text-secondary-bright font-semibold">education-first ecosystem</span> that combines structured learning, psychological development, performance tracking, community, and competition.
            </p>

            {/* Stats Row - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Users, label: '10K+', sublabel: 'Active Traders' },
                { icon: TrendingUp, label: '95%', sublabel: 'Success Rate' },
                { icon: Sparkles, label: '24/7', sublabel: 'Support' }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-secondary-bright/30 transition-all"
                  >
                    <Icon className="w-6 h-6 text-secondary-bright mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-xs text-gray-400">{stat.sublabel}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons - Cleaner Design */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-secondary-bright to-secondary-light text-dark-black hover:shadow-lg hover:shadow-secondary-bright/30 transition-all hover:-translate-y-1"
              >
                <span className="relative z-10">Get Started</span>
              </Link>

              <Link
                href="/program"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 border-secondary-bright/30 text-white hover:bg-secondary-bright/10 hover:border-secondary-bright transition-all"
              >
                Explore Program
              </Link>
            </div>

            {/* Trust Indicators - Simplified */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 pt-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-gradient-to-br from-secondary-bright/80 to-secondary-light/80"></div>
                  ))}
                </div>
                <span>Trusted by 10,000+ traders</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Premium Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] md:h-[650px] flex items-center justify-center"
          >
            {/* Floating Dashboard Preview with Premium Glass Effect */}
            <motion.div
              className="relative w-full max-w-lg"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(192, 245, 61, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(192, 245, 61, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/brandkit/QM brand_pages-to-jpg-0007.jpg"
                  alt="Quantum Mastery Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>

                {/* Premium Floating Badges */}
                <motion.div
                  className="absolute top-4 right-4 glass rounded-xl px-4 py-2 border border-secondary-bright/40"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-white font-bold text-sm">LIVE</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3 border border-secondary-bright/40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary-bright" />
                    <p className="text-white font-semibold text-sm">Real-Time Analytics</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Glow Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-bright/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-cyan/15 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
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
