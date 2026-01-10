'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SecurePayouts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Payouts
          </h2>
          <p className="text-lg text-gray-300">Receive your earnings weekly or monthly</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary-bright/5 rounded-lg p-8 border-2 border-secondary-bright/20 flex items-center justify-center min-h-[200px]"
          >
            <div className="text-center text-gray-400">
              <p className="text-sm">Mobile Screen Showing</p>
              <p className="text-sm">Payment Gateway</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary-bright/5 rounded-lg p-8 border-2 border-secondary-bright/20 space-y-4"
          >
            <h3 className="font-semibold text-white mb-4">Supported Payment Methods</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-secondary-bright/10 rounded-md border border-secondary-bright/30">
                <Image
                  src="/images/stripe.webp"
                  alt="Stripe"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span className="font-medium text-white">Stripe</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-bright/10 rounded-md border border-secondary-bright/30">
                <Image
                  src="/images/wise_logo.png"
                  alt="Wise"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span className="font-medium text-white">Wise</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
