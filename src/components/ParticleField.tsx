import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number }

/**
 * Site-wide particle network. A fixed, full-viewport canvas that sits behind
 * all content on every page: nodes drift, link to nearby neighbours, and lean
 * toward the pointer wherever it moves — not just in the hero.
 *
 * Efficiency: particle count is capped and scaled to viewport area, DPR is
 * capped at 2, the animation pauses while the tab is hidden, and under
 * prefers-reduced-motion it renders a single static frame (no loop, no pointer).
 */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const accent = '124, 92, 255' // matches --accent-rgb

    let w = 0
    let h = 0
    let nodes: Node[] = []
    let raf = 0
    const pointer = { x: -9999, y: -9999, active: false }

    const resize = () => {
      // Size from the canvas's own laid-out box (CSS width/height: 100% of the
      // fixed viewport), falling back to window dims. More robust than reading
      // window.innerHeight directly.
      w = canvas.clientWidth || window.innerWidth
      h = canvas.clientHeight || window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      // Only scale the backing store; CSS (width/height: 100%) controls the
      // display size, so clientWidth/Height always reflect the true viewport.
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Cap for performance; lighter on small screens.
      const cap = w < 640 ? 45 : 90
      const count = Math.min(cap, Math.floor((w * h) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }))
    }

    const render = (animate: boolean) => {
      ctx.clearRect(0, 0, w, h)

      for (const n of nodes) {
        if (animate) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1

          if (pointer.active) {
            const dx = pointer.x - n.x
            const dy = pointer.y - n.y
            const dist = Math.hypot(dx, dy)
            if (dist < 170 && dist > 0.1) {
              n.x += (dx / dist) * 0.45
              n.y += (dy / dist) * 0.45
            }
          }
        }
      }

      // Links between nearby nodes.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(${accent}, ${0.13 * (1 - dist / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Nodes; brighter near the pointer.
      for (const n of nodes) {
        const near = pointer.active && Math.hypot(pointer.x - n.x, pointer.y - n.y) < 170
        ctx.fillStyle = near ? `rgba(${accent}, 0.95)` : `rgba(${accent}, 0.5)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, near ? 2.6 : 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      render(true)
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
        raf = 0
      } else if (!reduced && !raf) {
        raf = requestAnimationFrame(loop)
      }
    }

    resize()

    if (reduced) {
      render(false) // single static frame; no loop, no pointer
    } else {
      window.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('visibilitychange', onVisibility)
      raf = requestAnimationFrame(loop)
    }

    const onResize = () => {
      resize()
      if (reduced) render(false)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
