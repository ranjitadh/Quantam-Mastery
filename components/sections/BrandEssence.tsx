'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Zap, Award } from 'lucide-react'

export default function BrandEssence() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#1D1D1B] to-[#0B1120]"></div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary-bright/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-cyan/5 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary-bright">Brand</span>
            <span className="text-white"> Essence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our core philosophy that drives every decision and action
          </p>
        </motion.div>

        {/* Premium Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glassmorphism Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(192, 245, 61, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
            }}
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="/images/QM brand_pages-to-jpg-0009.jpg"
                alt="Brand Essence - Vision Statement"
                fill
                className="object-cover"
                priority
              />

              {/* Subtle Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
          </div>

          {/* Decorative Glow Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-32 h-32 bg-secondary-bright/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary-cyan/15 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Core Values - Below Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'Clarity in thought', icon: Target, gradient: 'from-blue-500 to-cyan-500' },
            { title: 'Discipline in action', icon: Zap, gradient: 'from-purple-500 to-pink-500' },
            { title: 'Mastery through process', icon: Award, gradient: 'from-yellow-500 to-orange-500' }
          ].map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-secondary-bright/30 transition-all"
              >
                <div className="mb-4 flex justify-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                <p className="text-white font-semibold text-lg">{value.title}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
