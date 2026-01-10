'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 pb-8 border-b border-secondary-bright/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-secondary-bright/20 to-secondary-bright/10 flex items-center justify-center flex-shrink-0 border-2 border-secondary-bright/30">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">Khan Hazara</h3>
              <p className="text-gray-300">Founder of Quantum Trading Mastery</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Testimonials</h2>
          <p className="text-lg text-gray-300">TRUSTED BY 200+ traders who choose Quantum Mastery</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-secondary-bright text-secondary-bright" />
                ))}
              </div>
              <div className="h-24 bg-secondary-bright/10 rounded mb-4 flex items-center justify-center border border-secondary-bright/20">
                <span className="text-xs text-gray-400">Testimonial {i}</span>
              </div>
              <p className="text-sm text-gray-300 font-medium">Trader Name</p>
              <p className="text-xs text-gray-400">Trader Level</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
