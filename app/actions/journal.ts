'use server'

import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { TradeType, TradeResult } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export type CreateTradeData = {
    pair: string
    type: TradeType
    entryPrice: number
    exitPrice?: number
    quantity: number
    entryDate: Date
    notes?: string
    setup?: string
    result?: TradeResult
    riskMultiple?: number
    emotions: string[]
    tags: string[]
    quantumId?: string
}

export async function createTrade(data: CreateTradeData) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        throw new Error('Unauthorized')
    }

    // Calculate Profit/Loss if exit exists
    let profitLoss = undefined
    if (data.exitPrice) {
        const diff = data.type === 'BUY'
            ? data.exitPrice - data.entryPrice
            : data.entryPrice - data.exitPrice
        profitLoss = diff * data.quantity
    }

    try {
        const trade = await prisma.trade.create({
            data: {
                userId: session.user.id,
                symbol: data.pair,
                type: data.type,
                entryPrice: data.entryPrice,
                exitPrice: data.exitPrice,
                quantity: data.quantity,
                entryDate: data.entryDate,
                notes: data.notes,
                setup: data.setup,
                result: data.result,
                riskMultiple: data.riskMultiple,
                emotions: data.emotions,
                tags: data.tags,
                profitLoss,
                status: data.exitPrice ? 'CLOSED' : 'OPEN',
                quantumId: data.quantumId || null,
            },
        })

        revalidatePath('/dashboard/journal')
        revalidatePath('/dashboard/calendar')
        return { success: true, trade }
    } catch (error) {
        console.error('Failed to create trade:', error)
        return { success: false, error: 'Failed to create trade' }
    }
}

export async function getTrades() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        throw new Error('Unauthorized')
    }

    try {
        const trades = await prisma.trade.findMany({
            where: { userId: session.user.id },
            orderBy: { entryDate: 'desc' },
            include: {
                quantum: {
                    select: { title: true }
                }
            }
        })
        return { success: true, trades }
        return { success: false, error: 'Failed to fetch trades' }
    } catch (error) {
        console.error('Failed to fetch trades:', error)
        return { success: false, error: 'Failed to fetch trades' }
    }
}

export async function deleteTrade(tradeId: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        throw new Error('Unauthorized')
    }

    try {
        await prisma.trade.delete({
            where: {
                id: tradeId,
                userId: session.user.id // Security check
            }
        })

        revalidatePath('/dashboard/journal')
        revalidatePath('/dashboard/calendar')
        return { success: true }
    } catch (error) {
        return { success: false, error: 'Failed to delete trade' }
    }
}

export async function getQuantumsSimple() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        return { success: false, options: [] }
    }

    try {
        const quantums = await prisma.quantum.findMany({
            orderBy: { order: 'asc' },
            select: { id: true, title: true, module: { select: { title: true } } }
        })
        return { success: true, options: quantums }
    } catch (error) {
        return { success: false, options: [] }
    }
}
