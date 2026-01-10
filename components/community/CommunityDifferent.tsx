'use client'

import { motion } from 'framer-motion'

const features = [
  { id: 1, title: 'Feature 1', description: 'What makes this community different' },
  { id: 2, title: 'Feature 2', description: 'Exclusive insights and analysis' },
  { id: 3, title: 'Feature 3', description: 'Real-time market discussions' },
  { id: 4, title: 'Feature 4', description: 'Direct mentor access' },
]

export default function CommunityDifferent() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Makes This Community Different
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-bright/5 rounded-lg p-8 border-2 border-secondary-bright/20 hover:border-secondary-bright transition-colors"
            >
              <div className="text-3xl font-bold text-secondary-bright mb-3">{feature.id}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
