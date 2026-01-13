'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Free Guides', href: '/guides' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Community', href: '/community' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: '𝕏', href: 'https://twitter.com' },
  { name: 'Instagram', icon: '📷', href: 'https://instagram.com' },
  { name: 'YouTube', icon: '▶️', href: 'https://youtube.com' },
  { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-secondary-bright/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-bright/5 to-transparent opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/qtm-logo-white.png"
                alt="Quantum Trading Mastery"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Quantum Trading Mastery - Transform your trading journey with expert mentorship and proven strategies.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-secondary-bright/10 border border-secondary-bright/30 flex items-center justify-center text-secondary-bright hover:bg-secondary-bright hover:text-dark transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-secondary-bright transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-secondary-bright/20"
        >
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            className="flex items-center gap-4 bg-secondary-bright/5 rounded-xl p-4 border border-secondary-bright/20"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary-bright/20 flex items-center justify-center flex-shrink-0">
              <Mail className="h-6 w-6 text-secondary-bright" />
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">Email Us</div>
              <a
                href="mailto:support@quantumtrading.com"
                className="text-white hover:text-secondary-bright transition-colors text-sm font-medium"
              >
                support@quantumtrading.com
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            className="flex items-center gap-4 bg-secondary-bright/5 rounded-xl p-4 border border-secondary-bright/20"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary-bright/20 flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-secondary-bright" />
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">Call Us</div>
              <a
                href="tel:+15551234567"
                className="text-white hover:text-secondary-bright transition-colors text-sm font-medium"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            className="flex items-center gap-4 bg-secondary-bright/5 rounded-xl p-4 border border-secondary-bright/20"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary-bright/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-secondary-bright" />
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">Location</div>
              <p className="text-white text-sm font-medium">
                Dubai, UAE
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Quantum Trading Mastery. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-secondary-bright transition-colors text-sm"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-secondary-bright transition-colors text-sm"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-secondary-bright transition-colors text-sm"
            >
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
