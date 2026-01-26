'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface QuantumCompletionFormProps {
    quantumId: string
    type: string
    prompt?: string | null
    actionRequired?: string | null
    isCompleted: boolean
    nextQuantumId: string | null
    previousCompletion?: {
        reflection: string | null
    } | null
}

export default function QuantumCompletionForm({
    quantumId,
    type,
    prompt,
    actionRequired,
    isCompleted,
    nextQuantumId,
    previousCompletion,
}: QuantumCompletionFormProps) {
    const router = useRouter()
    const [reflection, setReflection] = useState(previousCompletion?.reflection || '')
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!reflection.trim() && prompt) {
            toast.error('Please provide your reflection.')
            return
        }

        setSubmitting(true)
        try {
            const res = await fetch('/api/quantum/complete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    quantumId,
                    reflection,
                }),
            })

            if (!res.ok) {
                const msg = await res.text()
                throw new Error(msg)
            }

            toast.success('Quantum Completed! Mastery Recorded.')
            router.refresh()
        } catch (error) {
            console.error(error)
            toast.error('Failed to complete Quantum')
        } finally {
            setSubmitting(false)
        }
    }

    if (isCompleted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8"
            >
                <Card className="p-8 border-green-primary/30 bg-green-primary/5">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="h-8 w-8 text-green-primary" />
                        <h3 className="text-xl font-bold text-white">Quantum Mastery Verified</h3>
                    </div>

                    {previousCompletion?.reflection && (
                        <div className="bg-background-secondary p-6 rounded-xl border border-white/5 mb-8">
                            <p className="text-xs text-text-muted uppercase tracking-widest mb-3 font-bold">Your Reflection</p>
                            <p className="text-text-secondary italic leading-relaxed">&quot;{previousCompletion.reflection}&quot;</p>
                        </div>
                    )}

                    <div className="flex gap-4">
                        {nextQuantumId ? (
                            <Button
                                onClick={() => router.push(`/dashboard/program/quantum/${nextQuantumId}`)}
                                className="gap-2"
                            >
                                Proceed to Next Quantum <ArrowRight className="h-5 w-5" />
                            </Button>
                        ) : (
                            <div className="text-green-primary font-bold text-lg">
                                Program Complete! You have mastered this path.
                            </div>
                        )}
                    </div>
                </Card>
            </motion.div>
        )
    }

    return (
        <div className="mt-8 pt-8 border-t border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Mastery Validation</h3>

            {type === 'TRADE_EXEC' && (
                <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 mb-8 rounded-r">
                    <p className="text-blue-400 font-bold text-sm mb-1 uppercase">Action Required:</p>
                    <p className="text-white mt-1">{actionRequired}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {prompt && (
                    <Card className="p-6">
                        <label className="block text-green-primary text-sm font-bold mb-3 uppercase tracking-wider">
                            Reflection Checkpoint
                        </label>
                        <p className="text-text-secondary text-sm mb-4 leading-relaxed">{prompt}</p>
                        <textarea
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}
                            className="w-full h-40 bg-background-secondary border border-white/10 rounded-xl p-4 text-white focus:border-green-primary focus:ring-1 focus:ring-green-primary transition-all placeholder:text-text-muted resize-none"
                            placeholder="Enter your reflection here to prove understanding..."
                            required
                        />
                    </Card>
                )}

                {/* For task types that don't need reflection text */}
                {type === 'TASK' && !prompt && (
                    <div className="flex items-center gap-3 py-4">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                required
                                className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-white/20 bg-background-secondary checked:border-green-primary checked:bg-green-primary transition-all"
                            />
                            <CheckCircle className="pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100" />
                        </div>
                        <span className="text-white font-medium">I confirm I have completed the required action above.</span>
                    </div>
                )}

                <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    className="w-full md:w-auto gap-2"
                >
                    {submitting ? 'Verifying...' : 'Complete Quantum'}
                    {!submitting && <CheckCircle className="h-5 w-5" />}
                </Button>
            </form>
        </div>
    )
}
