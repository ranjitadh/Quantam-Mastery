'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FAQs from '@/components/sections/FAQs'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { DollarSign, ShieldCheck, TrendingUp, Users } from 'lucide-react'

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center justify-center bg-[#050705]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(58,255,58,0.1),transparent_70%)]" />

        <Section className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-primary text-sm font-bold tracking-widest uppercase mb-4 block">Partner Program</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Earn <span className="text-green-primary">30%</span> Recurring <br />
              For Lifetime.
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Partner with the most disciplined trading community. We reward you for every serious trader you bring to the circle.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/register?type=affiliate">
                <Button size="lg">Become a Partner</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg">Affiliate Login</Button>
              </Link>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* Benefits */}
      <Section className="bg-background-secondary border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: DollarSign, title: "High Commission", desc: "Get 30% of every payment, every month, for as long as they stay subscribed." },
            { icon: ShieldCheck, title: "Reliable Payouts", desc: "Net-30 payouts via PayPal or Crypto. We have never missed a payment." },
            { icon: TrendingUp, title: "High Conversion", desc: "Our 14-day intensive and proven results sell themselves." },
          ].map((item, i) => (
            <Card key={i} className="p-8 text-center bg-[#0F1A0F]">
              <div className="w-14 h-14 mx-auto bg-green-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-green-primary/20">
                <item.icon className="w-7 h-7 text-green-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-text-secondary">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How it Works */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It <span className="text-green-primary">Works</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-green-primary/30 to-transparent border-t border-dashed border-white/20" />

          {[
            { step: "01", title: "Join", desc: "Sign up for free in 30 seconds." },
            { step: "02", title: "Promote", desc: "Get your unique link and marketing assets." },
            { step: "03", title: "Earn", desc: "Watch your dashboard grow daily." },
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-background-primary rounded-full border-4 border-background-secondary flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white group-hover:text-green-primary transition-colors">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-text-secondary max-w-xs mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-background-secondary">
        <div className="bg-gradient-to-r from-green-primary/20 to-green-primary/5 rounded-3xl p-12 text-center border border-green-primary/30 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Earning?</h2>
            <Link href="/register?type=affiliate">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 border-none shadow-none">
                Create Affiliate Account
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <FAQs />
      <Footer />
    </main>
  )
}
