'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, Plus, BookOpen, TrendingUp, TrendingDown, Search, Filter, X, Tag } from 'lucide-react'
import PremiumCard from '@/components/ui/PremiumCard'
import StatsCard from '@/components/dashboard/StatsCard'

// Sample journal entries
const journalEntries = [
  {
    id: 1,
    date: '2024-01-20',
    pair: 'EUR/USD',
    type: 'Long',
    entry: 1.0850,
    exit: 1.0920,
    profit: 125.50,
    notes: 'Strong bullish momentum on H4. Entered on pullback to support.',
    tags: ['breakout', 'trend-following'],
    emotion: 'confident',
  },
  {
    id: 2,
    date: '2024-01-18',
    pair: 'GBP/JPY',
    type: 'Short',
    entry: 186.50,
    exit: 185.80,
    profit: 95.00,
    notes: 'Resistance rejection at key level. Clean technical setup.',
    tags: ['resistance', 'price-action'],
    emotion: 'calm',
  },
  {
    id: 3,
    date: '2024-01-15',
    pair: 'USD/CAD',
    type: 'Long',
    entry: 1.3420,
    exit: 1.3380,
    profit: -45.00,
    notes: 'Stopped out. News event caused spike. Need better risk management.',
    tags: ['news-trading', 'lesson-learned'],
    emotion: 'frustrated',
  },
]

const stats = [
  {
    name: 'Total Entries',
    value: journalEntries.length.toString(),
    icon: BookOpen,
    change: '+2 this week',
    changeType: 'positive' as const,
  },
  {
    name: 'Winning Trades',
    value: journalEntries.filter(e => e.profit > 0).length.toString(),
    icon: TrendingUp,
    change: '67% win rate',
    changeType: 'positive' as const,
  },
  {
    name: 'Total P/L',
    value: `$${journalEntries.reduce((sum, e) => sum + e.profit, 0).toFixed(2)}`,
    icon: TrendingUp,
    change: '+$175.50',
    changeType: 'positive' as const,
  },
]

export default function JournalPage() {
  const [view, setView] = useState<'calendar' | 'list'>('list')
  const [showNewEntryModal, setShowNewEntryModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'wins' | 'losses'>('all')

  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.notes.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = selectedFilter === 'all' ||
      (selectedFilter === 'wins' && entry.profit > 0) ||
      (selectedFilter === 'losses' && entry.profit < 0)
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            Trade Journal
          </h1>
          <p className="text-gray-400">Document your trading journey and improve your edge</p>
        </div>
        <motion.button
          onClick={() => setShowNewEntryModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-secondary-bright to-secondary-light text-dark-black font-semibold rounded-xl shadow-lg shadow-secondary-bright/30 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Entry
        </motion.button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={stat.name} {...stat} delay={index * 0.1} />
        ))}
      </div>

      {/* View Toggle & Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${view === 'list'
                ? 'bg-secondary-bright text-dark-black shadow-lg font-semibold'
                : 'text-gray-300 hover:text-white'
              }`}
          >
            <BookOpen className="h-4 w-4" />
            List View
          </button>
          <button
            onClick={() => setView('calendar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${view === 'calendar'
                ? 'bg-secondary-bright text-dark-black shadow-lg font-semibold'
                : 'text-gray-300 hover:text-white'
              }`}
          >
            <CalendarIcon className="h-4 w-4" />
            Calendar
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-3 flex-1 md:flex-initial">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search trades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:border-secondary-bright focus:outline-none transition-all"
            />
          </div>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value as any)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-secondary-bright focus:outline-none transition-all"
          >
            <option value="all">All Trades</option>
            <option value="wins">Wins Only</option>
            <option value="losses">Losses Only</option>
          </select>
        </div>
      </div>

      {/* List View */}
      {view === 'list' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {filteredEntries.length === 0 ? (
            <PremiumCard variant="luxury" className="p-12">
              <div className="text-center py-8">
                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No journal entries found</p>
                <p className="text-gray-500 text-sm mt-2">Start documenting your trades to build your edge</p>
              </div>
            </PremiumCard>
          ) : (
            filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <PremiumCard variant="luxury" className="p-6 hover:scale-[1.01] transition-transform cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${entry.profit > 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                          {entry.profit > 0 ? (
                            <TrendingUp className="w-5 h-5 text-green-400" />
                          ) : (
                            <TrendingDown className="w-5 h-5 text-red-400" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{entry.pair}</h3>
                          <p className="text-sm text-gray-400">{new Date(entry.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                        <span className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold ${entry.type === 'Long'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-orange-500/20 text-orange-400'
                          }`}>
                          {entry.type}
                        </span>
                      </div>

                      {/* Trade Details */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-400">Entry</p>
                          <p className="text-white font-semibold">{entry.entry}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Exit</p>
                          <p className="text-white font-semibold">{entry.exit}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">P/L</p>
                          <p className={`font-bold ${entry.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {entry.profit > 0 ? '+' : ''}${entry.profit.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Notes */}
                      <p className="text-gray-300 mb-4">{entry.notes}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">
                          😊 {entry.emotion}
                        </span>
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))
          )}
        </motion.div>
      )}

      {/* Calendar View */}
      {view === 'calendar' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <PremiumCard variant="luxury" className="p-6">
            <div className="text-center py-16">
              <CalendarIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Calendar view coming soon!</p>
              <p className="text-gray-500 text-sm mt-2">For now, use the list view to browse your entries</p>
            </div>
          </PremiumCard>
        </motion.div>
      )}

      {/* New Entry Modal */}
      <AnimatePresence>
        {showNewEntryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowNewEntryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#0B1120] to-[#0A0A0A] border-2 border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">New Journal Entry</h2>
                <button
                  onClick={() => setShowNewEntryModal(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-all"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Trade Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Pair</label>
                    <input
                      type="text"
                      placeholder="EUR/USD"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Trade Type</label>
                  <div className="flex gap-4">
                    <button className="flex-1 py-3 bg-blue-500/20 border-2 border-blue-500/40 rounded-xl text-blue-400 font-semibold hover:bg-blue-500/30 transition-all">
                      Long
                    </button>
                    <button className="flex-1 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-gray-400 font-semibold hover:bg-white/10 transition-all">
                      Short
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Entry Price</label>
                    <input
                      type="number"
                      step="0.0001"
                      placeholder="1.0850"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Exit Price</label>
                    <input
                      type="number"
                      step="0.0001"
                      placeholder="1.0920"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Trade Notes</label>
                  <textarea
                    rows={4}
                    placeholder="What was your analysis? How did you feel? What did you learn?"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Tags</label>
                  <input
                    type="text"
                    placeholder="breakout, trend-following, support"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-secondary-bright to-secondary-light text-dark-black font-bold text-lg rounded-xl shadow-lg"
                >
                  Save Entry
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
