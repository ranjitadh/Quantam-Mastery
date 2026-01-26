'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Check, Star, ArrowRight, Target, Brain, Shield, BarChart, Users } from 'lucide-react'

// Program Phases Data
const phases = [
  {
    phase: 1,
    days: 'Days 1-3',
    title: 'Foundation & Market Clarity',
    desc: 'Strip away the noise. Learn to see the market as it truly is—a mechanism for liquidity.',
    features: ['Market structure alignment', 'Institutional order flow', 'Liquidity identification'],
    image: '/images/image.png'
  },
  {
    phase: 2,
    days: 'Days 4-6',
    title: 'Psychology & Discipline',
    desc: 'Your strategy is only as good as your mind. Master the internal game.',
    features: ['Emotional awareness', 'Patience & execution', 'risk-management'],
    image: '/images/program_images/Trading_psychology_key_contributors.png'
  },
  {
    phase: 3,
    days: 'Days 7-9',
    title: 'Strategy & Risk',
    desc: 'Structuring your edge with mathematical precision and defensive protocols.',
    features: ['Strategy refinement', 'Risk parameters', 'Defensive protocols'],
    image: '/images/program_images/natestradingdesk-1024x1024.jpg'
  },
  {
    phase: 4,
    days: 'Days 10-14',
    title: 'Live Application',
    desc: 'Real-time execution in live market conditions under mentor guidance.',
    features: ['Live trading sessions', 'Performance review', 'Journaling loops'],
    image: '/images/program_images/Shahzaib_Khan_A_calm_and_focused_trader_sitting_in_front_of_mult_49d7f595-3246-4f5d-b2af-39f1f4ff0996-1.png'
  }
]

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary selection:bg-green-primary/30">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-primary/5 rounded-full blur-[80px]" />
        </div>

        <Section className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-primary/10 border border-green-primary/20 text-green-primary text-sm font-semibold mb-8">
              <Star className="w-4 h-4 fill-green-primary" />
              <span>Fast Track Program</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Learn Trading in <br />
              <span className="text-green-primary drop-shadow-[0_0_20px_rgba(58,255,58,0.4)]">
                14 Days
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
              An accelerated intensive designed for experienced minds who value clarity, structure, and outcome-based learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register?program=14day">
                <Button size="lg" className="min-w-[200px] group">
                  Start Application <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="text-sm text-text-muted mt-4 sm:mt-0 sm:ml-4">
                * Limited spots available for next cohort
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* Phase Structure Section */}
      <Section className="bg-background-secondary border-y border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Program <span className="text-green-primary">Structure</span></h2>
          <p className="text-text-secondary">A methodical approach to building your trading career.</p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-0 overflow-hidden group hover:border-green-primary/40 transition-colors">
                <div className="flex flex-col md:flex-row h-full">

                  {/* Image Side */}
                  <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-4 left-4 bg-green-primary/90 text-background-primary font-bold px-3 py-1 rounded text-sm backdrop-blur">
                      PHASE {phase.phase}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-background-card">
                    <div className="text-green-primary font-bold text-sm tracking-widest uppercase mb-2">{phase.days}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-text-secondary mb-6">{phase.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                          <span className="text-sm text-gray-300">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why This <span className="text-green-primary">Works</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Precision", desc: "No guessing. We trade probabilistic setups." },
            { icon: Brain, title: "PsychologyFirst", desc: "We fix the trader before the trade." },
            { icon: Shield, title: "Capital Guard", desc: "Strict risk protocols to protect downside." },
            { icon: Users, title: "Community", desc: "Access to elite traders sharing real alpha." },
          ].map((item, i) => (
            <Card key={i} className="p-6 text-center hover:-translate-y-2 transition-transform bg-[#0A120A]">
              <div className="w-12 h-12 mx-auto bg-green-primary/10 rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-green-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  )
}
