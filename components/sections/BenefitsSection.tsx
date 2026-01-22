'use client'

import { motion } from 'framer-motion'
import AnimatedCard from '../animations/AnimatedCard'
import AnimatedBackground from '../animations/AnimatedBackground'
import WaveBackground from '../animations/WaveBackground'
import ScrollReveal from '../animations/ScrollReveal'
import PremiumCard from '../ui/PremiumCard'

const benefits = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Benefit ${i + 1}`,
  description: `Detailed description of benefit ${i + 1} that you'll gain from this course.`,
}))

export default function BenefitsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10 overflow-hidden">
      <WaveBackground variant="bottom" opacity={0.3} />
      <AnimatedBackground />

      <div className="relative mx-auto max-w-7xl z-10">
        <ScrollReveal className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              BENEFIT: WHAT WILL YOU LEARN?
            </h2>
            <h3 className="text-2xl md:text-3xl text-secondary-bright font-semibold">
              FROM THIS COURSE?
            </h3>
          </motion.div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <PremiumCard
              key={benefit.id}
              variant="luxury"
              glowColor={index % 3 === 0 ? 'lime' : index % 3 === 1 ? 'mint' : 'cyan'}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 group"
            >
              {/* Number Badge with Gradient */}
              <motion.div
                className="relative mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.1 + 0.2
                }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary-bright to-secondary-light shadow-lg shadow-secondary-bright/30">
                  <span className="text-4xl font-bold text-dark-black">
                    {benefit.id}
                  </span>
                </div>

                {/* Decorative Ring */}
                <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-secondary-bright/30 animate-pulse-slow" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary-bright transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-bright/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  )
}
