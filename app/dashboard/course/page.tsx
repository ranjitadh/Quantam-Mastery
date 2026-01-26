'use client'

import { motion } from 'framer-motion'
import { BookOpen, CheckCircle, Lock, PlayCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const modules = [
  { id: 1, title: 'Module 1: Market Fundamentals', completed: true, locked: false, desc: 'Understanding liquidity, sessions, and market structure.' },
  { id: 2, title: 'Module 2: Technical Analysis Basics', completed: true, locked: false, desc: 'Candlestick math, order blocks, and inefficiency.' },
  { id: 3, title: 'Module 3: Risk Management', completed: false, locked: false, desc: 'Position sizing, defensive protocols, and capital preservation.' },
  { id: 4, title: 'Module 4: Trading Psychology', completed: false, locked: false, desc: 'Mastering the internal game and emotional regulation.' },
  { id: 5, title: 'Module 5: Advanced Strategies', completed: false, locked: true, desc: 'Combining concepts for high-probability execution.' },
]

export default function CoursePage() {
  return (
    <div className="space-y-8">
      {/* Course Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="relative overflow-hidden p-8 bg-gradient-to-r from-background-secondary to-background-primary border-green-primary/20">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BookOpen className="w-64 h-64 text-green-primary" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Quantum <span className="text-green-primary">Academy</span>
              </h1>
              <p className="text-text-secondary text-lg max-w-xl">
                Step-by-step structured learning from foundation to mastery. Proceed in order to unlock the next level.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-primary/10 border border-green-primary/20 rounded-full text-green-primary text-sm font-bold">
              <span>Progress: 40%</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`h-full flex flex-col p-6 transition-all duration-300 ${module.locked ? 'opacity-70 grayscale' : 'hover:border-green-primary/50'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-background-secondary border border-white/5">
                  <BookOpen className={`h-6 w-6 ${module.completed ? 'text-green-primary' : 'text-text-secondary'}`} />
                </div>
                {module.completed && <CheckCircle className="h-6 w-6 text-green-primary" />}
                {module.locked && <Lock className="h-6 w-6 text-text-muted" />}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{module.title}</h3>
                <p className="text-sm text-text-muted mb-6">{module.desc}</p>
              </div>

              <Button
                variant={module.locked ? 'ghost' : module.completed ? 'outline' : 'primary'}
                className="w-full justify-between group"
                disabled={module.locked}
              >
                {module.locked ? 'Locked' : module.completed ? 'Review Module' : 'Start Learning'}
                {!module.locked && <PlayCircle className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
