'use client'

import React, { createContext, useContext, useState } from 'react'

interface TransitionContextType {
  triggerTransition: (targetId: string) => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [fadeToBlack, setFadeToBlack] = useState(false)

  const triggerTransition = (targetId: string) => {
    // Start shake and zoom animation
    setIsTransitioning(true)

    // Fade to black after shake starts
    setTimeout(() => {
      setFadeToBlack(true)
    }, 800)

    // Scroll during black screen
    setTimeout(() => {
      const element = document.getElementById(targetId)
      element?.scrollIntoView({ behavior: 'instant' } as ScrollIntoViewOptions)
    }, 1200)

    // Fade in from black
    setTimeout(() => {
      setFadeToBlack(false)
    }, 1400)

    // Complete transition
    setTimeout(() => {
      setIsTransitioning(false)
    }, 2200)
  }

  return (
    <TransitionContext.Provider value={{ triggerTransition }}>
      {/* Fade to black overlay */}
      {fadeToBlack && (
        <div className="fixed inset-0 z-[9998] bg-black animate-fade-black pointer-events-none" />
      )}

      {/* Content wrapper with shake-zoom */}
      <div className={isTransitioning ? 'animate-shake-zoom' : ''}>
        {children}
      </div>
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (context === undefined) {
    throw new Error('useTransition must be used within TransitionProvider')
  }
  return context
}
