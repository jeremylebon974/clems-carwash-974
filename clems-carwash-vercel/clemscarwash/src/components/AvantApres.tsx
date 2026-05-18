'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function AvantApres() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [demo, setDemo] = useState(true)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    let t0 = performance.now()
    const tick = (t: number) => {
      if (demo) {
        const p = 50 + 28 * Math.sin((t - t0) / 1200)
        setPct(p)
      }
      frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [demo])

  const getX = (clientX: number) => {
    if (!containerRef.current) return
    const r = containerRef.current.getBoundingClientRect()
    const p = Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100))
    setPct(p)
  }

  return (
    <section id="avant-apres" style={{ background: 'var(--ink)', padding: '4rem 1.25rem' }}>
      <p style={{ fontSize: '0.6rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 500, marginBottom: '0.5rem' }}>Résultats réels</p>
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(2rem,8vw,3.5rem)', lineHeight: 0.9, marginBottom: '0.4rem' }}>
        AVANT <span style={{ color: 'var(--red)' }}>/</span> <span style={{ color: 'var(--blue)' }}>APRÈS</span>
      </h2>
      <div style={{ width: 32, height: 2, background: 'var(--red)', marginBottom: '1rem' }} />
      <p style={{ fontSize: '0.9rem', color: 'var(--mist)', lineHeight: 1.65, maxWidth: 420, fontWeight: 300, marginBottom: '1.5rem' }}>
        Pas de filtre, pas de retouche. Le travail parle de lui-même.
      </p>

      {/* Labels */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}>
        {[{ label: 'AVANT', color: 'rgba(212,17,30,0.85)', text: '#fff' }, { label: 'APRÈS', color: 'rgba(26,168,216,0.85)', text: '#000' }].map(l => (
          <div key={l.label} style={{
            flex: 1, padding: '0.45rem', borderRadius: '2px', textAlign: 'center',
            background: l.color, color: l.text,
            fontSize: '0.6rem', letterSpacing: '3px', fontWeight: 700,
            fontFamily: 'var(--font-condensed)', textTransform: 'uppercase',
          }}>{l.label}</div>
        ))}
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        onMouseDown={e => { setDemo(false); setDragging(true); getX(e.clientX) }}
        onTouchStart={e => { setDemo(false); setDragging(true); getX(e.touches[0].clientX) }}
        onMouseMove={e => { if (dragging) getX(e.clientX) }}
        onTouchMove={e => { if (dragging) getX(e.touches[0].clientX) }}
        onMouseUp={() => setDragging(false)}
        onTouchEnd={() => setDragging(false)}
        style={{
          position: 'relative', borderRadius: '4px', overflow: 'hidden',
          cursor: 'col-resize', userSelect: 'none', touchAction: 'pan-y',
          height: 'clamp(260px, 45vw, 460px)',
          background: 'var(--ink3)',
        }}
      >
        {/* After — full colour */}
        <Image src="/images/v8.jpg" alt="Après nettoyage — finition miroir" fill style={{ objectFit: 'cover' }} sizes="100vw" />

        {/* Before — desaturated, revealed by clip */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', width: `${pct}%` }}>
          <div style={{ position: 'absolute', inset: 0, width: `${100 / (pct / 100)}%` }}>
            <Image src="/images/v8.jpg" alt="Avant nettoyage — carrosserie terne" fill
              style={{ objectFit: 'cover', filter: 'saturate(0.15) brightness(0.5) contrast(1.1)' }}
              sizes="100vw"
            />
          </div>
        </div>

        {/* Divider line */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, width: 2,
          background: '#fff', left: `${pct}%`, transform: 'translateX(-50%)', zIndex: 5,
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 42, height: 42, borderRadius: '50%',
            background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 16px rgba(0,0,0,0.5)', pointerEvents: 'none',
            fontSize: 11, fontWeight: 900, color: '#000',
          }}>◀▶</div>
        </div>
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--mist)', marginTop: '0.4rem' }}>← Glissez pour révéler →</p>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '1rem' }}>
        {[
          { n: '60%', l: 'défauts éliminés' },
          { n: '8 mois', l: 'protection cire' },
          { n: '3 ans', l: 'céramique max' },
          { n: '100%', l: 'résultat visible' },
        ].map(s => (
          <div key={s.l} style={{
            background: 'var(--ink3)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '3px', padding: '0.9rem', textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '1.7rem', color: 'var(--blue)', letterSpacing: '2px' }}>{s.n}</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--mist)', letterSpacing: '2px', textTransform: 'uppercase' }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
