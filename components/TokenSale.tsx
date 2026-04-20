'use client'
import { useEffect, useState, useRef } from 'react'

const TARGET = new Date(Date.now() + 70 * 86400000 + 15 * 3600000 + 35 * 60000 + 11000)

function pad(n: number) { return String(n).padStart(2, '0') }

export default function TokenSale() {
  const [time, setTime] = useState({ d: 70, h: 15, m: 35, s: 11 })
  const [raised, setRaised] = useState(0)
  const [total, setTotal] = useState(0)   // ✅ inside component
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)

  // Countdown timer
  useEffect(() => {
    const t = setInterval(() => {
      const diff = Math.max(0, TARGET.getTime() - Date.now())
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  // Intersection observer
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Count-up for raised
  useEffect(() => {
    if (!inView) return
    if (animatedRef.current) return
    animatedRef.current = true

    const duration = 1800
    const startTime = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setRaised(Math.floor(progress * 510000))
      setTotal(Math.floor(progress * 500000000))  // ✅ both update together
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView])

  const alloc = [
    { label: '40%', height: 150 },
    { label: '10%', height: 60 },
    { label: '20%', height: 95 },
    { label: '30%', height: 130 },
  ]

  return (
    <>
      <style>{`
        .ts-card {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
          align-items: center;
          padding: 48px;
          margin: 0 16px;
        }
        .ts-timer-digits { font-size: 28px; }
        .ts-timer-row { justify-content: flex-start; }
        .ts-alloc-wrap { height: 128px; }
        .ts-bar { width: 28px; }
        .ts-cta { text-align: left; }
        .ts-cta h3 { font-size: 20px; }
        .ts-btn { width: 50%; }

        @media (max-width: 768px) {
          .ts-card {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 24px 16px;
            justify-content: center;
            justify-items: center;
            align-items: center;
            margin-left: 10%;
          }
          .ts-timer-digits { font-size: 22px; }
          .ts-timer-row { justify-content: center; }
          .ts-alloc-wrap { height: 96px; }
          .ts-bar { width: 20px; }
          .ts-cta { text-align: center; }
          .ts-cta h3 { font-size: 18px; }
          .ts-btn { width: 100%; }
        }

        @media (max-width: 400px) {
          .ts-timer-digits { font-size: 18px; }
          .ts-bar { width: 16px; }
        }
      `}</style>

      <section className="bg-[#12121e] py-20 px-4 flex justify-center" id="token">
        <div
          ref={ref}
          className="w-full max-w-4xl bg-[#2a2a34]/60 border border-white/10 rounded-xl ts-card"
          style={{ marginTop: 30}}
        >
          {/* Timer + Progress */}
          <div className="w-full">
            <div className="flex gap-10 mb-8 ts-timer-row" style={{marginBottom: 10}}>
              {[['DAYS', time.d], ['HRS', time.h], ['MIN', time.m], ['SEC', time.s]].map(([label, val]) => (
                <div key={label as string} className="text-center">
                  <div className="ts-timer-digits font-bold text-white tabular-nums">
                    {pad(val as number)}
                  </div>
                  <div className="text-[10px] text-white/40 mt-10 uppercase">{label}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#11121e] p-1 rounded-lg border border-white/5" style={{background: '#41414e', padding: '14px 8px'}}>
              <div className="flex justify-between text-[11px] text-white/50 mb-3 uppercase tracking-wider">
                <span style={{letterSpacing: '0.05em', paddingBottom: 5, marginLeft: 50}}>200,000 XRB</span>
                <span style={{letterSpacing: '0.05em'}}> {total.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#e8541e] transition-all duration-1000"
                  style={{ width: inView ? '55%' : '0%' }}
                />
              </div>
              <div className="text-center text-[10px] text-[#e8541e] mt-3 font-semibold" style={{letterSpacing: '0.05em', marginLeft: '48%', paddingTop: 5}}>
                XRB RAISED: {raised.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Allocation Bars */}
          <div className="flex items-end justify-center gap-4 ts-alloc-wrap">
            {alloc.map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[10px] text-white/40">{b.label}</span>
                <div
                  className="ts-bar bg-white/20 transition-all duration-1000 delay-300"
                  style={{ height: inView ? b.height / 1.5 : 0 }}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="ts-cta">
            <h3 className="font-bold text-white mb-5 leading-tight" style={{ marginBottom: 15, letterSpacing: '0.05em'}}>
              <span className="text-[#e8541e]">Token Sale</span><br />Allocation
            </h3>
            <button className="ts-btn bg-[#e8541e] text-white px-8 py-3 text-xs font-bold tracking-widest hover:brightness-110 transition-all"
            style={{ padding: '10px', borderRadius: '4px', fontSize: '0.7rem',}}
            >
              Buy Tokens
            </button>
          </div>
        </div>
      </section>
    </>
  )
}