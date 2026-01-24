'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

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

interface FormFieldProps {
  name: keyof RegisterFormData
  label: string
  type?: string
  placeholder: string
  icon: any
  register: any
  error: any
  hasValue: boolean
  isFocused: boolean
  setFocusedField: (field: string | null) => void
}

const FormField = ({
  name,
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  register,
  error,
  hasValue,
  isFocused,
  setFocusedField
}: FormFieldProps) => {
  const { onBlur, ref, onChange, name: fieldName } = register(name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="relative">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? 'text-green-primary' : error ? 'text-red-500' : 'text-text-muted'
          }`}>
          <Icon className="w-5 h-5" />
        </div>

        <input
          name={fieldName}
          ref={ref}
          onChange={onChange}
          type={type}
          id={name}
          onFocus={() => setFocusedField(name)}
          onBlur={(e) => {
            onBlur(e)
            setFocusedField(null)
          }}
          className={`
            w-full pl-12 pr-4 py-4 
            bg-background-secondary
            border rounded-xl
            text-text-primary placeholder:text-transparent
            transition-all duration-300
            focus:bg-background-secondary/80 focus:outline-none
            ${isFocused
              ? 'border-green-primary shadow-[0_0_15px_rgba(58,255,58,0.15)]'
              : error
                ? 'border-red-500/50'
                : 'border-white/10 hover:border-white/20'
            }
          `}
          placeholder={placeholder}
        />

        <label
          htmlFor={name}
          className={`
            absolute left-12 top-1/2 -translate-y-1/2
            pointer-events-none transition-all duration-200
            ${hasValue || isFocused
              ? 'text-xs -translate-y-8 left-4 font-bold'
              : 'text-base'
            }
            ${isFocused
              ? 'text-green-primary'
              : error
                ? 'text-red-500'
                : 'text-text-secondary'
            }
          `}
        >
          {label}
        </label>

        {hasValue && !error && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <Check className="w-5 h-5 text-green-primary" />
          </motion.div>
        )}
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-400 flex items-center gap-1"
        >
          <span className="w-1 h-1 rounded-full bg-red-400"></span>
          {error.message}
        </motion.p>
      )}
    </motion.div>
  )
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

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative z-10 w-full"
    >
      <Card className="p-8 md:p-10 relative overflow-hidden bg-[#0F1A0F]/90">

        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-primary/5 rounded-full blur-[80px]"></div>

        <div className="mb-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Create Your Account
          </h2>
          <p className="text-text-secondary">Join the elite 1% of traders</p>
        </div>

        <div className="space-y-5 relative z-10">
          <FormField
            name="name"
            label="Full Name"
            placeholder="John Doe"
            icon={User}
            register={register}
            error={errors.name}
            hasValue={!!watchedValues.name}
            isFocused={focusedField === 'name'}
            setFocusedField={setFocusedField}
          />

          <FormField
            name="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            icon={Mail}
            register={register}
            error={errors.email}
            hasValue={!!watchedValues.email}
            isFocused={focusedField === 'email'}
            setFocusedField={setFocusedField}
          />

          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={Lock}
            register={register}
            error={errors.password}
            hasValue={!!watchedValues.password}
            isFocused={focusedField === 'password'}
            setFocusedField={setFocusedField}
          />

          <FormField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            icon={Lock}
            register={register}
            error={errors.confirmPassword}
            hasValue={!!watchedValues.confirmPassword}
            isFocused={focusedField === 'confirmPassword'}
            setFocusedField={setFocusedField}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-lg py-4 mt-8"
        >
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </Button>

        {/* Trust Indicators */}
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-text-muted relative z-10">
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-primary" />
            <span>Secure</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-primary" />
            <span>Encrypted</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-primary" />
            <span>Private</span>
          </div>
        </div>
      </Card>
    </motion.form>
  )
}
