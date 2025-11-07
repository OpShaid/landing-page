'use client'

import React, { useEffect, useRef } from 'react'

interface Trail {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  hue: number
}

export default function MotionTrails() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailsRef = useRef<Trail[]>([])
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 })

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

    let isMouseMoving = false
    let mouseTimeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x
      mouseRef.current.prevY = mouseRef.current.y
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      isMouseMoving = true
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false
      }, 100)

      // Calculate velocity
      const vx = mouseRef.current.x - mouseRef.current.prevX
      const vy = mouseRef.current.y - mouseRef.current.prevY
      const velocity = Math.sqrt(vx * vx + vy * vy)

      // Add trails based on velocity
      if (velocity > 2) {
        for (let i = 0; i < Math.min(velocity / 5, 5); i++) {
          trailsRef.current.push({
            x: mouseRef.current.x + (Math.random() - 0.5) * 20,
            y: mouseRef.current.y + (Math.random() - 0.5) * 20,
            vx: vx * 0.1 + (Math.random() - 0.5) * 2,
            vy: vy * 0.1 + (Math.random() - 0.5) * 2,
            life: 1,
            size: Math.random() * 4 + 2,
            hue: (Date.now() / 20) % 360,
          })
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    let animationId: number

    const animate = () => {
      // Fade effect instead of clearing
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw trails
      trailsRef.current = trailsRef.current.filter((trail) => {
        trail.x += trail.vx
        trail.y += trail.vy
        trail.vx *= 0.98
        trail.vy *= 0.98
        trail.life -= 0.02

        if (trail.life <= 0) return false

        // Draw trail with gradient
        const gradient = ctx.createRadialGradient(
          trail.x, trail.y, 0,
          trail.x, trail.y, trail.size * trail.life * 2
        )

        gradient.addColorStop(0, `hsla(${trail.hue}, 100%, 60%, ${trail.life * 0.8})`)
        gradient.addColorStop(0.5, `hsla(${trail.hue + 30}, 100%, 50%, ${trail.life * 0.4})`)
        gradient.addColorStop(1, `hsla(${trail.hue + 60}, 100%, 40%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(trail.x, trail.y, trail.size * trail.life * 2, 0, Math.PI * 2)
        ctx.fill()

        // Add glow
        ctx.shadowBlur = 20
        ctx.shadowColor = `hsla(${trail.hue}, 100%, 60%, ${trail.life * 0.5})`
        ctx.fillStyle = `hsla(${trail.hue}, 100%, 60%, ${trail.life * 0.3})`
        ctx.beginPath()
        ctx.arc(trail.x, trail.y, trail.size * trail.life, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        return true
      })

      // Add ambient particles when mouse is still
      if (!isMouseMoving && Math.random() > 0.97) {
        trailsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: 1,
          size: Math.random() * 2 + 1,
          hue: (Date.now() / 50) % 360,
        })
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
      clearTimeout(mouseTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
