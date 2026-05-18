const items = [
  'Classic Wash', 'Interior Wash', 'Traitement Carrosserie',
  'Extreme Wash', 'Céramique 3 ans', 'Rénovation Optiques',
  'Moto', '0692 62 68 48',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{ background: 'var(--red)', overflow: 'hidden', padding: '0.6rem 0', whiteSpace: 'nowrap' }} aria-hidden>
      <div className="animate-marquee" style={{ display: 'inline-flex' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-condensed)', fontWeight: 700,
            fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.9)', padding: '0 2rem',
          }}>
            {item}
            {i < doubled.length - 1 && <span style={{ color: 'rgba(255,255,255,0.4)', marginLeft: '2rem' }}>·</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
