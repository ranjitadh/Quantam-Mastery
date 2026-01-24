'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Alex K.",
    role: "Full-time Trader",
    content: "The calendar journaling feature completely changed my P&L. I realized I was losing money every Friday. Stopped trading Fridays, immediately profitable.",
    rating: 5
  },
  {
    name: "Sarah M.",
    role: "Prop Firm Funded",
    content: "Quantum Mastery isn't just signals. It's a complete system. I passed my 100k challenge in 3 weeks using the Day 4 execution strategies.",
    rating: 5
  },
  {
    name: "David R.",
    role: "Crypto Trader",
    content: "The psychology module is worth the price alone. Learning to sit on my hands was the hardest but most profitable lesson.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <Section className="bg-background-primary relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Traders <span className="text-green-primary">Trust Us</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-8 h-full bg-background-secondary hover:translate-y-[-5px] transition-transform">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-primary fill-green-primary" />
                ))}
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed italic">&quot;{t.content}&quot;</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-xs text-text-muted">{t.role}</div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
