'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, background: '#0d0d0d',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
          >
            <motion.svg
              width="60" height="60" viewBox="0 0 28 28" fill="none"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <polygon points="14,2 26,8 26,20 14,26 2,20 2,8"
                stroke="#e8541e" strokeWidth="2" fill="none"/>
              <polygon points="14,8 20,11 20,17 14,20 8,17 8,11" fill="#e8541e"/>
            </motion.svg>
            <motion.span
              style={{ color: '#fff', fontSize: 28, fontWeight: 700, letterSpacing: '0.08em' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              CRYPTON
            </motion.span>
            <motion.div
              style={{ width: 180, height: 2, background: '#1a1a1a', borderRadius: 2, overflow: 'hidden', marginTop: 8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                style={{ height: '100%', background: '#e8541e', borderRadius: 2 }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}