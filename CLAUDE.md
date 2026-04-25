# CLAUDE.md — Portfolio Paul Lamouret
> Ce fichier est lu au début de chaque session de travail sur ce projet.

---

## Contexte du projet

Portfolio professionnel de **Paul Lamouret** — Directeur Créatif, Chef de Projet & Fondateur de **The Project** (studio indépendant de jeux vidéo narratifs), basé à Paris / Le Perreux-sur-Marne.

**Objectif du site :** Vitrine professionnelle statique (6 pages + pages détail projets), sans backend ni base de données. SEO optimisé (Open Graph, Twitter Cards, canonical URLs, Schema.org, robots.txt, sitemap.xml).

**Dossier de travail :**
```
C:\Users\Loky Jason\Downloads\portfolio-paul-clean\
├── index.html               ← home avec 4 projets featured
├── about.html               ← biographie et compétences
├── projects.html            ← grille 4 col, filtre, pagination (8/page)
├── games.html               ← univers créatif (jeu vidéo & projets perso)
├── contact.html             ← formulaire Formspree
├── project-detail.html      ← template dynamique unique pour tous les projets
├── 404.html                 ← page d'erreur (noindex)
├── .htaccess                ← Apache config (cache, 404, compression, headers)
├── robots.txt               ← SEO directives
├── sitemap.xml              ← liste des pages pour moteurs
├── css/
│   └── style.css
├── js/
│   ├── load-navbar.js       ← navbar réutilisable (IIFE, HTML inline)
│   ├── load-footer.js       ← footer + back-to-top button (IIFE, HTML inline)
│   └── projects-data.js     ← données des 14+ projets (contenu, images, vidéos)
└── uploads/                 ← toutes les images
```

---

## Informations personnelles (ne pas inventer)

| Champ | Valeur |
|---|---|
| Nom complet | Paul Lamouret |
| Titre | Fondateur de The Project |
| Ville | Paris / Le Perreux-sur-Marne |
| Adresse | Allée de Bellevue — 94170 Le Perreux-sur-Marne |
| Téléphone | 06 65 65 88 62 |
| Email | loky.jason@gmail.com |
| LinkedIn | https://www.linkedin.com/in/paul-lamouret/ |
| Artstation | https://www.artstation.com/kenji-ashirogy |
| Diplôme | Bachelor Chef de Projet Web + Mastère Producer RNCP NIV 7 |

**Compétences (barres de progression) :**
- Gestion de Projet : 75%
- UI & UX : 70%
- Graphisme : 65%
- Vidéo & Montage : 60%
- After Effects : 55%
- Illustrator : 65%

---

## Architecture des pages

| Page | Fichier | Contenu principal |
|---|---|---|
| Home | `index.html` | Hero · Savoir-faire (3 items) · 4 projets featured · Game Dev CTA |
| About | `about.html` | Photo · Biographie (3 paragraphes CV-aligned) · Compétences · Infos contact |
| Projects | `projects.html` | Grille 4 col · Filtre catégorie (Tous/Vidéo/Web/Digital/Motion Design/Infographie) · Pagination (8/page) |
| Games | `games.html` | Univers créatif — grille projets perso (jeu vidéo, web, expériences digitales) |
| Contact | `contact.html` | Hero photo · Intro · Formulaire Formspree · Infos directes (tél, email, adresse, LinkedIn) |
| Détail projet | `project-detail.html` | Template dynamique — lit `?id=slug`, lightbox, carrousel galerie, Prev/Next nav |
| 404 | `404.html` | Page d'erreur (noindex), lien retour accueil |

**Navigation (français) :** ACCUEIL · À PROPOS · PROJETS · CONTACT  
**Components réutilisables :** Navbar (js/load-navbar.js) · Footer + back-to-top (js/load-footer.js)

---

## Composants réutilisables (Navbar & Footer)

### Pourquoi pas `fetch()` ?
Le site doit fonctionner en local (`file://` protocol). Les `fetch()` sont bloquées → tous les composants utilisent **IIFE avec HTML inline**.

### `js/load-navbar.js`
```javascript
(function () {
  var html = '<nav class="navbar">...menu français...</nav>';
  document.body.insertAdjacentHTML('afterbegin', html);
  
  // Détection auto de la page active
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'project-detail.html') page = 'projects.html';
  document.querySelectorAll('.navbar-menu a').forEach(function (link) {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
  
  // Hamburger mobile
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }
})();
```

**Intégration :** `<script src="./js/load-navbar.js?v=1.0"></script>` en début de `<body>`  
**Contenu menu :** Accueil · À propos · Projets · Contact  
**Active state :** Classe `.active` appliquée auto selon le fichier actuel

### `js/load-footer.js`
```javascript
(function () {
  var html = '...footer HTML...<button id="back-to-top">↑</button>';
  document.body.insertAdjacentHTML('beforeend', html);
  
  var btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
```

**Intégration :** `<script src="./js/load-footer.js?v=1.0"></script>` en fin de `<body>`  
**Contenu footer :** Logo · Réseau (LinkedIn, Artstation) · Légal · Copyright  
**Back-to-top :** Bouton fixed en bas-droit, visible après 400px scroll, smooth scroll to top

---

## Système de pages détail projets

### Fonctionnement
- `projects.html` → clic sur une carte → `project-detail.html?id=slug`
- `project-detail.html` lit le paramètre `id`, cherche dans `PROJECTS_DATA`, injecte tout le contenu dans `<main id="detail-root">`
- Si `id` introuvable → redirection automatique vers `projects.html`

### Fichier de données : `js/projects-data.js`
Chaque projet est un objet avec :
```js
{
  id:          'mon-projet',        // slug URL
  number:      '01',
  title:       'Titre',
  subtitle:    'Sous-titre',
  category:    'Vidéo',            // affiché dans le meta strip
  year:        '2023',
  role:        'Chef de Projet',
  tools:       'After Effects',
  heroImage:   './uploads/...',
  description: 'Résumé court',     // balise <meta description>
  content:     [ /* blocs */ ]
}
```

### Types de blocs de contenu disponibles
```js
{ type: 'text',    value: '<p>HTML avec <strong> et <h3>...</p>' }
{ type: 'image',   src: './uploads/...', caption: '...' }
{ type: 'video',   src: 'https://www.youtube.com/embed/ID', caption: '...' }
{ type: 'quote',   text: '...', author: '...' }   // author optionnel
{ type: 'gallery', images: [{ src, caption }, ...] }
  // ≤ 3 images → grille statique portrait (3 colonnes)
  // > 3 images → carrousel avec flèches + compteur
```

> **NE PLUS UTILISER** `image-duo` — tous les blocs multi-images sont désormais `gallery`.

### Carrousel galerie
Pour `> 3 images`, le carrousel affiche :
- **Compteur correct :** `01 / 03` (nombre de positions scroll, pas nombre d'images)
- **Formule :** `totalPos = Math.max(1, slides.length - visible + 1)`
- **Navigation :** Flèches Préc./Suiv., boutons désactivés aux extrémités
- **Responsive :** 1 slide @600px, 2 slides @900px, 3 slides @1200px+

**Exemple :**  
5 images, 3 visibles → compteur affiche `01 / 03` (on peut scroller 3 fois : positions 0, 1, 2)

### Lightbox (clic sur image de galerie)
- Clic sur `.gallery-slide` → overlay noir plein écran avec l'image agrandie
- Navigation : flèches ← →, touches clavier (ArrowLeft/ArrowRight), `Escape` ou clic overlay
- HTML statique dans `project-detail.html` (div `#lb`), fonctions globales `lbOpen`, `lbClose`, `lbShow`
- Images cliquables en grilles statiques ET carrousels

### Structure de la page détail
1. **Hero** (65vh) — image de fond, titre, sous-titre, numéro
2. **Lien retour** — « ← Tous les projets »
3. **Meta strip** — Catégorie / Année / Rôle / Outils (4 colonnes)
4. **Blocs de contenu** — `renderBlock()` selon le type
5. **Navigation Prev/Next** — fond sombre, liens vers projet précédent/suivant

---

## Règles de design — OBLIGATOIRES

### Identité visuelle
Le site suit les **codes du luxe éditorial** : sobriété, typographie affinée, espaces généreux, or utilisé avec parcimonie.

### Palette de couleurs (ne jamais modifier)
```css
--gold:         #d9a00f   /* or — accents uniquement */
--gold-dark:    #c17f18   /* or foncé — hover, icônes */
--gold-light:   #cca236   /* or clair — liens footer */
--black:        #000000   /* fond navbar, sections sombres */
--off-black:    #0d0d0d   /* fond sections dark */
--charcoal:     #1a1a1a   /* fonds secondaires */
--white:        #ffffff   /* fond principal */
--off-white:    #f5f4f0   /* sections alternées (chaud) */
--grey-light:   #e8e7e3   /* séparateurs, bordures */
--grey-mid:     #999896   /* texte secondaire, placeholders */
--grey-text:    #555555   /* texte courant */
```

### Typographie (ne jamais changer)
```
Titres (display) : Oswald — poids 200/300/400 — letter-spacing large (4–8px)
Corps             : Roboto — poids 300 (léger) — letter-spacing 0–1px
Labels/Eyebrows   : 10–11px / letter-spacing 4–5px / uppercase / couleur or
Petits textes UI  : 10–11px / letter-spacing 2–3px / uppercase
```

### Ce qui définit le style luxe
- **Titres en Oswald 300** avec `letter-spacing` ≥ 4px
- **Or utilisé en accent fin** (traits 1px, labels, hover) — jamais en couleur de fond massive
- **Boutons carrés** (pas de `border-radius` en pilule) avec remplissage glissant au hover
- **Fond off-white `#f5f4f0`** sur les sections alternées
- **Images non rognées brutalement** — zoom lent (0.6–0.8s) au hover
- **Espaces très généreux** : `padding: 100px 0` sections, `padding: 0 60px` container
- **Séparateurs** : ligne `1px` or ou grey-light — jamais un bloc épais
- **`h3` dans les textes** : couleur or, 11px, letter-spacing 5px, border-bottom 1px grey-light

### Ce qu'on ne fait PAS
- ❌ Pas de `border-radius: 50px` sur les boutons
- ❌ Pas de couleurs vives hors palette
- ❌ Pas de `font-weight: 700` sur les titres principaux
- ❌ Pas de `box-shadow` prononcée
- ❌ Pas d'ombres portées sur les cartes
- ❌ Pas de gradients colorés (uniquement `rgba(0,0,0,x)` pour overlays)
- ❌ Pas de Bootstrap ou framework CSS externe
- ❌ Pas d'animations JavaScript complexes — CSS transitions uniquement
- ❌ Pas d'emojis dans le contenu du site

---

## Règles techniques

### Structure HTML
- HTML5 sémantique (`<nav>`, `<section>`, `<article>`, `<footer>`, etc.)
- `lang="fr"` sur toutes les pages
- Favicon : `./uploads/Logo-final-e41I.png`
- `loading="lazy"` sur les images de la grille projets

### CSS
- **Un seul fichier CSS** : `css/style.css`
- **Variables CSS** (`:root`) pour toutes les couleurs et polices
- Responsive mobile-first : media queries à `900px` et `600px`
- Pas de `!important` sauf nécessité absolue justifiée

### JavaScript
- Vanilla JS uniquement (pas de jQuery, pas de librairies)
- Le JS est en bas de page, pas en `<head>`
- `project-detail.html` : fonctions lightbox globales (`lbOpen`, `lbClose`, `lbShow`)
- Components réutilisables (navbar, footer) : IIFE avec HTML inline, **pas de fetch()**

### Cache busting
- Tous les fichiers CSS/JS : `?v=1.0` query parameter
- Quand mettre à jour : incrémenter le numéro de version (`?v=1.1`, `?v=1.2`, etc.)
- Permet au `.htaccess` de garder ces fichiers en cache 0s tout en contrôlant les mises à jour

### Images
- Toutes les images dans `./uploads/`
- Ne jamais déplacer ni renommer les fichiers existants
- Chemins relatifs `./uploads/nom-fichier.ext`

### Vidéos YouTube
- URL embed : `https://www.youtube.com/embed/VIDEO_ID`
- **Conversion auto :** `youtube.com/embed/` → `youtube-nocookie.com/embed/` pour respect de la vie privée
- `?rel=0` ajouté automatiquement pour masquer suggestions vidéo
- ⚠️ **Erreur 153 local :** Se produit en `file://` protocol, disparaît en production HTTPS

### Formulaire de contact
- **Formspree** — remplacer `VOTRE_ID_FORMSPREE` dans `contact.html` par le vrai ID
- Soumission en AJAX (pas de rechargement de page)

### SEO & Meta tags
Toutes les pages incluent :
- **Open Graph** : `og:type`, `og:url`, `og:title`, `og:description`, `og:image`
- **Twitter Card** : `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- **Canonical URL** : `https://www.paul-lamouret.fr/[page]`
- **Meta description** : 155–160 caractères, contenu unique par page
- **Title tag** : Format "Page — Paul Lamouret | Role" (max 60 chars)
- **Lang attribute** : `lang="fr"` sur `<html>`
- **404 page** : Meta `robots: noindex` (ne pas indexer l'erreur)
- **Schema.org** : Page d'accueil inclut JSON-LD `Person` avec jobTitle, URL, sameAs (LinkedIn, Artstation), address, email, telephone

**Fichiers SEO statiques :**
- `robots.txt` — Directives pour moteurs de recherche (Allow: /, Sitemap: sitemap.xml)
- `sitemap.xml` — Liste toutes les pages avec priorité (index=1.0, projects=0.9, about=0.8, games=0.7, contact=0.6)

---

## Configuration Apache — `.htaccess`

Hébergeur : **Dynadot.com** (Apache + mod_deflate + mod_expires)

```apache
# 404 page
ErrorDocument 404 /404.html

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/* "access plus 1 week"
  ExpiresByType font/* "access plus 1 year"
  ExpiresByType text/css "access plus 0 seconds"
  ExpiresByType application/javascript "access plus 0 seconds"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-Content-Type-Options "nosniff"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
```

**Stratégie cache :**
- Images : 1 semaine (réduction pour mettre à jour facilement)
- Fonts : 1 an (rarement modifiées)
- CSS/JS : 0 secondes (cache busting via `?v=1.0`)
- HTML : 0 secondes (contenu dynamique possible)

---

## Méthode de développement — OBLIGATOIRE

Avant toute implémentation, suivre impérativement ces 4 étapes :

### 1. Réflexion et exploration
- Identifier clairement le besoin
- Explorer **plusieurs pistes** possibles (minimum 2-3 options)
- Évaluer chaque option : cohérence avec le style luxe, faisabilité, impact sur les autres pages

### 2. Vérification de cohérence
- La solution respecte-t-elle la palette, la typographie, les règles de design ?
- Est-elle cohérente avec ce qui existe déjà dans `style.css` ?
- Y a-t-il un **conflit CSS possible** (deux règles pour la même classe) ? → Grep avant d'ajouter
- Si non → revenir à l'étape 1

### 3. Implémentation + test
- Lire le(s) fichier(s) concerné(s) avant toute modification
- Mettre en place la solution de façon **ciblée** (Edit, pas réécriture complète)
- Vérifier le résultat : si erreur ou incohérence → corriger et re-tester

### 4. Validation finale
- La modification est en place et fonctionnelle
- Aucun style inline non justifié n'a été ajouté
- Le fichier `style.css` reste le seul fichier CSS
- Si la modification affecte plusieurs pages → toutes les pages ont été mises à jour

### 5. Délégation à un sous-agent *(nouveau)*
- Si une tâche dépasse les compétences directes (ex : fonctionnalité JS complexe, intégration externe, test automatisé), **déléguer à un sous-agent** plutôt que de produire du code approximatif
- Le sous-agent reçoit un brief complet et autonome (fichiers concernés, contexte, objectif précis)
- Toujours vérifier le résultat du sous-agent avant de le reporter comme terminé

---

## Projets référencés

### Pages dédiées
- **`projects.html`** : Tous les projets professionnels (14 projets)
- **`games.html`** : Univers créatif (5 projets perso : Broken Timepiece, Streeemote, Pixelwear, JDR Zaun, Reliquia)

### Filtres dans `projects.html`
- Tous
- Vidéo
- Web/Digital (anciennement "Web" — catégorie changée en `category: 'Web/Digital'` dans projects-data.js)
- Motion Design
- Infographie

Pagination : 8 projets par page  
Clic carte → `project-detail.html?id=slug`

### Catégories dans `projects-data.js`
- `'Vidéo'` (6 projets)
- `'Web/Digital'` (7 projets) — **changement 2026-04-23 : ancien "Web"**
- `'Motion Design'` (2 projets)
- `'Infographie'` (1 projet)
- `'Jeu Vidéo'` (pour games.html, pas dans projects.html)

**Ordre dans `PROJECTS_DATA`** (détermine la navigation Préc./Suiv. dans les pages détail):

| # | ID slug | Titre | Catégorie | Contenu rempli |
|---|---|---|---|---|
| 01 | `conference-tedx` | Conférence TEDx | Vidéo | ✅ texte + image + vidéo + à savoir |
| 02 | `pixelwear` | Pixelwear | Web/Digital | ✅ texte + galerie (3) + vidéo + à savoir |
| 03 | `e-sentiellle` | E-sentiellle | Vidéo | ✅ texte + image + vidéo + à savoir |
| 04 | `streeemote` | Streeemote | Web/Digital | ✅ texte + fonctionnement + image + à savoir |
| 05 | `dooh-ready-player` | Campagne DOOH | Web/Digital | ✅ texte + scénario + galerie (4) + à savoir |
| 06 | `mob-e` | Möb-e | Web/Digital | ✅ texte + scénario + galerie (5) + à savoir |
| 07 | `jdr-zaun` | JDR — Zaun | Jeu Vidéo | ✅ texte + scénario + galerie (5) + à savoir |
| 08 | `charte-graphique` | Charte Graphique | Infographie | ✅ texte + galerie (7) + à savoir |
| 09 | `r2d2-black-star` | R2D2 | Motion Design | 🔲 À compléter |
| 10 | `reliquia` | Reliquia | Jeu Vidéo | 🔲 À compléter |
| 11 | `kinetic-beastars` | Kinetic Typographie | Motion Design | ✅ texte + vidéo + à savoir |
| 12 | `un-dimanche-de-trop` | Un Dimanche de Trop | Vidéo | ✅ texte + image + vidéo + à savoir |
| 13 | `action-pepin` | Action Pépin | Vidéo | 🔲 À compléter |
| 14 | `experience-webgl` | Expérience WebGL | Web/Digital | 🔲 À compléter |
| 15 | `application-montres` | Application Digitale | Web/Digital | 🔲 À compléter |
| 16 | `jumeau-numerique` | Jumeau Numérique | Web/Digital | 🔲 À compléter |
| 17 | `land-sea-air` | Land Sea Air | Vidéo | 🔲 À compléter |
| 18 | `village-gastronomique` | Village Gastronomique | Vidéo | 🔲 À compléter |
| 19 | `fine-makers` | Fine Makers | Vidéo | 🔲 À compléter |
| 20 | `mg-marvel-r` | MG MARVEL R | Vidéo | 🔲 À compléter |

**Games.html (5 projets, non-filtrés):**

| ID slug | Titre | Année |
|---|---|---|
| `broken-timepiece` | The Broken Timepiece | 2024 |
| `streeemote` | Streeemote | 2023 |
| `pixelwear` | Pixelwear | 2023 |
| `jdr-zaun` | JDR — Zaun | 2023 |
| `reliquia` | Reliquia | 2023 |

---

## Éléments décoratifs réutilisables

```html
<!-- Ornement diamant or (séparateur de section) -->
<div class="ornament">
  <div class="ornament-diamond"></div>
</div>

<!-- Eyebrow (chapeau de section) -->
<span class="section-eyebrow">Libellé</span>

<!-- Ligne or fine -->
<div class="gold-line"></div>
<div class="gold-line center"></div>  <!-- centrée -->

<!-- Numéro de projet -->
<span class="project-number">Projet — 01</span>
```

---

## Ce qu'il reste à faire

### Paul (actions manuelles)
- [ ] **Domaine :** Vérifier que `https://www.paul-lamouret.fr` est correct (utilisé dans canonical/OG URLs)
- [ ] Remplacer `xaqajagl` dans `contact.html` action Formspree par le bon ID si besoin
- [ ] Copier images manquantes (EN DEHORS des placeholders) depuis ancien portfolio

### Contenu à remplir dans `projects-data.js`
- [ ] Projets sans contenu (flaggés 🔲) : R2D2, Reliquia, Action Pépin, WebGL, Application, Jumeau Numérique, Land Sea Air, Village Gastronomique, Fine Makers, MG MARVEL R
- [ ] Vidéos YouTube : récupérer les IDs vidéo et les ajouter aux blocs `{ type: 'video', src: '...' }`

### Déploiement sur Dynadot
- [ ] Télécharger tous les fichiers (FTP ou Dynadot panel)
- [ ] Vérifier que `.htaccess` fonctionne (gzip, cache, 404)
- [ ] Tester SEO avec Google Search Console + Google PageSpeed Insights
- [ ] Vérifier qu'Erreur 153 YouTube disparaît en HTTPS production
- [ ] Valider robots.txt et sitemap.xml (via Google Search Console)

### Développement optionnel
- [ ] Favicon `.ico` dédié (actuellement PNG)
- [ ] Importer dans Bootstrap Studio une fois finalisé
- [ ] Monitoring : mettre en place alertes si site down

---

## Historique des bugs importants résolus

| Bug | Cause | Solution | Date |
|---|---|---|---|
| Lightbox invisible au clic | Double règle `.lb-overlay` — ancienne règle écrasait `display:flex` | Suppression ancien bloc, réécriture avec `display:none → flex` | 2026-04-xx |
| Lightbox ne s'ouvrait pas | IIFE + closures rendant `lb = null` | HTML statique + variables globales, fonctions `lbOpen/lbClose` | 2026-04-xx |
| Vidéo Conférence ne chargeait pas | URL `watch?v=` au lieu de `embed/` | Correction de l'URL embed | 2026-04-xx |
| **Carousel compteur erroné** | Affichait `slides.length` au lieu de positions scroll | Formule `totalPos = Math.max(1, slides.length - visible + 1)` | 2026-04-23 |
| **Navbar/footer non visibles local** | `fetch()` bloquée par `file://` protocol | Changement vers IIFE avec HTML inline (no fetch) | 2026-04-23 |
| **Erreur 153 YouTube local** | `youtube.com/embed/` bloqué en `file://` | Conversion vers `youtube-nocookie.com/embed/` (partiel) | 2026-04-23 |
| **Double écouteur hamburger** | Code dupliqué dans index.html + load-navbar.js | Suppression du code inline dans index.html | 2026-04-23 |
| **Catégorie Web non standardisée** | Mélange `'Web'` et `'Web/Digital'` dans projects-data.js | Remplacement de tous les `'Web'` par `'Web/Digital'` | 2026-04-23 |
