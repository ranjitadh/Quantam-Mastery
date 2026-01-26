'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CreateTradeData, createTrade, getQuantumsSimple } from '@/app/actions/journal'
import { TradeType } from '@prisma/client'
import { toast } from 'react-hot-toast'
import { Tag } from 'lucide-react'

const EMOTION_TAGS = ['confident', 'anxious', 'patient', 'revenge', 'fomo', 'calm', 'disciplined', 'hesitant']
const SETUP_TAGS = ['breakout', 'reversal', 'continuation', 'support/resistance', 'news']

interface TradeEntryFormProps {
    onSuccess: () => void
    onCancel?: () => void
    initialData?: Partial<CreateTradeData>
}

export default function TradeEntryForm({ onSuccess, onCancel, initialData }: TradeEntryFormProps) {
    const [formData, setFormData] = useState<Partial<CreateTradeData>>({
        type: 'BUY',
        emotions: [],
        tags: [],
        entryDate: new Date(),
        ...initialData
    })
    const [submitting, setSubmitting] = useState(false)
    const [quantums, setQuantums] = useState<{ id: string, title: string, module: { title: string } }[]>([])

    useEffect(() => {
        getQuantumsSimple().then(res => {
            if (res.success && res.options) {
                setQuantums(res.options)
            }
        })
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            if (!formData.pair || !formData.entryPrice || !formData.quantity || !formData.entryDate) {
                throw new Error('Please fill all required fields')
            }

            await createTrade({
                pair: formData.pair,
                type: formData.type as TradeType,
                entryPrice: Number(formData.entryPrice),
                exitPrice: formData.exitPrice ? Number(formData.exitPrice) : undefined,
                quantity: Number(formData.quantity),
                entryDate: new Date(formData.entryDate),
                notes: formData.notes,
                setup: formData.setup,
                emotions: formData.emotions || [],
                tags: formData.tags || [],
                quantumId: formData.quantumId,
                result: (Number(formData.exitPrice) > Number(formData.entryPrice) && formData.type === 'BUY') || (Number(formData.exitPrice) < Number(formData.entryPrice) && formData.type === 'SELL') ? 'WIN' : 'LOSS'
            })

            toast.success('Trade Journaled Successfully!')
            onSuccess()
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to save trade')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Trade Date</label>
                    <input
                        type="date"
                        required
                        value={formData.entryDate ? new Date(formData.entryDate).toISOString().split('T')[0] : ''}
                        onChange={e => setFormData({ ...formData, entryDate: new Date(e.target.value) })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Pair/Symbol</label>
                    <input type="text" placeholder="EUR/USD" required value={formData.pair || ''} onChange={e => setFormData({ ...formData, pair: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Direction</label>
                <div className="flex gap-4">
                    <button type="button" onClick={() => setFormData({ ...formData, type: 'BUY' })} className={`flex-1 py-3 rounded-xl font-bold transition-all ${formData.type === 'BUY' ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>LONG (BUY)</button>
                    <button type="button" onClick={() => setFormData({ ...formData, type: 'SELL' })} className={`flex-1 py-3 rounded-xl font-bold transition-all ${formData.type === 'SELL' ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>SHORT (SELL)</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Entry Price</label>
                    <input type="number" step="0.000001" required value={formData.entryPrice || ''} onChange={e => setFormData({ ...formData, entryPrice: Number(e.target.value) })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Exit Price</label>
                    <input type="number" step="0.000001" value={formData.exitPrice || ''} onChange={e => setFormData({ ...formData, exitPrice: Number(e.target.value) })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Quantity/Lot</label>
                    <input type="number" step="0.01" required value={formData.quantity || ''} onChange={e => setFormData({ ...formData, quantity: Number(e.target.value) })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Technical Setup</label>
                <div className="flex flex-wrap gap-2 text-sm">
                    {SETUP_TAGS.map(tag => (
                        <button
                            key={tag} type="button"
                            onClick={() => setFormData({ ...formData, setup: tag })}
                            className={`px-3 py-1 rounded-full border transition-colors ${formData.setup === tag ? 'bg-secondary-bright/20 border-secondary-bright text-secondary-bright' : 'bg-transparent border-white/10 text-gray-500 hover:border-white/30'}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Psychology / Emotions</label>
                <div className="flex flex-wrap gap-2 text-sm">
                    {EMOTION_TAGS.map(emo => (
                        <button
                            key={emo} type="button"
                            onClick={() => {
                                const current = formData.emotions || []
                                const next = current.includes(emo) ? current.filter(e => e !== emo) : [...current, emo]
                                setFormData({ ...formData, emotions: next })
                            }}
                            className={`px-3 py-1 rounded-full border transition-colors ${formData.emotions?.includes(emo) ? 'bg-purple-500/20 border-purple-500 text-purple-400' : 'bg-transparent border-white/10 text-gray-500 hover:border-white/30'}`}
                        >
                            {emo}
                        </button>
                    ))}
                </div>
            </div>

            {quantums.length > 0 && (
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Link to Learning (Quantum)</label>
                    <select
                        value={formData.quantumId || ''}
                        onChange={(e) => setFormData({ ...formData, quantumId: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none"
                    >
                        <option value="">-- Apply a Lesson --</option>
                        {quantums.map(q => (
                            <option key={q.id} value={q.id}>
                                {q.module.title} / {q.title}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Journal Notes</label>
                <textarea rows={4} value={formData.notes || ''} onChange={e => setFormData({ ...formData, notes: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none resize-none" placeholder="Execution details, mindset, mistakes..." />
            </div>

            <div className="flex gap-4 pt-2">
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 py-3 bg-white/5 text-gray-400 font-bold text-lg rounded-xl hover:bg-white/10 transition-colors"
                    >
                        Cancel
                    </button>
                )}
                <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-3 bg-gradient-to-r from-secondary-bright to-secondary-light text-dark-black font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                    {submitting ? 'Saving...' : 'Log Trade'}
                </button>
            </div>
        </form>
    )
}
