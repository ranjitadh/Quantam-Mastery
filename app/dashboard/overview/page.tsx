'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BarChart3, Calendar, Plus, BookOpen, Eye } from 'lucide-react'
import StatsCard from '@/components/dashboard/StatsCard'
import { Card } from '@/components/ui/Card' // Using new Card
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
    href: '/dashboard/journal', // Redirect to Journal directly if "New Trade" page doesn't exist
    color: 'text-green-primary bg-green-primary/10 border-green-primary/20',
  },
  {
    title: 'Create Journal Entry',
    description: 'Document your trading insights',
    icon: BookOpen,
    href: '/dashboard/journal',
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

export default function DashboardOverviewPage() {
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

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions - Takes up 2 columns */}
        <div className="lg:col-span-2 space-y-6">
             <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {quickActions.map((action, index) => (
                 <motion.div
                   key={action.title}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.4 + index * 0.1 }}
                 >
                   <Link href={action.href}>
                     <Card className="p-6 cursor-pointer group hover:border-green-primary/50 transition-colors h-full flex flex-col justify-center">
                       <div className="flex items-center gap-4 mb-3">
                         <div className={`p-3 rounded-xl border ${action.color}`}>
                           <action.icon className="w-6 h-6" />
                         </div>
                         <h3 className="text-lg font-bold text-white group-hover:text-green-primary transition-colors">
                           {action.title}
                         </h3>
                       </div>
                       <p className="text-sm text-text-secondary">{action.description}</p>
                     </Card>
                   </Link>
                 </motion.div>
               ))}
            </div>
        </div>

        {/* Learning Progress - Takes up 1 column */}
        <div className="lg:col-span-1">
             <h2 className="text-2xl font-bold text-white mb-6">Learning Path</h2>
             <CurrentQuantumWidget />
        </div>
      </div>
    </div>
  )
}
