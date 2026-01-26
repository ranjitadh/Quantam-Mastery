'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Search, MoreVertical, Check, X, User as UserIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { toast } from 'react-hot-toast'
import { UserRole, PlanType } from '@prisma/client'

interface User {
    id: string
    name: string | null
    email: string
    role: UserRole
    plan: PlanType
    createdAt: string
    _count: {
        quantumCompletions: number
    }
}

export default function UserManagementPage() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/admin/users')
            if (!res.ok) throw new Error('Failed to fetch users')
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            toast.error('Failed to load users')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleUpdateUser = async (userId: string, updates: { role?: string, plan?: string }) => {
        const originalUsers = [...users]

        // Optimistic update
        setUsers(users.map(u => u.id === userId ? { ...u, ...updates } as User : u))

        try {
            const res = await fetch('/api/admin/users', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, ...updates })
            })

            if (!res.ok) throw new Error('Update failed')
            toast.success('User updated successfully')
        } catch (error) {
            setUsers(originalUsers)
            toast.error('Failed to update user')
        }
    }

    const filteredUsers = users.filter(u =>
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        (u.name && u.name.toLowerCase().includes(search.toLowerCase()))
    )

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
                    <p className="text-text-secondary">Manage roles, plans, and access levels.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-background-secondary border border-white/10 rounded-xl text-white focus:border-green-primary focus:outline-none w-64 transition-all"
                    />
                </div>
            </div>

            <Card className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-text-muted text-sm uppercase tracking-wider">
                            <tr>
                                <th className="p-4 font-medium">User</th>
                                <th className="p-4 font-medium">Role</th>
                                <th className="p-4 font-medium">Plan</th>
                                <th className="p-4 font-medium">Progress</th>
                                <th className="p-4 font-medium">Joined</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="p-4"><div className="h-10 w-40 bg-white/5 rounded" /></td>
                                        <td className="p-4"><div className="h-8 w-20 bg-white/5 rounded" /></td>
                                        <td className="p-4"><div className="h-8 w-24 bg-white/5 rounded" /></td>
                                        <td className="p-4"><div className="h-4 w-12 bg-white/5 rounded" /></td>
                                        <td className="p-4"><div className="h-4 w-24 bg-white/5 rounded" /></td>
                                        <td className="p-4"></td>
                                    </tr>
                                ))
                            ) : (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-background-secondary border border-white/10 flex items-center justify-center">
                                                    <UserIcon className="w-5 h-5 text-green-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white">{user.name || 'Anonymous'}</p>
                                                    <p className="text-xs text-text-muted">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <select
                                                value={user.role}
                                                onChange={(e) => handleUpdateUser(user.id, { role: e.target.value })}
                                                className={`bg-transparent border border-white/10 rounded px-2 py-1 text-sm font-medium focus:border-green-primary focus:outline-none cursor-pointer
                                                    ${user.role === 'ADMIN' ? 'text-red-400 border-red-500/30' :
                                                        user.role === 'MENTOR' ? 'text-purple-400 border-purple-500/30' : 'text-text-secondary'}
                                                `}
                                            >
                                                <option value="TRADER">Trader</option>
                                                <option value="MENTOR">Mentor</option>
                                                <option value="ADMIN">Admin</option>
                                            </select>
                                        </td>
                                        <td className="p-4">
                                            <select
                                                value={user.plan}
                                                onChange={(e) => handleUpdateUser(user.id, { plan: e.target.value })}
                                                className={`bg-transparent border border-white/10 rounded px-2 py-1 text-sm font-medium focus:border-green-primary focus:outline-none cursor-pointer
                                                    ${user.plan === 'MASTERY_CIRCLE' ? 'text-amber-400 border-amber-500/30' :
                                                        user.plan === 'ELITE_TRADER' ? 'text-blue-400 border-blue-500/30' :
                                                            user.plan === 'PRO_TRADER' ? 'text-green-primary border-green-primary/30' : 'text-gray-400'}
                                                `}
                                            >
                                                <option value="FREE">Free</option>
                                                <option value="PRO_TRADER">Pro Trader</option>
                                                <option value="ELITE_TRADER">Elite Trader</option>
                                                <option value="MASTERY_CIRCLE">Mastery Circle</option>
                                            </select>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-full bg-background-secondary h-1.5 rounded-full overflow-hidden w-24">
                                                    <div className="h-full bg-green-primary" style={{ width: `${Math.min(user._count.quantumCompletions * 5, 100)}%` }} />
                                                </div>
                                                <span className="text-xs text-text-muted">{user._count.quantumCompletions}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-text-muted">
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 text-right">
                                            <Button variant="outline" className="h-8 w-8 p-0">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    )
}
