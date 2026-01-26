'use server'

import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { TradeResult, TradeStatus } from '@prisma/client'

export interface AnalyticsData {
    period: string
    stats: {
        winRate: number
        profitFactor: number
        totalTrades: number
        netProfit: number
        avgWin: number
        avgLoss: number
        expectancy: number
    }
    equityCurve: { date: string; equity: number }[]
    behavioral: {
        topEmotions: { emotion: string; winRate: number; count: number }[]
        bestDay: string
        worstDay: string
    }
}

export async function getPerformanceMetrics(period: 'all' | '30d' = 'all') {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        throw new Error('Unauthorized')
    }

    try {
        const userId = session.user.id

        // Time filter
        let dateFilter = {}
        if (period === '30d') {
            const d = new Date()
            d.setDate(d.getDate() - 30)
            dateFilter = { entryDate: { gte: d } }
        }

        const trades = await prisma.trade.findMany({
            where: {
                userId,
                status: { in: ['CLOSED', 'WIN', 'LOSS', 'BREAK_EVEN'] as any }, // Prisma enum mapping might vary, assuming broadly closed
                ...dateFilter
            },
            orderBy: { entryDate: 'asc' }
        })

        if (trades.length === 0) {
            return { success: true, data: null } // Handle empty state in UI
        }

        // --- CALCULATIONS ---

        let wins = 0
        let losses = 0
        let grossProfit = 0
        let grossLoss = 0
        let totalPnL = 0

        // Equity Curve
        let currentEquity = 0
        const equityCurve = trades.map(t => {
            const pnl = t.profitLoss || 0
            currentEquity += pnl
            if (pnl > 0) {
                wins++
                grossProfit += pnl
            } else if (pnl < 0) {
                losses++
                grossLoss += Math.abs(pnl)
            }
            return {
                date: t.entryDate.toISOString().split('T')[0], // YYYY-MM-DD
                equity: currentEquity
            }
        })

        const totalTrades = trades.length
        const winRate = totalTrades > 0 ? (wins / totalTrades) * 100 : 0
        const profitFactor = grossLoss > 0 ? grossProfit / grossLoss : grossProfit > 0 ? 100 : 0

        const avgWin = wins > 0 ? grossProfit / wins : 0
        const avgLoss = losses > 0 ? grossLoss / losses : 0
        // Expectancy = (Win % * Avg Win) - (Loss % * Avg Loss)
        const expectancy = ((winRate / 100) * avgWin) - ((1 - (winRate / 100)) * avgLoss)


        // --- BEHAVIORAL ANALYSIS ---

        // 1. Emotions Correlation
        const emotionMap = new Map<string, { wins: number; total: number }>()

        trades.forEach(t => {
            if (t.emotions && t.emotions.length > 0) {
                t.emotions.forEach(e => {
                    const current = emotionMap.get(e) || { wins: 0, total: 0 }
                    current.total++
                    if ((t.profitLoss || 0) > 0) current.wins++
                    emotionMap.set(e, current)
                })
            }
        })

        const topEmotions = Array.from(emotionMap.entries())
            .map(([emotion, stats]) => ({
                emotion,
                winRate: (stats.wins / stats.total) * 100,
                count: stats.total
            }))
            .sort((a, b) => b.count - a.count) // Most frequent first
            .slice(0, 5)

        // 2. Day of Week Analysis
        const dayMap = new Map<number, { pnl: number; count: number }>()
        trades.forEach(t => {
            const day = t.entryDate.getDay() // 0=Sun, 1=Mon
            const current = dayMap.get(day) || { pnl: 0, count: 0 }
            current.pnl += (t.profitLoss || 0)
            current.count++
            dayMap.set(day, current)
        })

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let bestDay = 'N/A'
        let worstDay = 'N/A'
        let maxPnL = -Infinity
        let minPnL = Infinity

        dayMap.forEach((stats, dayIndex) => {
            if (stats.pnl > maxPnL) {
                maxPnL = stats.pnl
                bestDay = days[dayIndex]
            }
            if (stats.pnl < minPnL) {
                minPnL = stats.pnl
                worstDay = days[dayIndex]
            }
        })

        return {
            success: true,
            data: {
                period,
                stats: {
                    winRate,
                    profitFactor,
                    totalTrades,
                    netProfit: currentEquity,
                    avgWin,
                    avgLoss,
                    expectancy
                },
                equityCurve,
                behavioral: {
                    topEmotions,
                    bestDay,
                    worstDay
                }
            } as AnalyticsData
        }

    } catch (error) {
        console.error('Analytics Error:', error)
        return { success: false, error: 'Failed to generate analytics' }
    }
}
