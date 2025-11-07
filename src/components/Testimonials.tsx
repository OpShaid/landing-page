'use client'

import React, { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    company: 'TechStart Inc.',
    content: 'This landing page solution transformed our business. We launched in 48 hours and saw a 40% increase in conversions immediately. The ROI was undeniable.',
    avatar: '👩‍💼',
    gradient: 'from-blue-500 to-cyan-500',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Chief Marketing Officer',
    company: 'GrowthLabs',
    content: 'Clean, professional, and ridiculously easy to customize. Our team A/B tested 10+ variations in a week. This is the competitive advantage we needed.',
    avatar: '👨‍💻',
    gradient: 'from-purple-500 to-pink-500',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'CloudBase Solutions',
    content: 'The responsive design is absolutely flawless. Our mobile conversions doubled overnight. This isn\'t just a template—it\'s a revenue generator.',
    avatar: '👩‍🎨',
    gradient: 'from-green-500 to-teal-500',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'VP of Product',
    company: 'Innovate Digital',
    content: 'We\'ve tested dozens of landing page builders. None come close to this level of quality and performance. Our investors were blown away.',
    avatar: '👨‍💼',
    gradient: 'from-orange-500 to-red-500',
    rating: 5,
  },
  {
    name: 'Jessica Williams',
    role: 'Head of Growth',
    company: 'StartupHub',
    content: 'The analytics integration is seamless. We can track every metric that matters. This landing page paid for itself in the first week.',
    avatar: '👩‍💻',
    gradient: 'from-indigo-500 to-blue-500',
    rating: 5,
  },
  {
    name: 'Alex Thompson',
    role: 'Creative Director',
    company: 'DesignFlow Agency',
    content: 'As a designer, I\'m extremely picky. This exceeded all expectations. The attention to detail and smooth animations are top-tier.',
    avatar: '👨‍🎨',
    gradient: 'from-pink-500 to-rose-500',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-bold px-4 py-2 rounded-full">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Thousands of Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join successful companies that transformed their online presence and skyrocketed their conversions.
          </p>
        </div>

        {/* Featured Testimonial - Large */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[activeIndex].gradient} flex items-center justify-center text-4xl shadow-lg`}>
                {testimonials[activeIndex].avatar}
              </div>
              <div className="text-center md:text-left flex-grow">
                <h4 className="text-2xl font-bold text-gray-900 mb-1">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-600 font-medium">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-blue-600 font-semibold">
                  {testimonials[activeIndex].company}
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
              "{testimonials[activeIndex].content}"
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-gray-200"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-gradient-to-r from-gray-900 to-gray-700' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-gray-200"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid of all testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                index === activeIndex ? 'border-blue-500 scale-105' : 'border-transparent'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-2xl mr-3`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
