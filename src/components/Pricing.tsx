'use client'

import React, { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for testing your MVP',
    features: [
      '1 Landing Page',
      'Contact Form Integration',
      'Basic Analytics',
      'Mobile Optimized',
      'Email Support',
      '99% Uptime SLA',
    ],
    highlighted: false,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Professional',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'Best for growing businesses',
    features: [
      'Everything in Starter',
      '5 Landing Pages',
      'A/B Testing Tools',
      'Advanced Analytics Dashboard',
      'Custom Domain + SSL',
      'Priority Support (24/7)',
      'SEO Optimization Tools',
      'Remove Branding',
    ],
    highlighted: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'For companies that need scale',
    features: [
      'Everything in Professional',
      'Unlimited Landing Pages',
      'Custom Integrations & API',
      'Dedicated Account Manager',
      'White-Label Platform',
      'Priority Development Queue',
      '99.9% Uptime SLA',
      'Custom Contract Terms',
    ],
    highlighted: false,
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-bold px-4 py-2 rounded-full">
              PRICING
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Pricing That Scales
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            No hidden fees. No surprises. Just honest pricing that grows with your business.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`font-semibold ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full transition-all duration-300 focus:outline-none shadow-lg"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md ${
                  isYearly ? 'transform translate-x-8' : ''
                }`}
              />
            </button>
            <span className={`font-semibold ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                SAVE 17%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in overflow-hidden border-2 ${
                plan.highlighted ? 'border-blue-500 md:scale-105' : 'border-gray-100'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>

              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-xs font-bold py-2 px-6 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 bg-gradient-to-br ${plan.gradient} rounded-2xl shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-600 mb-6 min-h-[48px]">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom plan? Enterprise solution for your organization?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Contact Sales
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
