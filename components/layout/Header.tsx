'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10">
      {/* Premium Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-bright/50 to-transparent" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo variant="dark" showText={true} />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-2 relative"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}

                  {/* Gradient Underline on Hover */}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-bright to-secondary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-[#0B1120]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="px-4 py-3 text-sm text-gray-400 border-b border-white/5">
                      Coming soon...
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/register"
                className="
                  relative overflow-hidden
                  rounded-xl bg-gradient-to-r from-secondary-bright to-secondary-light 
                  px-6 py-2.5 text-sm font-semibold text-dark-black 
                  shadow-lg shadow-secondary-bright/30
                  hover:shadow-xl hover:shadow-secondary-bright/40
                  transition-all duration-300
                  group
                "
              >
                <span className="relative z-10">Register</span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 space-y-2 border-t border-white/10 overflow-hidden"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="
                      block px-4 py-3 text-base font-medium 
                      text-gray-300 hover:text-white
                      hover:bg-white/5 rounded-lg
                      transition-all duration-200
                      border border-transparent hover:border-white/10
                    "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/register"
                  className="
                    block px-4 py-3 text-base font-semibold text-center
                    text-dark-black bg-gradient-to-r from-secondary-bright to-secondary-light 
                    rounded-lg shadow-lg shadow-secondary-bright/30
                    hover:shadow-xl hover:shadow-secondary-bright/40
                    transition-all duration-300
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
