'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.25rem',
        background: scrolled ? 'rgba(5,8,11,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', textDecoration: 'none' }}>
        <Image
          src="/images/logo.jpg"
          alt="Logo Clem's Car Wash 974"
          width={38} height={38}
          style={{ borderRadius: '50%', objectFit: 'contain' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{
            fontFamily: 'var(--font-condensed)', fontWeight: 900,
            fontSize: '1.05rem', letterSpacing: '2px', color: '#fff', textTransform: 'uppercase',
          }}>
            CLEM&apos;<span style={{ color: 'var(--red)' }}>S</span>
          </span>
          <span style={{
            fontSize: '0.52rem', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--blue)', fontWeight: 500,
          }}>
            Car Wash · 974
          </span>
        </div>
      </a>

      <a
        href="tel:0692626848"
        style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          background: 'var(--red)', color: '#fff',
          fontFamily: 'var(--font-condensed)', fontWeight: 700,
          fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase',
          padding: '0.45rem 0.9rem', borderRadius: '2px', textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        📞 0692 62 68 48
      </a>
    </nav>
  )
}
