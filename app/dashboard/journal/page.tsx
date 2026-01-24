'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, Plus, BookOpen, TrendingUp, TrendingDown, Search, Filter, X, Tag, Trash2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import StatsCard from '@/components/dashboard/StatsCard'
import TradeEntryForm from '@/components/dashboard/TradeEntryForm'
import { createTrade, getTrades, deleteTrade, getQuantumsSimple, CreateTradeData } from '@/app/actions/journal'
import { toast } from 'react-hot-toast'
import { TradeType, TradeResult } from '@prisma/client'

// Types matching the Prisma model for UI
interface Trade {
  id: string
  entryDate: Date
  symbol: string
  type: TradeType
  entryPrice: number
  exitPrice: number | null
  profitLoss: number | null
  notes: string | null
  tags: string[]
  emotions: string[]
  setup: string | null
  result: TradeResult | null
  quantum?: { title: string } | null
}

const EMOTION_TAGS = ['confident', 'anxious', 'patient', 'revenge', 'fomo', 'calm', 'disciplined', 'hesitant']
const SETUP_TAGS = ['breakout', 'reversal', 'continuation', 'support/resistance', 'news']

export default function JournalPage() {
  const [view, setView] = useState<'calendar' | 'list'>('list')
  const [showNewEntryModal, setShowNewEntryModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'wins' | 'losses'>('all')
  const [trades, setTrades] = useState<Trade[]>([])
  const [quantums, setQuantums] = useState<{ id: string, title: string, module: { title: string } }[]>([])
  const [loading, setLoading] = useState(true)

  // Form State
  const [formData, setFormData] = useState<Partial<CreateTradeData>>({
    type: 'BUY',
    emotions: [],
    tags: []
  })
  const [submitting, setSubmitting] = useState(false)

  const fetchData = async () => {
    try {
      const [tradeRes, quantumRes] = await Promise.all([
        getTrades(),
        getQuantumsSimple()
      ])

      if (tradeRes.success && tradeRes.trades) {
        // Transform date strings back to Date objects
        const parsedTrades = tradeRes.trades.map((t: any) => ({
          ...t,
          entryDate: new Date(t.entryDate)
        }))
        setTrades(parsedTrades)
      } else {
        console.error('Failed to fetch trades:', tradeRes.error)
        toast.error('Failed to load trades: ' + (tradeRes.error || 'Unknown error'))
      }

      if (quantumRes.success && quantumRes.options) {
        setQuantums(quantumRes.options)
      }
    } catch (error) {
      console.error(error)
      toast.error('Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this entry?')) return
    const res = await deleteTrade(id)
    if (res.success) {
      toast.success('Trade deleted')
      fetchData()
    } else {
      toast.error('Failed to delete')
    }
  }

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
        result: (Number(formData.exitPrice) > Number(formData.entryPrice) && formData.type === 'BUY') || (Number(formData.exitPrice) < Number(formData.entryPrice) && formData.type === 'SELL') ? 'WIN' : 'LOSS' // Simple auto-result logic, can be manual
      })

      toast.success('Trade Journaled Successfully!')
      setShowNewEntryModal(false)
      fetchData()
      setFormData({ type: 'BUY', emotions: [], tags: [] })
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to save trade')
    } finally {
      setSubmitting(false)
    }
  }

  const filteredEntries = trades.filter(entry => {
    const matchesSearch = entry.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (entry.notes && entry.notes.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesFilter = selectedFilter === 'all' ||
      (selectedFilter === 'wins' && (entry.profitLoss || 0) > 0) ||
      (selectedFilter === 'losses' && (entry.profitLoss || 0) < 0)
    return matchesSearch && matchesFilter
  })

  // Calculate Stats
  const totalPL = trades.reduce((sum, t) => sum + (t.profitLoss || 0), 0)
  const winningTrades = trades.filter(t => (t.profitLoss || 0) > 0).length
  const winRate = trades.length > 0 ? Math.round((winningTrades / trades.length) * 100) : 0

  const statsData = [
    {
      name: 'Total Entries',
      value: trades.length.toString(),
      icon: BookOpen,
      change: 'Lifetime',
      changeType: 'neutral' as const,
    },
    {
      name: 'Win Rate',
      value: `${winRate}%`,
      icon: TrendingUp,
      change: 'Performance',
      changeType: winRate > 50 ? 'positive' as const : 'negative' as const,
    },
    {
      name: 'Total P/L',
      value: `$${totalPL.toFixed(2)}`,
      icon: totalPL >= 0 ? TrendingUp : TrendingDown,
      change: 'Net Profit',
      changeType: totalPL >= 0 ? 'positive' as const : 'negative' as const,
    },
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Trade <span className="text-green-primary">Journal</span>
          </h1>
          <p className="text-text-secondary">Document your trading journey and improve your edge</p>
        </div>
        <Button
          onClick={() => setShowNewEntryModal(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Entry
        </Button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={stat.name} {...stat} delay={index * 0.1} />
        ))}
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* View Toggle */}
        <div className="flex gap-2 bg-background-secondary p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${view === 'list' ? 'bg-green-primary text-background-primary shadow-lg font-bold' : 'text-text-secondary hover:text-white'}`}
          >
            <BookOpen className="h-4 w-4" /> List
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-text-muted cursor-not-allowed opacity-50"
            title="Coming in Phase 2"
          >
            <CalendarIcon className="h-4 w-4" /> Calendar
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-3 flex-1 md:flex-initial">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search trades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background-secondary border border-white/5 rounded-lg text-white placeholder:text-text-muted focus:border-green-primary/50 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* List View */}
      {view === 'list' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          {loading ? (
            <p className="text-center text-text-secondary py-10">Loading journal...</p>
          ) : filteredEntries.length === 0 ? (
            <Card className="p-12">
              <div className="text-center py-8">
                <BookOpen className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <p className="text-text-secondary text-lg">No journal entries found</p>
                <p className="text-text-muted text-sm mt-2">Start documenting your trades to build your edge</p>
              </div>
            </Card>
          ) : (
            filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 hover:border-green-primary/30 transition-all cursor-pointer relative group bg-background-secondary">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${(entry.profitLoss || 0) > 0 ? 'bg-green-primary/10' : 'bg-red-500/10'}`}>
                          {(entry.profitLoss || 0) > 0 ? (<TrendingUp className="w-5 h-5 text-green-primary" />) : (<TrendingDown className="w-5 h-5 text-red-500" />)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{entry.symbol}</h3>
                          <p className="text-sm text-text-secondary">
                            {entry.entryDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                        <span className={`ml-auto px-3 py-1 rounded-full text-sm font-bold ${entry.type === 'BUY' ? 'bg-green-primary/10 text-green-primary' : 'bg-red-500/10 text-red-500'}`}>
                          {entry.type}
                        </span>
                        <button onClick={() => handleDelete(entry.id)} className="p-2 hover:bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>

                      {/* Trade Details */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-text-muted">Entry</p>
                          <p className="text-white font-semibold">{entry.entryPrice}</p>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted">Exit</p>
                          <p className="text-white font-semibold">{entry.exitPrice || '-'}</p>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted">P/L</p>
                          <p className={`font-bold ${(entry.profitLoss || 0) > 0 ? 'text-green-primary' : 'text-red-500'}`}>
                            {entry.profitLoss ? `$${entry.profitLoss.toFixed(2)}` : '-'}
                          </p>
                        </div>
                      </div>

                      {/* Notes & Setup */}
                      {entry.setup && <p className="text-sm text-green-primary mb-1 font-mono">Setup: {entry.setup}</p>}
                      <p className="text-text-secondary mb-4">{entry.notes}</p>

                      {/* Tags & Emotions */}
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-muted flex items-center gap-1">
                            <Tag className="w-3 h-3" /> {tag}
                          </span>
                        ))}
                        {entry.emotions.map((emo, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">
                            😊 {emo}
                          </span>
                        ))}
                        {entry.quantum && (
                          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
                            📚 {entry.quantum.title}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      )}

      {/* New Entry Modal */}
      <AnimatePresence>
        {showNewEntryModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowNewEntryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Log Trade Execution</h2>
                <button onClick={() => setShowNewEntryModal(false)} className="p-2 rounded-lg hover:bg-white/10 transition-all">
                  <X className="w-6 h-6 text-text-muted" />
                </button>
              </div>

              <TradeEntryForm
                onSuccess={() => {
                  setShowNewEntryModal(false)
                  fetchData()
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
