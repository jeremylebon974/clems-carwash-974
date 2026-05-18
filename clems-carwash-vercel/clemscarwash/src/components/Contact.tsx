'use client'

import { useState } from 'react'
import Image from 'next/image'

const contactLinks = [
  { href: 'tel:0692626848', cls: 'tel', ico: '📞', label: 'Téléphone', val: '0692 62 68 48', bg: 'rgba(0,200,80,0.12)', color: '#00C850' },
  { href: 'https://wa.me/330692626848', cls: 'wa', ico: '💬', label: 'WhatsApp', val: '0692 62 68 48', bg: 'rgba(37,211,102,0.12)', color: '#25D366' },
  { href: 'https://www.instagram.com/clemscarwash_974/', cls: 'ig', ico: '📸', label: 'Instagram', val: '@clemscarwash_974', bg: 'rgba(225,48,108,0.12)', color: '#E1306C' },
  { href: 'https://www.facebook.com/clemscarwash', cls: 'fb', ico: '👤', label: 'Facebook', val: "Clem's Car Wash", bg: 'rgba(26,168,216,0.12)', color: 'var(--blue)' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = e.currentTarget
    const n = (f.querySelector('#fn') as HTMLInputElement).value
    const p = (f.querySelector('#fp') as HTMLInputElement).value
    const v = (f.querySelector('#fv') as HTMLSelectElement).value || 'Non précisé'
    const s = (f.querySelector('#fs') as HTMLSelectElement).value || 'Non précisé'
    const m = (f.querySelector('#fm') as HTMLTextAreaElement).value || '—'
    const txt = `Bonjour Clem's Car Wash 974 !%0A%0ANom : ${encodeURIComponent(n)}%0ATél : ${encodeURIComponent(p)}%0AVéhicule : ${encodeURIComponent(v)}%0APrestation : ${encodeURIComponent(s)}%0AMessage : ${encodeURIComponent(m)}`
    window.open(`https://wa.me/330692626848?text=${txt}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: 'var(--ink2)', padding: '4rem 1.25rem' }}>
      <p style={{ fontSize: '0.6rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 500, marginBottom: '0.5rem' }}>Prendre contact</p>
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(2rem,8vw,3.5rem)', lineHeight: 0.9, marginBottom: '0.4rem' }}>
        RÉSERVER <span style={{ color: 'var(--red)' }}>MAINTENANT</span>
      </h2>
      <div style={{ width: 32, height: 2, background: 'var(--red)', marginBottom: '1rem' }} />
      <p style={{ fontSize: '0.9rem', color: 'var(--mist)', lineHeight: 1.65, maxWidth: 420, fontWeight: 300, marginBottom: '1.5rem' }}>
        Réponse rapide. Un client peut nous joindre en moins de 10 secondes.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
        {contactLinks.map(l => (
          <a key={l.cls} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', background: 'var(--ink3)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 3, padding: '0.9rem 1.1rem', textDecoration: 'none', color: '#fff' }}>
            <div style={{ width: 40, height: 40, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0, background: l.bg, color: l.color }}>{l.ico}</div>
            <div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--mist)' }}>{l.label}</div>
              <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{l.val}</div>
            </div>
          </a>
        ))}
      </div>

      <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '1.6rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
        Formulaire de <span style={{ color: 'var(--blue)' }}>demande</span>
      </div>

      {sent ? (
        <div style={{ background: 'rgba(0,168,80,0.12)', border: '1px solid rgba(0,168,80,0.3)', borderRadius: 3, padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
          <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '1.2rem' }}>Demande envoyée !</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--mist)', marginTop: '0.3rem' }}>On vous rappelle très vite.</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
            <label htmlFor="fn" style={{ fontSize: '0.58rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--mist)', fontWeight: 500 }}>Votre nom</label>
            <input type="text" id="fn" placeholder="Ex : Kévin M." required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
            <label htmlFor="fp" style={{ fontSize: '0.58rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--mist)', fontWeight: 500 }}>Téléphone / WhatsApp</label>
            <input type="tel" id="fp" placeholder="0692 XX XX XX" required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
            <label htmlFor="fv" style={{ fontSize: '0.58rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--mist)', fontWeight: 500 }}>Type de véhicule</label>
            <select id="fv">
              <option value="">Choisir...</option>
              {['Citadine', 'Berline', 'SUV / 4x4', 'Fourgon', 'Moto', 'Autre'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
            <label htmlFor="fs" style={{ fontSize: '0.58rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--mist)', fontWeight: 500 }}>Prestation souhaitée</label>
            <select id="fs">
              <option value="">Choisir...</option>
              {[
                'Classic Wash Pack (dès 99 €)',
                'Interior Wash Pack (225 €)',
                'Traitement Carrosserie (dès 190 €)',
                'Extreme Wash Pack (dès 439 €)',
                'Extreme Wash Pack Plus — Céramique (dès 669 €)',
                'Rénovation Optiques (50 €)',
                'Je ne sais pas encore',
              ].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
            <label htmlFor="fm" style={{ fontSize: '0.58rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--mist)', fontWeight: 500 }}>Message</label>
            <textarea id="fm" placeholder="État du véhicule, disponibilités, questions..." />
          </div>
          <button type="submit" style={{
            background: 'var(--red)', color: '#fff', border: 'none',
            fontFamily: 'var(--font-condensed)', fontWeight: 700,
            fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase',
            padding: '1rem', borderRadius: 3, cursor: 'pointer',
          }}>
            📲 Envoyer ma demande
          </button>
        </form>
      )}
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem 1.25rem', textAlign: 'center' }}>
      <Image src="/images/logo.jpg" alt="Logo Clem's Car Wash 974" width={60} height={60} style={{ borderRadius: '50%', objectFit: 'contain', marginBottom: '0.8rem' }} />
      <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '0.2rem' }}>
        CLEM&apos;<span style={{ color: 'var(--red)' }}>S</span> CAR WASH 974
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--mist)', marginBottom: '1.2rem' }}>Detailing premium · La Réunion · 0692 62 68 48</div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
        {[
          { href: '#galerie', label: 'Galerie' },
          { href: '#prestations', label: 'Formules' },
          { href: '#avant-apres', label: 'Avant/Après' },
          { href: '#avis', label: 'Avis' },
          { href: '#contact', label: 'Contact' },
          { href: 'https://www.instagram.com/clemscarwash_974/', label: 'Instagram' },
          { href: 'https://www.facebook.com/clemscarwash', label: 'Facebook' },
        ].map(l => (
          <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
            style={{ fontSize: '0.75rem', color: 'var(--mist)', textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
      </div>
      <div style={{ fontSize: '0.58rem', color: 'rgba(143,163,176,0.35)', letterSpacing: '1px', textTransform: 'uppercase' }}>
        © 2024 Clem&apos;s Car Wash 974 · La Réunion · Tous droits réservés
      </div>
    </footer>
  )
}

export function MobileBar() {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 400,
      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
      background: 'rgba(5,8,11,0.96)', backdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '0.55rem 0.6rem',
      gap: '0.4rem',
    }} className="md:hidden">
      {[
        { href: 'tel:0692626848', ico: '📞', label: 'Appeler', bg: 'rgba(0,200,80,0.12)', color: '#00C850' },
        { href: 'https://wa.me/330692626848', ico: '💬', label: 'WhatsApp', bg: 'rgba(37,211,102,0.12)', color: '#25D366' },
        { href: '#contact', ico: '📅', label: 'Réserver', bg: 'var(--red)', color: '#fff' },
      ].map(b => (
        <a key={b.label} href={b.href} target={b.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem', textDecoration: 'none', padding: '0.45rem 0.2rem', borderRadius: 3, background: b.bg, color: b.color }}>
          <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{b.ico}</span>
          <span style={{ fontSize: '0.52rem', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'var(--font-condensed)' }}>{b.label}</span>
        </a>
      ))}
    </div>
  )
}
