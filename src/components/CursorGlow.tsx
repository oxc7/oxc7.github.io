import { useEffect } from 'react'

/**
 * A soft radial spotlight that trails the pointer across the whole page.
 * Purely decorative; disabled for touch devices and reduced-motion users.
 */
export default function CursorGlow() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduced || !fine) return

    const el = document.createElement('div')
    el.className = 'cursor-glow'
    document.body.appendChild(el)

    let raf = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let x = tx
    let y = ty

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = '1'
    }

    const tick = () => {
      x += (tx - x) * 0.15
      y += (ty - y) * 0.15
      el.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
      el.remove()
    }
  }, [])

  return null
}
