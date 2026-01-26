'use client'

import { motion } from 'framer-motion'
import TradeEntryForm from '@/components/dashboard/TradeEntryForm'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewTradePage() {
    const router = useRouter()

    return (
        <div className="max-w-3xl mx-auto py-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <Link href="/dashboard" className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold text-white">Log Execution</h1>
                <p className="text-gray-400">Record the details of your trade with honesty and precision.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-bright/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                    <TradeEntryForm
                        onSuccess={() => router.push('/dashboard/journal')}
                        onCancel={() => router.back()}
                    />
                </div>
            </motion.div>
        </div>
    )
}
