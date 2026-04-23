'use client'
import { motion, Variants } from 'framer-motion'

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


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function FeatureCards() {
  return (
    <section className="bg-[#12121e] w-full overflow-hidden py-12 px-6 justify-center" style={{ paddingTop: 50, paddingBottom: 50}}>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{paddingLeft: 20}}
      >
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors"
            style={{ background: '#4848546d', height: '200px', width: '350px', padding: '10px, 26px', }}
          >
            <div className="mb-5" style={{paddingTop: 30}}>{c.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-3">{c.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed text-center" style={{padding: 10}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}