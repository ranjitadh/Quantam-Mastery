'use client'

import { motion } from 'framer-motion'
import { Copy, Plus, Link2 } from 'lucide-react'

export default function TradeCopierPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Trade Copier</h1>
          <p className="text-gray-300 mt-2">Sync trades between your own accounts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary-bright text-dark rounded-md hover:bg-secondary-light transition-colors">
          <Plus className="h-5 w-5" />
          Link Account
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-secondary-bright/5 rounded-lg border-2 border-secondary-bright/20 p-8"
      >
        <div className="text-center py-12">
          <Copy className="h-16 w-16 mx-auto mb-4 text-secondary-bright/50" />
          <h3 className="text-lg font-semibold text-white mb-2">No Accounts Linked</h3>
          <p className="text-gray-300 mb-6">
            Connect your trading accounts to start copying trades
          </p>
          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex items-start gap-4 p-4 bg-secondary-bright/10 rounded-lg">
              <Link2 className="h-5 w-5 text-secondary-bright mt-0.5" />
              <div className="text-left">
                <h4 className="font-medium text-white mb-1">One Master, Many Accounts</h4>
                <p className="text-sm text-gray-300">
                  Link multiple Real & Demo accounts to one master account
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Up to 2 accounts available on Pro plan. Upgrade for more connections.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
