'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function CommunityHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Join 500+ Trading Legends
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with experienced professionals, engage in real-time market discussions, and be part of an exclusive private community.
          </p>

          <div className="pt-4">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              Explore Community
            </Link>
          </div>

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
