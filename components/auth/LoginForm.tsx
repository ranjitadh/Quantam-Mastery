'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Mail, Lock, Check, Chrome } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const watchedValues = watch()

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true)
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        throw new Error(result.error)
      }

      toast.success('Signed in successfully!')
      router.push('/dashboard')
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Invalid credentials')
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
    name: keyof LoginFormData
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
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? 'text-secondary-bright' : hasError ? 'text-red-400' : 'text-gray-500'
            }`}>
            <Icon className="w-5 h-5" />
          </div>

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
      <div className="
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-xl
        border border-white/20
        rounded-3xl
        p-8 md:p-10
        shadow-2xl
        relative overflow-hidden
      ">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary-bright/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-cyan/10 rounded-full blur-3xl"></div>

        <div className="mb-8 relative z-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-400">Sign in to continue your trading journey</p>
        </div>

        <div className="space-y-5 relative z-10">
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
        </div>

        <div className="flex items-center justify-between mt-6 mb-8 relative z-10">
          <label className="flex items-center cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-2 border-white/20 bg-white/5 text-secondary-bright focus:ring-2 focus:ring-secondary-bright/50 transition-all"
            />
            <span className="ml-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
          </label>
          <a href="/forgot-password" className="text-sm text-secondary-bright hover:text-secondary-light transition-colors">
            Forgot password?
          </a>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            relative w-full px-6 py-4 
            bg-gradient-to-r from-secondary-bright to-secondary-light
            text-dark-black font-bold text-lg rounded-xl
            overflow-hidden
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg shadow-secondary-bright/30
            hover:shadow-xl hover:shadow-secondary-bright/40
            transition-all duration-300
            group
            relative z-10
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-dark-black border-t-transparent rounded-full"
                />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </span>
        </motion.button>

        <div className="relative my-8 z-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gradient-to-r from-transparent via-[#0B1120] to-transparent text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <motion.button
          type="button"
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            relative w-full px-6 py-4 
            bg-white/5 backdrop-blur-sm
            border-2 border-white/10 hover:border-white/20
            rounded-xl font-medium text-white
            transition-all duration-300
            flex items-center justify-center gap-3
            group
            relative z-10
          "
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span>Sign in with Google</span>
        </motion.button>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400 relative z-10">
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-secondary-bright" />
            <span>Secure Login</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-secondary-bright" />
            <span>Protected</span>
          </div>
        </div>
      </div>
    </motion.form>
  )
}
