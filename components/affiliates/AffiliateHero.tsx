'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AffiliateHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <div className="inline-block">
            <span className="text-xs font-semibold text-secondary-bright uppercase tracking-wide px-3 py-1 bg-secondary-bright/10 rounded-full border border-secondary-bright/30">
              * Affiliate Program
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Refer Friends, Earn Rewards
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join The Quantum Mastery affiliate program to earn 30% commission and unlock exclusive Rewards
          </p>

          {/* Reward Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="border-2 border-secondary-bright/20 rounded-lg p-6 text-center bg-secondary-bright/5">
              <h3 className="font-semibold text-white mb-2">Commission Cap</h3>
              <p className="text-sm text-gray-300">No Limit</p>
            </div>
            <div className="border-2 border-secondary-bright rounded-lg p-6 text-center bg-secondary-bright/10">
              <h3 className="font-semibold text-white mb-2">Commission Rate</h3>
              <p className="text-3xl font-bold text-secondary-bright">30%</p>
            </div>
            <div className="border-2 border-secondary-bright/20 rounded-lg p-6 text-center bg-secondary-bright/5">
              <h3 className="font-semibold text-white mb-2">No of Affiliates</h3>
              <p className="text-sm text-gray-300">Unlimited</p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/register?type=affiliate"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              Become An Affiliate
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
