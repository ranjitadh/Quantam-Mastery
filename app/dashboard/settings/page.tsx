'use client'

import { motion } from 'framer-motion'
import { User, Bell, Shield, CreditCard, Save } from 'lucide-react'
import PremiumCard from '@/components/ui/PremiumCard'
import { useState } from 'react'

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: false,
        tradingAlerts: true,
        weeklyReport: true,
    })

    return (
        <div className="space-y-8 max-w-4xl">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    Settings
                </h1>
                <p className="text-gray-400">Manage your account preferences and settings</p>
            </motion.div>

            {/* Profile Settings */}
            <PremiumCard variant="luxury" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-secondary-bright to-secondary-light">
                        <User className="w-5 h-5 text-dark-black" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                        <input
                            type="text"
                            defaultValue="Trading Pro"
                            className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            defaultValue="pro@trader.com"
                            className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:border-secondary-bright focus:outline-none transition-all"
                        />
                    </div>
                </div>
            </PremiumCard>

            {/* Notifications */}
            <PremiumCard variant="luxury" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-cyan to-blue-500">
                        <Bell className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Notifications</h2>
                </div>

                <div className="space-y-4">
                    {Object.entries(settings).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-white font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <button
                                onClick={() => setSettings({ ...settings, [key]: !value })}
                                className={`relative w-14 h-7 rounded-full transition-colors ${value ? 'bg-secondary-bright' : 'bg-gray-600'
                                    }`}
                            >
                                <div
                                    className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${value ? 'translate-x-7' : 'translate-x-0'
                                        }`}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </PremiumCard>

            {/* Security */}
            <PremiumCard variant="luxury" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Security</h2>
                </div>

                <div className="space-y-4">
                    <button className="w-full text-left px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
                        Change Password
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
                        Enable Two-Factor Authentication
                    </button>
                </div>
            </PremiumCard>

            {/* Save Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-secondary-bright to-secondary-light text-dark-black font-bold text-lg rounded-xl shadow-lg shadow-secondary-bright/30 hover:shadow-xl hover:shadow-secondary-bright/40 transition-all flex items-center justify-center gap-2"
            >
                <Save className="w-5 h-5" />
                Save Changes
            </motion.button>
        </div>
    )
}
