'use client'

import React, { useEffect, useRef } from 'react'

export default function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationId: number

    const createGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255
        data[i] = noise     // R
        data[i + 1] = noise // G
        data[i + 2] = noise // B
        data[i + 3] = Math.random() * 25 // Alpha (low opacity for subtle effect)
      }

      ctx.putImageData(imageData, 0, 0)
    }

    const animate = () => {
      createGrain()
      animationId = requestAnimationFrame(animate)
    }

    // Start animation with slight delay between frames for performance
    let lastFrame = 0
    const fps = 24 // Cinematic frame rate
    const fpsInterval = 1000 / fps

    const animateWithFPS = (currentTime: number) => {
      animationId = requestAnimationFrame(animateWithFPS)

      const elapsed = currentTime - lastFrame

      if (elapsed > fpsInterval) {
        lastFrame = currentTime - (elapsed % fpsInterval)
        createGrain()
      }
    }

    animateWithFPS(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
      style={{ mixBlendMode: 'overlay' }}
    />
  )
}
