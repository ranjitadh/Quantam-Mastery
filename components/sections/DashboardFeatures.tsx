'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const tabs = ['COURSE', 'JOURNAL', 'TRADE COPIER', 'COMPETITION', 'LEADERSHIP']

export default function DashboardFeatures() {
  const [activeTab, setActiveTab] = useState('COURSE')

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DASHBOARD FEATURES
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-secondary-bright text-dark'
                  : 'bg-secondary-bright/10 text-gray-300 hover:bg-secondary-bright/20 border border-secondary-bright/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative bg-gradient-to-br from-dark to-black rounded-lg border-2 border-secondary-bright/30 p-8 min-h-[500px]"
        >
          <div className="absolute top-4 left-4 text-secondary-bright font-bold text-sm">
            QUANTUM MASTERY
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-400">
              <svg className="w-24 h-24 mx-auto mb-4 text-secondary-bright/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-sm mb-2">Dashboard visual view for each section</p>
              <p className="text-xs">(Similar to traderwaves.com)</p>
              <p className="text-xs mt-2 text-gray-500">Active Tab: {activeTab}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
