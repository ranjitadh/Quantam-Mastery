'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function FreePlanSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            A Free Plan That Actually Adds Value
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Start with a powerful free toolkit designed for serious traders. Track your trades with unlimited journaling, screenshots, performance stats, and core analytics all in one place. When you&apos;re ready to go deeper, unlock advanced tools, automation, and professional-grade insights with our Pro plans.
          </p>

          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            No trials. No hidden limits. No credit card required. Just clarity, structure, and tools that grow with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors"
            >
              Join Now For Free
            </Link>
            <Link
              href="#pro-plans"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary-bright text-white rounded-md font-medium hover:bg-secondary-bright/10 transition-colors"
            >
              Explore Add-Ons
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="pt-4">
            <p className="text-sm text-gray-400">
              This CTA will redirect to this section
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
