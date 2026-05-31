# CLAUDE.md — Salon Élite Montréal

## Project Overview
Fake portfolio site built by Cascade Web (Émile Rochette) to demonstrate capability
to real salon/spa clients in Montreal. Must look and feel like a genuinely operating
luxury hair salon. Full French copy throughout.

This is a showcase piece — design quality is the #1 priority.
The design is already finalized — your job is to build it in clean,
production-ready HTML/CSS/JS that matches the screenshots exactly.

---

## Visual References
Screenshots of the finalized design are attached. Match them precisely.
Do not redesign — reproduce faithfully in clean code.

---

## What Is Locked (never change these)

### Name & Slogan
- Name: Salon Élite Montréal
- Slogan: "L'art de la beauté, à votre service."

### Color Palette
- Background: warm cream/off-white
- Primary text: deep dark brown (near black)
- Accent: muted rose/blush pink
- Gold: warm gold for details and quote marks
- All as CSS custom properties on :root

### Typography
- Display: Bodoni Moda (Google Fonts, weights 400 & 700, italic variant)
- Body: Outfit (Google Fonts, weights 300 & 400)
- All visible text in French

### Hero
- Full viewport height
- Oversized Bodoni Moda headline: SALON / élite (italic rose) / MONTREAL
  Text bleeds off left and bottom edges intentionally
- Vertical side text left edge: "AVENUE LAURIER OUEST — MONTRÉAL"
- Large portrait photo right side, cutting into the typography
- Two decorative blob shapes in background (cream/gold tones)
- "FAITES DÉFILER" bottom right
- Two small lines bottom left: slogan + "MAISON DE COIFFURE — MONTRÉAL, DEPUIS 2015"
- NO CTA buttons in hero

### Services
- Three services with alternating layout (text+pricelist left/image right,
  then image left/text+pricelist right)
- Ghost numbers (1, 2, 3) as faded decorative background elements
- Each service has a detailed price menu with duration and price columns
- Service 01 — COIFFURE & COUPE: Coupe & brushing femme 45min 45$,
  Brushing signature 30min 35$, Coiffure d'événement & chignon 60min 75$,
  Coupe enfant (-12 ans) 30min 30$
- Service 02 — COLORATION & MÈCHES: Retouche racines 60min 85$,
  Coloration complète 90min 110$, Balayage & ombré lumière 120min 145$,
  Mèches complètes 150min 165$, Patine & gloss 30min 55$
- Service 03 — SOINS CAPILLAIRES: Rituel hydratation intense 30min 60$,
  Masque réparateur profond 45min 75$, Soin kératine & lissage 90min 130$,
  Traitement cuir chevelu 30min 65$

### Boutique
- Section title: "LA boutique" (LA large, boutique italic)
- Masonry grid, 3 columns
- Each card: full-bleed product image top, product name, description,
  price, "DISPONIBLE EN SALON" label
- Images centered within cards using object-fit: cover, object-position: center
- Display only — no cart, no buttons
- 6 products (see content section)

### Animations
- AOS for scroll reveals (duration 900ms, ease-out-quart, once: true)
- Staggered delays on sibling elements
- Hero: CSS keyframes sequential load
- Slight rotation on some AOS elements

### Tech Rules
- Pure HTML, CSS, JavaScript — no frameworks
- AOS via CDN
- Google Fonts: Bodoni Moda + Outfit
- Unsplash direct URLs for all images
- Mobile-first responsive CSS
- Never inline styles — always CSS classes
- Clean commented code
- Cookie consent banner styled to match
- All visible text in French

---

## Content (Fixed)

### Boutique Products
| # | Name | Price | Description |
|---|------|-------|-------------|
| 1 | Sérum Éclat Rosé | 48$ | Sérum hydratant à l'huile de rose |
| 2 | Masque Doré Purifiant | 55$ | Masque visage à l'argile et or 24k |
| 3 | Huile Capillaire Luxe | 42$ | Huile nourrissante aux extraits floraux |
| 4 | Crème Mains Velours | 28$ | Crème ultra-douce parfum pivoine |
| 5 | Tonique Floral | 35$ | Tonique apaisant à l'eau de rose |
| 6 | Baume Lèvres Or | 22$ | Baume réparateur avec pigments dorés |

### Salon Info
- Address: 1240 Avenue Laurier Ouest, Montréal, QC H2V 2L3
- Phone: (514) 555-0192
- Email: contact@salonelitemontreal.com
- Hours: Mar–Sam 9h–18h

### À Propos
- Founder: Élodie Beaumont
- Pull quote: "La beauté est un soin, jamais une performance."
- Body: "Né d'une passion pour l'artisanat et les rituels capillaires, Salon
  Élite est un refuge feutré sur l'Avenue Laurier. Nous choisissons des produits
  naturels, travaillons en petites mains et prenons le temps qu'il faut — parce
  qu'une cliente qui repart transformée, c'est notre seule mesure du succès."
- Stats: 10 ans d'expérience · 3 000+ clientes · 100% naturels

### Testimonials
1. Sophie M. — "Un endroit magnifique, je repars toujours transformée."
2. Camille R. — "Le soin capillaire est incroyable, mes cheveux n'ont jamais
   été aussi beaux."
3. Jade T. — "Accueil chaleureux, résultat parfait. Je recommande à toutes
   mes amies."

### Contact Form Fields
- Nom complet
- Courriel
- Service souhaité (dropdown: Coiffure & Coupe, Coloration & Mèches,
  Soins Capillaires)
- Message
- Submit: "ENVOYER MA DEMANDE →"

### Footer
- © 2025 Salon Élite Montréal. Tous droits réservés.
- "Site web conçu par Cascade Web" → https://cascadeweb.vercel.app

---

## Required Sections (in order)
1. Hero
2. Services
3. Boutique
4. À Propos
5. Témoignages
6. Contact & Réservation
7. Footer

Fetch this design file, read its readme, and implement the relevant aspects of the design. https://api.anthropic.com/v1/design/h/PRVFsUd67wbat9lY1_5M4w?open_file=Salon+%C3%89lite.html
Implement: Salon Élite.html