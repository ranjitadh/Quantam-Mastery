'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ChatSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary-bright/10 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-secondary-bright/30 text-center"
        >
          <h3 className="text-secondary-bright text-lg font-semibold mb-4">Chat with Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Deciding On a Plan?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Have a chat with Us, We will make a custom plan that fits your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
          >
            Chat with Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
