'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MissionStatement() {
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
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-secondary-bright">Mission</span>
                <span className="text-white"> statement</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              To provide a unified, education-first eco-system that combines structured learning, psychological development, performance tracking, community, and competition, helping individuals grow with clarity, consistency, and confidence over time.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/QM brand_pages-to-jpg-0007.jpg"
                alt="Mission Statement - Unified Education Ecosystem"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
