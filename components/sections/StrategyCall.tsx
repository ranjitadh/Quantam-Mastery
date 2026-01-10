'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function StrategyCall() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary-bright/10 rounded-lg p-8 md:p-12 border-2 border-secondary-bright/30 shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Have a conversation with us and get a custom plan designed for you. Book a strategy call so we can understand your goals and map the right path forward.
          </p>
          <Link
            href="/book-strategy-call"
            className="inline-block px-6 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors mb-4"
          >
            Book Strategy Call
          </Link>
          <p className="text-sm text-gray-400">
            This CTA will redirect to branded calendar page for date and time selection. After booking, clients information forms has to be submitted by clients, around 10 questions to understand their status before the call.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
