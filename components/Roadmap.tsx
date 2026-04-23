'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const events = [
  { date: 'Jun 14, 2018', label: 'Pre-ICO Opens', top: true },
  { date: 'Apr 16, 2018', label: 'Development Started', top: false },
  { date: 'Sep 14, 2018', label: 'Pre-ICO Closed', top: true },
  { date: 'Jul 24, 2018', label: 'Private Token Round', top: false },
  { date: 'Jan 15, 2018', label: 'App Integration Process', top: true },
  { date: 'Dec 24, 2018', label: 'Decentralized Platform Launch', top: false },
]

const topEvents = events.filter(e => e.top)
const bottomEvents = events.filter(e => !e.top)

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20" style={{ paddingTop: '4%' }}>
      <div className="mx-auto px-6">
            <h2 className="text-2xl font-bold text-white text-center uppercase mb-2">Roadmap</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, paddingTop: 10, paddingBottom: 10 }} className="text-center mb-16">
              A decentralized, distributed Blockchain system providing businesses
            </p>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px]">  {/* your timeline content */}
            <div ref={ref} className="relative overflow-x-auto">
              <div style={{ minWidth: 640 }}>
                <div className="flex items-end mb-4" style={{ height: 80, letterSpacing: '0.05em', marginLeft: '12%' }}>
                  {topEvents.map((e, i) => (
                    <motion.div key={i} style={{ flex: 1 }} className="px-2 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.2 + 0.5, duration: 0.4 }}>
                      <div style={{ color: '#e8541e', fontSize: 11 }}>{e.date}</div>
                      <div style={{ color: '#ccc', fontSize: 12, marginTop: 4 }}>{e.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="relative flex items-center" style={{ height: 24 }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, height: 2,
                    background: '#1a1a1a', borderRadius: 2 }}/>
                  <motion.div style={{
                    position: 'absolute', left: 0, height: 2,
                    background: 'linear-gradient(90deg, #e8541e, #ff7043)',
                    borderRadius: 2, originX: 0,
                  }}
                    initial={{ width: '0%' }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}/>
                  {events.map((_, i) => (
                    <div key={i} style={{ flex: 1 }} className="flex justify-center">
                      <motion.div style={{
                        width: 14, height: 14, borderRadius: '50%',
                        background: '#e8541e', border: '2px solid #0d0d0d',
                        zIndex: 1, boxShadow: '0 0 8px rgba(232,84,30,0.6)',
                      }}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.15, duration: 0.3, type: 'spring' }}/>
                    </div>
                  ))}
                </div>

                <div className="flex items-start mt-4" style={{ height: 80, letterSpacing: '0.05em', marginRight: '16%' }}>
                  {bottomEvents.map((e, i) => (
                    <motion.div key={i} style={{ flex: 1 }} className="px-2 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.2 + 0.5, duration: 0.4 }}>
                      <div style={{ color: '#e8541e', fontSize: 11 }}>{e.date}</div>
                      <div style={{ color: '#ccc', fontSize: 12, marginTop: 4 }}>{e.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}