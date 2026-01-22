'use client'

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LoginForm from '@/components/auth/LoginForm'
import ParticleBackground from '@/components/animations/ParticleBackground'
import GlowingOrb from '@/components/animations/GlowingOrb'

export default function LoginPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      <Header />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0B1120]">
        <ParticleBackground />
        <GlowingOrb size={600} color="rgba(192, 245, 61, 0.1)" className="top-[-100px] left-[-100px]" />
        <GlowingOrb size={500} color="rgba(0, 242, 255, 0.1)" className="bottom-[-100px] right-[-100px]" />
      </div>

      <div className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-md">
          <LoginForm />

          <div className="mt-8 text-center bg-white/5 backdrop-blur-sm rounded-xl py-4 border border-white/5">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-secondary-bright hover:text-white font-semibold transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
