'use client'
import { motion } from 'framer-motion'

const logos = ['CNBC', 'coindesk', 'Coinspeaker', 'BLOCKONOMІ', 'CoinTelegraph', 'Forbes', 'Bloomberg']

export default function TrustBar() {
  return (
    <section className='w-full' style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      overflow: 'hidden', padding: '20px 0' }}>
      <motion.div
        style={{ display: 'flex', gap: 80, whiteSpace: 'nowrap' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} style={{
            color: 'var(--text-muted)', fontSize: 15,
            fontWeight: 500, letterSpacing: '0.05em',
            flexShrink: 0,
          }}>
            {logo}
          </span>
        ))}
      </motion.div>
    </section>
  )
}