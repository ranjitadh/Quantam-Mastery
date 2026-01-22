'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, Lock, ArrowRight, BookOpen } from 'lucide-react'
import { toast } from 'react-hot-toast'

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
                className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mt-8"
            >
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-bold text-green-400">Quantum Mastery Verified</h3>
                </div>

                {previousCompletion?.reflection && (
                    <div className="bg-dark/50 p-4 rounded border border-white/5 mb-6">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Your Reflection</p>
                        <p className="text-gray-300 italic">&quot;{previousCompletion.reflection}&quot;</p>
                    </div>
                )}

                <div className="flex gap-4">
                    {nextQuantumId ? (
                        <button
                            onClick={() => router.push(`/dashboard/program/quantum/${nextQuantumId}`)}
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-bold transition-all"
                        >
                            Proceed to Next Quantum <ArrowRight className="h-5 w-5" />
                        </button>
                    ) : (
                        <div className="text-secondary-bright font-bold">
                            Program Complete! You have mastered this path.
                        </div>
                    )}
                </div>
            </motion.div>
        )
    }

    return (
        <div className="mt-8 border-t-2 border-dashed border-secondary-bright/20 pt-8">
            <h3 className="text-xl font-bold text-white mb-4">Mastery Validation</h3>

            {type === 'TRADE_EXEC' && (
                <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                    <p className="text-blue-200 font-medium">ACTION REQUIRED:</p>
                    <p className="text-white mt-1">{actionRequired}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {prompt && (
                    <div>
                        <label className="block text-secondary-bright text-sm font-semibold mb-2">
                            REFLECTION CHECKPOINT
                        </label>
                        <p className="text-gray-400 text-sm mb-3">{prompt}</p>
                        <textarea
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}
                            className="w-full h-32 bg-dark border border-secondary-bright/20 rounded-md p-4 text-white focus:border-secondary-bright focus:ring-1 focus:ring-secondary-bright transition-all"
                            placeholder="Enter your reflection here to prove understanding..."
                            required
                        />
                    </div>
                )}

                {/* For task types that don't need reflection text, we might just show a "Mark Complete" button */}
                {type === 'TASK' && !prompt && (
                    <div className="flex items-center gap-3">
                        <input type="checkbox" required className="w-5 h-5 rounded border-secondary-bright text-secondary-bright focus:ring-secondary-bright" />
                        <span className="text-white">I confirm I have completed the required action above.</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full md:w-auto bg-secondary-bright text-dark font-bold px-8 py-4 rounded-md hover:bg-white transition-all shadow-[0_0_20px_rgba(192,245,61,0.2)] hover:shadow-[0_0_30px_rgba(192,245,61,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {submitting ? 'Verifying...' : 'Complete Quantum'}
                    {!submitting && <CheckCircle className="h-5 w-5" />}
                </button>
            </form>
        </div>
    )
}
