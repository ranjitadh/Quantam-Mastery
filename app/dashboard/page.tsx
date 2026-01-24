'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BarChart3, Calendar, Plus, BookOpen, Eye } from 'lucide-react'
import StatsCard from '@/components/dashboard/StatsCard'
import { Card } from '@/components/ui/Card'
import CurrentQuantumWidget from '@/components/dashboard/CurrentQuantumWidget'
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
    color: 'text-green-primary bg-green-primary/10 border-green-primary/20',
  },
  {
    title: 'Create Journal Entry',
    description: 'Document your trading insights',
    icon: BookOpen,
    href: '/dashboard/journal/new',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'View Calendar',
    description: 'Check your trading schedule',
    icon: Calendar,
    href: '/dashboard/calendar',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-8 bg-gradient-to-r from-background-secondary to-background-primary border-green-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp className="w-48 h-48 text-green-primary" />
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Dashboard Overview
              </h1>
              <p className="text-text-secondary text-lg">
                Welcome back! Here&apos;s your trading performance summary.
              </p>
            </div>
          </div>
        </Card>
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
                <Card className="p-6 cursor-pointer group hover:border-green-primary/50 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border ${action.color}`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-green-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-text-secondary">{action.description}</p>
                    </div>
                  </div>
                </Card>
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
          <Card className="p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
              <Link href="/dashboard/activity" className="text-sm text-green-primary hover:text-green-soft transition-colors flex items-center gap-1">
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
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl bg-background-primary/50 border border-white/5 hover:border-white/10 transition-all"
                >
                  <div>
                    <p className="text-white font-medium">{activity.desc}</p>
                    <p className="text-xs text-text-muted mt-1">{activity.time}</p>
                  </div>
                  {activity.profit && (
                    <span className={`text-sm font-bold ${activity.profit.startsWith('+') ? 'text-green-primary' : 'text-red-500'}`}>
                      {activity.profit}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Learning Progress */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <CurrentQuantumWidget />
        </motion.div>
      </div>
    </div>
  )
}
