'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  BookOpen, 
  BookMarked, 
  Copy, 
  Trophy, 
  Users,
  Settings,
  LogOut
} from 'lucide-react'
import Logo from '@/components/layout/Logo'

const navigation = [
  { name: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard },
  { name: 'Course', href: '/dashboard/course', icon: BookOpen },
  { name: 'Journal', href: '/dashboard/journal', icon: BookMarked },
  { name: 'Trade Copier', href: '/dashboard/trade-copier', icon: Copy },
  { name: 'Competition', href: '/dashboard/competition', icon: Trophy },
  { name: 'Leaderboard', href: '/dashboard/leaderboard', icon: Users },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-dark border-r border-secondary-bright/20 text-white flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-secondary-bright/20">
        <Logo variant="dark" showText={true} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-secondary-bright/20 text-secondary-bright border border-secondary-bright/30'
                  : 'text-gray-300 hover:bg-secondary-bright/10 hover:text-secondary-bright'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-secondary-bright/20 space-y-2">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-300 hover:bg-secondary-bright/10 hover:text-secondary-bright transition-colors"
        >
          <Settings className="h-5 w-5" />
          <span className="font-medium">Settings</span>
        </Link>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-gray-300 hover:bg-secondary-bright/10 hover:text-secondary-bright transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
