import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import ScrollProgress from '@/components/ui/ScrollProgress'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Quantum Mastery - Trading Education & Community Platform',
  description: 'Join Quantum Mastery for professional trading education, advanced dashboard analytics, community access, and mentorship programs designed for serious traders.',
  keywords: 'trading, forex, trading education, trading community, trading dashboard, trade journal, quantum mastery',
  authors: [{ name: 'Quantum Mastery' }],
  openGraph: {
    title: 'Quantum Mastery - Trading Education Platform',
    description: 'Professional trading education and community for serious traders',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <ScrollProgress />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1D1D1B',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#C0F53D',
                secondary: '#1D1D1B',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
