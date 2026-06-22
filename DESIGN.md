---
name: Paul Lamouret — Portfolio
description: Portfolio vitrine — Directeur Créatif & Chef de Projet
colors:
  gold: "#d9a00f"
  gold-dark: "#c17f18"
  gold-light: "#cca236"
  black: "#000000"
  off-black: "#0d0d0d"
  charcoal: "#1a1a1a"
  white: "#ffffff"
  off-white: "#f5f4f0"
  grey-light: "#e8e7e3"
  grey-mid: "#999896"
  grey-text: "#555555"
typography:
  display:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(28px, 4vw, 44px)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "5px"
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "0px"
  label:
    fontFamily: "Roboto, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "4px"
    textTransform: "uppercase"
spacing:
  section: "100px"
  section-sm: "60px"
  container-padding: "60px"
  container-max: "1200px"
  navbar-h: "80px"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
components:
  button-primary:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 36px"
    border: "1px solid {colors.charcoal}"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.black}"
    rounded: "{rounded.sm}"
    padding: "14px 36px"
    border: "1px solid {colors.gold}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.off-black}"
    rounded: "{rounded.sm}"
    padding: "14px 36px"
    border: "1px solid {colors.off-black}"
  button-outline-white:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 36px"
    border: "1px solid rgba(255,255,255,0.4)"
  navbar-link:
    textColor: "{colors.grey-mid}"
    typography: "{typography.label}"
    padding: "8px 20px"
  navbar-link-active:
    textColor: "{colors.white}"
  project-card:
    rounded: "{rounded.sm}"
    aspectRatio: "2/3"
  filter-btn:
    textColor: "{colors.grey-mid}"
    typography: "{typography.label}"
    padding: "14px 28px"
  filter-btn-active:
    textColor: "{colors.gold}"
---

# Design System: Paul Lamouret — Portfolio

## 1. Overview

**Creative North Star: "L'Épuré Créatif"**

Un portfolio qui prouve son exigence par son silence. Pas de chichis, pas de bloat. Les codes du luxe éditorial : fond noir profond, typographie affûtée, or utilisé en dose infinitésimale — un accent, pas un drapeau. L'espace est le matériau noble : padding 100px, lettres espacées, souffle entre chaque section. Les images respirent, les titres avancent au hover par un subtil écartement des lettres. Tout est carré, net, sans arrondi ni ombre portée. La grille projets en 4 colonnes avec overlay au hover, la timeline avec dots dorés qui pulsent doucement. Le mouvement est rare et donc précieux : fade-in au scroll, zoom lent sur les images, trait doré qui grandit.

**Key Characteristics:**
- Palette monochrome + un accent or (≤5% de chaque écran)
- Tout est carré (border-radius: 0) — la netteté est une signature
- Typographie contrastée : Oswald (display) large + Roboto (corps) fluide
- Boutons avec remplissage glissant au hover (::before translateX)
- Hover letter-spacing sur les titres (1.1s cubic-bezier)
- Aucun framework CSS — vanilla
- Animations subtiles, jamais gratuites

## 2. Colors

Palette monochrome profonde réchauffée par un seul accent or. Le fond est blanc pur, les sections alternent avec un off-white chaud (#f5f4f0). Les zones sombres utilisent un noir matriciel (#000) ou un off-black (#0d0d0d). L'or n'apparaît que sur les détails : séparateurs, bordures, hover states, dots de timeline.

### Primary
- **Or (#d9a00f)**: Accent unique. Utilisé sur les séparateurs, gold-line, hover states, dots timeline, bouton gold, filtre actif. Jamais en fond massif.

### Neutral
- **Noir (#000000)**: Fond navbar fixe, sections dark.
- **Off-black (#0d0d0d)**: Fond sections dark secondaires, footer.
- **Charcoal (#1a1a1a)**: Fond cartes au hover en dark.
- **Blanc (#ffffff)**: Fond principal, arrière-plan du contenu.
- **Off-white (#f5f4f0)**: Sections alternées, fond de la grille projets, fond meta.
- **Grey-light (#e8e7e3)**: Séparateurs, bordures, tracks de skills.
- **Grey-mid (#999896)**: Texte secondaire, placeholders, liens navbar inactifs.
- **Grey-text (#555555)**: Texte courant (body). Atteint un ratio de contraste de 5.6:1 sur fond blanc.

### Named Rules
**La Règle du 5%.** L'or n'occupe jamais plus de 5% de la surface d'un écran. Sa rareté est son pouvoir. Pas de fonds dorés, pas d'icônes massives en or.

**La Règle du Carré.** Aucun border-radius. Les boutons, cartes, inputs, modales — tout est droit. La netteté angulaire est un signe de luxe éditorial.

## 3. Typography

**Display Font:** Oswald (sans-serif géométrique)
**Body Font:** Roboto (sans-serif humaniste)

**Character:** Contraste d'épaisseur et d'espacement. Oswald apporte la prestance éditoriale avec ses 200/300/400 et son letter-spacing large (4-8px). Roboto en 300 assure la lisibilité du corps de texte, discret mais présent. Le duo évite la monotonie de deux géométriques similaires : Oswald est plus étroit et graphique, Roboto plus rond et fluide.

### Hierarchy
- **Display** (Oswald 300, clamp(42px, 6vw, 72px), lh 1.05): Hero title uniquement. Letter-spacing: 6px.
- **Headline** (Oswald 300, clamp(28px, 4vw, 44px), lh 1.1): Titres de section (h2). Letter-spacing: 5px.
- **Title** (Oswald 300/400, 13-16px, lh 1.25): Sous-titres, titres de carte, timeline. Letter-spacing: 2-4px.
- **Body** (Roboto 300, 13-15px, lh 1.85): Texte courant. Max-width: 680-880px selon contexte.
- **Label** (Roboto 400, 10-11px, ls 3-5px, uppercase): Eyebrows, boutons, menu, meta, captions. Couleur or ou grey-mid.

### Named Rules
**La Règle du Souffle.** Toute ligne de titre a un letter-spacing d'au moins 2px, souvent 4-8px. Les lettres ne se touchent jamais. Le luxe est dans l'air entre les caractères.

## 4. Elevation

Système plat assumé — pas d'ombres portées. La profondeur est créée par les changements de teinte (superposition de fonds noirs/charcoal/off-white) et les traits de séparation (1px, grey-light ou or). Le seul élément avec une élévation visuelle est l'expertise-block au hover (translateY(-4px) + box-shadow doux à 8px) et le consent-banner (ombre 24px). La navbar fixed crée un plan par-dessus le contenu via le z-index.

### Named Rules
**La Règle Plate.** Pas d'ombre à l'état de repos. Les cartes projet sont plates, les boutons sont plats, les modales sont plates. L'élévation est une réponse à l'interaction, jamais un état par défaut.

## 5. Components

### Buttons
- **Shape:** Carré (0px border-radius)
- **Primary (btn-dark):** Fond noir (#000), texte blanc, bordure charcoal. Au hover, fond or (#d9a00f) glisse de gauche à droite (::before translateX), texte passe en noir.
- **Gold (btn-gold):** Fond or, texte noir. Au hover, fond noir glisse de gauche à droite, texte passe en or.
- **Outline (btn-outline):** Transparent, bordure off-black. Au hover, fond or glisse.
- **Outline White (btn-outline-white):** Transparent, bordure rgba(255,255,255,0.4). Au hover, fond or glisse, texte passe en noir.
- **Padding:** 14px 36px. Typo: Roboto 400, 10px, ls 3px, uppercase.

### Navigation (Navbar)
- **Style:** Fixed top, fond noir, hauteur 80px (65px @ mobile). Séparateur bas 1px rgba(gold, 0.15).
- **Logo:** Oswald 400, 16px, ls 4px, uppercase, blanc + icône 40px.
- **Links:** Roboto 400, 11px, ls 2.5px, uppercase, grey-mid → blanc au hover/active. Soulignement or animé (::after width 0→calc(100%-40px)).
- **Mobile:** Hamburger (24px lignes blanches) → menu vertical overlay, liens padding 20px 40px, hover gold + padding-left: 50px.

### Cards
- **Corner Style:** Carré (0px).
- **Background:** Off-white pour expertise blocks, blanc pour project-info, aucun pour project-card (image + overlay sombre).
- **Shadow Strategy:** Aucune par défaut. Expertise-block : box-shadow subtil (0 8px 24px rgba(0,0,0,0.08)) uniquement au hover.
- **Border:** Projet information items : border-left 1px rgba(gold,0.3) → gold au hover. Expertise blocks : border-left 2px gold.
- **Internal Padding:** 32px (expertise), 70px 60px (project-info).

### Inputs / Fields
- **Style:** Fond transparent, bordure inférieure 1px grey-light. Focus : bordure gold. Placeholder : grey-mid, 10px, uppercase.
- **Padding:** 14px 0. Typo: Roboto 300, 13px.
- **Textarea:** min-height 120px, no resize.

### Filter Bar
- **Style:** Boutons en ligne centrés, bordure inférieure 1px grey-light.
- **States:** Default grey-mid → gold-dark au hover → gold au actif. Soulignement or animé (::after scaleX).
- **Padding:** 14px 28px. Typo: Roboto 400, 10px, ls 4px, uppercase.

### Gallery Carousel
- **Viewport:** overflow hidden, gap 20px entre slides.
- **Slides:** flex 0 0 calc((100% - 40px) / 3). Image height 360px, cover. Hover scale(1.04).
- **Overlay:** Gradient transparent→noir, caption blanc 10px uppercase.
- **Navigation:** Flèches "Précédent/Suivant" en 10px uppercase + compteur (Oswald 11px ls 4px). Track transition: 0.55s cubic-bezier(0.4, 0, 0.2, 1).

### Lightbox
- **Overlay:** Fixed, rgba(0,0,0,0.94), z-index 9999, fadeIn 0.25s.
- **Content:** max-width min(92vw, 1100px). Image max-height 80vh, contain.
- **Caption:** 10px uppercase, white 38% opacity.
- **Navigation:** Flèches fixes (left 12px / right 12px), 10px uppercase, hover → 75% opacity. Keyboard: ArrowLeft, ArrowRight, Escape.

### Consent Banner (RGPD)
- **Position:** Fixed bottom (24px), max-width 760px, z-index 3000.
- **Style:** Fond off-black, bordure 1px rgba(gold, 0.25), border-top 2px gold. Shadow 24px.
- **Content:** Eyebrow gold 11px Oswald + texte 13px Roboto grey-light. Actions côte à côte (boutons gold/refuse).
- **Mobile:** Empilé vertical, boutons flex.

### Footer
- **Grid:** 2fr 1fr. Fond off-black, border-top 1px rgba(gold,0.15).
- **Brand:** Oswald 22px, ls 4px, uppercase, blanc. Texte 13px Roboto, rgba(white,0.5).
- **Social:** Oswald 18px, ls 4px. Liens 11px uppercase, rgba(white,0.4) → gold au hover. Icônes gold-light, 15px.
- **Bottom:** 24px padding, 10px uppercase, rgba(white,0.25).

### Back-to-Top
- **Style:** Carré 44px, fond gold. Icône blanche.
- **Visibility:** Opacity 0 + translateY(12px) → visible à 400px scroll.
- **Mobile:** bottom/right 16px.

## 6. Do's and Don'ts

### Do:
- **Do** utiliser l'or en accent fin : gold-line (40×1px), bordures, dots, hover states.
- **Do** garder les boutons carrés (0px border-radius) — la netteté est une signature.
- **Do** espacer généreusement : padding 100px sur les sections, letter-spacing 4-8px sur les titres.
- **Do** utiliser le remplissage glissant (::before translateX) sur les boutons au hover.
- **Do** animer le letter-spacing des titres au hover (1.1s cubic-bezier(0.34, 1.56, 0.64, 1), 0.08em d'incrément).
- **Do** privilégier Oswald 300 pour les titres display.
- **Do** checker le contraste : grey-text (#555) sur blanc (#fff) = 5.6:1 ✓.
- **Do** utiliser off-white (#f5f4f0) pour les sections alternées et la grille projets.
- **Do** respecter prefers-reduced-motion (scroll-reveal désactivé, animations none).

### Don't:
- **Don't** utiliser border-radius: 50px ou des coins arrondis sur les boutons.
- **Don't** utiliser l'or comme fond massif — il reste un accent ≤5%.
- **Don't** utiliser de couleurs vives hors palette (#d9a00f, #000, #fff, #f5f4f0, gris).
- **Don't** utiliser box-shadow prononcée ou ombres portées épaisses.
- **Don't** utiliser de gradients colorés (sauf le gradient héro de superposition).
- **Don't** utiliser Bootstrap, Tailwind ou tout framework CSS externe.
- **Don't** utiliser font-weight 700 sur les titres — Oswald 300/400 suffit.
- **Don't** utiliser d'emojis dans le contenu.
- **Don't** utiliser le tiny uppercase tracked eyebrow au-dessus de chaque section — une exception par page maximum.
- **Don't** utiliser de numbered section markers (01 / 02 / 03) comme décor — sauf pour la timeline (séquence réelle).
- **Don't** utiliser de side-stripe borders >1px comme accent décoratif.
- **Don't** utiliser gradient text (background-clip: text).
- **Don't** utiliser glassmorphism ou blurs décoratifs.
- **Don't** utiliser le hero-metric template (gros chiffre, petite étiquette).
