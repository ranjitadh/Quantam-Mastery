'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

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
        // Fetch specific learning state
        fetch('/api/learning/state?slug=foundation')
            .then((res) => res.json())
            .then((data) => {
                setData({
                    program: { title: 'Foundational Path' }, // Should ideally come from API
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
            <Card className="h-48 animate-pulse flex flex-col justify-center p-6">
                <div className="h-6 bg-white/10 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-white/5 rounded w-full mb-2"></div>
            </Card>
        )
    }

    if (!data) return null

    return (
        <Card className="p-0 overflow-hidden border-green-primary/30 relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="p-6 relative z-10">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                            <BrainCircuit className="h-6 w-6 text-green-primary" />
                            Current Quantum
                        </h2>

                        {data.isProgramComplete ? (
                            <div className="mt-2">
                                <p className="text-green-primary font-bold text-lg">Program Complete!</p>
                                <p className="text-text-secondary text-sm mt-1">You have mastered this level.</p>
                            </div>
                        ) : data.currentQuantum ? (
                            <div className="mt-2">
                                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">
                                    {data.program.title} • Unit {data.currentQuantum.order}
                                </p>
                                <h3 className="text-2xl font-bold text-white mb-3">{data.currentQuantum.title}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="bg-green-primary/10 text-green-primary border border-green-primary/20 px-2 py-0.5 rounded text-xs font-bold uppercase">
                                        {data.currentQuantum.type}
                                    </span>
                                    <span className="text-sm text-text-secondary">In Progress</span>
                                </div>
                            </div>
                        ) : (
                            <p className="mt-4 text-text-muted">No active program found.</p>
                        )}
                    </div>

                    <div className="hidden md:flex flex-col items-center justify-center p-4 bg-background-secondary rounded-full border border-white/5 h-20 w-20">
                        <span className="text-2xl font-bold text-white">{data.completedIds.length}</span>
                        <span className="text-[10px] text-text-muted uppercase">Done</span>
                    </div>
                </div>

                {!data.isProgramComplete && data.currentQuantum && (
                    <div className="mt-6 flex justify-end">
                        <Link href={`/dashboard/program/quantum/${data.currentQuantum.id}`}>
                            <Button className="group">
                                Enter Quantum
                                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </Card>
    )
}
