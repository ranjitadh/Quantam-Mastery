'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandStory() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-secondary-bright">Brand</span>
                <span className="text-white"> Story</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Quantum Trading Mastery (QTM) was created to bring clarity, structure, and simplicity to trading education. Built on real trading experience, it focuses on psychology, discipline, and intentional learning rather than noise or shortcuts.
              </p>
              <p>
                QTM has evolved into a unified ecosystem that combines education, journaling, performance tracking, copy trading, and competitions in one seamless platform. This all-in-one environment helps traders learn, apply, and reflect with clarity, building confidence, consistency, and long-term growth.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/QM brand_pages-to-jpg-0008.jpg"
                alt="Quantum Trading Mastery Brand Story"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
