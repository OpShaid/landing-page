'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface TransitionContextType {
  triggerTransition: (targetId: string) => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function SmoothTransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 })

  const triggerTransition = (targetId: string) => {
    // Get click position for zoom origin
    const handleClick = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setZoomOrigin({ x, y })
    }

    window.addEventListener('click', handleClick, { once: true })

    setIsTransitioning(true)

    setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }

      setTimeout(() => {
        setIsTransitioning(false)
      }, 800)
    }, 400)
  }

  return (
    <TransitionContext.Provider value={{ triggerTransition }}>
      {children}
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[9996] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)',
            animation: 'zoomTransition 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
            transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
          }}
        />
      )}
      <style jsx>{`
        @keyframes zoomTransition {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('useTransition must be used within SmoothTransitionProvider')
  }
  return context
}
