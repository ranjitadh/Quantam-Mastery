'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const ecosystemFeatures = [
  'Education modules',
  'Journaling and performance analytics',
  'Trading competitions',
  'Mentorship pathways',
]

export default function EcosystemSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More Than a Community - An Ecosystem
          </h2>
          <p className="text-lg text-gray-300">
            Your community access connects seamlessly with:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary-bright/10 border-2 border-secondary-bright/30 text-white rounded-lg p-8 space-y-4"
          >
            <ul className="space-y-3">
              {ecosystemFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary-bright flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="pt-4 text-gray-300">
              Everything works together to support clarity, consistency, and confidence.
            </p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-full aspect-square border-4 border-secondary-bright/40 shadow-2xl shadow-secondary-bright/20"
            >
              <img
                src="/images/download-2.jpg"
                alt="Futuristic Trading Ecosystem - Synchronized Platforms"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-8 text-center"
              >
                <p className="text-base font-bold text-secondary-bright mb-1 drop-shadow-lg">
                  Integrated Ecosystem
                </p>
                <p className="text-sm text-gray-200 drop-shadow-md">
                  All tools synchronized
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
