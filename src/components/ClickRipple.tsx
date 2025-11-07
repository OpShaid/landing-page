'use client'

import React, { useEffect, useState } from 'react'

interface Ripple {
  x: number
  y: number
  id: number
}

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      }

      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 1000)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2 border-white animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px',
            animation: 'ripple 0.8s cubic-bezier(0, 0, 0.2, 1) forwards',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 20px;
            height: 20px;
            opacity: 0.8;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
