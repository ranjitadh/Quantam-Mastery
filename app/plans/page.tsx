'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PricingSection from '@/components/sections/PricingSection'
import FAQs from '@/components/sections/FAQs'
import { Section } from '@/components/ui/Section'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Pricing Plans - Quantum Mastery',
  description: 'Choose the perfect plan for your trading journey. Free plan with unlimited journaling, Pro Trader, Elite Trader, or Mastery Circle mentorship.',
}

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      <Header />

      {/* Hero Overlay Context */}
      <div className="pt-32 pb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Invest in Your <span className="text-green-primary">Edge</span>
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto px-4">
          Professional tools, institutional education, and a community that holds you accountable.
        </p>
      </div>

      <PricingSection />

      {/* Comparison Table / Additional Details could go here */}
      <Section className="bg-background-secondary border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">All Plans Include</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Mobile App Access",
              "Daily Market Updates",
              "Risk Calculator",
              "Trading Journal",
              "Discord Community",
              "24/7 Support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-background-primary rounded-lg border border-white/5">
                <div className="w-6 h-6 rounded-full bg-green-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-primary" />
                </div>
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FAQs />
      <Footer />
    </main>
  )
}
