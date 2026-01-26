'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BookOpen, Trophy, Users, BarChart2, Shield, Target } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    desc: "From basics to institutional concepts, our 8-module course covers every aspect of profitable trading."
  },
  {
    icon: BarChart2,
    title: "Advanced Analytics",
    desc: "Deep dive into your trading data with our professional grade analytics dashboard."
  },
  {
    icon: Users,
    title: "Active Community",
    desc: "Join thousands of serious traders in our Discord. Share ideas, get feedback, and grow together."
  },
  {
    icon: Trophy,
    title: "Monthly Competitions",
    desc: "Prove your skills and win cash prizes in our monthly trading battles. No risk, high reward."
  },
  {
    icon: Shield,
    title: "Risk Management",
    desc: "Built-in position size calculators and risk controls to keep your capital safe."
  },
  {
    icon: Target,
    title: "Live Signals",
    desc: "Real-time market calls from our expert mentors with full transparency and analysis."
  }
]

export default function DashboardFeatures() { // Renamed conceptually to "FeaturesGrid" but keeping filename for now
  return (
    <Section className="bg-background-primary">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need to <span className="text-green-primary">Succeed</span></h2>
        <p className="text-text-secondary text-lg">
          We&apos;ve stripped away the noise and focused on the six pillars of trading mastery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat, i) => {
          const Icon = feat.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full hover:bg-green-primary/5 transition-colors group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-background-primary border border-border-soft flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-green-primary/50 transition-all shadow-card-glow">
                  <Icon className="w-7 h-7 text-green-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-primary transition-colors">{feat.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feat.desc}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
