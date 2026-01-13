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
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border-2 border-secondary-bright/30 shadow-2xl"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <img
            src="/images/download-2.jpg"
            alt="Futuristic Trade Copier Synchronization"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <Copy className="h-8 w-8 text-secondary-bright flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Trade Copier: Synchronized</h3>
                <p className="text-secondary-bright mb-4">
                  Connect your trading accounts to start copying trades across multiple platforms
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-secondary-bright/10 backdrop-blur-sm rounded-lg border border-secondary-bright/20">
                <Link2 className="h-5 w-5 text-secondary-bright mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-white mb-1">One Master, Many Accounts</h4>
                  <p className="text-sm text-gray-300">
                    Link multiple Real & Demo accounts to one master account
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-secondary-bright/10 backdrop-blur-sm rounded-lg border border-secondary-bright/20">
                <p className="text-sm text-gray-300 text-center">
                  Up to 2 accounts on Pro plan.<br />
                  <span className="text-secondary-bright font-semibold">Upgrade for unlimited connections</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
