'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  'Visualise your trading on daily, weekly and monthly basis.',
  'Color coded profit/loss days',
  'Click any day to view trades details',
  'Export Data for your portfolio purposes or tax compliance',
  'Identify patterns in wins and losses to refine your trading schedule and boost profitability',
  'Journal your trades and mindset like a professional trader',
  'Create a portfolio designed for sustainability, consistency, and growth',
]

export default function CalendarJournaling() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        {/* Compatibility Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block bg-secondary-bright text-dark px-6 py-2 rounded-full text-sm font-medium">
            Compatible with MT5 / MT4 brokers
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Build a Strong, Scalable Trading Portfolio
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                WITH CALENDER JOURNALING
              </h3>
            </div>

            <p className="text-lg text-gray-600">
              Our intelligent calendar view helps you identify patterns in your trading behavior and optimize your schedule for maximum winning rate.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-secondary-bright/5 rounded-lg border-2 border-secondary-bright/30 p-8 shadow-lg">
              <div className="aspect-square w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Monthly Calendar View</p>
                  <p className="text-xs text-gray-500 mt-1">of Journal Image</p>
                  <p className="text-xs text-gray-400 mt-1">(Similar to Traderwaves.com)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
