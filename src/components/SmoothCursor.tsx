'use client'

import React, { useEffect, useState } from 'react'

export default function SmoothCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick !== null
      )
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      >
        <div
          className={`bg-white rounded-full transition-all duration-300 ${
            isClicking ? 'w-8 h-8' : isPointer ? 'w-12 h-12' : 'w-10 h-10'
          }`}
          style={{
            opacity: isPointer ? 0.3 : 0.5,
          }}
        />
      </div>

      {/* Cursor trail */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s cubic-bezier(0.075, 0.82, 0.165, 1)',
        }}
      >
        <div
          className={`border-2 border-white rounded-full transition-all duration-500 ${
            isClicking ? 'w-4 h-4' : isPointer ? 'w-16 h-16' : 'w-6 h-6'
          }`}
          style={{
            opacity: 0.3,
          }}
        />
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
