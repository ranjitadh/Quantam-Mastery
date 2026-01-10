'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const benefits = [
  {
    title: '1:1 Mentorship',
    description: 'Personal guidance focused on clarity, psychology, and process',
  },
  {
    title: 'Dashboard Analytics',
    items: ['Track your performance and insights in real time', 'Win Rates & P&L breakdowns'],
  },
  {
    title: 'Course Modules',
    description: 'Step-by-step structured learning from foundation to mastery',
  },
  {
    title: 'Trade Journal',
    items: ['Record, reflect, and improve your decisions consistently', 'Unlimited Entries'],
  },
  {
    title: 'Live Trading Room Access',
    description: 'Observe real-time market analysis with Mentor in his trading room',
  },
  {
    title: 'Trade Copier',
    items: ['Sync trades between your own accounts', 'One Master, many linked accounts - Real & Demo'],
  },
  {
    title: 'Trade Competition',
    items: ['Test your skills, compete, and grow with others', 'Enter Monthly Competition & win prizes'],
  },
  {
    title: 'Leadership Ranking',
    description: 'Earn recognition and track your growth within the community',
  },
]

export default function ProgramBenefits() {
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
            What You&apos;ll Gain from This Program
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to learn, apply, and track your progress all in one integrated ecosystem, including personalized 1:1 mentorship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20 hover:border-secondary-bright transition-colors"
            >
              <h3 className="font-semibold text-white mb-3">{benefit.title}</h3>
              {benefit.description && (
                <p className="text-sm text-gray-300">{benefit.description}</p>
              )}
              {benefit.items && (
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-secondary-bright flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
