'use client'

import React from 'react'

const features = [
  {
    title: 'Responsive Design',
    description: 'Looks perfect on all devices - desktop, tablet, and mobile. Your customers can engage anywhere.',
    icon: '📱',
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed with Next.js. Fast loading times improve conversions and SEO rankings.',
    icon: '⚡',
  },
  {
    title: 'Easy Customization',
    description: 'Built with Tailwind CSS. Change colors, fonts, and layout in minutes without complex code.',
    icon: '🎨',
  },
  {
    title: 'Contact Forms',
    description: 'Integrated contact forms ready to connect to your favorite email service or CRM.',
    icon: '✉️',
  },
  {
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices help your landing page rank higher in search results.',
    icon: '🚀',
  },
  {
    title: 'Analytics Ready',
    description: 'Easy integration with Google Analytics, Facebook Pixel, and other tracking tools.',
    icon: '📊',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All the essential features to create a high-converting landing page that drives results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
