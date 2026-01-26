'use client'

import { motion } from 'framer-motion'
import { User, Bell, Shield, Save } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: false,
        tradingAlerts: true,
        weeklyReport: true,
    })

    const toggleSetting = (key: string) => {
        setSettings(prev => ({ ...prev, [key as keyof typeof settings]: !prev[key as keyof typeof settings] }))
    }

    return (
        <div className="space-y-8 max-w-4xl">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Settings
                </h1>
                <p className="text-text-secondary">Manage your account preferences and settings</p>
            </motion.div>

            {/* Profile Settings */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                        <div className="p-3 rounded-xl bg-background-secondary border border-white/5">
                            <User className="w-5 h-5 text-green-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
                            <input
                                type="text"
                                defaultValue="Trading Pro"
                                className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl text-white focus:border-green-primary focus:outline-none transition-all placeholder:text-text-muted"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                            <input
                                type="email"
                                defaultValue="pro@trader.com"
                                className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl text-white focus:border-green-primary focus:outline-none transition-all placeholder:text-text-muted"
                            />
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Notifications */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                        <div className="p-3 rounded-xl bg-background-secondary border border-white/5">
                            <Bell className="w-5 h-5 text-green-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Notifications</h2>
                    </div>

                    <div className="space-y-4">
                        {Object.entries(settings).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-background-secondary border border-white/5 hover:border-green-primary/30 transition-all">
                                <span className="text-white font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                <button
                                    role="switch"
                                    aria-checked={value}
                                    onClick={() => toggleSetting(key)}
                                    className={`relative w-14 h-7 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-primary/50 ${value ? 'bg-green-primary' : 'bg-background-primary border border-white/10'
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${value ? 'translate-x-7' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </Card>
            </motion.div>

            {/* Security */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                        <div className="p-3 rounded-xl bg-background-secondary border border-white/5">
                            <Shield className="w-5 h-5 text-green-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Security</h2>
                    </div>

                    <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start h-auto py-4 text-base">
                            Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start h-auto py-4 text-base">
                            Enable Two-Factor Authentication
                        </Button>
                    </div>
                </Card>
            </motion.div>

            {/* Save Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Button size="lg" className="w-full gap-2 text-lg font-bold">
                    <Save className="w-5 h-5" />
                    Save Changes
                </Button>
            </motion.div>
        </div>
    )
}
