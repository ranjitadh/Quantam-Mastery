'use client'

import { motion } from 'framer-motion'
import { Copy, Plus, Link2, Monitor, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function TradeCopierPage() {
  return (
    <div className="space-y-8 max-w-7xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Trade <span className="text-green-primary">Copier</span></h1>
          <p className="text-text-secondary mt-2">Sync trades between your own accounts</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Link Account
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-background-secondary to-background-primary border-green-primary/20">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Copy className="w-64 h-64 text-green-primary" />
          </div>

          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-4 bg-green-primary/10 rounded-2xl border border-green-primary/20">
                <Copy className="h-8 w-8 text-green-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Synchronized Execution</h3>
                <p className="text-text-secondary max-w-2xl">
                  Connect your trading accounts to start copying trades across multiple platforms instantly.
                  Low latency, high reliability.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-background-primary/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-green-primary/30 transition-all">
                <Link2 className="h-6 w-6 text-green-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">One Master, Many Slaves</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Link multiple Real & Demo accounts to one master account. Trades taken on Master are instantly replicated.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background-primary/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-green-primary/30 transition-all">
                <Monitor className="h-6 w-6 text-green-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Cross-Broker Compatible</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Copy from MT4 to MT5, cTrader to MT4, or any combination supported by our bridge.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-text-muted">
                <span className="text-green-primary font-bold">2/2 Accounts Linked</span> (Pro Plan Limit)
              </p>
              <Button variant="outline" className="text-xs group">
                Upgrade for Unlimited <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
