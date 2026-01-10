'use client'

import { motion } from 'framer-motion'
import { Trophy, Calendar, Users } from 'lucide-react'

export default function CompetitionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Trading Competitions</h1>
        <p className="text-gray-300 mt-2">Test your skills, compete, and grow with others</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-secondary-bright/5 rounded-lg border-2 border-secondary-bright/20 p-6 hover:border-secondary-bright transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-6 w-6 text-secondary-bright" />
              <h3 className="text-lg font-semibold text-white">Monthly Competition {i}</h3>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="h-4 w-4" />
                <span>January 2024</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Users className="h-4 w-4" />
                <span>50 participants</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Your Rank</span>
                <span className="font-semibold text-white">-</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Prize Pool</span>
                <span className="font-semibold text-secondary-bright">$5,000</span>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors">
              Enter Competition
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
