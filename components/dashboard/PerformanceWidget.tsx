'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Activity } from 'lucide-react'

export default function PerformanceWidget({ stats }: { stats: { winRate: number, totalPnL: number, totalTrades: number } }) {
    return (
        <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-400">Win Rate</span>
                    <TrendingUp className={`w-4 h-4 ${stats.winRate > 50 ? 'text-green-400' : 'text-gray-400'}`} />
                </div>
                <div className="mt-2 text-2xl font-bold text-white">
                    {stats.winRate.toFixed(1)}%
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-400">Net P&L</span>
                    <DollarSign className={`w-4 h-4 ${stats.totalPnL >= 0 ? 'text-green-400' : 'text-red-400'}`} />
                </div>
                <div className={`mt-2 text-2xl font-bold ${stats.totalPnL >= 0 ? 'text-white' : 'text-red-400'}`}>
                    ${stats.totalPnL.toLocaleString()}
                </div>
            </div>

            <div className="bg-secondary-bright/5 border border-secondary-bright/20 rounded-2xl p-5 col-span-2 flex items-center justify-between">
                <div>
                    <p className="text-sm text-secondary-bright font-medium">Total Executions</p>
                    <p className="text-xl font-bold text-white mt-1">{stats.totalTrades}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-secondary-bright/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-secondary-bright" />
                </div>
            </div>
        </motion.div>
    )
}
