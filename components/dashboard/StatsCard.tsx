'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
    name: string
    value: string | number
    icon: LucideIcon
    change?: string
    changeType?: 'positive' | 'negative' | 'neutral'
    delay?: number
}

export default function StatsCard({
    name,
    value,
    icon: Icon,
    change,
    changeType = 'neutral',
    delay = 0,
}: StatsCardProps) {
    const changeColors = {
        positive: 'text-green-400',
        negative: 'text-red-400',
        neutral: 'text-gray-400',
    }

    const iconBgColors = {
        positive: 'bg-green-500/10 border-green-500/20',
        negative: 'bg-red-500/10 border-red-500/20',
        neutral: 'bg-secondary-bright/10 border-secondary-bright/20',
    }

    const iconColors = {
        positive: 'text-green-400',
        negative: 'text-red-400',
        neutral: 'text-secondary-bright',
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                y: -4,
                boxShadow: '0 20px 40px -12px rgba(192, 245, 61, 0.3)',
            }}
            className="
        relative overflow-hidden
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-xl border border-white/20
        rounded-2xl p-6 shadow-xl
        cursor-pointer group
      "
        >
            {/* Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary-bright/10 rounded-full blur-3xl group-hover:bg-secondary-bright/20 transition-all duration-500"></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-400 font-medium">{name}</p>
                    <motion.div
                        className={`p-3 rounded-xl border-2 ${iconBgColors[changeType]}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Icon className={`h-5 w-5 ${iconColors[changeType]}`} />
                    </motion.div>
                </div>

                <motion.p
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: delay + 0.2, type: 'spring', stiffness: 200 }}
                >
                    {value}
                </motion.p>

                {change && (
                    <div className="flex items-center gap-1">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: delay + 0.3 }}
                            className={`text-sm font-medium ${changeColors[changeType]}`}
                        >
                            {change}
                        </motion.span>
                        <span className="text-xs text-gray-500">vs last period</span>
                    </div>
                )}
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-bright/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
    )
}
