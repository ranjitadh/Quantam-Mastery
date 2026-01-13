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
      {/* Futuristic Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border-2 border-secondary-bright/30 shadow-2xl"
      >
        <div className="relative h-[300px] lg:h-[400px]">
          <motion.img
            src="/images/download.jpg"
            alt="Futuristic Trading Dashboard"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-8"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Dashboard Overview
            </h1>
            <p className="text-lg text-secondary-bright drop-shadow-md">
              Welcome back! Here&apos;s your trading performance summary.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(192, 245, 61, 0.3)",
              borderColor: "rgba(192, 245, 61, 0.6)"
            }}
            className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20 shadow-sm cursor-pointer transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">{stat.name}</p>
                <motion.p
                  className="text-2xl font-bold text-white mt-2"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.p>
                <p className={`text-sm mt-2 ${stat.changeType === 'positive' ? 'text-secondary-bright' :
                  stat.changeType === 'neutral' ? 'text-gray-400' : 'text-gray-400'
                  }`}>
                  {stat.change}
                </p>
              </div>
              <motion.div
                className={`p-3 rounded-lg ${stat.changeType === 'positive' ? 'bg-secondary-bright/20' :
                  stat.changeType === 'neutral' ? 'bg-secondary-bright/5' : 'bg-secondary-bright/5'
                  }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className={`h-6 w-6 ${stat.changeType === 'positive' ? 'text-secondary-bright' :
                  stat.changeType === 'neutral' ? 'text-gray-400' : 'text-gray-400'
                  }`} />
              </motion.div>
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
