'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Traders Trained', value: '200+' },
  { label: 'Trading Portfolio', value: '$2M+' },
  { label: 'Winning Rate', value: '80%+' },
]

export default function ExpertsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark text-white border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">LEARN FROM THE EXPERTS</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary-bright/10 backdrop-blur-sm rounded-lg p-6 text-center border border-secondary-bright/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary-bright mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/20"
        >
          <p className="text-center text-gray-300 mb-6">Featured In</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs text-gray-400">Logo {i}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
