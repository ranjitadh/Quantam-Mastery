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
  User
} from 'lucide-react'
import Logo from '@/components/layout/Logo'

const navigation = [
  { name: 'Dashboard', href: '/dashboard/overview', icon: LayoutDashboard },
  { name: 'Courses', href: '/dashboard/course', icon: BookOpen },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Journal', href: '/dashboard/journal', icon: BookMarked },
  { name: 'Accounts', href: '/dashboard/accounts', icon: Wallet },
  { name: 'Copy Traders', href: '/dashboard/trade-copier', icon: Copy },
  { name: 'Competition', href: '/dashboard/competition', icon: Trophy },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Affiliates', href: '/affiliates', icon: Gift },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-gradient-to-b from-[#0A0A0A] to-[#0B1120] border-r border-white/10 text-white flex flex-col h-screen backdrop-blur-xl"
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-bright/30 to-transparent" />
        <Logo variant="dark" showText={true} />
      </div>

      {/* User Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-4 border-b border-white/5"
      >
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-bright to-secondary-light flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-dark-black" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">Trading Pro</p>
            <p className="text-xs text-gray-400 truncate">pro@trader.com</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-secondary-bright group-hover:translate-x-1 transition-all" />
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
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
                    ? 'bg-gradient-to-r from-secondary-bright/20 to-secondary-light/10 text-secondary-bright border-2 border-secondary-bright/40 shadow-lg shadow-secondary-bright/10'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border-2 border-transparent hover:border-white/10'
                  }
                `}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-bright rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <item.icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${isActive ? 'animate-pulse-slow' : ''}`} />
                <span className="font-medium flex-1">{item.name}</span>

                {!isActive && (
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                )}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/10 space-y-1 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-bright/20 to-transparent" />

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-300 border-2 border-transparent hover:border-white/10 group"
        >
          <Settings className="h-5 w-5 transition-transform group-hover:rotate-90 duration-500" />
          <span className="font-medium">Settings</span>
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 border-2 border-transparent hover:border-red-500/20 group"
        >
          <LogOut className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </motion.div>
  )
}
