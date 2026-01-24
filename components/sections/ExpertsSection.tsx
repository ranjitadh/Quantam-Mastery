'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function ExpertsSection() {
  return (
    <Section className="bg-background-secondary border-t border-border-soft">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-sm mx-auto md:max-w-none md:mx-0 order-2 md:order-1"
        >
          <div className="absolute inset-0 bg-green-primary/20 blur-[60px] rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-green-primary/30 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&h=1000&fit=crop&crop=face" // Assuming this exists or using placeholder
              alt="Founder"
              width={500}
              height={600}
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Khan Hazara</h3>
              <p className="text-green-primary font-medium text-sm md:text-base mt-1">Head Mentor & Founder</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn from Real <br />
            <span className="text-green-primary">Market Experience</span>
          </h2>

          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              &quot;I didn&apos;t start with a silver spoon. I built my edge through thousands of hours of chart time, analyzing failures, and refining a system that actually works in live conditions.&quot;
            </p>
            <p>
              Quantum Mastery isn&apos;t just a course—it&apos;s the mentorship I wish I had when I started. We focus on the two things that matter most: <strong className="text-white">Capital Protection</strong> and <strong className="text-white">Asymmetric Upside</strong>.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="bg-background-primary p-4 rounded-xl border border-border-soft text-center min-w-[120px]">
              <div className="text-2xl font-bold text-white">7+</div>
              <div className="text-xs text-text-muted">Years Exp.</div>
            </div>
            <div className="bg-background-primary p-4 rounded-xl border border-border-soft text-center min-w-[120px]">
              <div className="text-2xl font-bold text-white">$10M+</div>
              <div className="text-xs text-text-muted">Managed</div>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
