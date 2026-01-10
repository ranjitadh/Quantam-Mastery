'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BarChart3, Calendar } from 'lucide-react'

const stats = [
  {
    name: 'Total Trades',
    value: '0',
    icon: BarChart3,
    change: '+0%',
    changeType: 'neutral' as const,
  },
  {
    name: 'Win Rate',
    value: '0%',
    icon: TrendingUp,
    change: '+0%',
    changeType: 'positive' as const,
  },
  {
    name: 'Total P&L',
    value: '$0.00',
    icon: DollarSign,
    change: '+0%',
    changeType: 'neutral' as const,
  },
  {
    name: 'Active Journal Entries',
    value: '0',
    icon: Calendar,
    change: '+0',
    changeType: 'positive' as const,
  },
]

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-gray-300 mt-2">Welcome back! Here&apos;s your trading performance summary.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">{stat.name}</p>
                <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                <p className={`text-sm mt-2 ${
                  stat.changeType === 'positive' ? 'text-secondary-bright' :
                  stat.changeType === 'neutral' ? 'text-gray-400' : 'text-gray-400'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${
                stat.changeType === 'positive' ? 'bg-secondary-bright/20' :
                stat.changeType === 'neutral' ? 'bg-secondary-bright/5' : 'bg-secondary-bright/5'
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.changeType === 'positive' ? 'text-secondary-bright' :
                  stat.changeType === 'neutral' ? 'text-gray-400' : 'text-gray-400'
                }`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-secondary-bright/10 hover:bg-secondary-bright/20 rounded-md transition-colors text-gray-300 hover:text-white">
              Add New Trade
            </button>
            <button className="w-full text-left px-4 py-3 bg-secondary-bright/10 hover:bg-secondary-bright/20 rounded-md transition-colors text-gray-300 hover:text-white">
              Create Journal Entry
            </button>
            <button className="w-full text-left px-4 py-3 bg-secondary-bright/10 hover:bg-secondary-bright/20 rounded-md transition-colors text-gray-300 hover:text-white">
              View Calendar
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="text-center py-8 text-gray-400">
            <p>No recent activity</p>
            <p className="text-sm mt-2">Start trading to see your activity here</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
