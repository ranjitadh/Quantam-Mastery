'use client'

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-background-primary">
      <Header />

      {/* Decorative Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-green-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[0%] w-[30%] h-[30%] bg-green-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <div className="w-full max-w-md">
          <LoginForm />

          <div className="mt-8 text-center bg-background-secondary/50 backdrop-blur-sm rounded-xl py-4 border border-white/5">
            <p className="text-sm text-text-muted">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-green-primary hover:text-white font-semibold transition-colors">
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
