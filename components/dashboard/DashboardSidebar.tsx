'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  LogOut
} from 'lucide-react'
import Logo from '@/components/layout/Logo'

const navigation = [
  { name: 'Dashboard', href: '/dashboard/overview', icon: LayoutDashboard },
  { name: 'Courses', href: '/dashboard/course', icon: BookOpen },
  { name: 'Calendar', href: '/dashboard/journal', icon: Calendar },
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
    <div className="w-64 bg-[#0A0A0A] border-r border-secondary-bright/10 text-white flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-secondary-bright/10">
        <Logo variant="dark" showText={true} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                  ? 'bg-secondary-bright/20 text-secondary-bright border-2 border-secondary-bright/40 shadow-lg shadow-secondary-bright/20'
                  : 'text-gray-400 hover:bg-secondary-bright/5 hover:text-gray-200 border-2 border-transparent'
                }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-secondary-bright/10 space-y-1">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-secondary-bright/5 hover:text-gray-200 transition-all duration-200 border-2 border-transparent"
        >
          <Settings className="h-5 w-5" />
          <span className="font-medium">Settings</span>
        </Link>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 border-2 border-transparent hover:border-red-500/20"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
