'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const benefits = [
  {
    title: 'Attractive Commissions',
    description: 'Earn up to 30% per referral, with no caps and no hidden conditions.',
  },
  {
    title: 'Global Reach',
    description: 'Share QTM with traders worldwide and receive payouts wherever you are.',
  },
  {
    title: 'Real-Time Performance Tracking',
    description: 'Access transparent, live reporting for clicks, sign-ups, and conversions.',
  },
  {
    title: 'Reliable Monthly Payouts',
    description: 'Withdraw earnings seamlessly via Stripe or Wise.',
  },
]

export default function WhyPartner() {
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
            Why Partner With Quantum Trading Mastery?
          </h2>
          <p className="text-lg text-gray-300">
            Everything you need to promote with confidence and credibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-bright/10 backdrop-blur-sm rounded-lg p-6 border border-secondary-bright/30"
            >
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-secondary-bright flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
