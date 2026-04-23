"use client";

import { style } from "framer-motion/client";

export default function Footer() {
  const cols = [
    { title: 'INFOMATION', links: ['Terms of service', 'About', 'Blog', 'Privacy Policy'] },
    { title: 'SUPPORT', links: ['FAQ', 'Contact', 'Community'] },
    { title: 'SUBSCRIBE', links: [] }, // Keep this capitalized
  ]

  const socials = [
    { label: 'Facebook', icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { label: 'Twitter', icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
    { label: 'Slack', icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg> },
    { label: 'GitHub', icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
    { label: 'Telegram', icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.171l3.699 1.265 1.987 6.41a.75.75 0 0 0 1.24.281l2.5-2.5 4.076 3.145a2.25 2.25 0 0 0 3.526-1.341l3-14.5a2.25 2.25 0 0 0-2.632-2.646z"/></svg> },
  ]

  return (
    <footer style={{ background: '#0a0a0f', borderTop: '1px solid var(--border)', paddingTop: '3%' }} className="py-16">
      {/* Removed manual marginLeft: 5% to fix sagged space */}
      <div className="max-w-6xl mx-auto px-6" style={{padding: 20,}}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="#e8541e" strokeWidth="2" fill="none"/>
                <polygon points="14,8 20,11 20,17 14,20 8,17 8,11" fill="#e8541e"/>
              </svg>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 17, letterSpacing: '0.04em' }}>Crypton</span>
            </div>

            <div style={{ color: 'var(--orange)', fontSize: 14, fontWeight: 600, marginBottom: 8, paddingTop: 10 }}>
              ABOUT CRYPTON
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>
              The decentralized ecosystem for the next generation of financial intelligence.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 20 }}>
              {socials.map(s => (
                <button
                  key={s.label}
                  title={s.label}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: '#1a1a1a', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#e8541e';
                    e.currentTarget.style.borderColor = '#e8541e';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1a1a1a';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Other columns */}
          {cols.map(c => (
            <div key={c.title}>
              <div style={{ color: 'var(--orange)', fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
                {c.title}
              </div>
              {c.links.map(l => (
                <div key={l} style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 8, lineHeight: 1.6, cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                  {l}
                </div>
              ))}
              
              {/* FIXED: Check for 'SUBSCRIBE' instead of 'Subscribe' */}
              {c.title === 'SUBSCRIBE' && (
                <div style={{ marginTop: 10 }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 10, lineHeight: 1.6 }}>
                    Get the latest news and updates.
                  </p>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <input
                      type="email"
                      placeholder="Email address"
                      style={{
                        background: '#1a1a26', // Darker, cleaner background
                        border: '1px solid var(--border)',
                        borderRadius: 8, padding: '8px 12px', fontSize: 12,
                        color: '#fff', flex: 1, outline: 'none', width: 'auto',
                      }}
                    />
                    <button style={{
                      background: 'var(--orange)', border: 'none',
                      borderRadius: 8, padding: '8px 14px', cursor: 'pointer',
                    }}>
                      <svg width="14" height="14" fill="none" stroke="#fff" strokeWidth="2">
                        <line x1="2" y1="7" x2="12" y2="7"/>
                        <polyline points="8,3 12,7 8,11"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 20,
          textAlign: 'center', color: 'var(--text-muted)', fontSize: 11, marginBottom: 10
        }}>
          www.crypton.io © 2026 Crypton. All rights reserved.
        </div>
      </div>
    </footer>
  )
}