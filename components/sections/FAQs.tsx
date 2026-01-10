'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is Quantum Mastery?',
    answer: 'Quantum Mastery is a comprehensive trading education and community platform designed for serious traders who value clarity, structure, and disciplined thinking.',
  },
  {
    question: 'How do I get started?',
    answer: 'You can start with our free plan that includes unlimited journaling, performance stats, and core analytics. Simply register and begin tracking your trades immediately.',
  },
  {
    question: 'What makes Quantum Mastery different?',
    answer: 'We focus on process, psychology, and structure - not signals. Our platform provides tools for serious traders including advanced analytics, calendar journaling, trade copying, and competitions.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade to Pro Trader, Elite Trader, or Mastery Circle plans at any time. All plans are designed to grow with you as you progress in your trading journey.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use industry-standard security practices including encrypted data transmission, secure authentication, and regular security audits to protect your information.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-2 border-secondary-bright/20 rounded-lg overflow-hidden bg-secondary-bright/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary-bright/10 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-secondary-bright flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-secondary-bright/5 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
