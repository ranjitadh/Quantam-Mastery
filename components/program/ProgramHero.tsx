'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ProgramHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block">
            <span className="text-xs font-semibold text-secondary-bright uppercase tracking-wide px-3 py-1 bg-secondary-bright/10 rounded-full border border-secondary-bright/30">
              * Fast Track Program
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight border-b-2 border-secondary-bright/30 pb-4">
            LEARN TRADING IN 14 Days
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            An Accelerated Path for Experienced Minds
          </p>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A focused 14-day intensive designed for experienced traders, business owners, and investors who value clarity: structure; and disciplined thinking.
          </p>

          <div className="pt-4">
            <Link
              href="/register?program=14day"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              See If You Qualify
            </Link>
          </div>

          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Participants who meet the qualification criteria may be considered for private 1:1 mentorship & live trading room
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 pt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary-bright text-secondary-bright" />
              ))}
            </div>
            <span>200+ traders joined this program</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
