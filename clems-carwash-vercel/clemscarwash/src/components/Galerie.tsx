import Image from 'next/image'

const photos = [
  { src: '/images/v3.jpg', alt: 'Deux Porsche 718 Cayman — Clem\'s Car Wash 974', tag: 'Porsche 718 · Ext.', wide: true },
  { src: '/images/v5.jpg', alt: 'Audi RS7 detailing La Réunion', tag: 'Audi RS7' },
  { src: '/images/v2.jpg', alt: 'Porsche Macan nettoyage La Réunion', tag: 'Porsche Macan' },
  { src: '/images/v1.jpg', alt: 'Staff Clem\'s Car Wash 974 BMW', tag: 'BMW · Detailing' },
  { src: '/images/moto.jpg', alt: 'Nettoyage moto La Réunion', tag: 'Moto' },
  { src: '/images/v8.jpg', alt: 'Mazda RX-8 finition miroir après detailing', tag: 'Mazda RX-8 · Miroir', wide: true },
  { src: '/images/v6.jpg', alt: 'Nettoyage extérieur voiture La Réunion', tag: 'Ext. · Finition' },
  { src: '/images/v7.jpg', alt: 'Traitement carrosserie 974', tag: 'Carrosserie' },
]

export default function Galerie() {
  return (
    <section id="galerie" style={{ background: 'var(--ink)', paddingBottom: '3rem' }}>
      <div style={{ padding: '3rem 1.25rem 1rem' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 500, marginBottom: '0.5rem' }}>Notre travail</p>
        <h2 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(2rem,8vw,3.5rem)', lineHeight: 0.9, marginBottom: '0.4rem' }}>
          LA <span style={{ color: 'var(--blue)' }}>GALERIE</span>
        </h2>
        <div style={{ width: 32, height: 2, background: 'var(--red)', marginBottom: '1rem' }} />
        <p style={{ fontSize: '0.9rem', color: 'var(--mist)', lineHeight: 1.65, maxWidth: 420, fontWeight: 300 }}>
          Porsche, Audi RS7, BMW, Mazda — chaque véhicule repart avec une finition miroir.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 3,
      }}>
        {photos.map((p, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              gridColumn: p.wide ? 'span 2' : 'span 1',
              aspectRatio: p.wide ? '16/7' : '1/1',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--ink3)',
            }}
          >
            <Image
              src={p.src} alt={p.alt} fill
              style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
              sizes={p.wide ? '100vw' : '50vw'}
              loading="lazy"
            />
            <div style={{
              position: 'absolute', bottom: '0.6rem', left: '0.6rem',
              background: 'rgba(5,8,11,0.72)',
              borderLeft: '2px solid var(--red)',
              padding: '0.2rem 0.5rem',
              fontSize: '0.58rem', letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--fog)', fontWeight: 500,
            }}>
              {p.tag}
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', padding: '1.2rem', fontSize: '0.78rem', color: 'var(--mist)' }}>
        Plus de photos →{' '}
        <a href="https://www.instagram.com/clemscarwash_974/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>@clemscarwash_974</a>
        {' '}&amp;{' '}
        <a href="https://www.facebook.com/clemscarwash" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>Facebook</a>
      </p>
    </section>
  )
}
