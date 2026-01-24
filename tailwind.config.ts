import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#050705', // Near black
          secondary: '#0A120A', // Slightly lighter
          card: '#0F1A0F', // Card background
        },
        green: {
          primary: '#3AFF3A', // Neon Green
          soft: '#2EDB2E', // Soft Green
          chart: '#22C522', // Darker Green for gradients
        },
        text: {
          primary: '#EDEDED',
          secondary: '#A8B0A8',
          muted: '#6B736B',
        },
        border: {
          soft: 'rgba(58,255,58,0.15)',
          strong: 'rgba(58,255,58,0.35)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'primary-glow': '0 0 25px rgba(58,255,58,0.40)',
        'hover-glow': '0 0 35px rgba(58,255,58,0.60)',
        'card-glow': '0 0 30px rgba(58,255,58,0.10)',
        'featured-glow': '0 0 40px rgba(58,255,58,0.40)',
      },
      backgroundImage: {
        'gradient-button': 'linear-gradient(180deg, #3AFF3A 0%, #22C522 100%)',
        'gradient-hero': 'radial-gradient(circle at top, rgba(58,255,58,0.12), transparent 60%)',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      }
    },
  },
  plugins: [],
}
export default config
