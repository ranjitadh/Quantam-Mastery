'use client'

import { motion } from 'framer-motion'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import PremiumCard from '@/components/ui/PremiumCard'
import { useState, useEffect } from 'react'
import { getTrades } from '@/app/actions/journal'
import Link from 'next/link'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function CalendarPage() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [trades, setTrades] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTrades = async () => {
            const res = await getTrades()
            if (res.success && res.trades) {
                setTrades(res.trades.map((t: any) => ({
                    ...t,
                    entryDate: new Date(t.entryDate)
                })))
            }
            setLoading(false)
        }
        fetchTrades()
    }, [])

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay()
    }

    const days = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(currentMonth - 1)
        }
    }

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    // Filter events for the current month view to show in list
    const visibleEvents = trades.filter(t => {
        const d = t.entryDate
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear
    }).sort((a, b) => a.entryDate.getTime() - b.entryDate.getTime())

    const monthlyStats = {
        count: visibleEvents.length,
        winRate: visibleEvents.length > 0
            ? Math.round((visibleEvents.filter(t => (t.profitLoss || 0) > 0).length / visibleEvents.length) * 100)
            : 0
    }

    return (
        <div className="space-y-8 max-w-6xl">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                        Trading Calendar
                    </h1>
                    <p className="text-gray-400">Track your trades and consistency</p>
                </div>
                <Link href="/dashboard/journal">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-secondary-bright to-secondary-light text-dark-black font-semibold rounded-xl shadow-lg shadow-secondary-bright/30 flex items-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        Log Trade
                    </motion.button>
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="lg:col-span-2">
                    <PremiumCard variant="luxury" className="p-6">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                {months[currentMonth]} {currentYear}
                            </h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={prevMonth}
                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5 text-white" />
                                </button>
                                <button
                                    onClick={nextMonth}
                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                                >
                                    <ChevronRight className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Days of Week */}
                        <div className="grid grid-cols-7 gap-2 mb-4">
                            {daysOfWeek.map((day) => (
                                <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2">
                            {Array.from({ length: firstDay }).map((_, i) => (
                                <div key={`empty-${i}`} className="aspect-square" />
                            ))}
                            {Array.from({ length: days }).map((_, i) => {
                                const day = i + 1
                                const date = new Date(currentYear, currentMonth, day)
                                // Find trades for this day
                                const dayTrades = trades.filter(t =>
                                    t.entryDate.getDate() === day &&
                                    t.entryDate.getMonth() === currentMonth &&
                                    t.entryDate.getFullYear() === currentYear
                                )

                                const isToday = day === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()
                                const hasProfit = dayTrades.some(t => (t.profitLoss || 0) > 0)
                                const hasLoss = dayTrades.some(t => (t.profitLoss || 0) < 0)

                                return (
                                    <motion.div
                                        key={day}
                                        whileHover={{ scale: 1.05 }}
                                        className={`
                                            aspect-square flex flex-col items-center justify-center rounded-xl cursor-pointer
                                            transition-all relative overflow-hidden
                                            ${isToday ? 'bg-gradient-to-br from-secondary-bright to-secondary-light text-dark-black font-bold' : 'bg-white/5 text-white hover:bg-white/10'}
                                            ${dayTrades.length > 0 ? 'border-2 border-white/20' : 'border border-white/10'}
                                        `}
                                    >
                                        <span className="text-sm z-10">{day}</span>

                                        {/* Indicators */}
                                        <div className="flex gap-1 mt-1 z-10">
                                            {dayTrades.length > 0 && (
                                                <div className={`w-1.5 h-1.5 rounded-full ${hasProfit ? 'bg-green-500' : hasLoss ? 'bg-red-500' : 'bg-gray-400'}`} />
                                            )}
                                        </div>

                                        {/* Background tint for activity */}
                                        {hasProfit && !isToday && <div className="absolute inset-0 bg-green-500/10" />}
                                        {hasLoss && !hasProfit && !isToday && <div className="absolute inset-0 bg-red-500/10" />}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </PremiumCard>
                </div>

                {/* Upcoming Events / List */}
                <div>
                    <PremiumCard variant="luxury" className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5 text-secondary-bright" />
                            Monthly Activity
                        </h3>
                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {visibleEvents.length === 0 ? (
                                <p className="text-gray-500 text-sm">No trades recorded this month.</p>
                            ) : (
                                visibleEvents.map((event, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-white font-medium">{event.symbol}</p>
                                                <p className="text-xs text-gray-400 mt-1">
                                                    {event.entryDate.toLocaleDateString()}
                                                </p>
                                            </div>
                                            <span className={`px-2 py-1 rounded text-xs font-semibold ${(event.profitLoss || 0) > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                                {event.profitLoss ? `$${event.profitLoss.toFixed(0)}` : 'OPEN'}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </PremiumCard>

                    {/* Stats */}
                    <PremiumCard variant="luxury" className="p-6 mt-6">
                        <h3 className="text-xl font-bold text-white mb-4">Month Stats</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Total Trades</span>
                                <span className="text-white font-bold">{monthlyStats.count}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Win Rate</span>
                                <span className={`${monthlyStats.winRate >= 50 ? 'text-green-400' : 'text-red-400'} font-bold`}>{monthlyStats.winRate}%</span>
                            </div>
                        </div>
                    </PremiumCard>
                </div>
            </div>
        </div>
    )
}
