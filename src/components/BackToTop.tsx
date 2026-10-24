import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#home"
      aria-label="Kembali ke atas"
      className={`fixed bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-xl font-bold text-slate-950 shadow-lg shadow-emerald-400/30 transition duration-300 hover:bg-emerald-300 ${
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      ↑
    </a>
  )
}