import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'default' | 'light' | 'dark'
  className?: string
  showText?: boolean
}

export default function Logo({ variant = 'default', className = '', showText = true }: LogoProps) {
  // For white background header, use dark variant with gradient icon
  const getLogoColors = () => {
    switch (variant) {
      case 'light':
        // White/light background - use dark colors
        return {
          containerBg: 'bg-transparent',
          textColor: 'text-dark-black',
          glow: ''
        }
      case 'dark':
        // Dark background - use bright colors
        return {
          containerBg: 'bg-transparent',
          textColor: 'text-white',
          glow: ''
        }
      default:
        // Default: works on dark background
        return {
          containerBg: 'bg-transparent',
          textColor: 'text-white',
          glow: ''
        }
    }
  }

  const colors = getLogoColors()

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Icon Container */}
      <div className={`relative ${colors.containerBg} ${colors.glow} rounded-lg transition-transform group-hover:scale-105`}>
        <Image
          src="/images/qtm-logo-white.png"
          alt="Quantum Trading Mastery Logo"
          width={180}
          height={60}
          className="h-12 w-auto object-contain"
          priority
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`text-lg font-bold leading-tight ${colors.textColor}`}>
            THE QUANTUM
          </span>
          <span className={`text-xs font-normal ${colors.textColor} opacity-90`}>
            TRADING MASTERY
          </span>
        </div>
      )}
    </Link>
  )
}
