'use client'

import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-black via-gray-700 to-gray-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg shadow-2xl border-b border-gray-800/50 py-3'
            : 'bg-transparent py-6'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Landing
              </span>
              <span className={isScrolled ? 'text-white' : 'text-white'}>MVP</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className={`font-medium transition-colors duration-300 hover:text-gray-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-colors duration-300 hover:text-gray-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`font-medium transition-colors duration-300 hover:text-gray-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`font-medium transition-colors duration-300 hover:text-gray-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 animate-slide-down border border-gray-200/50">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-700 font-medium py-2 hover:text-gray-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 font-medium py-2 hover:text-gray-400 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 font-medium py-2 hover:text-gray-400 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-gray-700 font-medium py-2 hover:text-gray-400 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-lg font-semibold text-center"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
