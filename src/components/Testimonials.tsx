'use client'

import React from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, TechStart',
    content: 'This landing page template helped us launch our product in just 2 days. Our conversion rate increased by 40% compared to our old site!',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'CEO, GrowthLabs',
    content: 'Clean, professional, and incredibly easy to customize. We were able to A/B test multiple variations quickly and find what works best.',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, CloudBase',
    content: 'The responsive design is flawless. Our mobile conversions doubled after switching to this landing page. Highly recommend!',
    avatar: '👩‍🎨',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
