'use client'

import { motion } from 'framer-motion'
import { BookOpen, CheckCircle, Lock } from 'lucide-react'

const modules = [
  { id: 1, title: 'Module 1: Market Fundamentals', completed: true, locked: false },
  { id: 2, title: 'Module 2: Technical Analysis Basics', completed: true, locked: false },
  { id: 3, title: 'Module 3: Risk Management', completed: false, locked: false },
  { id: 4, title: 'Module 4: Trading Psychology', completed: false, locked: false },
  { id: 5, title: 'Module 5: Advanced Strategies', completed: false, locked: true },
]

export default function CoursePage() {
  return (
    <div className="space-y-6">
      {/* Futuristic Course Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border-2 border-secondary-bright/30 shadow-2xl"
      >
        <div className="relative h-[300px] lg:h-[400px]">
          <motion.img
            src="/images/download-1.jpg"
            alt="Advanced Trading Analytics"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-8"
          >
            <div className="flex items-center gap-4 mb-3">
              <BookOpen className="h-10 w-10 text-secondary-bright drop-shadow-lg" />
              <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                Course Modules
              </h1>
            </div>
            <p className="text-lg text-secondary-bright drop-shadow-md">
              Step-by-step structured learning from foundation to mastery
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-secondary-bright/5 rounded-lg p-6 border-2 ${module.locked
                ? 'border-secondary-bright/10 opacity-60'
                : module.completed
                  ? 'border-secondary-bright/40 bg-secondary-bright/10'
                  : 'border-secondary-bright/20 hover:border-secondary-bright'
              } transition-colors`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <BookOpen className={`h-6 w-6 ${module.locked ? 'text-gray-500' : 'text-secondary-bright'
                  }`} />
                <span className="text-sm font-semibold text-gray-400">Module {module.id}</span>
              </div>
              {module.completed && (
                <CheckCircle className="h-6 w-6 text-secondary-bright" />
              )}
              {module.locked && (
                <Lock className="h-6 w-6 text-gray-500" />
              )}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{module.title}</h3>
            <button
              disabled={module.locked}
              className={`w-full mt-4 px-4 py-2 rounded-md font-medium transition-colors ${module.locked
                  ? 'bg-secondary-bright/5 text-gray-500 cursor-not-allowed'
                  : module.completed
                    ? 'bg-secondary-bright/20 text-secondary-bright hover:bg-secondary-bright/30'
                    : 'bg-secondary-bright text-dark hover:bg-secondary-light'
                }`}
            >
              {module.locked ? 'Locked' : module.completed ? 'Review' : 'Start Module'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
