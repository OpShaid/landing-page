'use client'

import React, { useEffect, useState } from 'react'

export default function CinematicOverlay() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dynamic color grading based on scroll
  const colorGrade = {
    filter: `
      contrast(${1.05 + scrollProgress * 0.1})
      saturate(${1.1 + Math.sin(scrollProgress * Math.PI) * 0.2})
      brightness(${1 - scrollProgress * 0.05})
    `,
  }

  return (
    <>
      {/* Cinematic Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Letterbox bars for ultra-cinematic feel */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-black pointer-events-none z-50 opacity-80" />
      <div className="fixed bottom-0 left-0 right-0 h-8 bg-black pointer-events-none z-50 opacity-80" />

      {/* Color Grading Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-5 transition-all duration-300"
        style={{
          ...colorGrade,
          background: `linear-gradient(
            135deg,
            rgba(139, 92, 246, ${0.03 + scrollProgress * 0.02}),
            rgba(59, 130, 246, ${0.02 + scrollProgress * 0.01}),
            transparent 50%,
            rgba(236, 72, 153, ${0.02 + scrollProgress * 0.01})
          )`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Chromatic aberration effect on edges */}
      <div
        className="fixed inset-0 pointer-events-none z-5"
        style={{
          boxShadow: 'inset 0 0 100px rgba(139, 92, 246, 0.1), inset 0 0 100px rgba(59, 130, 246, 0.1)',
        }}
      />

      {/* Lens distortion effect */}
      <div
        className="fixed inset-0 pointer-events-none z-5"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 60%, rgba(139, 92, 246, 0.03) 100%)',
          mixBlendMode: 'color-dodge',
        }}
      />
    </>
  )
}
