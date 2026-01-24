'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useForm, useWatch, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Mail, Lock, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import ReCAPTCHA from 'react-google-recaptcha'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loginToken, setLoginToken] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    if (!loginToken) {
      toast.error('Please complete the captcha')
      return
    }

    setIsSubmitting(true)
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        recaptchaToken: loginToken,
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
    icon: Icon,
    register,
    errors,
    control,
    focusedField,
    setFocusedField
  }: {
    name: keyof LoginFormData
    label: string
    type?: string
    placeholder: string
    icon: any
    register: any
    errors: any
    control: Control<LoginFormData>
    focusedField: string | null
    setFocusedField: (field: string | null) => void
  }) => {
    const fieldValue = useWatch({
      control,
      name
    })
    const hasValue = fieldValue && fieldValue.length > 0
    const hasError = errors[name]
    const isFocused = focusedField === name

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="relative">
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? 'text-green-primary' : hasError ? 'text-red-500' : 'text-text-muted'
            }`}>
            <Icon className="w-5 h-5" />
          </div>

          <input
            {...register(name)}
            type={type}
            id={name}
            onFocus={() => setFocusedField(name)}
            onBlur={(e: any) => {
              register(name).onBlur(e)
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
                : hasError
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
                : hasError
                  ? 'text-red-500'
                  : 'text-text-secondary'
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
              <Check className="w-5 h-5 text-green-primary" />
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
      className="relative z-10 w-full"
    >
      <Card className="p-8 md:p-10 relative overflow-hidden bg-[#0F1A0F]/90">

        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-primary/5 rounded-full blur-[80px]"></div>

        <div className="mb-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome Back
          </h2>
          <p className="text-text-secondary">Sign in to continue your trading journey</p>
        </div>

        <div className="space-y-5 relative z-10">
          <FormField
            name="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            icon={Mail}
            register={register}
            errors={errors}
            control={control}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
          />

          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={Lock}
            register={register}
            errors={errors}
            control={control}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
          />
        </div>

        <div className="flex items-center justify-between mt-6 mb-8 relative z-10">
          <label className="flex items-center cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-border-soft bg-background-secondary text-green-primary focus:ring-green-primary/50 transition-all"
            />
            <span className="ml-2 text-sm text-text-secondary group-hover:text-white transition-colors">Remember me</span>
          </label>
          <a href="/forgot-password" className="text-sm text-green-primary hover:text-green-soft transition-colors font-medium">
            Forgot password?
          </a>
        </div>

        <div className="flex justify-center mb-6">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            onChange={(token) => setLoginToken(token)}
            theme="dark"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-lg py-4"
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>

        <div className="relative my-8 z-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#0F1A0F] text-text-muted">
              Or continue with
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="
            relative w-full px-6 py-4 
            bg-white/5 backdrop-blur-sm
            border border-white/10 hover:border-white/20
            rounded-xl font-medium text-white
            transition-all duration-300
            flex items-center justify-center gap-3
            hover:bg-white/10
          "
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span>Sign in with Google</span>
        </button>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-text-muted relative z-10">
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-primary" />
            <span>Secure Login</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-primary" />
            <span>Protected</span>
          </div>
        </div>
      </Card>
    </motion.form>
  )
}

