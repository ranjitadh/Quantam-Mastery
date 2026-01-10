'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RegisterForm from '@/components/auth/RegisterForm'

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')
  const type = searchParams.get('type')

  return (
    <main className="min-h-screen pt-16">
      <Header />
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-gray-300">
              {plan && `Join ${plan.replace('-', ' ')} plan`}
              {type && type === 'affiliate' && 'Become an affiliate partner'}
              {!plan && !type && 'Start your trading journey with Quantum Mastery'}
            </p>
          </div>
          <RegisterForm plan={plan || undefined} type={type || undefined} />
          <p className="mt-6 text-center text-sm text-gray-300">
            Already have an account?{' '}
            <Link href="/login" className="text-secondary-bright hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
