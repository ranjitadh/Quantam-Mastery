'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import WaveBackground from '../animations/WaveBackground'
import AnimatedCard from '../animations/AnimatedCard'

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Scalper",
    location: "Miami, USA",
    avatar: "👨‍💼",
    rating: 5,
    text: "The community support is incredible! I learned more from other traders' journals in 2 months than I did in 2 years alone. The monthly competitions keep me sharp and accountable.",
    result: "Consistency +85%"
  },
  {
    name: "Sophie Laurent",
    role: "Swing Trader",
    location: "Paris, France",
    avatar: "👩‍💼",
    rating: 5,
    text: "Being part of this community changed everything. The strategy calls with Khan are pure gold, and seeing others' winning trades motivates me daily. My win rate jumped from 52% to 78%!",
    result: "+$42,300 Profit"
  },
  {
    name: "Raj Patel",
    role: "Day Trader",
    location: "Dubai, UAE",
    avatar: "👨‍💻",
    rating: 5,
    text: "The affiliate program is amazing! I'm earning passive income while helping other traders succeed. The community vibe is supportive, not competitive. Everyone genuinely wants to help each other grow.",
    result: "$3,200/mo Passive"
  },
  {
    name: "Maria Santos",
    role: "Forex Trader",
    location: "São Paulo, Brazil",
    avatar: "👩‍🎓",
    rating: 5,
    text: "I was skeptical at first, but this community is different. Real traders sharing real results. The leadership board pushes me to be better every day. I finally feel like I belong somewhere!",
    result: "Top 10 Leaderboard"
  },
  {
    name: "Chen Wei",
    role: "Crypto Trader",
    location: "Shanghai, China",
    avatar: "👨‍🔬",
    rating: 5,
    text: "The trade copier feature combined with community insights is a game-changer. I can see what's working for top traders and adapt my strategy. My portfolio grew 240% this year!",
    result: "+240% Portfolio"
  },
  {
    name: "Emma Johnson",
    role: "Options Trader",
    location: "Sydney, Australia",
    avatar: "👩‍🚀",
    rating: 5,
    text: "Best investment I've made in my trading career. The community accountability and shared knowledge accelerated my learning curve. I went from losing money to consistent profits in 4 months!",
    result: "Break-even to Profit"
  }
]

export default function CommunityTestimonials() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10 overflow-hidden">
      {/* Wave Background */}
      <WaveBackground variant="both" opacity={0.3} />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-bright/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Community Success Stories
          </h2>
          <p className="text-xl text-gray-300">
            <span className="text-secondary-bright font-bold">10,000+</span> Traders ·
            <span className="text-secondary-bright"> ★★★★★</span> 4.9/5 Reviews
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className="bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5 rounded-2xl p-8 border-2 border-secondary-bright/20 backdrop-blur-sm"
            >
              {/* User Avatar & Info */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-bright/30 to-secondary-bright/10 flex items-center justify-center border-2 border-secondary-bright/40 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl">{testimonial.avatar}</span>
                </motion.div>
                <div>
                  <p className="text-white font-bold text-lg">{testimonial.name}</p>
                  <p className="text-secondary-bright text-sm font-semibold">{testimonial.role}</p>
                  <p className="text-gray-400 text-xs">📍 {testimonial.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-secondary-bright text-secondary-bright" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Result Badge */}
              <div className="inline-block bg-secondary-bright/20 border border-secondary-bright/40 rounded-lg px-4 py-2">
                <span className="text-secondary-bright font-bold text-sm">{testimonial.result}</span>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "10,000+", label: "Community Members" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "24/7", label: "Active Support" },
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
