'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type RegisterFormData = z.infer<typeof registerSchema>

interface RegisterFormProps {
  plan?: string
  type?: string
}

export default function RegisterForm({ plan, type }: RegisterFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          plan,
          type,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Registration failed')
      }

      toast.success('Account created successfully!')
      router.push('/dashboard')
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-secondary-bright/5 p-8 rounded-lg border-2 border-secondary-bright/20 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Full Name
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-2 border-2 border-secondary-bright/30 bg-dark text-white rounded-md focus:border-secondary-bright focus:outline-none placeholder:text-gray-500"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email Address
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-2 border-2 border-secondary-bright/30 bg-dark text-white rounded-md focus:border-secondary-bright focus:outline-none placeholder:text-gray-500"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
          Password
        </label>
        <input
          {...register('password')}
          type="password"
          id="password"
          className="w-full px-4 py-2 border-2 border-secondary-bright/30 bg-dark text-white rounded-md focus:border-secondary-bright focus:outline-none placeholder:text-gray-500"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
          Confirm Password
        </label>
        <input
          {...register('confirmPassword')}
          type="password"
          id="confirmPassword"
          className="w-full px-4 py-2 border-2 border-secondary-bright/30 bg-dark text-white rounded-md focus:border-secondary-bright focus:outline-none placeholder:text-gray-500"
          placeholder="••••••••"
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 bg-secondary-bright text-dark rounded-md font-medium hover:bg-secondary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  )
}
