'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import WaveBackground from '../animations/WaveBackground'
import AnimatedCard from '../animations/AnimatedCard'

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Day Trader",
    location: "New York, USA",
    rating: 5,
    text: "The journal feature completely transformed my trading. I went from a 45% win rate to 72% in just 3 months by analyzing my patterns. The calendar view makes it so easy to spot my best trading days!",
    profit: "+$47,000"
  },
  {
    name: "Marcus Chen",
    role: "Swing Trader",
    location: "Singapore",
    rating: 5,
    text: "Best trading platform I've used. The trade copier saved me hours every week, and the competition feature keeps me motivated. My consistency improved dramatically since joining.",
    profit: "+156% ROI"
  },
  {
    name: "Elena Rodriguez",
    role: "Forex Trader",
    location: "Barcelona, Spain",
    rating: 5,
    text: "The course modules are gold! Khan's teaching style is clear and actionable. I finally understand risk management and position sizing. My account grew 3x in 6 months.",
    profit: "+$23,500"
  },
  {
    name: "James Thompson",
    role: "Options Trader",
    location: "London, UK",
    rating: 5,
    text: "The community aspect is incredible. Learning from other traders' journals and competing in monthly challenges pushed me to be better. The analytics helped me identify and fix my biggest mistakes.",
    profit: "+89% This Year"
  },
  {
    name: "Yuki Tanaka",
    role: "Crypto Trader",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Finally, a platform that combines education with practical tools. The trade copier lets me manage multiple accounts effortlessly. The psychological modules helped me overcome FOMO and revenge trading.",
    profit: "+$31,200"
  },
  {
    name: "David Kumar",
    role: "Stock Trader",
    location: "Mumbai, India",
    rating: 5,
    text: "Quantum Mastery changed my trading career. The structured learning path and daily journaling made me disciplined. I'm now consistently profitable and even quit my job to trade full-time!",
    profit: "+$58,000"
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10 overflow-hidden">
      {/* Wave Background */}
      <WaveBackground variant="both" opacity={0.3} />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-bright/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-12 border-b border-secondary-bright/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
            <motion.div
              className="h-32 w-32 rounded-full bg-gradient-to-br from-secondary-bright/30 to-secondary-bright/10 flex items-center justify-center flex-shrink-0 border-4 border-secondary-bright/40 shadow-lg shadow-secondary-bright/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl">👨‍💼</span>
            </motion.div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Khan Hazara</h3>
              <p className="text-xl text-secondary-bright font-semibold mb-2">Founder of Quantum Trading Mastery</p>
              <p className="text-gray-300 leading-relaxed">
                "I created this platform to give traders the tools and education I wish I had when I started.
                Every feature is designed from real trading experience."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300">
            TRUSTED BY <span className="text-secondary-bright font-bold">10,000+</span> traders worldwide
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className="bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5 rounded-2xl p-8 border-2 border-secondary-bright/20 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-secondary-bright text-secondary-bright" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Profit Badge */}
              <div className="inline-block bg-secondary-bright/20 border border-secondary-bright/40 rounded-lg px-4 py-2 mb-6">
                <span className="text-secondary-bright font-bold text-lg">{testimonial.profit}</span>
              </div>

              {/* Trader Info */}
              <div className="border-t border-secondary-bright/20 pt-4">
                <p className="text-white font-bold text-lg mb-1">{testimonial.name}</p>
                <p className="text-secondary-bright text-sm font-semibold mb-1">{testimonial.role}</p>
                <p className="text-gray-400 text-xs">📍 {testimonial.location}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "10,000+", label: "Active Traders" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "$2.5M+", label: "Profits Tracked" },
              { value: "50+", label: "Countries" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary-bright mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
