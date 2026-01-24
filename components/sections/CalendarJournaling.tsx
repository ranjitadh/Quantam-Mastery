'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingUp } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useState, useEffect } from 'react'

export default function CalendarJournaling() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Dummy Calendar Data Generation
  const days = Array.from({ length: 30 }, (_, i) => {
    const isWin = Math.random() > 0.4;
    const isTrade = Math.random() > 0.3;
    return { day: i + 1, type: isTrade ? (isWin ? 'win' : 'loss') : 'none', amt: isTrade ? Math.floor(Math.random() * 500) : 0 }
  })

  if (!mounted) return null;

  return (
    <Section className="bg-background-secondary relative border-y border-border-soft">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-primary/10 border border-green-primary/20 text-green-primary text-sm font-semibold mb-6">
            <Calendar className="w-4 h-4" />
            <span>Interactive Journaling</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build Consistency with <br />
            <span className="text-green-primary">Visual Journaling.</span>
          </h2>

          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Stop guessing. Start tracking. Our proprietary calendar view lets you visualize your winning streaks, analyze daily performance, and identify the patterns that make you profitable.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { title: "Automated Stats", desc: "Win rate, P&L, and R:R calculated instantly." },
              { title: "Streak Tracking", desc: "Gamify your discipline with winning streaks." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center shrink-0 border border-green-primary/20">
                  <TrendingUp className="w-6 h-6 text-green-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Calendar Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-green-primary/5 blur-3xl rounded-full transform rotate-12" />

          <Card className="p-6 relative bg-[#0F1A0F]/80 backdrop-blur-xl border-green-primary/20 shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b border-border-soft pb-4">
              <h3 className="text-white font-bold text-xl">September 2026</h3>
              <div className="flex gap-2">
                <span className="text-xs text-text-muted">WIN RATE</span>
                <span className="text-xs font-bold text-green-primary">68%</span>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                <div key={d} className="text-center text-xs text-text-muted font-bold py-2">{d}</div>
              ))}
              {days.map((d, i) => (
                <div key={i} className={`
                      aspect-square rounded-lg flex flex-col items-center justify-center border border-transparent hover:border-green-primary/50 transition-all cursor-default
                      ${d.type === 'win' ? 'bg-green-primary/20 text-green-primary' :
                    d.type === 'loss' ? 'bg-red-500/10 text-red-500' : 'bg-background-primary/50 text-text-secondary'}
                   `}>
                  <span className="text-xs font-bold mb-1">{d.day}</span>
                  {d.type !== 'none' && (
                    <span className="text-[10px] font-mono opacity-80">${d.amt}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border-soft flex justify-between items-center text-sm">
              <div className="text-text-secondary">Net P&L</div>
              <div className="text-green-primary font-bold text-xl">+$4,250.00</div>
            </div>
          </Card>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 right-0 md:-right-6 bg-background-card border border-green-primary text-white px-4 py-2 rounded-lg shadow-lg shadow-green-primary/20"
          >
            <span className="text-sm font-bold">🔥 4 Day Streak</span>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
