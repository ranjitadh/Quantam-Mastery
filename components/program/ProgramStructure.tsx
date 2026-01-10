'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    phase: 1,
    days: 'Days 1-3',
    title: 'Foundation & Market Clarity',
    features: [
      'Market structure and framework alignment',
      'Simplifying analysis and removing noise',
      'Building a clear decision-making lens',
    ],
    position: 'left' as const,
  },
  {
    phase: 2,
    days: 'Days 4-6',
    title: 'Psychology & Discipline',
    features: [
      'Emotional awareness and behavioural patterns',
      'Developing patience, consistency, and focus',
      'Psychology-led decision-making processes',
    ],
    position: 'right' as const,
  },
  {
    phase: 3,
    days: 'Days 7-9',
    title: 'Strategy & Risk Alignment',
    features: [
      'Strategy refinement and execution logic',
      'Risk awareness and protection frameworks',
      'Creating repeatable, structured approaches',
    ],
    position: 'left' as const,
  },
  {
    phase: 4,
    days: 'Days 10-12',
    title: 'Live Trading Room & Performance Review',
    features: [
      'Live trading sessions with the mentor',
      'Real-time market observation and discussion',
      'Decision-making breakdowns and execution logic',
      'Journaling and performance tracking in real time',
    ],
    position: 'right' as const,
  },
  {
    phase: 5,
    days: 'Days 13-14',
    title: 'Integration & Direction',
    features: [
      'Integrating learning into a personal framework',
      'Identifying strengths, gaps, and next steps',
      'Evaluation for potential partnership Invitation',
    ],
    position: 'left' as const,
  },
]

export default function ProgramStructure() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-secondary-bright/10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Program Structure
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Each phase is intentionally designed to deepen understanding while maintaining clarity and focus.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-secondary-bright/30"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  phase.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary-bright rounded-full border-4 border-[#1D1D1B] shadow-lg shadow-secondary-bright/50 z-10 hidden md:flex items-center justify-center">
                  <span className="text-dark font-bold">{phase.phase}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${phase.position === 'left' ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-secondary-bright/5 rounded-lg p-6 border-2 border-secondary-bright/20 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="md:hidden w-12 h-12 bg-secondary-bright rounded-full flex items-center justify-center text-dark font-bold">
                        {phase.phase}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-secondary-bright">{phase.days}</div>
                        <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-secondary-bright">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image placeholder */}
                <div className={`w-full md:w-5/12 ${phase.position === 'left' ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="aspect-square bg-gradient-to-br from-secondary-bright/10 to-secondary-bright/5 rounded-lg border-2 border-secondary-bright/20 flex items-center justify-center">
                    <div className="text-center text-gray-400 text-sm">Phase {phase.phase} Image</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center p-6 bg-secondary-bright/10 rounded-lg border border-secondary-bright/30"
        >
          <p className="text-gray-300 font-medium">
            Live sessions focus on process, psychology, and structure - not signals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
