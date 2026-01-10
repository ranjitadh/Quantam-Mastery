'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: 1, title: 'Sign Up', description: 'Create your account in seconds' },
  { number: 2, title: 'Connect Your Trading Account', description: 'Link your MT4/MT5 broker account' },
  { number: 3, title: 'Start Trading / Start Learning', description: 'Begin your journey immediately' },
]

export default function OnboardingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-secondary-bright/5 rounded-lg border-2 border-secondary-bright/20 p-8 shadow-lg">
              <div className="aspect-video w-full bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-sm font-medium mb-2">Hello, Quantum Mastery</p>
                  <div className="h-32 w-full bg-secondary-bright/20 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Effortless Onboarding
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
                Set Up Fast in Minutes
              </h3>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary-bright text-dark flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-1">{step.title}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
