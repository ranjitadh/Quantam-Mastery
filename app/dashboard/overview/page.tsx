'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BarChart3, Calendar, Plus, BookOpen, Eye } from 'lucide-react'
import StatsCard from '@/components/dashboard/StatsCard'
import PremiumCard from '@/components/ui/PremiumCard'
import Link from 'next/link'

const stats = [
  {
    name: 'Total Trades',
    value: '24',
    icon: BarChart3,
    change: '+12%',
    changeType: 'positive' as const,
  },
  {
    name: 'Win Rate',
    value: '68%',
    icon: TrendingUp,
    change: '+5%',
    changeType: 'positive' as const,
  },
  {
    name: 'Total P&L',
    value: '$12,450',
    icon: DollarSign,
    change: '+18%',
    changeType: 'positive' as const,
  },
  {
    name: 'Journal Entries',
    value: '18',
    icon: Calendar,
    change: '+3',
    changeType: 'positive' as const,
  },
]

const quickActions = [
  {
    title: 'Add New Trade',
    description: 'Record your latest trading activity',
    icon: Plus,
    href: '/dashboard/trades/new',
    color: 'from-secondary-bright to-secondary-light',
  },
  {
    title: 'Create Journal Entry',
    description: 'Document your trading insights',
    icon: BookOpen,
    href: '/dashboard/journal/new',
    color: 'from-primary-cyan to-blue-500',
  },
  {
    title: 'View Calendar',
    description: 'Check your trading schedule',
    icon: Calendar,
    href: '/dashboard/calendar',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8 max-w-7xl">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl"
      >
        <PremiumCard variant="gradient" className="p-8" glowColor="lime">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                Dashboard Overview
              </h1>
              <p className="text-gray-400 text-lg">
                Welcome back! Here's your trading performance summary.</p>
            </div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-6xl"
            >
              📊
            </motion.div>
          </div>
        </PremiumCard>
      </motion.div>

      {/* Stats Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={stat.name}
              {...stat}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link href={action.href}>
                <PremiumCard
                  variant="luxury"
                  hoverable={true}
                  className="p-6 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${action.color} shadow-lg`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-secondary-bright transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-400">{action.description}</p>
                    </div>
                  </div>
                </PremiumCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <PremiumCard variant="luxury" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
              <Link href="/dashboard/activity" className="text-sm text-secondary-bright hover:text-secondary-light transition-colors flex items-center gap-1">
                View All
                <Eye className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { type: 'Trade', desc: 'EUR/USD Long Position', time: '2 hours ago', profit: '+$125' },
                { type: 'Journal', desc: 'Market Analysis Entry', time: '5 hours ago', profit: null },
                { type: 'Trade', desc: 'GBP/JPY Short Position', time: '1 day ago', profit: '-$45' },
              ].map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                >
                  <div>
                    <p className="text-white font-medium">{activity.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                  {activity.profit && (
                    <span className={`text-sm font-semibold ${activity.profit.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {activity.profit}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </PremiumCard>
        </motion.div>

        {/* Learning Progress */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <PremiumCard variant="luxury" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Learning Progress</h2>
              <Link href="/dashboard/course" className="text-sm text-secondary-bright hover:text-secondary-light transition-colors flex items-center gap-1">
                Continue
                <Eye className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Technical Analysis Basics', progress: 75 },
                { title: 'Risk Management', progress: 45 },
                { title: 'Trading Psychology', progress: 30 },
              ].map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-medium text-sm">{course.title}</p>
                    <span className="text-secondary-bright text-sm font-semibold">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-secondary-bright to-secondary-light rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </div>
  )
}
