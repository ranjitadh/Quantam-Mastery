'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: "Is this suitable for beginners?",
    a: "Absolutely. The course is structured to take you from zero knowledge to advanced execution. Module 1 starts with the absolute basics."
  },
  {
    q: "Do you provide signals?",
    a: "We provide 'Trade Ideas' and live analysis. We teach you how to fish, but we also show you where the fish are."
  },
  {
    q: "Is the community active?",
    a: "Yes, our Discord is active 24/7 with traders from all timezones. We have dedicated moderators and mentors online."
  },
  {
    q: "What if I'm not satisfied?",
    a: "We offer a 14-day action-based refund guarantee. If you do the work and don't see value, we'll refund you."
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section className="bg-background-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Common <span className="text-green-primary">Questions</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-green-primary/50' : 'border-border-soft'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <span className={`font-bold text-lg ${openIndex === i ? 'text-green-primary' : 'text-white'}`}>{faq.q}</span>
                  {openIndex === i ? <Minus className="w-5 h-5 text-green-primary" /> : <Plus className="w-5 h-5 text-text-muted" />}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: openIndex === i ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border-soft/50 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
