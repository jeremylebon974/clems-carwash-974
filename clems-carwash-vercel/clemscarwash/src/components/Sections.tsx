const whyItems = [
  { ico: '🔬', title: 'Minutieux', text: 'Chaque centimètre traité. Rien laissé au hasard.' },
  { ico: '🧴', title: 'Produits pro', text: 'Cire, hydrophobe, décontaminant ferreux — qualité professionnelle.' },
  { ico: '✅', title: 'Résultat garanti', text: 'Avant/après visible dès la sortie. Vous voyez la différence.' },
  { ico: '🏝️', title: 'Local 974', text: 'Entreprise réunionnaise — proximité et disponibilité.' },
  { ico: '⚡', title: 'Réponse rapide', text: 'Téléphone ou WhatsApp. Devis clair et sans surprise.' },
  { ico: '🏆', title: 'Passion auto', text: 'Porsche, Audi, BMW — on les traite comme les nôtres.' },
]

export function Pourquoi() {
  return (
    <section id="pourquoi" style={{ background: 'var(--ink2)', padding: '4rem 1.25rem' }}>
      <p style={{ fontSize: '0.6rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 500, marginBottom: '0.5rem' }}>Notre différence</p>
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(2rem,8vw,3.5rem)', lineHeight: 0.9, marginBottom: '0.4rem' }}>
        POURQUOI <span style={{ color: 'var(--blue)' }}>NOUS</span>
      </h2>
      <div style={{ width: 32, height: 2, background: 'var(--red)', marginBottom: '1.5rem' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
        {whyItems.map(w => (
          <div key={w.title} className="reveal" style={{
            background: 'var(--ink3)', border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: 3, padding: '1rem',
          }}>
            <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{w.ico}</div>
            <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.3rem' }}>{w.title}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--mist)', lineHeight: 1.5, fontWeight: 300 }}>{w.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const reviews = [
  { stars: 5, text: 'Résultat bluffant sur ma BMW. La carrosserie brille comme un miroir, l\'intérieur sent le neuf. Je recommande sans hésiter.', initials: 'JM', name: 'Jean-Marie', src: 'Facebook · Extreme Wash Pack' },
  { stars: 5, text: 'Mon Audi n\'avait jamais été aussi propre. Travail vraiment professionnel, produits de qualité. Cliente fidèle !', initials: 'SB', name: 'Stéphanie B.', src: 'Instagram · Interior Wash Pack' },
  { stars: 5, text: 'Rénovation optiques à 50€, incroyable. Mes phares jaunis sont transparents. Merci Clem\'s !', initials: 'RD', name: 'Romain D.', src: 'Facebook · Rénovation Optiques' },
  { stars: 5, text: 'Ma Porsche comme au premier jour. Céramique 3 ans, résultat spectaculaire. Professionnel, ponctuel, au top.', initials: 'KP', name: 'Kévin P.', src: 'Instagram · Extreme Wash Plus Céramique' },
]

export function Avis() {
  return (
    <section id="avis" style={{ background: 'var(--ink)', padding: '4rem 1.25rem' }}>
      <p style={{ fontSize: '0.6rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 500, marginBottom: '0.5rem' }}>Ce qu&apos;ils disent</p>
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(2rem,8vw,3.5rem)', lineHeight: 0.9, marginBottom: '0.4rem' }}>
        AVIS <span style={{ color: 'var(--blue)' }}>CLIENTS</span>
      </h2>
      <div style={{ width: 32, height: 2, background: 'var(--red)', marginBottom: '1.5rem' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {reviews.map(r => (
          <div key={r.name} className="reveal" style={{ background: 'var(--ink3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 3, padding: '1.1rem' }}>
            <div style={{ color: 'var(--blue)', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{'★'.repeat(r.stars)}</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--fog)', lineHeight: 1.6, fontWeight: 300, marginBottom: '0.8rem' }}>{r.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(26,168,216,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, color: 'var(--blue)', flexShrink: 0, fontFamily: 'var(--font-condensed)' }}>{r.initials}</div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{r.name}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--mist)' }}>{r.src}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href="https://www.facebook.com/clemscarwash" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 500 }}>Laisser un avis sur Facebook →</a>
      </p>
    </section>
  )
}
