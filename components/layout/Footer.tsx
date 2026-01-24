'use client'

import Link from 'next/link'
import Image from 'next/image'
import AnimatedSocialIcon from '../ui/AnimatedSocialIcon'

const footerLinks = {
  about: [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  company: [
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Trusted Partners', href: '/partners' },
  ],
  resources: [
    { name: 'Blogs', href: '/blog' },
    { name: 'Help Center', href: '/help' },
  ],
}

const socialLinks = [
  { name: 'Discord', type: 'discord' as const, href: 'https://discord.com' },
  { name: 'YouTube', type: 'youtube' as const, href: 'https://youtube.com' },
  { name: 'Twitter', type: 'twitter' as const, href: 'https://twitter.com' },
  { name: 'Instagram', type: 'instagram' as const, href: 'https://instagram.com' },
  { name: 'Facebook', type: 'facebook' as const, href: 'https://facebook.com' },
]

export default function Footer() {
  return (
    <footer className="relative bg-background-secondary border-t border-white/5 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-green-primary/50 to-transparent shadow-[0_0_10px_rgba(58,255,58,0.5)]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/qtm-logo-white.png"
                  alt="Quantum Trading Mastery"
                  width={180}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">
                About
              </h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-green-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-green-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-green-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-secondary hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <AnimatedSocialIcon type={social.type} className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright and Links */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-xs text-text-muted">
              <span>© {new Date().getFullYear()} Quantum Trading Mastery. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <span>|</span>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link
                  href="/refund"
                  className="hover:text-white transition-colors duration-200"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Company Registration Info */}
          <div className="mt-4 text-center">
            <p className="text-xs text-text-muted">
              Quantum Trading Mastery Pvt Ltd – Registered in Nepal and India (Company No. 140732235)
            </p>
            <p className="text-xs text-text-muted">
              Registered Office: 124 City Road, London, EC1V 2NX, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

