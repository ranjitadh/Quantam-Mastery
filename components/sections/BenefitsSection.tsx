'use client'

import { motion } from 'framer-motion'

const benefits = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Benefit ${i + 1}`,
  description: `Detailed description of benefit ${i + 1} that you'll gain from this course.`,
}))

export default function BenefitsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            BENEFIT: WHAT WILL YOU LEARN?
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-300">FROM THIS COURSE?</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20 hover:border-secondary-bright transition-colors"
            >
              <div className="text-4xl font-bold text-secondary-bright mb-4">{benefit.id}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
