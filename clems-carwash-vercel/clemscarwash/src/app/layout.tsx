import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '700', '900'],
  variable: '--font-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Clem's Car Wash 974 — Nettoyage Auto Premium La Réunion",
  description:
    "Clem's Car Wash 974 : detailing haut de gamme, traitement carrosserie et protection céramique à La Réunion. Classic Wash, Extreme Wash. Appelez le 0692 62 68 48.",
  keywords: [
    'nettoyage voiture La Réunion',
    'lavage auto 974',
    'car wash 974',
    'detailing La Réunion',
    'nettoyage intérieur voiture 974',
    'traitement carrosserie Réunion',
    "Clem's Car Wash",
  ],
  openGraph: {
    title: "Clem's Car Wash 974 — Nettoyage Auto Premium",
    description: 'Detailing automobile haut de gamme à La Réunion. 0692 62 68 48',
    type: 'website',
    locale: 'fr_FR',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AutomotiveBusiness',
      name: "Clem's Car Wash 974",
      telephone: '0692626848',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'La Réunion',
        addressCountry: 'FR',
      },
      sameAs: [
        'https://www.facebook.com/clemscarwash',
        'https://www.instagram.com/clemscarwash_974/',
      ],
      priceRange: '€€',
      description: 'Nettoyage automobile premium, detailing et traitement carrosserie à La Réunion',
    }),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  )
}
