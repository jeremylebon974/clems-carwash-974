# Clem's Car Wash 974 — Site web premium

Site vitrine Next.js 15 pour Clem's Car Wash 974, La Réunion.

## Stack
- **Next.js 15** + React 19
- **TypeScript**
- **Tailwind CSS**
- **next/image** (optimisation automatique)
- **next/font** (Google Fonts)

## Déploiement sur Vercel (5 minutes)

### Option A — Via GitHub (recommandé)

1. Créez un repo sur [github.com](https://github.com) (ex: `clems-carwash-974`)
2. Uploadez tous ces fichiers dans le repo
3. Allez sur [vercel.com](https://vercel.com) → **Add New Project**
4. Connectez votre repo GitHub
5. Cliquez **Deploy** — Vercel détecte Next.js automatiquement
6. Votre site est en ligne en ~2 minutes !

### Option B — Via Vercel CLI

```bash
npm install -g vercel
cd clems-carwash-974
npm install
vercel
```

### Option C — Drag & Drop sur Vercel

1. Faites `npm install && npm run build` en local
2. Allez sur vercel.com → **Add New Project** → **Browse**
3. Glissez le dossier du projet

## Développement local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Structure du projet

```
clems-carwash-974/
├── public/
│   └── images/          # Toutes les photos (logo, voitures, moto)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Meta SEO, fonts
│   │   ├── page.tsx     # Page principale
│   │   └── globals.css  # Styles globaux
│   └── components/
│       ├── Nav.tsx          # Navigation fixe
│       ├── Hero.tsx         # Hero plein écran + slideshow
│       ├── Marquee.tsx      # Bande défilante rouge
│       ├── Galerie.tsx      # Galerie bento photos
│       ├── AvantApres.tsx   # Slider avant/après
│       ├── Prestations.tsx  # Accordion des 6 packs
│       ├── Sections.tsx     # Pourquoi nous + Avis clients
│       ├── Contact.tsx      # Formulaire + Footer + Barre mobile
│       └── ScrollReveal.tsx # Animations au scroll
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Personnalisation

### Modifier le numéro de téléphone
Cherchez `0692626848` dans tous les fichiers et remplacez.

### Modifier les prix
Ouvrez `src/components/Prestations.tsx` et modifiez le tableau `packs`.

### Ajouter des photos
Déposez vos images dans `public/images/` et référencez-les dans `Galerie.tsx`.

### Domaine personnalisé
Dans Vercel → Settings → Domains → ajoutez votre domaine (ex: clemscarwash974.re)
