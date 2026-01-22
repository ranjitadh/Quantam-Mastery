'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getPerformanceMetrics, AnalyticsData } from '@/app/actions/analytics'
import { MetricCard, EquityCurve, EmotionAnalysis } from '@/components/analytics/AnalyticsCharts'
import PremiumCard from '@/components/ui/PremiumCard'
import { Loader2 } from 'lucide-react'

export default function AnalyticsPage() {
    const [data, setData] = useState<AnalyticsData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPerformanceMetrics('all')
            .then(res => {
                if (res.success && res.data) {
                    setData(res.data)
                }
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <div className="flex h-screen items-center justify-center text-secondary-bright"><Loader2 className="animate-spin w-8 h-8" /></div>
    }

    if (!data) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">No Data Available</h2>
                <p className="text-gray-400">Start logging trades to unlock performance insights.</p>
            </div>
        )
    }

    const { stats, equityCurve, behavioral } = data

    return (
        <div className="max-w-7xl mx-auto pb-20 space-y-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl font-bold text-white">Performance DNA</h1>
                <p className="text-gray-400">Reflect on your consistency and behavior.</p>
            </motion.div>

            {/* 1. Consistency Pulse */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    title="Win Rate"
                    value={`${stats.winRate.toFixed(1)}%`}
                    trend={stats.winRate > 50 ? 'up' : 'neutral'}
                    subtext="Consistency Score"
                />
                <MetricCard
                    title="Profit Factor"
                    value={stats.profitFactor.toFixed(2)}
                    trend={stats.profitFactor > 1.5 ? 'up' : stats.profitFactor < 1 ? 'down' : 'neutral'}
                    subtext="Risk Efficiency"
                />
                <MetricCard
                    title="Avg Reward/Risk"
                    value={`${(stats.avgWin / (stats.avgLoss || 1)).toFixed(2)}R`}
                    subtext="Expectancy"
                />
                <MetricCard
                    title="Net Result"
                    value={`$${stats.netProfit.toLocaleString()}`}
                    trend={stats.netProfit >= 0 ? 'up' : 'down'}
                    subtext={`${stats.totalTrades} Executions`}
                />
            </div>

            {/* 2. Equity Curve (The Truth) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8"
            >
                <h3 className="text-xl font-bold text-white mb-6">Equity Curve</h3>
                <EquityCurve data={equityCurve} />
            </motion.div>

            {/* 3. Behavioral Analysis (Deep Dive) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                    <h3 className="text-xl font-bold text-white mb-2">Emotional Impact</h3>
                    <p className="text-gray-400 text-sm mb-6">How your mindset affects your edge.</p>
                    <EmotionAnalysis data={behavioral.topEmotions} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center"
                >
                    <h3 className="text-xl font-bold text-white mb-6">Performance Timing</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Best Performing Day</p>
                            <p className="text-3xl font-bold text-green-400">{behavioral.bestDay}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Needs Improvement</p>
                            <p className="text-3xl font-bold text-red-400">{behavioral.worstDay}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
