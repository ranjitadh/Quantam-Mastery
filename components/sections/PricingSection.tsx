'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

const plans = [
    {
        name: "Trader",
        price: "49",
        features: ["Access to Community", "Daily Market Analysis", "Basic Journaling"],
        cta: "Start Free Trial",
        featured: false
    },
    {
        name: "Pro Trader",
        price: "99",
        features: ["Everything in Trader", "Full Course Access", "Live Trading Sessions", "Advanced Journaling"],
        cta: "Join Pro",
        featured: true
    },
    {
        name: "Mastery",
        price: "499",
        features: ["Everything in Pro", "1-on-1 Mentorship", "Custom Trading Plan", "Priority Support"],
        cta: "Apply Now",
        featured: false
    }
]

export default function PricingSection() {
    return (
        <Section id="pricing" className="bg-background-primary relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">How Much Will It <span className="text-green-primary">Cost You?</span></h2>
                <p className="text-text-secondary">Invest in your skills. The market pays for knowledge.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className={`p-8 relative h-full flex flex-col ${plan.featured ? 'border-green-primary/50 shadow-featured-glow scale-105 z-10 bg-background-secondary' : 'bg-background-primary'}`}>
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-primary text-background-primary font-bold text-xs rounded-full uppercase tracking-wider shadow-[0_0_15px_#3AFF3A]">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                                    <span className="text-text-secondary text-sm">/month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                                        <Check className="w-5 h-5 text-green-primary flex-shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.featured ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                {plan.cta}
                            </Button>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
