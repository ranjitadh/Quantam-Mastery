'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Plus } from 'lucide-react'

export default function JournalPage() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Trade Journal</h1>
          <p className="text-gray-300 mt-2">Track your trades and mindset with calendar journaling</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary-bright text-dark rounded-md hover:bg-secondary-light transition-colors">
          <Plus className="h-5 w-5" />
          New Entry
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 bg-secondary-bright/10 p-1 rounded-lg w-fit">
        <button
          onClick={() => setView('calendar')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            view === 'calendar' ? 'bg-secondary-bright text-dark shadow-sm' : 'text-gray-300'
          }`}
        >
          <Calendar className="h-4 w-4" />
          Calendar View
        </button>
        <button
          onClick={() => setView('list')}
          className={`px-4 py-2 rounded-md transition-colors ${
            view === 'list' ? 'bg-secondary-bright text-dark shadow-sm' : 'text-gray-300'
          }`}
        >
          List View
        </button>
      </div>

      {/* Calendar View */}
      {view === 'calendar' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary-bright/5 rounded-lg border-2 border-secondary-bright/20 p-8"
        >
          <div className="text-center text-gray-400 py-12">
            <Calendar className="h-16 w-16 mx-auto mb-4 text-secondary-bright/50" />
            <p className="text-lg font-medium mb-2">Monthly Calendar View</p>
            <p className="text-sm">Color coded profit/loss days</p>
            <p className="text-xs mt-2 text-gray-500">Similar to TraderWaves.com</p>
          </div>
        </motion.div>
      )}

      {/* List View */}
      {view === 'list' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary-bright/5 rounded-lg border-2 border-secondary-bright/20 p-6"
        >
          <div className="text-center py-12 text-gray-400">
            <p>No journal entries yet</p>
            <p className="text-sm mt-2">Create your first entry to get started</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
