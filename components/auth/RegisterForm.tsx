'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Check } from 'lucide-react'

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
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const watchedValues = watch()

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

  const FormField = ({
    name,
    label,
    type = 'text',
    placeholder,
    icon: Icon
  }: {
    name: keyof RegisterFormData
    label: string
    type?: string
    placeholder: string
    icon: any
  }) => {
    const hasValue = watchedValues[name] && watchedValues[name].length > 0
    const hasError = errors[name]
    const isFocused = focusedField === name

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="relative">
          {/* Icon */}
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? 'text-secondary-bright' : hasError ? 'text-red-400' : 'text-gray-500'
            }`}>
            <Icon className="w-5 h-5" />
          </div>

          {/* Input */}
          <input
            {...register(name)}
            type={type}
            id={name}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            className={`
              w-full pl-12 pr-4 py-4 
              bg-white/5 backdrop-blur-sm
              border-2 rounded-xl
              text-white placeholder:text-transparent
              transition-all duration-300
              focus:bg-white/10 focus:outline-none
              ${isFocused
                ? 'border-secondary-bright shadow-lg shadow-secondary-bright/20'
                : hasError
                  ? 'border-red-400/50'
                  : 'border-white/10 hover:border-white/20'
              }
            `}
            placeholder={placeholder}
          />

          {/* Floating Label */}
          <label
            htmlFor={name}
            className={`
              absolute left-12 top-1/2 -translate-y-1/2
              pointer-events-none transition-all duration-200
              ${hasValue || isFocused
                ? 'text-xs -translate-y-8 left-4 font-medium'
                : 'text-base'
              }
              ${isFocused
                ? 'text-secondary-bright'
                : hasError
                  ? 'text-red-400'
                  : 'text-gray-400'
              }
            `}
          >
            {label}
          </label>

          {/* Success Check */}
          {hasValue && !hasError && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <Check className="w-5 h-5 text-green-400" />
            </motion.div>
          )}
        </div>

        {/* Error Message */}
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400 flex items-center gap-1"
          >
            <span className="w-1 h-1 rounded-full bg-red-400"></span>
            {hasError.message}
          </motion.p>
        )}
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6 relative"
    >
      {/* Premium Glassmorphism Container */}
      <div className="
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-xl
        border border-white/20
        rounded-3xl
        p-8 md:p-10
        shadow-2xl
        relative overflow-hidden
      ">
        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary-bright/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-cyan/10 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="mb-8 relative z-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-400">Join the elite 1% of traders</p>
        </div>

        <div className="space-y-5 relative z-10">
          <FormField
            name="name"
            label="Full Name"
            placeholder="John Doe"
            icon={User}
          />

          <FormField
            name="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            icon={Mail}
          />

          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={Lock}
          />

          <FormField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            icon={Lock}
          />
        </div>

        {/* Premium Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            relative w-full mt-8 px-6 py-4 
            bg-gradient-to-r from-secondary-bright to-secondary-light
            text-dark-black font-bold text-lg rounded-xl
            overflow-hidden
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg shadow-secondary-bright/30
            hover:shadow-xl hover:shadow-secondary-bright/40
            transition-all duration-300
            group
          "
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-dark-black border-t-transparent rounded-full"
                />
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </span>
        </motion.button>

        {/* Trust Indicators */}
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400 relative z-10">
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-secondary-bright" />
            <span>Secure</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-secondary-bright" />
            <span>Encrypted</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-secondary-bright" />
            <span>Private</span>
          </div>
        </div>
      </div>
    </motion.form>
  )
}
