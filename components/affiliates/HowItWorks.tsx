'use client'

import { motion } from 'framer-motion'
import { Share2, MousePointerClick, DollarSign, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Share2,
    title: 'You share your affiliate link',
    description: 'Get your unique referral link to share with your audience',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MousePointerClick,
    title: 'Customer clicks on your link',
    description: 'When someone clicks your link, we track the referral',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: DollarSign,
    title: 'Customer buys product',
    description: 'When they make a purchase, you earn your commission',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Affiliate network tracks conversion',
    description: 'Our system automatically tracks and credits your account',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden border-t border-secondary-bright/10">
      {/* Decorative curve */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-secondary-bright/5 rounded-b-full transform -translate-y-16"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Does it Work?
          </h2>
        </motion.div>

        <div className="relative">
          {/* Flow diagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Arrow connector (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary-bright/40 transform -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-secondary-bright/40"></div>
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-2 border-secondary-bright/20 rounded-xl p-6 text-center hover:border-secondary-bright transition-all relative z-10 h-full shadow-lg hover:shadow-secondary-bright/20"
                  >
                    {/* Icon with gradient background */}
                    <div className="mb-4 flex justify-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
                    <p className="text-xs text-gray-300">{step.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
