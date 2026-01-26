'use client'

import { motion } from 'framer-motion'
import { Trophy, Calendar, Users, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function CompetitionPage() {
  return (
    <div className="space-y-8">
      {/* Competition Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="relative overflow-hidden p-8 bg-gradient-to-r from-background-secondary to-background-primary border-green-primary/20">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Trophy className="w-64 h-64 text-green-primary" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Trading <span className="text-green-primary">Competitions</span>
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              Test your skills against the best. Prove your consistency. Win capital allocations and cash prizes.
            </p>

            <div className="flex gap-4">
              <Button size="lg">Join Next Event</Button>
              <Button variant="outline" size="lg">Leaderboard</Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col hover:border-green-primary/50 transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-primary/10 rounded-xl border border-green-primary/20 group-hover:bg-green-primary/20 transition-colors">
                  <Trophy className="h-6 w-6 text-green-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">Monthly Cup {i}</h3>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Calendar className="h-4 w-4 text-text-muted" />
                  <span>February 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Users className="h-4 w-4 text-text-muted" />
                  <span>142 participants registered</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">Prize Pool</span>
                  <span className="font-bold text-green-primary text-lg">$5,000</span>
                </div>

                <Button className="w-full justify-between group-hover:bg-green-primary group-hover:text-black">
                  Enter Competition <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
