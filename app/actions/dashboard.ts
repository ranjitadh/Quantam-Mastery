'use server'

import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export async function getDashboardSummary() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        throw new Error('Unauthorized')
    }

    try {
        const userId = session.user.id

        // 1. Fetch Recent Trades (Limit 5)
        // We fetch a bit more data to calculate local stats if needed
        const recentTrades = await prisma.trade.findMany({
            where: { userId },
            orderBy: { entryDate: 'desc' },
            take: 5,
            select: {
                id: true,
                symbol: true,
                type: true,
                entryPrice: true,
                exitPrice: true,
                quantity: true,
                status: true,
                profitLoss: true,
                entryDate: true,
                result: true,
                tags: true
            }
        })

        // 2. Calculate Discipline Score
        // Logic: Percentage of trades that have tags (implying reflection)
        // We check the last 20 trades for this specific metric
        const last20Trades = await prisma.trade.findMany({
            where: { userId },
            orderBy: { entryDate: 'desc' },
            take: 20,
            select: { tags: true, notes: true }
        })

        let disciplineScore = 50 // Base score
        if (last20Trades.length > 0) {
            const tradesWithTags = last20Trades.filter(t => t.tags.length > 0).length
            const tradesWithNotes = last20Trades.filter(t => t.notes && t.notes.length > 10).length

            const tagCompliance = (tradesWithTags / last20Trades.length) * 50
            const noteCompliance = (tradesWithNotes / last20Trades.length) * 50

            disciplineScore = Math.round(tagCompliance + noteCompliance)
        } else {
            disciplineScore = 0 // No data
        }

        // 3. Quick Stats (Win Rate & PnL)
        const allTrades = await prisma.trade.findMany({
            where: { userId, status: 'CLOSED' },
            select: { profitLoss: true, result: true }
        })

        const wins = allTrades.filter(t => (t.profitLoss || 0) > 0).length
        const winRate = allTrades.length > 0 ? (wins / allTrades.length) * 100 : 0
        const totalPnL = allTrades.reduce((sum, t) => sum + (t.profitLoss || 0), 0)

        return {
            success: true,
            data: {
                recentTrades: recentTrades.map(t => ({
                    ...t,
                    entryDate: t.entryDate.toISOString()
                })),
                disciplineScore,
                stats: {
                    winRate,
                    totalPnL,
                    totalTrades: allTrades.length
                }
            }
        }

    } catch (error) {
        console.error('Dashboard Summary Error:', error)
        return { success: false, error: 'Failed to fetch dashboard data' }
    }
}
