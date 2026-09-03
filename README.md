# Imene Site — Next.js + Framer Export

Site Framer exporté via [NoCodeXport](https://nocodexport.com), hébergé dans un projet Next.js pour un déploiement facile sur Vercel.

**Source originale :** https://diverse-communication-135086.framer.app

## Structure

```
imene_site2/
├── app/                  # Routes Next.js (fallback minimal)
│   ├── layout.tsx
│   ├── page.tsx          # Fallback — "/" sert public/index.html
│   └── not-found.tsx
├── public/               # Site Framer statique (copie exacte)
│   ├── index.html        # Page principale avec SSR Framer
│   ├── 404.html
│   ├── favicon.ico
│   └── assets/           # Images, fonts, JS modules, meta
├── scripts/
│   └── post-export.mjs   # Copie index.html dans out/ après build static
├── next.config.ts
├── vercel.json
└── package.json
```

## Fonctionnement

Le site Framer est servi tel quel via un **rewrite** vers `public/index.html`. Cela préserve :
- Le HTML/CSS SSR complet
- Les animations Framer Motion
- L'hydratation React côté client
- Tous les assets statiques

## Commandes

```bash
# Installation
npm install

# Développement local
npm run dev
# → http://localhost:3000

# Build production
npm run build

# Démarrer en production
npm start
```

## Déploiement Vercel

1. Connecter le repo à Vercel
2. Le `vercel.json` configure automatiquement le rewrite `/` → `/index.html`
3. Déployer — le site Framer sera servi à l'identique

## Assets

- `public/assets/images/` — images et icônes
- `public/assets/fonts/` — polices web (Inter, Clash Display, Poppins…)
- `public/assets/animate/` — modules JavaScript Framer (ne pas renommer)
- `public/assets/meta/` — index de recherche Framer
