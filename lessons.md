# lessons.md — Cross-session learnings

## Design System & CSS

### Performance: `transition: width` → `transform: scaleX`
- `transition: width` déclenche du layout (GPU non composité) → éviter sur éléments animés fréquemment (hover navbar)
- `transform: scaleX` est GPU composité via layers → préférer pour les animations répétées
- Exception : barres de progression (`width` animé une fois au load) — OK, impact négligeable

### Skeleton loading images
- Flash blanc au chargement → `opacity: 0` sur l'image → classe `.loaded` set sur `onload`/`onerror` → `opacity: 1` avec transition
- Applicable galerie + lightbox

### Palette
- `--error: #c0392b` réservé aux messages d'erreur formulaire uniquement
- Variables CSS dans `:root` — pas de valeurs hardcodées

## JavaScript & DOM

### Ordre des scripts critique
- scroll-reveal.js observe `.fade-in` existants au chargement
- Les projets featured générés dynamiquement NE DOIVENT PAS avoir `.fade-in` (scroll-reveal ne les verra pas)

### Harden formulaire
- Validation client : regex Nom (2-50, lettres/espaces/tirets), Email valide, Message (20-2000)
- Double-submit : désactiver bouton + spinner immédiatement au submit
- Erreur réseau : message générique pas de détails techniques
- `autocomplete` attributes obligatoires sur tous les champs

## Content & French

### Em-dashes
- Em-dash (—) est correct pour les job titles français standard (e.g. "Chargé de Projets Junior — CDI")
- Em-dash dans le corps de texte (prose) signe d'écriture IA → remplacer par `:` ou `,`

### Vie pro timeline
- "Chargé de Projets Junior — CDI" conserve son em-dash — c'est du français standard, pas un AI tell
- Ne pas inventer d'expériences ni modifier les dates (vérifier le projet ou les sources)

## Claude Code Conventions

### Impeccable workflow
1. `impeccable init` → PRODUCT.md (brand register) + DESIGN.md (tokens Stitch)
2. `impeccable critique file.html` → anti-patterns
3. `impeccable audit` → vérifier après corrections
4. `impeccable polish` only for file-level fixes

### Subagent delegation
- humanizer → relire/éditer du texte pour enlever les marqueurs IA (em-dashes, symbolisme)
- impeccable → audit UI/UX, design critique, polish
- Vérifier skills disponibles avant de tout faire inline

## Windows-specific

- Glob peut ne pas trouver les fichiers avec espaces dans le chemin → utiliser `Get-ChildItem -Recurse` PowerShell
- `file://` bloque `fetch()` → composants navbar/footer en IIFE + HTML inline
- `youtube-nocookie.com/embed/` au lieu de `youtube.com/embed/` pour éviter erreur 153 en local
