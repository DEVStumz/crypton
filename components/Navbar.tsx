'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Token', href: '#token' },
  { label: 'Features', href: '#features' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sectionIds = links.map(l => l.href.replace('#', ''))
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav 
      style={{
        backgroundColor: scrolled ? 'rgba(18, 18, 30, 0.9)' : '#12121e',
        borderBottom: '1px solid var(--border)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        height: scrolled ? 60 : 80,
      }} 
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleClick('#home')} style={{ marginLeft: 40}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="#e8541e" strokeWidth="2" fill="none"/>
            <polygon points="14,8 20,11 20,17 14,20 8,17 8,11" fill="#e8541e"/>
          </svg>
          <span className="text-white font-semibold text-lg">Crypton</span>
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {links.map(l => {
            const isActive = active === l.href.replace('#', '')
            return (
              <li key={l.label} className="relative">
                <button
                  onClick={() => handleClick(l.href)}
                  className="text-[13px] transition-colors duration-300 py-1"
                  style={{ color: isActive ? '#e8541e' : 'rgba(255,255,255,0.6)' }}
                >
                  {l.label}
                </button>
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#e8541e] transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
              </li>
            )
          })}
        </ul>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} style={{ marginRight: 20}}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#12121e] border-b border-white/10 px-4 py-6 flex flex-col gap-4" style={{alignItems: 'center'}}>
          {links.map(l => (
            <button key={l.label} onClick={() => handleClick(l.href)} className="text-left text-sm text-white/70 hover:text-[#e8541e]">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}