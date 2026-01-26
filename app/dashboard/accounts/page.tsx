'use client'

import { motion } from 'framer-motion'
import { Wallet, Plus, TrendingUp, DollarSign, Eye, EyeOff, RefreshCw, Trash2, Edit, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
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
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Trading <span className="text-green-primary">Accounts</span>
                    </h1>
                    <p className="text-text-secondary">Manage your connected broker accounts</p>
                </div>
                <Button className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add Account
                </Button>
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
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary hover:bg-white/5 border border-white/5 transition-all text-text-secondary"
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
                            <Card className="p-6 relative overflow-hidden group h-full">
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${account.status === 'active'
                                        ? 'bg-green-primary/10 text-green-primary border border-green-primary/20'
                                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                        }`}>
                                        {account.status === 'active' ? '● Active' : '● Demo'}
                                    </span>
                                </div>

                                {/* Account Header */}
                                <div className="mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-3 rounded-xl bg-background-secondary border border-white/5">
                                            <Wallet className="w-6 h-6 text-green-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{account.name}</h3>
                                            <p className="text-sm text-text-secondary">{account.broker}</p>
                                            <p className="text-xs text-text-muted mt-1 font-mono">#{account.accountNumber}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Account Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-background-primary border border-white/5">
                                        <p className="text-xs text-text-muted mb-1">Balance</p>
                                        <p className="text-2xl font-bold text-white">
                                            {showBalance ? `$${account.balance.toLocaleString()}` : '••••••'}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-background-primary border border-white/5">
                                        <p className="text-xs text-text-muted mb-1">Equity</p>
                                        <p className="text-2xl font-bold text-green-primary">
                                            {showBalance ? `$${account.equity.toLocaleString()}` : '••••••'}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-background-primary border border-white/5">
                                        <p className="text-xs text-text-muted mb-1">Margin</p>
                                        <p className="text-lg font-semibold text-white">
                                            {showBalance ? `$${account.margin.toLocaleString()}` : '••••••'}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-background-primary border border-white/5">
                                        <p className="text-xs text-text-muted mb-1">Free Margin</p>
                                        <p className="text-lg font-semibold text-white">
                                            {showBalance ? `$${account.freeMargin.toLocaleString()}` : '••••••'}
                                        </p>
                                    </div>
                                </div>

                                {/* Account Details */}
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                                    <div className="flex gap-4 text-sm">
                                        <div>
                                            <span className="text-text-muted">Currency: </span>
                                            <span className="text-white font-semibold">{account.currency}</span>
                                        </div>
                                        <div>
                                            <span className="text-text-muted">Leverage: </span>
                                            <span className="text-white font-semibold">{account.leverage}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button variant="outline" className="flex-1 text-xs h-9">
                                        <RefreshCw className="w-3.5 h-3.5 mr-2" /> Refresh
                                    </Button>
                                    <Button variant="outline" className="flex-1 text-xs h-9">
                                        <Edit className="w-3.5 h-3.5 mr-2" /> Edit
                                    </Button>
                                    <Button variant="outline" className="px-3 text-red-500 hover:text-red-400 hover:border-red-500/50 h-9">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </Card>
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
                <Card className="p-8 cursor-pointer group border-2 border-dashed border-white/10 hover:border-green-primary/50 transition-all bg-transparent hover:bg-green-primary/5">
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="p-4 rounded-full bg-background-secondary mb-4 group-hover:bg-green-primary/10 transition-all border border-white/5 group-hover:border-green-primary/30">
                            <Plus className="w-8 h-8 text-text-muted group-hover:text-green-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Connect New Account</h3>
                        <p className="text-text-secondary text-center max-w-md">
                            Link your broker account to automatically track your trades and performance
                        </p>
                    </div>
                </Card>
            </motion.div>

            {/* Help Section */}
            <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-green-primary" />
                    <h3 className="text-xl font-bold text-white">Supported Brokers</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['MetaTrader 4', 'MetaTrader 5', 'cTrader', 'TradingView', 'Interactive Brokers', 'TD Ameritrade', 'Oanda', 'FXCM'].map((broker, i) => (
                        <div
                            key={broker}
                            className="p-4 rounded-xl bg-background-secondary border border-white/5 text-center hover:border-green-primary/30 transition-all cursor-pointer"
                        >
                            <p className="text-sm text-text-secondary font-medium hover:text-white transition-colors">{broker}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}
