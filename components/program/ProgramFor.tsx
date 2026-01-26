'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'

const targetAudience = [
  'Intermediate & Experienced traders seeking refinement, not basics',
  'Business owners and investors with an established portfolio',
  'Individuals who value structure, efficiency, and accountability',
  'Those looking for clarity, discipline, and process optimization',
]

export default function ProgramFor() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Who This Program Is For?
            </h2>

            <ul className="space-y-4">
              {targetAudience.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-6 w-6 text-secondary-bright flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
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
              className="relative overflow-hidden rounded-2xl border-2 border-secondary-bright/30 shadow-2xl"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.4 }}
              animate={{
                y: [0, -10, 0],
              }}
              style={{
                transition: 'transform 6s ease-in-out infinite'
              }}
            >
              <Image
                src="/images/iamge.png"
                alt="Who This Program Is For"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                className="absolute top-4 right-4 bg-secondary-bright/90 backdrop-blur-sm rounded-lg px-4 py-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-dark font-bold text-sm">FOR YOU</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
