import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-secondary-bright/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo variant="dark" showText={true} />
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Professional trading education and community platform designed for serious traders who value clarity, structure, and disciplined thinking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/program" className="hover:text-secondary-bright transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-secondary-bright transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-secondary-bright transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/affiliates" className="hover:text-secondary-bright transition-colors">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-secondary-bright transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-secondary-bright transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-secondary-bright transition-colors">
                  Disclaimer Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-bright/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Quantum Mastery. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/newsletter"
              className="px-4 py-2 bg-secondary-bright text-dark rounded-md text-sm font-medium hover:bg-secondary-light transition-colors"
            >
              Sign Up for Newsletter
            </Link>
            <Link
              href="https://t.me/quantummastery"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-secondary-bright/20 text-white border border-secondary-bright/30 rounded-md text-sm font-medium hover:bg-secondary-bright/30 transition-colors"
            >
              Join Telegram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
