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
            <div className="aspect-square w-full rounded-full bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5 border-4 border-secondary-bright/20 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm font-medium mb-2">Dashboard Image</p>
                <p className="text-xs">community feature</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
