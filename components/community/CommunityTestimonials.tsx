'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function CommunityTestimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Testimonials</h2>
          <p className="text-lg text-gray-300">500+ Traders <span className="text-secondary-bright">★★★★★</span> 4.9 Reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20"
            >
              <div className="h-32 border-b border-secondary-bright/20 mb-4 flex items-center justify-center">
                <div className="text-xs text-gray-400">Testimonial {i}</div>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-3 w-3 fill-secondary-bright text-secondary-bright" />
                ))}
              </div>
              <p className="text-sm text-gray-300 font-medium">Trader Name</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
