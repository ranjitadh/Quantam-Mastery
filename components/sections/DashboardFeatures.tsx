'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from '../animations/AnimatedBackground'
import WaveBackground from '../animations/WaveBackground'
import FloatingElement from '../animations/FloatingElement'

const tabs = ['COURSE', 'JOURNAL', 'TRADE COPIER', 'COMPETITION', 'LEADERSHIP']

export default function DashboardFeatures() {
  const [activeTab, setActiveTab] = useState('COURSE')

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10 overflow-hidden">
      <WaveBackground variant="top" opacity={0.3} />
      <AnimatedBackground />

      <div className="relative mx-auto max-w-7xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DASHBOARD FEATURES
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to master trading
          </p>
        </motion.div>

        {/* Animated Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab
                ? 'bg-secondary-bright text-dark shadow-lg shadow-secondary-bright/50'
                : 'bg-secondary-bright/10 text-gray-300 hover:bg-secondary-bright/20 border-2 border-secondary-bright/30'
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Dashboard Preview with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-dark via-dark to-black rounded-3xl border-2 border-secondary-bright/40 p-10 min-h-[600px] shadow-2xl shadow-secondary-bright/20"
            style={{ perspective: '1000px' }}
          >
            {/* Floating Badge */}
            <FloatingElement className="absolute top-6 left-6">
              <div className="bg-secondary-bright/20 backdrop-blur-sm border border-secondary-bright/40 rounded-lg px-4 py-2">
                <span className="text-secondary-bright font-bold text-sm">QUANTUM MASTERY</span>
              </div>
            </FloatingElement>

            {/* Content Area */}
            <div className="flex items-center justify-center h-full pt-16">
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Dashboard Image Preview */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden border-2 border-secondary-bright/30 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/images/download-4.png"
                    alt={`${activeTab} Dashboard Preview`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

                  {/* Floating Label */}
                  <motion.div
                    className="absolute top-4 right-4 bg-secondary-bright/90 backdrop-blur-sm rounded-lg px-4 py-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-dark font-bold text-sm">LIVE PREVIEW</span>
                  </motion.div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  {activeTab} Dashboard
                </h3>
                <p className="text-gray-400 mb-6 text-center">Premium trading platform visualization</p>

                {/* Animated Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { label: 'Real-Time', value: 'LIVE', icon: '📊' },
                    { label: 'Performance', value: 'A+', icon: '🚀' },
                    { label: 'Status', value: 'Active', icon: '✓' }
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="bg-gradient-to-br from-secondary-bright/20 to-secondary-bright/5 rounded-2xl p-6 border-2 border-secondary-bright/30 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: 'rgba(192, 245, 61, 0.8)',
                        boxShadow: '0 10px 40px rgba(192, 245, 61, 0.3)'
                      }}
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-secondary-bright mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
