'use client'

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-300">Sign in to your Quantum Mastery account</p>
          </div>
          <LoginForm />
          <p className="mt-6 text-center text-sm text-gray-300">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-secondary-bright hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
