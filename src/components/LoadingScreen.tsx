'use client'

import React, { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Fast loading animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Start slide animation after loading completes
          setTimeout(() => setIsSliding(true), 300)
          // Remove loading screen after slide
          setTimeout(() => setIsComplete(true), 1500)
          return 100
        }
        return prev + 5
      })
    }, 20) // Fast increment

    return () => clearInterval(interval)
  }, [])

  if (isComplete) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-1000 ${
        isSliding ? 'translate-x-full' : 'translate-x-0'
      }`}
    >
      <div className="text-center">
        {/* Loading percentage */}
        <div className="text-8xl font-black text-white mb-4 tabular-nums">
          {progress}%
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
