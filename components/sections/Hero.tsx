'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 bg-dark overflow-hidden min-h-[90vh] flex items-center">
      {/* Background gradient glows - neon green */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black"></div>
      
      {/* Top-left green glow */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(192, 245, 61, 0.4), rgba(135, 213, 147, 0.2), transparent)'
        }}
      ></div>
      
      {/* Bottom-right green glow */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(192, 245, 61, 0.5), rgba(135, 213, 147, 0.3), transparent)'
        }}
      ></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(192, 245, 61, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 245, 61, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Clouds at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
        <svg className="absolute bottom-0 left-0 w-64 h-full" viewBox="0 0 400 200" fill="none">
          <path d="M0,150 Q100,100 200,120 T400,130 L400,200 L0,200 Z" fill="#d97706" opacity="0.4"/>
          <path d="M50,170 Q150,120 250,140 T450,150 L450,200 L50,200 Z" fill="#f59e0b" opacity="0.3"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-full" viewBox="0 0 400 200" fill="none">
          <path d="M0,150 Q100,100 200,120 T400,130 L400,200 L0,200 Z" fill="#d97706" opacity="0.4"/>
          <path d="M50,170 Q150,120 250,140 T450,150 L450,200 L50,200 Z" fill="#f59e0b" opacity="0.3"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 z-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Quantum Trading
              <br />
              <span className="text-secondary-bright">
                Mastery
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              A unified, education-first ecosystem that combines structured learning, psychological development, performance tracking, community, and competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary-bright text-dark-black rounded-lg font-semibold text-lg hover:bg-secondary-light transition-all shadow-lg shadow-secondary-bright/50 hover:shadow-secondary-bright/70 hover:scale-105"
              >
                Sign Up
              </Link>
              <Link
                href="/program"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-bright text-white rounded-lg font-semibold text-lg bg-transparent hover:bg-secondary-bright/10 hover:border-secondary-light transition-all"
              >
                Explore Program
              </Link>
            </div>
          </motion.div>

          {/* Right Visual - Abstract Trend Line with Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* Trend line with data points */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 400 400" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F2FF" />
                  <stop offset="50%" stopColor="#C0F53D" />
                  <stop offset="100%" stopColor="#FF00E5" />
                </linearGradient>
              </defs>
              
              {/* Background candlestick bars */}
              {[...Array(8)].map((_, i) => (
                <rect
                  key={i}
                  x={50 + i * 40}
                  y={200 + Math.random() * 60 - 30}
                  width="6"
                  height={30 + Math.random() * 40}
                  fill="#87D593"
                  opacity="0.2"
                />
              ))}
              
              {/* Main trend line */}
              <path
                d="M 50 350 Q 100 300 150 250 T 250 200 T 350 150"
                stroke="url(#trendGradient)"
                strokeWidth="4"
                fill="none"
                className="drop-shadow-[0_0_10px_rgba(192,245,61,0.6)]"
              />
              
              {/* Data points along the line */}
              {[50, 150, 250, 350].map((x, i) => {
                const y = 350 - (i * 50 + Math.random() * 20);
                return (
                  <g key={i}>
                    <circle
                      cx={x}
                      cy={y}
                      r="8"
                      fill="white"
                      className="drop-shadow-[0_0_15px_rgba(192,245,61,0.8)]"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#C0F53D"
                    />
                  </g>
                );
              })}
            </svg>
            
            {/* Central Logo Icon */}
            <div className="relative z-10 mt-20">
              <div className="w-32 h-32 md:w-40 md:h-40">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F2FF" />
                      <stop offset="50%" stopColor="#C0F53D" />
                      <stop offset="100%" stopColor="#FF00E5" />
                    </linearGradient>
                  </defs>
                  
                  {/* Candlestick bars */}
                  <rect x="35" y="25" width="5" height="25" fill="url(#logoGradientHero)" />
                  <rect x="47.5" y="15" width="5" height="35" fill="url(#logoGradientHero)" />
                  <rect x="60" y="30" width="5" height="20" fill="url(#logoGradientHero)" />
                  
                  {/* Q shape / Concentric circles */}
                  <circle cx="50" cy="50" r="25" stroke="url(#logoGradientHero)" strokeWidth="2" fill="none" opacity="0.6" />
                  <circle cx="50" cy="50" r="18" stroke="url(#logoGradientHero)" strokeWidth="1.5" fill="none" opacity="0.7" />
                  <path d="M 50 25 A 25 25 0 1 1 50 75" stroke="url(#logoGradientHero)" strokeWidth="2" fill="none" />
                  
                  {/* Arrows */}
                  <path d="M 30 70 L 45 55 L 55 60" stroke="url(#logoGradientHero)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M 70 30 L 55 45 L 45 40" stroke="url(#logoGradientHero)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
