'use client'
import { motion } from 'framer-motion'
import { useFadeIn } from '@/hooks/useFadeIn'

const cards = [
  {
    title: 'Safe & Secure',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#e8541e" strokeWidth="1.5">
        <path d="M20 4 L34 10 L34 22 C34 30 20 36 20 36 C20 36 6 30 6 22 L6 10 Z"/>
        <path d="M14 20 L18 24 L26 16"/>
      </svg>
    ),
  },
  {
    title: 'Instant Exchange',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#e8541e" strokeWidth="1.5">
        <circle cx="20" cy="20" r="14"/>
        <circle cx="20" cy="20" r="6"/>
        <line x1="6" y1="20" x2="14" y2="20"/>
        <line x1="26" y1="20" x2="34" y2="20"/>
      </svg>
    ),
  },
  {
    title: 'Instant Trading',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#e8541e" strokeWidth="1.5">
        <rect x="6" y="8" width="28" height="24" rx="3"/>
        <line x1="6" y1="14" x2="34" y2="14"/>
        <rect x="11" y="19" width="6" height="8" rx="1"/>
        <rect x="23" y="22" width="6" height="5" rx="1"/>
      </svg>
    ),
  },
]

export default function FeatureCards() {
  const { ref, visible } = useFadeIn()
  return (
    <section style={{ paddingBottom: '40px', paddingTop: '10px' }} className="bg-[#12121e] py-16">
      <div ref={ref} className="bg-[#12121e] max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginLeft: '4%', paddingTop: '3%', paddingBottom:'3%' }}>
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 50 }}
            animate={visible ? { opacity: 5, y: 10 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
            style={{ background: '#4848546d', boxShadow: 'rgba(233, 210, 210, 0.7)', border: '1px solid grey', borderRadius: 8, height: '40vh', padding: '30px' }}
            className="p-8 text-center hover:border-orange-500 transition-colors"
            whileHover={{ y: -15, transition: { duration: 0.4 } }}
          >
            <div className="flex justify-center mb-5">{c.icon}</div>
            <h3 className="text-white font-semibold mb-3" style={{ marginTop: 15}}>{c.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginTop: 15 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}