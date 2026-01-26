'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'

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
        positive: 'text-green-primary',
        negative: 'text-red-500',
        neutral: 'text-text-secondary',
    }

    const iconBgColors = {
        positive: 'bg-green-primary/10 border-green-primary/20',
        negative: 'bg-red-500/10 border-red-500/20',
        neutral: 'bg-background-secondary border-white/5',
    }

    const iconColors = {
        positive: 'text-green-primary',
        negative: 'text-red-500',
        neutral: 'text-text-secondary',
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <Card className="p-6 relative overflow-hidden h-full group">
                {/* Decorative Glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-green-primary/5 rounded-full blur-2xl group-hover:bg-green-primary/10 transition-all duration-500"></div>

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-text-secondary font-medium">{name}</p>
                        <motion.div
                            className={`p-3 rounded-xl border ${iconBgColors[changeType]}`}
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
                        <div className="flex items-center gap-2">
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: delay + 0.3 }}
                                className={`text-sm font-bold ${changeColors[changeType]}`}
                            >
                                {change}
                            </motion.span>
                            <span className="text-xs text-text-muted">vs last period</span>
                        </div>
                    )}
                </div>
            </Card>
        </motion.div>
    )
}
