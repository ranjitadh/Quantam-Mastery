'use client'

import { motion } from 'framer-motion'
import AnimatedCard from '../animations/AnimatedCard'
import AnimatedBackground from '../animations/AnimatedBackground'
import WaveBackground from '../animations/WaveBackground'
import ScrollReveal from '../animations/ScrollReveal'

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
            <AnimatedCard
              key={benefit.id}
              delay={index * 0.1}
              className="bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5 rounded-2xl p-8 border-2 border-secondary-bright/20 backdrop-blur-sm"
            >
              <motion.div
                className="text-6xl font-bold text-secondary-bright mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
              >
                {benefit.id}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
