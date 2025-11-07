'use client'

import React, { useEffect, useState } from 'react'

export default function GlitchTransition() {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchStyle, setGlitchStyle] = useState({})

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = Math.abs(currentScrollY - lastScrollY)

      // Trigger glitch on fast scrolling
      if (scrollDelta > 100 && !isGlitching) {
        triggerGlitch()
      }

      lastScrollY = currentScrollY
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    const triggerGlitch = () => {
      setIsGlitching(true)

      // Randomly change glitch properties
      const intensity = Math.random() * 10 + 5
      const hueRotate = Math.random() * 360

      setGlitchStyle({
        filter: `hue-rotate(${hueRotate}deg) saturate(2)`,
        transform: `translate(${(Math.random() - 0.5) * intensity}px, ${(Math.random() - 0.5) * intensity}px)`,
      })

      setTimeout(() => {
        setGlitchStyle({
          filter: `hue-rotate(${hueRotate + 180}deg) saturate(1.5)`,
          transform: `translate(${(Math.random() - 0.5) * intensity * 0.5}px, ${(Math.random() - 0.5) * intensity * 0.5}px)`,
        })
      }, 50)

      setTimeout(() => {
        setIsGlitching(false)
        setGlitchStyle({})
      }, 150)
    }

    // Random glitches
    const randomGlitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        triggerGlitch()
      }
    }, 2000)

    window.addEventListener('scroll', requestTick, { passive: true })

    return () => {
      window.removeEventListener('scroll', requestTick)
      clearInterval(randomGlitchInterval)
    }
  }, [isGlitching])

  if (!isGlitching) return null

  return (
    <>
      {/* RGB Split Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-40 bg-red-500 mix-blend-screen opacity-30"
        style={{
          ...glitchStyle,
          clipPath: 'inset(0 0 0 0)',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-40 bg-blue-500 mix-blend-screen opacity-30"
        style={{
          transform: `translate(${(Math.random() - 0.5) * 10}px, ${(Math.random() - 0.5) * 10}px)`,
          clipPath: 'inset(0 0 0 0)',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-40 bg-green-500 mix-blend-screen opacity-20"
        style={{
          transform: `translate(${(Math.random() - 0.5) * 8}px, ${(Math.random() - 0.5) * 8}px)`,
          clipPath: 'inset(0 0 0 0)',
        }}
      />

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.15) 3px)',
            animation: 'scanlines 0.1s linear infinite',
          }}
        />
      </div>
    </>
  )
}
