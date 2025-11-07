'use client'

import React from 'react'

const features = [
  {
    title: 'Responsive Design',
    description: 'Pixel-perfect on every device. Your landing page adapts seamlessly from mobile to 4K displays.',
    icon: '📱',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Lightning Fast',
    description: 'Blazing speed with Next.js optimization. Sub-second load times that convert visitors into customers.',
    icon: '⚡',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Easy Customization',
    description: 'Built with Tailwind CSS. Transform your brand vision into reality without touching complex code.',
    icon: '🎨',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Smart Forms',
    description: 'Intelligent forms with validation. Capture leads and integrate with any CRM or email service.',
    icon: '✉️',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'SEO Powerhouse',
    description: 'Rank higher with built-in SEO optimization. Meta tags, schema markup, and semantic HTML included.',
    icon: '🚀',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    title: 'Analytics Ready',
    description: 'Track everything that matters. One-click integration with Google Analytics, Meta Pixel, and more.',
    icon: '📊',
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
              FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional-grade features that give you the competitive edge. Built by experts, designed for results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in overflow-hidden border border-gray-100 hover:border-transparent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon with gradient background */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <span className="text-3xl filter drop-shadow-md">{feature.icon}</span>
              </div>

              <h3 className="relative text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {feature.title}
              </h3>

              <p className="relative text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Animated corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to see it in action?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Schedule a Demo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
