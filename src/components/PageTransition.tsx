'use client'

import React, { useEffect, useState } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  useEffect(() => {
    // Wait for loading screen, then show with shake
    const showTimer = setTimeout(() => {
      setIsVisible(true)
      setIsShaking(true)

      // Stop shaking after animation
      setTimeout(() => setIsShaking(false), 800)
    }, 1800) // After loading screen slides away

    return () => clearTimeout(showTimer)
  }, [])

  return (
    <div
      className={`transition-all duration-700 ${
        !isVisible ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      } ${isShaking ? 'animate-shake' : ''}`}
    >
      {children}
    </div>
  )
}
