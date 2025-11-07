'use client'

import React, { useEffect, useState } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    // Wait for loading screen to slide away, then fade in reveal
    const revealTimer = setTimeout(() => {
      setIsRevealed(true)
    }, 1800) // After loading screen slides away

    return () => clearTimeout(revealTimer)
  }, [])

  return (
    <div className={isRevealed ? 'animate-fade-reveal' : 'opacity-0'}>
      {children}
    </div>
  )
}
