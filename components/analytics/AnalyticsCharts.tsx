'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

// --- 1. Minimal Metric Card ---
export function MetricCard({ title, value, subtext, trend }: { title: string, value: string, subtext?: string, trend?: 'up' | 'down' | 'neutral' }) {
    return (
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{title}</p>
            <div className="mt-2">
                <h3 className="text-3xl font-bold text-white">{value}</h3>
                {subtext && (
                    <div className="flex items-center gap-2 mt-1">
                        {trend === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                        {trend === 'down' && <TrendingDown className="w-4 h-4 text-red-400" />}
                        <p className={`text-sm ${trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-gray-500'}`}>
                            {subtext}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

// --- 2. Simple SVG Equity Curve ---
export function EquityCurve({ data }: { data: { date: string, equity: number }[] }) {
    if (!data || data.length < 2) return <div className="h-64 flex items-center justify-center text-gray-500">Not enough data for chart</div>

    const padding = 20
    const width = 800
    const height = 300

    const minEq = Math.min(...data.map(d => d.equity))
    const maxEq = Math.max(...data.map(d => d.equity))
    const range = maxEq - minEq || 1

    const points = data.map((d, i) => {
        const x = padding + (i / (data.length - 1)) * (width - padding * 2)
        const y = height - padding - ((d.equity - minEq) / range) * (height - padding * 2)
        return `${x},${y}`
    }).join(' ')

    const isPositive = data[data.length - 1].equity >= 0

    return (
        <div className="w-full overflow-hidden">
            <div className="relative" style={{ paddingBottom: '40%' }}> {/* Aspect Ratio */}
                <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full">
                    {/* Zero Line */}
                    {minEq < 0 && maxEq > 0 && (
                        <line
                            x1={padding}
                            y1={height - padding - ((0 - minEq) / range) * (height - padding * 2)}
                            x2={width - padding}
                            y2={height - padding - ((0 - minEq) / range) * (height - padding * 2)}
                            stroke="#333"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                        />
                    )}

                    {/* The Line */}
                    <motion.polyline
                        points={points}
                        fill="none"
                        stroke={isPositive ? '#4ade80' : '#f87171'} // Green or Red based on final outcome
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    {/* Area fill (optional gradient) */}
                    <defs>
                        <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={isPositive ? '#4ade80' : '#f87171'} stopOpacity="0.2" />
                            <stop offset="100%" stopColor={isPositive ? '#4ade80' : '#f87171'} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <motion.polyline
                        points={`${padding},${height} ${points} ${width - padding},${height}`}
                        fill="url(#curveGradient)"
                        stroke="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    />
                </svg>
            </div>
        </div>
    )
}

// --- 3. Emotion Bar Chart ---
export function EmotionAnalysis({ data }: { data: { emotion: string, winRate: number, count: number }[] }) {
    if (!data || data.length === 0) return <div className="text-gray-500">No behavioral data yet.</div>

    return (
        <div className="space-y-4">
            {data.map((item) => (
                <div key={item.emotion} className="space-y-1">
                    <div className="flex justify-between text-sm">
                        <span className="capitalize text-white font-medium">{item.emotion}</span>
                        <div className="flex gap-4 text-gray-400">
                            <span>{item.count} trades</span>
                            <span className={item.winRate > 50 ? 'text-green-400' : 'text-red-400'}>{item.winRate.toFixed(0)}% WR</span>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className={`h-full ${item.winRate > 50 ? 'bg-green-500' : 'bg-red-500'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.winRate}%` }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
