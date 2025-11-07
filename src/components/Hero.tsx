'use client'

import React from 'react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Launch Your Business Faster
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          The all-in-one landing page solution for startups and small businesses.
          Convert visitors into customers with our proven framework.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={() => scrollToSection('pricing')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
