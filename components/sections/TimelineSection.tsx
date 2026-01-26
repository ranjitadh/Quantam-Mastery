'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Check } from 'lucide-react'

const steps = [
    { day: "Day 1", title: "The Foundation", desc: "Setting up your professional environment" },
    { day: "Day 2", title: "Market Structure", desc: "Understanding how price actually moves" },
    { day: "Day 3", title: "Supply & Demand", desc: "Identifying institutional footprints" },
    { day: "Day 4", title: "Execution", desc: "Mastering the art of the entry" },
    { day: "Day 5", title: "Risk Management", desc: "Protecting your capital like a pro" },
    { day: "Day 6", title: "Psychology", desc: "Building the mindset of a winner" },
    { day: "Day 7", title: "The System", desc: "Putting it all together live" },
]

export default function TimelineSection() {
    return (
        <Section className="bg-background-secondary relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Learn Trading in <span className="text-green-primary">7 Days</span></h2>
                <p className="text-text-secondary max-w-2xl mx-auto">A structured roadmap to take you from novice to consistent execution.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Center Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-primary/30 to-transparent md:-translate-x-1/2" />

                <div className="space-y-12 relative z-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 w-full pl-12 md:pl-0">
                                <Card className="p-6 relative group hover:border-green-primary/40 transition-colors">
                                    <span className="absolute -left-[45px] top-6 md:hidden w-3 h-3 rounded-full bg-green-primary shadow-[0_0_10px_#3AFF3A]" />
                                    <span className="text-green-primary font-bold text-sm mb-1 block uppercase tracking-wider">{step.day}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-text-secondary text-sm">{step.desc}</p>
                                </Card>
                            </div>

                            {/* Center Dot (Desktop) */}
                            <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full border-2 border-green-primary bg-background-primary items-center justify-center relative shadow-[0_0_15px_rgba(58,255,58,0.3)] z-10">
                                <div className="w-2 h-2 bg-green-primary rounded-full" />
                            </div>

                            {/* Empty Side for Balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
