'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Particles from './Particles'

const LINE_1 = 'An operating system for'
const LINE_2 = 'collective intelligence'
const FULL_TEXT = LINE_1 + '\n' + LINE_2

function IsometricGraphic() {
  return (
    <svg width="500" height="450" viewBox="0 0 340 280" fill="none">
      <g opacity="0.15" stroke="#e8541e" strokeWidth="1">
        {[-60, -30, 0, 30, 60].map(x => (
          <line key={x} x1={170 + x} y1="40" x2={170 + x + 80} y2="240" />
        ))}
        {[-60, -30, 0, 30, 60].map(x => (
          <line key={x + 'r'} x1={170 + x + 80} y1="40" x2={170 + x} y2="240" />
        ))}
      </g>
      <g transform="translate(140,80)">
        <polygon points="30,0 60,17 60,51 30,68 0,51 0,17"
          fill="#1a1a1a" stroke="#e8541e" strokeWidth="1.5" />
        <polygon points="30,0 60,17 30,34 0,17"
          fill="#252525" stroke="#e8541e" strokeWidth="1" />
        <motion.ellipse cx="30" cy="0" rx="6" ry="3" fill="#e8541e"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.line x1="30" y1="0" x2="30" y2="-20"
          stroke="#e8541e" strokeWidth="1.5"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.ellipse cx="30" cy="-22" rx="4" ry="2" fill="#e8541e"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
      </g>
      {[[60, 180], [100, 200], [220, 190], [260, 175], [80, 210], [240, 205]].map(([cx, cy], i) => (
        <motion.g key={i}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}>
          <rect x={cx - 14} y={cy - 8} width="28" height="16" rx="2"
            fill="#141414" stroke="#e8541e" strokeWidth="1" opacity="0.8" />
          <ellipse cx={cx} cy={cy - 8} rx="5" ry="2.5" fill="#e8541e" opacity="0.6" />
        </motion.g>
      ))}
      <motion.line x1="170" y1="58" x2="80" y2="178"
        stroke="#e8541e" strokeWidth="0.8" strokeDasharray="4,4"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
      <motion.line x1="170" y1="58" x2="260" y2="173"
        stroke="#e8541e" strokeWidth="0.8" strokeDasharray="4,4"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.5 }} />
    </svg>
  )
}

function RippleButton({ children }: { children: React.ReactNode }) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples(prev => [...prev, { x, y, id }])
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700)
  }

  return (
    <button onClick={handleClick} style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--orange)', color: '#fff', border: 'none',
      padding: '12px 28px', borderRadius: 4, fontWeight: 500, cursor: 'none',
    }}>
      {children}
      {ripples.map(r => (
        <span key={r.id} style={{
          position: 'absolute', left: r.x, top: r.y,
          width: 8, height: 8, borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)',
          transform: 'translate(-50%,-50%) scale(0)',
          animation: 'ripple 0.7s ease-out forwards',
          pointerEvents: 'none',
        }} />
      ))}
      <style>{`@keyframes ripple { to { transform: translate(-50%,-50%) scale(20); opacity: 0; } }`}</style>
    </button>
  )
}

export default function Hero() {
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setCharIndex(i)
        if (i >= FULL_TEXT.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 45)
      return () => clearInterval(interval)
    }, 2600)
    return () => clearTimeout(timeout)
  }, [])

  // Split characters cleanly into line1 and line2
  const totalTyped = charIndex
  const line1Typed = FULL_TEXT.slice(0, Math.min(totalTyped, LINE_1.length))
  const line2Typed = totalTyped > LINE_1.length + 1
    ? FULL_TEXT.slice(LINE_1.length + 1, totalTyped)
    : ''

  const cursorOnLine1 = !done && totalTyped <= LINE_1.length
  const cursorOnLine2 = !done && totalTyped > LINE_1.length

  return (
    <>
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes ripple { to { transform: translate(-50%,-50%) scale(20); opacity: 0; } }

        .hero-section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          padding-bottom: 60px;
        }

        .hero-grid {
          max-width: 1152px;
          margin: 0 auto;
          padding: 0 48px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
        }

        .hero-text {
          position: relative;
          z-index: 2;
        }

        /* Force h1 into exactly 2 lines on all screen sizes */
        .hero-h1 {
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero-line1 {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          color: #ffffff;
          white-space: nowrap;
          display: block;
        }

        .hero-line2 {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          color: #e8541e;
          white-space: nowrap;
          display: block;
        }

        .hero-cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #e8541e;
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 0.7s steps(1) infinite;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          line-height: 1.8;
          max-width: 380px;
          margin-bottom: 36px;
        }

        .hero-graphic {
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        .hero-graphic svg {
          width: 100%;
          max-width: 500px;
          height: auto;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 120px;
            padding-bottom: 60px;
            min-height: 100vh;
            align-items: flex-start;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            padding: 0 30px;
            gap: 0;
            position: relative;
          }

          .hero-text {
            padding-top: 35px;
          }

          .hero-line1,
          .hero-line2 {
            font-size: clamp(3rem, 6vw, 3rem);
            white-space: normal;
          }

          .hero-subtitle {
            font-size: 18px;
            max-width: 100%;
          }

          .hero-graphic {
            position: absolute;
            top: 30;
            right: -20px;
            opacity: 0.15;
            z-index: 1;
            pointer-events: none;
          }

          .hero-graphic svg {
            width: 480px;
          }
        }
      `}</style>

      <section className="hero-section">
        <Particles />
        <motion.div style={{ y, opacity, width: '100%' }}>
          <div className="hero-grid">

            {/* ── Text ── */}
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 2.4 }}
            >
              <h1 className="hero-h1">

                {/* Line 1 — white */}
                <span className="hero-line1">
                  {line1Typed}
                  {cursorOnLine1 && <span className="hero-cursor" />}
                </span>

                {/* Line 2 — orange, only renders once line 1 is done */}
                {totalTyped > LINE_1.length && (
                  <span className="hero-line2">
                    {line2Typed}
                    {cursorOnLine2 && <span className="hero-cursor" />}
                  </span>
                )}

              </h1>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 0.6 }}
              >
                Accelerator Program support may be financial and/or provision of other resources.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.8, duration: 0.4 }}
              >
                <RippleButton>White Paper</RippleButton>
              </motion.div>
            </motion.div>

            {/* ── Graphic ── */}
            <motion.div
              className="hero-graphic"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.6, ease: 'easeOut' }}
            >
              <IsometricGraphic />
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  )
}