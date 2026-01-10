'use client'

import { motion } from 'framer-motion'

export default function GrowthSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Designed for Growth at Every Level
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you&apos;re refining your process or deepening your understanding, the community adapts to your journey. You&apos;ll find value in both listening and contributing, learning not just from mentors - but from peers who share the same mindset.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
