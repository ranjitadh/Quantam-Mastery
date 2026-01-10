'use client'

import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Award } from 'lucide-react'

const leaders = [
  { rank: 1, name: 'Trader Alpha', score: 125000, change: '+12.5%' },
  { rank: 2, name: 'Trader Beta', score: 118000, change: '+11.8%' },
  { rank: 3, name: 'Trader Gamma', score: 112000, change: '+11.2%' },
  { rank: 4, name: 'Trader Delta', score: 98000, change: '+9.8%' },
  { rank: 5, name: 'Trader Epsilon', score: 95000, change: '+9.5%' },
]

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Leaderboard</h1>
        <p className="text-gray-300 mt-2">Earn recognition and track your growth within the community</p>
      </div>

      <div className="bg-secondary-bright/5 rounded-lg border-2 border-secondary-bright/20 overflow-hidden">
        <div className="p-6 border-b border-secondary-bright/20 bg-secondary-bright/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Top Traders</h2>
            <select className="px-4 py-2 border-2 border-secondary-bright/30 bg-dark text-white rounded-md text-sm">
              <option>This Month</option>
              <option>This Year</option>
              <option>All Time</option>
            </select>
          </div>
        </div>

        <div className="divide-y divide-secondary-bright/20">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-6 flex items-center gap-4 ${
                leader.rank <= 3 ? 'bg-gradient-to-r from-secondary-bright/10 to-transparent' : ''
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-bright/20 font-bold text-white">
                {leader.rank <= 3 ? (
                  <Trophy className={`h-6 w-6 ${
                    leader.rank === 1 ? 'text-secondary-bright' :
                    leader.rank === 2 ? 'text-gray-400' :
                    'text-secondary-light'
                  }`} />
                ) : (
                  leader.rank
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{leader.name}</span>
                  {leader.rank <= 3 && (
                    <Award className="h-4 w-4 text-secondary-bright" />
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-gray-300">
                    Score: <span className="font-medium text-white">${leader.score.toLocaleString()}</span>
                  </span>
                  <span className="flex items-center gap-1 text-sm text-secondary-bright">
                    <TrendingUp className="h-4 w-4" />
                    {leader.change}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 border-t border-secondary-bright/20 bg-secondary-bright/10 text-center text-sm text-gray-300">
          <p>Your rank will appear here once you start participating in competitions</p>
        </div>
      </div>
    </div>
  )
}
