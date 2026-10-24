import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 hidden md:block"
      style={{
        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(52, 211, 153, 0.10), transparent 70%)`,
      }}
    />
  )
}