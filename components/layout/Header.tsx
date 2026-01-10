'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navigation = [
  { name: 'Features', href: '/#features', hasDropdown: true },
  { name: 'Program', href: '/program', hasDropdown: true },
  { name: 'Community', href: '/community', hasDropdown: false },
  { name: 'Plans', href: '/plans', hasDropdown: false },
  { name: 'Affiliates', href: '/affiliates', hasDropdown: false },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-secondary-bright/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" showText={true} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-secondary-bright transition-colors flex items-center gap-1"
              >
                {item.name}
                {item.hasDropdown && (
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
            <Link
              href="/register"
              className="rounded-md bg-secondary-bright px-4 py-2 text-sm font-medium text-dark-black hover:bg-secondary-light transition-colors shadow-lg shadow-secondary-bright/30"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-secondary-bright/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-secondary-bright/10 hover:text-secondary-bright rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/register"
              className="block px-3 py-2 mt-4 text-base font-medium text-dark-black bg-secondary-bright rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
