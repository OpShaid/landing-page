'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: 'How quickly can I launch my landing page?',
    answer: 'You can have a fully functional landing page live in under 10 minutes. Simply customize the content, connect your domain, and deploy. Most of our customers go from signup to live page in less than 30 minutes.',
  },
  {
    question: 'Can I customize the design to match my brand?',
    answer: 'Absolutely! Every element is fully customizable using Tailwind CSS. Change colors, fonts, spacing, and layouts without writing complex code. Our design system makes it easy to maintain brand consistency across all pages.',
  },
  {
    question: 'What integrations are supported?',
    answer: 'We support all major tools including Google Analytics, Facebook Pixel, Mailchimp, HubSpot, Salesforce, Zapier, and more. Plus, our API allows custom integrations for enterprise clients with specific needs.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 30-day money-back guarantee, no questions asked. If you\'re not completely satisfied with our landing page solution, we\'ll refund your purchase in full.',
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at the start of your next billing cycle. No cancellation fees or penalties.',
  },
  {
    question: 'Do you provide customer support?',
    answer: 'We provide email support for all plans, priority 24/7 support for Professional plans, and dedicated account managers for Enterprise clients. Our average response time is under 2 hours.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-bold px-4 py-2 rounded-full">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Questions?
            <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our landing page solution.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-300"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-8 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Support
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
