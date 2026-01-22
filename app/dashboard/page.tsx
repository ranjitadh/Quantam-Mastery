'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getDashboardSummary } from '@/app/actions/dashboard'
import CurrentQuantumWidget from '@/components/dashboard/CurrentQuantumWidget'
import JournalWidget from '@/components/dashboard/JournalWidget'
import DisciplineWidget from '@/components/dashboard/DisciplineWidget'
import PerformanceWidget from '@/components/dashboard/PerformanceWidget'
import { toast } from 'react-hot-toast'

export default function DashboardPage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const res = await getDashboardSummary()
      if (res.success) {
        setData(res.data)
      } else {
        toast.error('Failed to load dashboard data')
      }
      setLoading(false)
    }
    load()
  }, [])

  // Use a minimal, calm layout
  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white">Trading Command</h1>
        <p className="text-gray-400">Focus on the process. The outcome will follow.</p>
      </motion.div>

      {/* Top Row: Learning & Key Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CurrentQuantumWidget />
        </div>
        <div className="lg:col-span-1">
          {loading ? (
            <div className="h-48 bg-white/5 animate-pulse rounded-2xl" />
          ) : (
            <DisciplineWidget score={data?.disciplineScore || 0} />
          )}
        </div>
      </div>

      {/* Bottom Row: Execution & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-[400px]">
          {loading ? (
            <div className="h-full bg-white/5 animate-pulse rounded-2xl" />
          ) : (
            <JournalWidget trades={data?.recentTrades || []} />
          )}
        </div>
        <div className="lg:col-span-1">
          {loading ? (
            <div className="h-64 bg-white/5 animate-pulse rounded-2xl" />
          ) : (
            <PerformanceWidget stats={data?.stats || { winRate: 0, totalPnL: 0, totalTrades: 0 }} />
          )}
        </div>
      </div>
    </div>
  )
}
