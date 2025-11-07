'use client'

import React, { useState, MouseEvent } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  gradient: string
  delay: number
}

export default function FeatureCard({ title, description, icon, gradient, delay }: FeatureCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const tiltX = ((y - centerY) / centerY) * -10
    const tiltY = ((x - centerX) / centerX) * 10

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-transparent gpu-accelerated"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`,
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
        animationDelay: `${delay}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
      ></div>

      {/* Shine effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'shimmer 3s infinite',
        }}
      ></div>

      {/* Icon with gradient background */}
      <div
        className={`relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${gradient} rounded-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}
      >
        <span className="text-4xl filter drop-shadow-md">{icon}</span>
      </div>

      <h3 className="relative text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
        {title}
      </h3>

      <p className="relative text-gray-600 leading-relaxed">{description}</p>

      {/* Animated corner glow */}
      <div
        className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}
      ></div>
    </div>
  )
}
