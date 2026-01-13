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
        // Primary gradient colors (cyan to magenta)
        // From Primary Color palette: Cyan #00F2FF, Magenta #FF00E5, White #FFFFFF
        primary: {
          cyan: '#00F2FF',      // RGB: R 0, G 242, B 255
          magenta: '#FF00E5',   // RGB: R 229, G 0, B 255 (Note: description shows R 229, actual hex is R 255)
          white: '#FFFFFF',     // RGB: R 255, G 255, B 255
          DEFAULT: '#00F2FF',
        },
        // Secondary colors (mint to lime green gradient)
        // From Secondary Color palette: Mint #87D593, Lime #C0F53D
        secondary: {
          light: '#87D593',     // RGB: R 135, G 213, B 147 (Mint Green - left end of gradient)
          bright: '#C0F53D',    // RGB: R 192, G 245, B 61 (Lime Green - right end of gradient)
          DEFAULT: '#C0F53D',
        },
        // Neutral/Dark colors
        // From Secondary Color palette: Dark Gray/Black #1D1D1B
        dark: {
          DEFAULT: '#1D1D1B',   // RGB: R 29, G 29, B 27 (Dark Gray/Black)
          black: '#000000',
          gray: '#1a1a1a',
        },
        // Accent colors - aliases for convenience
        accent: {
          DEFAULT: '#C0F53D',   // Same as secondary-bright
          light: '#87D593',     // Same as secondary-light
          dark: '#00F2FF',      // Same as primary-cyan
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      maxWidth: {
        // Reduce default max-widths by 25%
        '7xl': '960px',  // Original: 1280px, Reduced: 960px (25% smaller)
        '6xl': '864px',  // Original: 1152px, Reduced: 864px (25% smaller)
        '5xl': '768px',  // Original: 1024px, Reduced: 768px (25% smaller)
      },
    },
  },
  plugins: [],
}
export default config
