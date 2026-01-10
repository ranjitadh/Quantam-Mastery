'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CommunityCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Join a Focused Trading Community?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Step into a private ecosystem built for clarity, discipline, and growth – alongside 25,000+ traders worldwide.
          </p>
          <div className="pt-4">
            <Link
              href="/plans"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              View Plans
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
