'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  BookMarked,
  Wallet,
  Copy,
  Trophy,
  Users,
  Gift,
  Settings,
  LogOut,
  ChevronRight,
  User,
  Shield,
  FileText
} from 'lucide-react'
import Logo from '@/components/layout/Logo'
import { usePermission } from '@/hooks/usePermission'

const navigation = [
  { name: 'Dashboard', href: '/dashboard/overview', icon: LayoutDashboard, roles: [] },
  { name: 'Courses', href: '/dashboard/course', icon: BookOpen, roles: [] },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar, roles: [] },
  { name: 'Journal', href: '/dashboard/journal', icon: BookMarked, roles: [] },
  { name: 'Accounts', href: '/dashboard/accounts', icon: Wallet, roles: [] },
  { name: 'Copy Traders', href: '/dashboard/trade-copier', icon: Copy, roles: [] },
  { name: 'Competition', href: '/dashboard/competition', icon: Trophy, roles: [] },
  { name: 'Community', href: '/community', icon: Users, roles: [] },
  { name: 'Affiliates', href: '/affiliates', icon: Gift, roles: [] },
]

const adminNavigation = [
  { name: 'User Management', href: '/admin/users', icon: Shield, roles: ['ADMIN'] },
  { name: 'Content Manager', href: '/dashboard/content-manager', icon: FileText, roles: ['ADMIN', 'MENTOR'] },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const { role, isTrader } = usePermission()

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-background-secondary border-r border-white/5 text-white flex flex-col h-screen"
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-white/5 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-primary/30 to-transparent" />
        <Logo variant="dark" showText={true} />
      </div>

      {/* User Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-4 border-b border-white/5"
      >
        <div className="flex items-center gap-3 p-3 rounded-xl bg-background-primary border border-white/5 hover:border-green-primary/30 transition-all cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center shadow-[0_0_10px_rgba(58,255,58,0.2)]">
            <User className="w-5 h-5 text-green-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate group-hover:text-green-primary transition-colors">
              {role === 'ADMIN' ? 'Admin' : role === 'MENTOR' ? 'Mentor' : 'Trading Pro'}
            </p>
            <p className="text-xs text-text-muted truncate">my-account</p>
          </div>
          <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-green-primary group-hover:translate-x-1 transition-all" />
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {/* Main Navigation */}
        {navigation.map((item, index) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-300 group relative overflow-hidden
                  ${isActive
                    ? 'bg-green-primary/10 text-green-primary border border-green-primary/30 shadow-[0_0_15px_rgba(58,255,58,0.1)]'
                    : 'text-text-secondary hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-green-primary rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <item.icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${isActive ? 'drop-shadow-[0_0_5px_rgba(58,255,58,0.5)]' : ''}`} />
                <span className="font-medium flex-1">{item.name}</span>

                {!isActive && (
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-text-muted" />
                )}
              </Link>
            </motion.div>
          )
        })}

        {/* Admin Navigation */}
        {(role === 'ADMIN' || role === 'MENTOR') && (
          <>
            <div className="my-4 border-t border-white/5 mx-2" />
            <p className="px-4 text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Admin Panel</p>
            {adminNavigation.map((item, index) => {
              if (item.roles.length > 0 && role && !item.roles.includes(role)) return null

              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`
                       flex items-center gap-3 px-4 py-3 rounded-xl
                       transition-all duration-300 group relative overflow-hidden
                       ${isActive
                        ? 'bg-green-primary/10 text-green-primary border border-green-primary/30'
                        : 'text-text-secondary hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
                      }
                     `}
                  >
                    <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="font-medium flex-1">{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </>
        )}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/5 space-y-1 relative bg-background-primary/50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-primary/20 to-transparent" />

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:bg-white/5 hover:text-white transition-all duration-300 border border-transparent hover:border-white/10 group"
        >
          <Settings className="h-5 w-5 transition-transform group-hover:rotate-90 duration-500" />
          <span className="font-medium">Settings</span>
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:bg-red-500/10 hover:text-red-500 transition-all duration-300 border border-transparent hover:border-red-500/20 group"
        >
          <LogOut className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </motion.div>
  )
}
