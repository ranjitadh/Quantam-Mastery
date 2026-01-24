'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RegisterForm from '@/components/auth/RegisterForm'
import { Suspense } from 'react'

function RegisterContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')
  const type = searchParams.get('type')

  return (
    <>
      <div className="mb-6 text-center">
        {plan && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-primary/10 text-green-primary text-sm font-semibold mb-4 border border-green-primary/30">
            Selected Plan: {plan.replace('-', ' ')}
          </span>
        )}
      </div>

      <RegisterForm plan={plan || undefined} type={type || undefined} />

      <div className="mt-8 text-center bg-background-secondary/50 backdrop-blur-sm rounded-xl py-4 border border-white/5">
        <p className="text-sm text-text-muted">
          Already have an account?{' '}
          <Link href="/login" className="text-green-primary hover:text-white font-semibold transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </>
  )
}

export default function RegisterPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-background-primary">
      <Header />

      {/* Decorative Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] right-[0%] w-[50%] h-[50%] bg-green-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[0%] w-[30%] h-[30%] bg-green-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <div className="w-full max-w-md">
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterContent />
          </Suspense>
        </div>
      </div>

      <Footer />
    </main>
  )
}
