'use client'

import { motion } from 'framer-motion'
import { Plus, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react'
import Link from 'next/link'

export default function JournalWidget({ trades }: { trades: any[] }) {
    return (
        <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Recent Executions</h3>
                <Link href="/dashboard/journal/new">
                    <button className="flex items-center gap-2 bg-secondary-bright text-dark font-bold px-3 py-1.5 rounded-lg text-sm hover:bg-white transition-colors">
                        <Plus className="w-4 h-4" />
                        Log Trade
                    </button>
                </Link>
            </div>

            {trades.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <p className="text-gray-400 mb-4">No trades recorded yet.</p>
                    <div className="text-sm text-gray-500">
                        Your journey to mastery begins with the first log.
                    </div>
                </div>
            ) : (
                <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {trades.map((trade, i) => (
                        <div key={trade.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${trade.type === 'BUY' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                    {trade.type === 'BUY' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{trade.symbol}</div>
                                    <div className="text-xs text-gray-400">
                                        {new Date(trade.entryDate).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                {trade.status === 'OPEN' ? (
                                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">OPEN</span>
                                ) : (
                                    <div className={`font-mono font-medium ${trade.profitLoss > 0 ? 'text-green-400' : trade.profitLoss < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                                        {trade.profitLoss > 0 ? '+' : ''}{trade.profitLoss?.toFixed(2)}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                <Link href="/dashboard/journal" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                    View Journal <ArrowRight className="w-3 h-3" />
                </Link>
            </div>
        </motion.div>
    )
}
