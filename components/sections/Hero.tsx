'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-screen flex items-center justify-center bg-background-primary">
      {/* Hero Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-hero pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(58,255,58,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(58,255,58,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

      <Section className="relative z-10 text-center">

        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 w-24 h-24 relative flex items-center justify-center"
        >
          {/* Placeholder for the logo from screenshot - Green Hand/Chart Icon */}
          <div className="w-20 h-20 rounded-full bg-green-primary/10 border border-green-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(58,255,58,0.2)]">
            <Image
              src="/images/qtm-logo-white.png"
              alt="Quantum Mastery"
              width={80}
              height={80}
              className="object-contain p-2"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-primary/10 border border-green-primary/20 text-green-primary text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-primary animate-pulse" />
          Now Open for Enrollment
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Master the Markets, <br />
          <span className="text-green-primary drop-shadow-[0_0_20px_rgba(58,255,58,0.4)]">
            Transform Your Future
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A professional ecosystem combining institutional strategies,
          psychology mastery, and disciplined execution.
        </motion.p>

        {/* Stats / Countdown Look */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { value: "08", label: "Modules" },
            { value: "52", label: "Lessons" },
            { value: "50", label: "Hours" },
            { value: "10K", label: "Members" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center bg-background-secondary/50 border border-border-soft px-6 py-3 rounded-card backdrop-blur-sm min-w-[100px]">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px] group">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/intro-video">
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] group">
              <Play className="mr-2 w-4 h-4 fill-current" /> Watch Intro
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted text-sm flex flex-col items-center gap-2"
        >
          <span>Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-green-primary/50 to-transparent"></div>
        </motion.div>

      </Section>
    </div>
  )
}
