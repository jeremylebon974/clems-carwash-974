'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/images/v3.jpg', alt: 'Deux Porsche 718 Cayman — Clem\'s Car Wash 974' },
  { src: '/images/v5.jpg', alt: 'Audi RS7 detailing La Réunion' },
  { src: '/images/v2.jpg', alt: 'Porsche Macan nettoyage La Réunion' },
]

export default function Hero() {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      position: 'relative',
      height: '100svh', minHeight: 600,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    }}>
      {/* Photo reel */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: i === cur ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}>
          <Image
            src={s.src} alt={s.alt} fill
            style={{ objectFit: 'cover', objectPosition: 'center', transform: i === cur ? 'scale(1)' : 'scale(1.06)', transition: 'transform 10s ease-out' }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Cinematic gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(to top, rgba(5,8,11,1) 0%, rgba(5,8,11,0.55) 35%, rgba(5,8,11,0.1) 65%, rgba(5,8,11,0.4) 100%), linear-gradient(to right, rgba(5,8,11,0.65) 0%, transparent 55%)',
      }} />

      {/* Red bottom line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, zIndex: 3,
        background: 'linear-gradient(to right, var(--red), transparent 60%)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '0 1.25rem 1.5rem' }}>
        {/* Logo */}
        <div style={{ marginBottom: '1.2rem' }}>
          <Image
            src="/images/logo.jpg" alt="Clem's Car Wash 974"
            width={90} height={90}
            style={{ borderRadius: '50%', objectFit: 'contain', filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.7))' }}
          />
        </div>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.7rem' }}>
          <div className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 500 }}>
            Detailing premium · La Réunion · 974
          </span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'var(--font-condensed)', fontWeight: 900,
          fontSize: 'clamp(3.2rem, 13vw, 7.5rem)',
          lineHeight: 0.88, textTransform: 'uppercase',
          letterSpacing: '-1px', marginBottom: '1.2rem',
        }}>
          L&apos;ÉCLAT<br />
          <span style={{ color: 'var(--red)' }}>QUE VOTRE</span><br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.2)' }}>VOITURE</span>
          {' '}MÉRITE
        </h1>

        <p style={{
          fontSize: '0.95rem', color: 'rgba(200,216,226,0.75)',
          lineHeight: 1.65, maxWidth: 360,
          fontWeight: 300, marginBottom: '1.5rem',
        }}>
          Nettoyage automobile haut de gamme, polissage et protection céramique à La Réunion. Résultats visibles garantis.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.8rem' }}>
          <a
            href="tel:0692626848"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              background: 'var(--red)', color: '#fff',
              fontFamily: 'var(--font-condensed)', fontWeight: 700,
              fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase',
              padding: '1rem 1.5rem', borderRadius: '2px', textDecoration: 'none',
            }}
          >
            📞 Appeler maintenant
          </a>
          <button
            onClick={() => scrollTo('prestations')}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              background: 'transparent', color: '#fff', cursor: 'pointer',
              fontFamily: 'var(--font-condensed)', fontWeight: 700,
              fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase',
              padding: '0.95rem 1.5rem', borderRadius: '2px',
              border: '1px solid rgba(255,255,255,0.22)',
            }}
          >
            Voir les formules ↓
          </button>
        </div>

        {/* Brand pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--mist)' }}>Clients</span>
          {['Porsche', 'Audi', 'BMW', 'Mazda'].map(b => (
            <span key={b} style={{
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '2px', padding: '0.2rem 0.55rem',
              fontSize: '0.62rem', letterSpacing: '1px', textTransform: 'uppercase',
              color: 'var(--fog)', fontFamily: 'var(--font-condensed)', fontWeight: 700,
            }}>{b}</span>
          ))}
        </div>

        {/* Slide dots */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} style={{
              width: i === cur ? 36 : 20, height: 2, borderRadius: 1,
              background: i === cur ? 'var(--red)' : 'rgba(255,255,255,0.25)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.4s',
            }} />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        borderTop: '1px solid rgba(26,168,216,0.2)',
        background: 'rgba(5,8,11,0.88)',
        backdropFilter: 'blur(10px)',
      }}>
        {[
          { n: '5+', l: 'Formules' },
          { n: '60%', l: 'Défauts éliminés' },
          { n: '3 ANS', l: 'Céramique max' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '1rem 0.5rem', textAlign: 'center',
            borderRight: i < 2 ? '1px solid rgba(26,168,216,0.1)' : 'none',
          }}>
            <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '2rem', letterSpacing: '2px', color: 'var(--blue)' }}>{s.n}</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--mist)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
