'use client'

import React, { useEffect, useState } from 'react'

interface LightLeak {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export default function LightLeaks() {
  const [lightLeaks, setLightLeaks] = useState<LightLeak[]>([])

  useEffect(() => {
    const colors = [
      'rgba(255, 107, 107, 0.3)',
      'rgba(255, 234, 167, 0.3)',
      'rgba(130, 204, 221, 0.3)',
      'rgba(255, 159, 243, 0.3)',
      'rgba(202, 255, 191, 0.3)',
    ]

    const generateLightLeaks = () => {
      const leaks: LightLeak[] = []
      for (let i = 0; i < 5; i++) {
        leaks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 400 + 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 5 + 3,
          delay: Math.random() * 2,
        })
      }
      setLightLeaks(leaks)
    }

    generateLightLeaks()

    // Regenerate light leaks periodically
    const interval = setInterval(generateLightLeaks, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {lightLeaks.map((leak) => (
        <div
          key={leak.id}
          className="absolute rounded-full blur-3xl animate-pulse"
          style={{
            left: `${leak.x}%`,
            top: `${leak.y}%`,
            width: `${leak.size}px`,
            height: `${leak.size}px`,
            background: `radial-gradient(circle, ${leak.color} 0%, transparent 70%)`,
            animation: `float ${leak.duration}s ease-in-out infinite`,
            animationDelay: `${leak.delay}s`,
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </div>
  )
}
