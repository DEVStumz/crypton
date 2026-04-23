'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useFadeIn } from '@/hooks/useFadeIn'


const members = [
  { name: 'Bryan', role: 'Founder & CEO', image: '/team/bryan.jpg' },
  { name: 'Marko Rukavina', role: 'CTO', image: '/team/marko.png' },
  { name: 'Clare', role: 'CDO', image: '/team/clare.jpg' },
  { name: 'Alwin Dhakur', role: 'UI/UX Designer', featured: true, image: '/team/alwin.png' },
  { name: 'Scot Apathy', role: 'Blockchain Developer', image: '/team/scot.png' },
  { name: 'Timothy Harper', role: 'Business Development', image: '/team/timothy.png' },
]

function initials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

function MemberCard({ m }: { m: typeof members[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'default' }}
    >
      <div style={{
        width: 150, height: 150,
        margin: '0 auto 10px', overflow: 'hidden',
        border: '1px solid var(--border)',
        position: 'relative',
        transition: 'filter 0.3s ease, transform 0.9s ease', // Added transform transition
        filter: hovered ? 'brightness(1) grayscale(0%)' : 'brightness(0.5) grayscale(40%)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)', // Added Y translation
      }}>
        {m.image ? (
          <Image
            src={m.image}
            alt={m.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: '#12121e',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 18,
            fontWeight: 500, color: '#fff'
          }}>
            {initials(m.name)}
          </div>
        )}
      </div>

      <div style={{
        fontSize: 13, fontWeight: 500,
        transition: 'color 0.9s ease',
        color: hovered ? 'var(--orange)' : '#fff',
      }}>
        {m.name}
      </div>

      <div style={{ color: 'var(--text-muted)', fontSize: 11, marginTop: 2 }}>
        {m.role}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section className='relative' style={{ background: '#12121e', paddingTop: 50, paddingBottom: 50 }}>

      {/* Faded gradient background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(232, 84, 30, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232, 84, 30, 0.05) 0%, transparent 50%)',
      }} />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white text-center uppercase" style={{ paddingBottom: 20 }}>
          Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 justify-center" style={{ paddingLeft:  10}}>
          {members.map(m => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  )
}