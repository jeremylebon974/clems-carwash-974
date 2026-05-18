'use client'

import { useState } from 'react'

const packs = [
  {
    num: '01', name: 'Classic Wash', preview: 'dès 99 €',
    sections: [
      { cat: 'Intérieur', feats: ['Aspiration de l\'habitacle', 'Dépoussièrage complet', 'Dégraissage + Dressing plastique', 'Nettoyage des vitres', 'Sent bon'] },
      { cat: 'Extérieur', feats: ['Prélavage / Décontamination jante', 'Dégraissage passages de roue', 'Intérieur de portes et coffre', 'Shampoing carrosserie / Séchage manuel', 'Dressing pneu / Soin hydrophobe soft'] },
    ],
    prices: [{ label: 'Citadine', price: '99 €' }, { label: 'Berline', price: '109 €' }, { label: '4x4 / SUV', price: '129 €' }],
    ctaType: 'ghost',
  },
  {
    num: '02', name: 'Interior Wash', preview: '225 €',
    sections: [
      { cat: '', feats: ['Aspiration habitacle complet (moquette, sièges, coffre)', 'Shampoing moquette, tapis, capitonnage, ciel de toit', 'Dégraissage plastique (tableau de bord, portières, coffre, console)', 'Nettoyage vitres · protection UV plastiques', 'Désinfection anti-bactérien', 'Lavage intensif sièges (soin cuir si nécessaire)', 'Application sent-bon'] },
    ],
    prices: [{ label: 'Tous véhicules', price: '225 €' }],
    ctaType: 'ghost',
  },
  {
    num: '03', name: 'Traitement Carrosserie', preview: 'dès 190 €',
    sections: [
      { cat: '', feats: ['Prélavage + Décontamination jantes', 'Suppression calcaire vitres', 'Dégraissage carrosserie', 'Application cire naturelle', 'Protection hydrophobe vitres et carrosserie', 'Suppression dépôts de goudron', 'Dégraissage passages de roues', 'Intérieur de portes et coffre', 'Shampoing / Séchage manuel / Dressing pneus'] },
    ],
    prices: [{ label: 'Citadine / Berline', price: '190 €' }, { label: 'Fourgon / SUV 4x4', price: '200 €' }],
    ctaType: 'ghost',
  },
  {
    num: '04', name: 'Extreme Wash ⭐', preview: 'dès 439 €',
    sections: [
      { cat: '', feats: ['Nettoyage profond jantes, garde-boue, passages de roue', 'Décontamination chimique & mécanique carrosserie', 'Suppression silice (calcaire)', 'Dégraissage complet', 'Shampoing carrosserie', 'Deux étapes de polissage — élimine ≈60% des défauts', 'Cire hydrophobe (8 mois)', 'Protection hydrophobe vitres', 'Rénovation plastiques extérieur', 'Dressing pneus'] },
    ],
    prices: [{ label: 'Citadine', price: '439 €' }, { label: 'Berline', price: '459 €' }, { label: 'Fourgon / SUV 4x4', price: '489 €' }],
    ctaType: 'blue', highlight: true,
  },
  {
    num: '05', name: 'Extreme Wash Plus · Céramique', preview: 'dès 669 €',
    sections: [
      { cat: '', feats: ['Tout l\'Extreme Wash Pack +', 'Décontamination ferreux (traitement curratif)', 'Décontamination chimique/mécanique avancée', 'Traitement silice carrosserie et vitres', 'Protection céramique : 1 an ou 3 ans'] },
    ],
    prices: [
      { label: 'S · 1 an / 3 ans', price: '669 € / 719 €' },
      { label: 'M · 1 an / 3 ans', price: '689 € / 739 €' },
      { label: 'L · 1 an / 3 ans', price: '709 € / 759 €' },
      { label: 'XL · 1 an / 3 ans', price: '729 € / 779 €' },
    ],
    ctaType: 'red', bigStat: { n: '60%', l: 'micro-rayures et défauts éliminés' },
  },
  {
    num: '+', name: 'Rénovation Optiques', preview: '50 €',
    sections: [
      { cat: '', feats: ['Polissage optiques jaunies ou ternes', 'Résultat visible immédiatement', 'Améliore la sécurité routière'] },
    ],
    prices: [{ label: 'Paiement', price: 'Espèces · CB · Chèque' }, { label: 'Facilité', price: '3× sans frais' }],
    ctaType: 'red', bigStatRed: { n: '50 €', l: 'prix fixe · résultat garanti' },
  },
]

export default function Prestations() {
  const [open, setOpen] = useState<number | null>(0)

  const ctaStyle = (type: string): React.CSSProperties => {
    if (type === 'blue') return { background: 'var(--blue)', color: '#000' }
    if (type === 'red') return { background: 'var(--red)', color: '#fff' }
    return { border: '1px solid rgba(255,255,255,0.2)', color: 'var(--fog)', background: 'transparent' }
  }

  return (
    <section id="prestations" style={{ background: 'var(--ink2)', padding: '4rem 1.25rem' }}>
      <p style={{ fontSize: '0.6rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 500, marginBottom: '0.5rem' }}>Nos formules</p>
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(2rem,8vw,3.5rem)', lineHeight: 0.9, marginBottom: '0.4rem' }}>
        LES PACKS <span style={{ color: 'var(--red)' }}>WASH</span>
      </h2>
      <div style={{ width: 32, height: 2, background: 'var(--red)', marginBottom: '1rem' }} />
      <p style={{ fontSize: '0.9rem', color: 'var(--mist)', lineHeight: 1.65, maxWidth: 420, fontWeight: 300, marginBottom: '2rem' }}>
        Du lavage complet au detailing avec protection céramique 3 ans.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
        {packs.map((pack, i) => (
          <div key={i} style={{ background: 'var(--ink3)', borderBottom: i < packs.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            {/* Toggle */}
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '1.1rem 1.2rem', cursor: 'pointer',
                background: 'transparent', border: 'none', color: '#fff', textAlign: 'left',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '3px', color: 'var(--red)', textTransform: 'uppercase', minWidth: 30 }}>{pack.num}</span>
                <span style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{pack.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '1rem', color: 'var(--blue)', whiteSpace: 'nowrap' }}>{pack.preview}</span>
                <span style={{ color: 'var(--mist)', transition: 'transform 0.25s', display: 'inline-block', transform: open === i ? 'rotate(180deg)' : 'none' }}>▾</span>
              </div>
            </button>

            {/* Body */}
            <div style={{ maxHeight: open === i ? 900 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
              <div style={{ padding: '0 1.2rem 1.2rem' }}>
                {pack.sections.map((s, si) => (
                  <div key={si}>
                    {s.cat && <p style={{ fontSize: '0.58rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 500, marginTop: '0.8rem', marginBottom: '0.5rem' }}>{s.cat}</p>}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {s.feats.map((f, fi) => (
                        <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--fog)', lineHeight: 1.4, fontWeight: 300 }}>
                          <span style={{ flexShrink: 0, display: 'block', width: 4, height: 4, borderRadius: '50%', background: 'var(--red)', marginTop: '0.4rem' }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {pack.bigStat && (
                  <div style={{ background: 'rgba(26,168,216,0.08)', border: '1px solid rgba(26,168,216,0.2)', borderRadius: 3, padding: '0.7rem', textAlign: 'center', marginTop: '0.8rem' }}>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '2rem', color: 'var(--blue)', letterSpacing: '2px' }}>{pack.bigStat.n}</div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--mist)' }}>{pack.bigStat.l}</p>
                  </div>
                )}
                {pack.bigStatRed && (
                  <div style={{ background: 'rgba(212,17,30,0.08)', border: '1px solid rgba(212,17,30,0.2)', borderRadius: 3, padding: '0.7rem', textAlign: 'center', marginTop: '0.8rem' }}>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '2.5rem', color: 'var(--red)', letterSpacing: '2px' }}>{pack.bigStatRed.n}</div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--mist)' }}>{pack.bigStatRed.l}</p>
                  </div>
                )}

                <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {pack.prices.map((pr, pi) => (
                    <div key={pi} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--mist)', padding: '0.15rem 0' }}>
                      <span>{pr.label}</span>
                      <strong style={{ color: '#fff', fontWeight: 500 }}>{pr.price}</strong>
                    </div>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: 'block', textAlign: 'center',
                  marginTop: '1rem', padding: '0.8rem', borderRadius: '2px',
                  fontFamily: 'var(--font-condensed)', fontWeight: 700,
                  fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase',
                  textDecoration: 'none', ...ctaStyle(pack.ctaType),
                }}>
                  {pack.ctaType === 'ghost' ? 'Réserver ce pack' : pack.num === '+' ? 'Réserver' : pack.bigStat ? 'Demander un devis' : 'Réserver ce pack'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
        {['Espèces', 'CB', 'Chèque', '3× sans frais', 'Voiture · Moto · SUV · Fourgon'].map(c => (
          <span key={c} style={{
            background: 'rgba(26,168,216,0.08)', border: '1px solid rgba(26,168,216,0.18)',
            borderRadius: '2px', padding: '0.2rem 0.55rem',
            fontSize: '0.58rem', letterSpacing: '2px', textTransform: 'uppercase',
            color: 'var(--blue)', fontWeight: 500,
          }}>{c}</span>
        ))}
      </div>
    </section>
  )
}
