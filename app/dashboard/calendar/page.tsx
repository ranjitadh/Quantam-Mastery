'use client'

import { motion } from 'framer-motion'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
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
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Trading <span className="text-green-primary">Calendar</span>
                    </h1>
                    <p className="text-text-secondary">Track your trades and consistency</p>
                </div>
                <Link href="/dashboard/journal">
                    <Button className="flex items-center gap-2">
                        <Plus className="w-5 h-5" />
                        Log Trade
                    </Button>
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="lg:col-span-2">
                    <Card className="p-6 h-full">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                {months[currentMonth]} {currentYear}
                            </h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={prevMonth}
                                    className="p-2 rounded-lg bg-background-secondary border border-white/5 hover:border-green-primary/30 transition-all text-white"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextMonth}
                                    className="p-2 rounded-lg bg-background-secondary border border-white/5 hover:border-green-primary/30 transition-all text-white"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Days of Week */}
                        <div className="grid grid-cols-7 gap-2 mb-4">
                            {daysOfWeek.map((day) => (
                                <div key={day} className="text-center text-sm font-semibold text-text-secondary py-2">
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
                                            ${isToday ? 'bg-green-primary text-background-primary font-bold shadow-[0_0_15px_rgba(58,255,58,0.3)]' : 'bg-background-secondary text-white hover:bg-background-secondary/80'}
                                            ${dayTrades.length > 0 ? 'border border-green-primary/20' : 'border border-white/5'}
                                        `}
                                    >
                                        <span className="text-sm z-10">{day}</span>

                                        {/* Indicators */}
                                        <div className="flex gap-1 mt-1 z-10">
                                            {dayTrades.length > 0 && (
                                                <div className={`w-1.5 h-1.5 rounded-full ${hasProfit ? 'bg-green-400' : hasLoss ? 'bg-red-500' : 'bg-text-secondary'}`} />
                                            )}
                                        </div>

                                        {/* Background tint for activity */}
                                        {hasProfit && !isToday && <div className="absolute inset-0 bg-green-500/10" />}
                                        {hasLoss && !hasProfit && !isToday && <div className="absolute inset-0 bg-red-500/10" />}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </Card>
                </div>

                {/* Upcoming Events / List */}
                <div className="space-y-6">
                    <Card className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5 text-green-primary" />
                            Monthly Activity
                        </h3>
                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {visibleEvents.length === 0 ? (
                                <p className="text-text-secondary text-sm">No trades recorded this month.</p>
                            ) : (
                                visibleEvents.map((event, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="p-4 rounded-xl bg-background-secondary border border-white/5 hover:border-green-primary/20 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-white font-medium">{event.symbol}</p>
                                                <p className="text-xs text-text-secondary mt-1">
                                                    {event.entryDate.toLocaleDateString()}
                                                </p>
                                            </div>
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${(event.profitLoss || 0) > 0 ? 'text-green-primary bg-green-primary/10' : 'text-red-500 bg-red-500/10'}`}>
                                                {event.profitLoss ? `$${event.profitLoss.toFixed(0)}` : 'OPEN'}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </Card>

                    {/* Stats */}
                    <Card className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Month Stats</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
                                <span className="text-text-secondary">Total Trades</span>
                                <span className="text-white font-bold">{monthlyStats.count}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
                                <span className="text-text-secondary">Win Rate</span>
                                <span className={`${monthlyStats.winRate >= 50 ? 'text-green-primary' : 'text-red-500'} font-bold`}>{monthlyStats.winRate}%</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
