'use client'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <>
      <section className="relative bg-[#12121e] max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-4 w-full overflow-x-hidden" style={{ paddingTop: 10 }}>

        {/* Faded gradient background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(232, 84, 30, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232, 84, 30, 0.05) 0%, transparent 50%)',
        }} />
        
        {/* SVG */}
        <div className="flex-1 flex justify-center">
          <svg width="480" height="380" viewBox="0 0 280 260" fill="none">

            {/* Rects animate in then float */}
            <motion.rect
              x="80" y="80" width="150" height="150" rx="4"
              fill="#1a1a1a" stroke="#e8541e" strokeWidth="1.5"
              transform="rotate(15 120 120)"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              animate={{ y: [0, -8, 0], rotate: [15, 18, 15] }}
            />
            <motion.rect
              x="60" y="60" width="110" height="110" rx="4"
              fill="#141414" stroke="#e8541e" strokeWidth="1"
              transform="rotate(-10 100 100)"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              animate={{ y: [0, -6, 0], rotate: [-10, -13, -10] }}
            />

            {/* Dashed connecting lines like hero */}
            <motion.line
              x1="120" y1="120" x2="60" y2="190"
              stroke="#e8541e" strokeWidth="0.8" strokeDasharray="4,4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <motion.line
              x1="120" y1="120" x2="200" y2="180"
              stroke="#e8541e" strokeWidth="0.8" strokeDasharray="4,4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />

            {/* Circles — pop in then float like hero nodes */}
            {[50, 90, 130, 170].map((y, i) => (
              <motion.g
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
              >
                <motion.circle
                  cx={50 + i * 55} cy={y} r={10}
                  fill="#1a1a1a" stroke="#e8541e" strokeWidth="1.5"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                />
                {/* Pulsing center dot like hero ellipse */}
                <motion.circle
                  cx={50 + i * 55} cy={y} r={3}
                  fill="#e8541e"
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                />
              </motion.g>
            ))}

          </svg>
        </div>

        {/* Text slides in from right */}
        <motion.div
          className="flex-1 justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '0.05em', padding: '16px' }}>
            Faster and Digital<br />Transformation
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: 14, padding: '16px' }}>
            Our technology is revolutionizing the financial services industry by <br /> empowering
            millions across the globe to authenticate and transact <br /> immediately and without
            costly intermediaries.
          </p>
        </motion.div>

      </section>
    </>
  )
}