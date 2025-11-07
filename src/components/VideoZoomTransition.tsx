'use client'

import React, { useEffect, useState, useRef } from 'react'

export default function VideoZoomTransition() {
  const [sections, setSections] = useState<NodeListOf<Element> | null>(null)
  const [activeSection, setActiveSection] = useState(0)
  const zoomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Get all main sections
    const sectionElements = document.querySelectorAll('main > div > section')
    setSections(sectionElements)

    let ticking = false
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionElements) return

          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
          const scrollDelta = scrollY - lastScrollY

          // Find current section
          sectionElements.forEach((section, index) => {
            const rect = section.getBoundingClientRect()
            const sectionMiddle = rect.top + rect.height / 2

            // Check if section is in the middle of viewport
            if (sectionMiddle > windowHeight * 0.3 && sectionMiddle < windowHeight * 0.7) {
              if (index !== activeSection) {
                setActiveSection(index)
                triggerZoomTransition(scrollDelta > 0 ? 'in' : 'out')
              }
            }
          })

          lastScrollY = scrollY
          ticking = false
        })

        ticking = true
      }
    }

    const triggerZoomTransition = (direction: 'in' | 'out') => {
      if (!zoomRef.current) return

      zoomRef.current.style.opacity = '1'
      zoomRef.current.style.transform = direction === 'in' ? 'scale(0.8)' : 'scale(1.2)'

      setTimeout(() => {
        if (!zoomRef.current) return
        zoomRef.current.style.transform = 'scale(1)'
      }, 50)

      setTimeout(() => {
        if (!zoomRef.current) return
        zoomRef.current.style.opacity = '0'
      }, 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

  return (
    <div
      ref={zoomRef}
      className="fixed inset-0 pointer-events-none z-45 opacity-0 transition-all duration-300"
      style={{
        background: 'radial-gradient(circle, transparent 30%, rgba(139, 92, 246, 0.1) 70%, rgba(139, 92, 246, 0.2) 100%)',
        mixBlendMode: 'color-dodge',
      }}
    />
  )
}
