'use client'

import { motion } from 'framer-motion'
import { Shield, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function DisciplineWidget({ score }: { score: number }) {
    const getStatus = (s: number) => {
        if (s >= 80) return { label: 'Elite', color: 'text-secondary-bright', bg: 'bg-secondary-bright' }
        if (s >= 50) return { label: 'Developing', color: 'text-yellow-400', bg: 'bg-yellow-400' }
        return { label: 'Needs Focus', color: 'text-red-400', bg: 'bg-red-400' }
    }

    const status = getStatus(score)

    return (
        <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="relative z-10">
                <h3 className="text-lg font-medium text-gray-400 mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Discipline Score
                </h3>

                <div className="flex items-end gap-3 mt-4">
                    <div className="text-5xl font-bold text-white">{score}</div>
                    <div className={`text-sm font-medium mb-2 px-2 py-0.5 rounded-full bg-white/10 ${status.color}`}>
                        {status.label}
                    </div>
                </div>

                <div className="mt-6 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full ${status.bg}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>

                <p className="mt-4 text-xs text-gray-500">
                    Based on journal completeness and rule adherence over last 20 trades.
                </p>
            </div>

            {/* Background Decorative Element */}
            <Shield className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
        </motion.div>
    )
}
