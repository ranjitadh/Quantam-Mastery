'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, CheckCircle, Lock, ArrowRight, BrainCircuit } from 'lucide-react'
import Link from 'next/link'

interface Quantum {
    id: string
    title: string
    type: string
    order: number
}

interface ProgressData {
    program: {
        title: string
    }
    currentQuantum: Quantum | null
    isProgramComplete: boolean
    completedIds: string[]
}

export default function CurrentQuantumWidget() {
    const [data, setData] = useState<ProgressData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/learning/state')
            .then((res) => res.json())
            .then((data) => {
                // Map new API response to component state
                setData({
                    program: { title: 'Foundational Path' }, // TODO: Get title from API if activeQuantum exists
                    currentQuantum: data.activeQuantum,
                    isProgramComplete: data.isComplete,
                    completedIds: data.history
                })
                setLoading(false)
            })
            .catch((err) => {
                console.error('Failed to fetch quantum progress:', err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20 h-48 animate-pulse">
                <div className="h-6 bg-secondary-bright/20 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-secondary-bright/10 rounded w-full mb-2"></div>
            </div>
        )
    }

    if (!data) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-secondary-bright/10 to-transparent rounded-lg p-6 border-2 border-secondary-bright/30 relative overflow-hidden"
        >
            <div className="flex items-start justify-between relative z-10">
                <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <BrainCircuit className="h-6 w-6 text-secondary-bright" />
                        Current Quantum
                    </h2>

                    {data.isProgramComplete ? (
                        <div className="mt-4">
                            <p className="text-secondary-bright font-medium text-lg">Program Complete!</p>
                            <p className="text-gray-400 text-sm mt-1">You have mastered this level.</p>
                        </div>
                    ) : data.currentQuantum ? (
                        <div className="mt-4">
                            <p className="text-sm text-gray-400 uppercase tracking-widest text-xs font-semibold mb-1">
                                {data.program.title} • Unit {data.currentQuantum.order}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-2">{data.currentQuantum.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-secondary-bright/80">
                                <span className="bg-secondary-bright/20 px-2 py-0.5 rounded text-xs border border-secondary-bright/30">
                                    {data.currentQuantum.type}
                                </span>
                                <span>In Progress</span>
                            </div>
                        </div>
                    ) : (
                        <p className="mt-4 text-gray-400">No active program found.</p>
                    )}
                </div>

                <div className="hidden md:block">
                    {/* Visual progress indicator could go here */}
                    <div className="h-16 w-16 rounded-full border-4 border-secondary-bright/30 flex items-center justify-center">
                        <span className="text-secondary-bright font-bold">{data.completedIds.length}</span>
                    </div>
                </div>
            </div>

            {!data.isProgramComplete && data.currentQuantum && (
                <div className="mt-6 flex justify-end">
                    <Link
                        href={`/dashboard/program/quantum/${data.currentQuantum.id}`}
                        className="group flex items-center gap-2 bg-secondary-bright text-dark font-bold px-6 py-3 rounded-md hover:bg-white transition-all shadow-[0_0_20px_rgba(192,245,61,0.3)] hover:shadow-[0_0_30px_rgba(192,245,61,0.5)]"
                    >
                        Enter Quantum
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            )}
        </motion.div>
    )
}
