'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AffiliateCTA() {
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
            Ready to start earning?
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-300">
            Join to get your affiliate link here
          </p>
          <div className="pt-4">
            <Link
              href="/register?type=affiliate"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
