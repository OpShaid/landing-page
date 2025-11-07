'use client'

import React, { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'animate-slide-up'
      case 'down':
        return 'animate-slide-down'
      case 'left':
        return 'animate-slide-left'
      case 'right':
        return 'animate-slide-right'
      case 'scale':
        return 'animate-scale-in'
      default:
        return 'animate-fade-in'
    }
  }

  return (
    <div
      ref={ref}
      className={`${isVisible ? `${getAnimationClass()} opacity-100` : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
