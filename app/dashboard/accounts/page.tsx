'use client'

import { motion } from 'framer-motion'
import { Wallet, Plus, TrendingUp, DollarSign, Eye, EyeOff, RefreshCw, Trash2, Edit } from 'lucide-react'
import PremiumCard from '@/components/ui/PremiumCard'
import StatsCard from '@/components/dashboard/StatsCard'
import { useState } from 'react'

const accounts = [
    {
        id: 1,
        name: 'MT5 Live Account',
        broker: 'MetaTrader 5',
        accountNumber: '****8923',
        balance: 15420.50,
        equity: 15890.25,
        margin: 2340.00,
        freeMargin: 13550.25,
        status: 'active',
        currency: 'USD',
        leverage: '1:100',
    },
    {
        id: 2,
        name: 'Demo Practice Account',
        broker: 'cTrader',
        accountNumber: '****3421',
        balance: 50000.00,
        equity: 51200.00,
        margin: 0,
        freeMargin: 51200.00,
        status: 'demo',
        currency: 'USD',
        leverage: '1:500',
    },
]

const stats = [
    {
        name: 'Total Balance',
        value: '$65,420',
        icon: DollarSign,
        change: '+8.2%',
        changeType: 'positive' as const,
    },
    {
        name: 'Total Equity',
        value: '$67,090',
        icon: TrendingUp,
        change: '+9.5%',
        changeType: 'positive' as const,
    },
    {
        name: 'Active Accounts',
        value: '2',
        icon: Wallet,
        change: '+1',
        changeType: 'positive' as const,
    },
]

export default function AccountsPage() {
    const [showBalance, setShowBalance] = useState(true)

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
                        Trading Accounts
                    </h1>
                    <p className="text-gray-400">Manage your connected broker accounts</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-secondary-bright to-secondary-light text-dark-black font-semibold rounded-xl shadow-lg shadow-secondary-bright/30 flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Add Account
                </motion.button>
            </motion.div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <StatsCard key={stat.name} {...stat} delay={index * 0.1} />
                ))}
            </div>

            {/* Connected Accounts */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">Connected Accounts</h2>
                    <button
                        onClick={() => setShowBalance(!showBalance)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-gray-300"
                    >
                        {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        {showBalance ? 'Hide' : 'Show'} Balances
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {accounts.map((account, index) => (
                        <motion.div
                            key={account.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <PremiumCard variant="luxury" className="p-6 relative overflow-hidden group">
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${account.status === 'active'
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        }`}>
                                        {account.status === 'active' ? '● Active' : '● Demo'}
                                    </span>
                                </div>

                                {/* Account Header */}
                                <div className="mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-secondary-bright to-secondary-light">
                                            <Wallet className="w-6 h-6 text-dark-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{account.name}</h3>
                                            <p className="text-sm text-gray-400">{account.broker}</p>
                                            <p className="text-xs text-gray-500 mt-1">Account: {account.accountNumber}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Account Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-xs text-gray-400 mb-1">Balance</p>
                                        <p className="text-2xl font-bold text-white">
                                            {showBalance ? `$${account.balance.toLocaleString()}` : '••••••'}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-xs text-gray-400 mb-1">Equity</p>
                                        <p className="text-2xl font-bold text-green-400">
                                            {showBalance ? `$${account.equity.toLocaleString()}` : '••••••'}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-xs text-gray-400 mb-1">Margin</p>
                                        <p className="text-lg font-semibold text-white">
                                            {showBalance ? `$${account.margin.toLocaleString()}` : '••••••'}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-xs text-gray-400 mb-1">Free Margin</p>
                                        <p className="text-lg font-semibold text-white">
                                            {showBalance ? `$${account.freeMargin.toLocaleString()}` : '••••••'}
                                        </p>
                                    </div>
                                </div>

                                {/* Account Details */}
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                                    <div className="flex gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-400">Currency: </span>
                                            <span className="text-white font-semibold">{account.currency}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Leverage: </span>
                                            <span className="text-white font-semibold">{account.leverage}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                                    >
                                        <RefreshCw className="w-4 h-4" />
                                        Refresh
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                                    >
                                        <Edit className="w-4 h-4" />
                                        Edit
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/20 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </PremiumCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Add Account Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <PremiumCard
                    variant="gradient"
                    className="p-8 cursor-pointer group border-2 border-dashed border-white/20 hover:border-secondary-bright/50 transition-all"
                >
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:bg-secondary-bright/10 transition-all">
                            <Plus className="w-8 h-8 text-gray-400 group-hover:text-secondary-bright transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Connect New Account</h3>
                        <p className="text-gray-400 text-center max-w-md">
                            Link your broker account to automatically track your trades and performance
                        </p>
                    </div>
                </PremiumCard>
            </motion.div>

            {/* Help Section */}
            <PremiumCard variant="luxury" className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Supported Brokers</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['MetaTrader 4', 'MetaTrader 5', 'cTrader', 'TradingView', 'Interactive Brokers', 'TD Ameritrade', 'Oanda', 'FXCM'].map((broker, i) => (
                        <motion.div
                            key={broker}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all cursor-pointer"
                        >
                            <p className="text-sm text-white font-medium">{broker}</p>
                        </motion.div>
                    ))}
                </div>
            </PremiumCard>
        </div>
    )
}
