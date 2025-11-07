'use client'

import React, { useEffect, useRef } from 'react'

export default function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const barsRef = useRef<number[]>([])
  const targetBarsRef = useRef<number[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const barCount = 64
    const barWidth = window.innerWidth / barCount

    // Initialize bars
    for (let i = 0; i < barCount; i++) {
      barsRef.current.push(Math.random() * 50 + 10)
      targetBarsRef.current.push(Math.random() * 50 + 10)
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 100
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let scrollVelocity = 0
    let lastScrollY = window.scrollY
    let mouseX = 0
    let mouseY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollVelocity = Math.abs(currentScrollY - lastScrollY)
      lastScrollY = currentScrollY
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)

    let animationId: number
    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      frame++

      // Update target bars based on scroll velocity and mouse position
      if (frame % 3 === 0) {
        for (let i = 0; i < barCount; i++) {
          const distanceFromMouse = Math.abs((i * barWidth) - mouseX)
          const mouseInfluence = Math.max(0, 1 - distanceFromMouse / 300)

          const baseHeight = 10 + scrollVelocity * 2
          const waveHeight = Math.sin(frame * 0.05 + i * 0.2) * 20
          const randomJitter = Math.random() * 15

          targetBarsRef.current[i] = baseHeight + waveHeight + randomJitter + (mouseInfluence * 30)
        }
      }

      // Smooth interpolation
      for (let i = 0; i < barCount; i++) {
        barsRef.current[i] += (targetBarsRef.current[i] - barsRef.current[i]) * 0.2

        const x = i * barWidth
        const height = barsRef.current[i]

        // Create gradient for each bar
        const gradient = ctx.createLinearGradient(x, canvas.height, x, canvas.height - height)

        // Color based on height and position
        const hue = (i / barCount) * 360 + frame * 0.5
        const lightness = 50 + (height / 100) * 20

        gradient.addColorStop(0, `hsla(${hue}, 80%, ${lightness}%, 0.8)`)
        gradient.addColorStop(0.5, `hsla(${hue + 20}, 90%, ${lightness + 10}%, 0.6)`)
        gradient.addColorStop(1, `hsla(${hue + 40}, 100%, ${lightness + 20}%, 0.3)`)

        ctx.fillStyle = gradient
        ctx.fillRect(x, canvas.height - height, barWidth - 2, height)

        // Add glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.5)`
        ctx.fillRect(x, canvas.height - height, barWidth - 2, height)
        ctx.shadowBlur = 0
      }

      // Decay scroll velocity
      scrollVelocity *= 0.95

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-30">
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  )
}
