'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Users, MessageCircle, Globe, Award, Mic, Zap } from 'lucide-react'

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden flex items-center justify-center min-h-[60vh] bg-background-secondary">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,255,58,0.05),transparent_70%)]" />

        <Section className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            The <span className="text-green-primary">Inner Circle</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto mb-10"
          >
            Join 500+ elite traders in a private ecosystem designed for growth, accountability, and real-time execution.
          </motion.p>
          <Link href="https://discord.com" target="_blank">
            <Button size="lg" className="shadow-lg shadow-green-primary/20">
              <MessageCircle className="mr-2 w-5 h-5" /> Join Discord
            </Button>
          </Link>
        </Section>
      </div>

      {/* Stats Section */}
      <div className="border-y border-white/5 bg-[#0A120A]">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "500+", label: "Active Members" },
            { val: "24/7", label: "Live Voice" },
            { val: "Daily", label: "Analysis" },
            { val: "100%", label: "Transparency" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Mic,
              title: "Live Trading Floor",
              desc: "Hop into voice channels during key sessions (London/NY) to trade alongside mentors."
            },
            {
              icon: Globe,
              title: "Global Network",
              desc: "Connect with traders from around the world. There is always someone online."
            },
            {
              icon: Zap,
              title: "Real-Time Signals",
              desc: "Get instant notifications for high-probability setups and market shifts."
            },
            {
              icon: Award,
              title: "Weekly Outlooks",
              desc: "Sunday prep calls to map out the week ahead with precision."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full hover:bg-green-primary/5 transition-colors">
                <item.icon className="w-8 h-8 text-green-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </Card>
            </motion.div>
          ))}

          {/* CTA Card */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-green-primary/10 group-hover:bg-green-primary/20 transition-colors" />
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8 border border-green-primary/30 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Level Up?</h3>
              <Link href="/register">
                <Button variant="outline">Get Access Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
