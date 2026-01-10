'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = {
  pro: {
    name: 'Pro Trader',
    tagline: 'For disciplined traders ready to level up their execution.',
    monthlyPrice: 39,
    yearlyDiscount: 20,
    features: [
      'Advanced Dashboard Analytics',
      'Access to Beginner (10 Modules)',
      'Access to Journal',
      'Access to Trade Copier x 2 accounts',
      'Access to Community',
      'Access to Telegram Channel',
    ],
  },
  elite: {
    name: 'Elite Trader',
    tagline: 'For serious traders building consistency and portfolio growth.',
    monthlyPrice: 99,
    yearlyDiscount: 30,
    features: [
      'Includes Everything in Pro, plus:',
      'Intermediate Course (10 Modules)',
      'Weekly Webinar x 2',
      'Access to VIP Telegram',
      'Access to Competition',
      'Access to Leaderboard',
      'Quantum Mastery E-Book',
    ],
  },
  mastery: {
    name: 'Mastery Circle',
    tagline: 'Private Group Mentorship | Limited to 7-10 Traders.',
    description: 'This is a 1-month intensive experience delivered in a small circle of 7-10 committed traders, ensuring focus, accountability, and meaningful interaction with the mentor.',
    availability: 'Seats: Strictly limited',
    price: 1000,
    features: [
      'Includes Everything in Elite, plus:',
      'Group Mentorship Sessions x 4',
      'Group Strategy Sessions x 4',
      'Direct Mentor Interaction x 4',
      'Monthly Live Trading Session x 1',
      'Lifetime Access to QTM Dashboard',
      'Journal - 12 Months Free Access',
      'Copy Trading - 12 Months Access',
      'Competitions - 12 Months Access',
      'Invitation to Private QTM Events',
      'Priority Access to Future Programs',
      'Access to Advanced Course (10 Modules)',
    ],
    note: '* This program requires a minimum of 7-10 participants per circle, organised by the applicants.',
  },
}

export default function ProPlansSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section id="pro-plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Elevate Your Experience with Pro Access
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enhance your foundation with advanced tools designed for serious traders. Upgrade only where it matters — precision, insight, and performance.
          </p>
        </motion.div>

        {/* Billing Toggle - Only for Pro and Elite */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 bg-secondary-bright/10 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-secondary-bright text-dark'
                  : 'text-gray-300 hover:text-secondary-bright'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-secondary-bright text-dark'
                  : 'text-gray-300 hover:text-secondary-bright'
              }`}
            >
              Yearly {billingCycle === 'monthly' && <span className="text-secondary-bright">20%</span>}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pro Trader */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-secondary-bright/20 rounded-lg p-8 bg-secondary-bright/5 hover:border-secondary-bright transition-colors"
          >
            <div className="bg-secondary-bright text-dark px-4 py-2 rounded-md text-center font-semibold mb-4">
              {plans.pro.name}
            </div>
            <p className="text-sm text-gray-300 mb-6">{plans.pro.tagline}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                ${plans.pro.monthlyPrice}
              </span>
              <span className="text-gray-400"> / Monthly</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plans.pro.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary-bright flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mb-4">
              * Save {plans.pro.yearlyDiscount}% with yearly
            </p>
            <Link
              href="/register?plan=pro"
              className="block w-full text-center px-6 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              Upgrade to Pro Trader
            </Link>
          </motion.div>

          {/* Elite Trader */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-secondary-bright rounded-lg p-8 bg-secondary-bright/10 hover:shadow-lg hover:shadow-secondary-bright/20 transition-shadow relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary-bright text-dark px-4 py-1 rounded-full text-xs font-semibold">
              POPULAR
            </div>
            <div className="bg-secondary-bright text-dark px-4 py-2 rounded-md text-center font-semibold mb-4">
              {plans.elite.name}
            </div>
            <p className="text-sm text-gray-300 mb-6">{plans.elite.tagline}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                ${plans.elite.monthlyPrice}
              </span>
              <span className="text-gray-400"> / Monthly</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plans.elite.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary-bright flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mb-4">
              * Save {plans.elite.yearlyDiscount}% with yearly
            </p>
            <Link
              href="/register?plan=elite"
              className="block w-full text-center px-6 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              Unlock Elite Access
            </Link>
          </motion.div>

          {/* Mastery Circle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-2 border-secondary-bright/20 rounded-lg p-8 bg-secondary-bright/5 hover:border-secondary-bright transition-colors"
          >
            <div className="bg-secondary-bright text-dark px-4 py-2 rounded-md text-center font-semibold mb-4">
              {plans.mastery.name}
            </div>
            <p className="text-sm text-gray-300 mb-2 font-semibold">{plans.mastery.tagline}</p>
            <p className="text-xs text-gray-300 mb-4">{plans.mastery.description}</p>
            <p className="text-xs font-semibold text-secondary-bright mb-6">{plans.mastery.availability}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                ${plans.mastery.price}
              </span>
              <span className="text-gray-400"> Per Participant</span>
            </div>
            <ul className="space-y-2 mb-8 max-h-96 overflow-y-auto">
              {plans.mastery.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-secondary-bright flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mb-4">{plans.mastery.note}</p>
            <Link
              href="/register?plan=mastery"
              className="block w-full text-center px-6 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              Build Your Circle
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
