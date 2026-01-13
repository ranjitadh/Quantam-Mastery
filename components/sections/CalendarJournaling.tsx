'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingUp, TrendingDown, Download, FileText } from 'lucide-react'
import { useState, useMemo, useEffect } from 'react'

// Sample data for demonstration
const generateCalendarData = () => {
  const days = []
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isPast = day <= today.getDate()
    const hasTraded = isPast && Math.random() > 0.3
    const profit = hasTraded ? (Math.random() - 0.4) * 2000 : 0

    days.push({
      day,
      profit,
      hasTraded,
      trades: hasTraded ? Math.floor(Math.random() * 8) + 1 : 0
    })
  }

  return days
}

export default function CalendarJournaling() {
  const [selectedDay, setSelectedDay] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)

  // Only generate data on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  const calendarData = useMemo(() => {
    if (!isClient) return []
    return generateCalendarData()
  }, [isClient])

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const totalProfit = calendarData
    .filter(d => d?.hasTraded)
    .reduce((sum, d) => sum + (d?.profit || 0), 0)

  const winningDays = calendarData.filter(d => d?.profit > 0).length
  const losingDays = calendarData.filter(d => d?.profit < 0).length
  const winRate = winningDays + losingDays > 0
    ? ((winningDays / (winningDays + losingDays)) * 100).toFixed(1)
    : 0

  // Show loading state during SSR
  if (!isClient) {
    return (
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-bright/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl z-10">
          <div className="text-center">
            <div className="text-white">Loading calendar...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-bright/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Build a Strong, Scalable Trading Portfolio
          </h2>
          <p className="text-2xl text-secondary-bright font-semibold mb-4">
            WITH CALENDAR JOURNALING
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our intelligent calendar view helps you identify patterns in your trading behavior
            and optimize your schedule for maximum winning rate.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  label: 'Total P/L',
                  value: `$${totalProfit.toFixed(2)}`,
                  icon: totalProfit >= 0 ? TrendingUp : TrendingDown,
                  color: totalProfit >= 0 ? 'text-secondary-bright' : 'text-red-400'
                },
                {
                  label: 'Win Rate',
                  value: `${winRate}%`,
                  icon: Calendar,
                  color: 'text-secondary-bright'
                },
                {
                  label: 'Trading Days',
                  value: `${winningDays + losingDays}`,
                  icon: FileText,
                  color: 'text-secondary-bright'
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5 rounded-2xl p-6 border-2 border-secondary-bright/30"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                      <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                    <stat.icon className={`h-10 w-10 ${stat.color}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              {[
                'Visualize your trading on daily, weekly and monthly basis',
                'Color coded profit/loss days',
                'Click any day to view trade details',
                'Export data for portfolio or tax compliance',
                'Identify patterns in wins and losses',
                'Journal trades like a professional',
                'Build sustainable, consistent growth'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 bg-secondary-bright/5 rounded-lg p-4 border border-secondary-bright/20"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary-bright flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-dark font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Compact Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5 rounded-3xl p-6 border-2 border-secondary-bright/30 backdrop-blur-sm lg:sticky lg:top-24"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">
                {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-2 bg-secondary-bright text-dark rounded-lg font-semibold text-sm"
              >
                <Download className="h-4 w-4" />
                Export
              </motion.button>
            </div>

            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map(day => (
                <div key={day} className="text-center text-gray-400 font-semibold text-xs py-1">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid - Compact */}
            <div className="grid grid-cols-7 gap-1">
              {calendarData.map((dayData, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.005 }}
                  whileHover={dayData ? { scale: 1.15, zIndex: 10 } : {}}
                  onClick={() => dayData?.hasTraded && setSelectedDay(dayData)}
                  className={`
                    aspect-square rounded-lg p-1 flex flex-col items-center justify-center cursor-pointer
                    transition-all duration-300 relative text-xs
                    ${!dayData ? 'invisible' : ''}
                    ${!dayData?.hasTraded ? 'bg-gray-800/30 border border-gray-700/30' : ''}
                    ${dayData?.profit > 0 ? 'bg-secondary-bright/20 border-2 border-secondary-bright/60' : ''}
                    ${dayData?.profit < 0 ? 'bg-red-500/20 border-2 border-red-500/60' : ''}
                    ${dayData?.profit === 0 && dayData?.hasTraded ? 'bg-gray-600/20 border-2 border-gray-500/60' : ''}
                  `}
                >
                  {dayData && (
                    <>
                      <div className="text-white font-bold text-xs">{dayData.day}</div>
                      {dayData.hasTraded && (
                        <div className={`text-[10px] font-semibold ${dayData.profit > 0 ? 'text-secondary-bright' :
                          dayData.profit < 0 ? 'text-red-400' : 'text-gray-400'
                          }`}>
                          ${Math.abs(dayData.profit).toFixed(0)}
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Compact Legend */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-secondary-bright/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-secondary-bright/20 border-2 border-secondary-bright/60"></div>
                <span className="text-xs text-gray-300">Profit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500/20 border-2 border-red-500/60"></div>
                <span className="text-xs text-gray-300">Loss</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gray-600/20 border-2 border-gray-500/60"></div>
                <span className="text-xs text-gray-300">Break Even</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gray-800/30 border border-gray-700/30"></div>
                <span className="text-xs text-gray-300">No Trade</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
