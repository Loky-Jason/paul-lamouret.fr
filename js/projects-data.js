/**
 * PROJECTS DATA — Portfolio Paul Lamouret
 * ─────────────────────────────────────────
 * Chaque projet est un objet avec :
 *   id         : slug utilisé dans l'URL (?id=mon-projet)
 *   number     : numéro affiché (ex: '01')
 *   title      : titre principal (Oswald, affiché en grand)
 *   subtitle   : sous-titre ou tagline
 *   category   : catégorie affichée dans le meta strip
 *   year       : année du projet
 *   role       : rôle de Paul sur ce projet
 *   tools      : outils / logiciels utilisés
 *   heroImage  : image de fond du héros (chemin relatif depuis la racine)
 *   description: résumé court (affiché dans le meta strip)
 *   content    : tableau de blocs de contenu (voir types ci-dessous)
 *
 * TYPES DE BLOCS DISPONIBLES :
 * ─────────────────────────────
 * { type: 'text',    value: '<p>HTML...</p>' }
 * { type: 'image',   src: './uploads/...', caption: '...' }
 * { type: 'gallery', images: [{ src, caption }, ...] }
 *   — ≤ 3 images → grille statique portrait (3 colonnes)
 *   — > 3 images → carrousel avec flèches ← Préc. / Suiv. →
 * { type: 'video',   src: 'https://www.youtube.com/embed/VIDEO_ID', caption: '...' }
 * { type: 'quote',   text: '...', author: '...' }   ← author optionnel
 *
 * ⚠ NE PLUS UTILISER : image-duo → remplacé par gallery
 */

const PROJECTS_DATA = [

  {
    id: 'broken-timepiece',
    number: '14',
    title: 'The Broken Timepiece',
    subtitle: 'Survival Horror',
    category: 'Jeu Vidéo',
    year: '2024',
    role: 'Producer · Directeur Créatif',
    tools: 'Unreal Engine 5 · Photoshop',
    heroImage: './uploads/BrokenTimepiece_hero.png',
    description: 'Survival horror psychologique — incarnez un personnage amnésique et progressez par l\'exploration et la résolution d\'énigmes.',
    content: [
      {
        type: 'text',
        value: `<p>Dans ce <strong>survival horror</strong>, vous incarnez un personnage amnésique qui se réveille dans une maison abandonnée. Très vite, une <strong>entité mystérieuse et menaçante</strong> commence à le poursuivre, cherchant justice pour des événements passés.</p><p>Pour progresser et survivre, vous devrez <strong>résoudre des énigmes complexes</strong> et explorer les sombres secrets cachés dans cette demeure inquiétante. Chaque découverte vous plongera dans des <strong>scènes du passé</strong>, révélant peu à peu la vérité sur des événements tragiques.</p>`
      },
      {
        type: 'image',
        src: './uploads/BrokenTimepiece_hero.png',
        caption: 'The Broken Timepiece — Direction Artistique'
      },
      {
        type: 'text',
        value: `<h3>À la Recherche de Vos Souvenirs</h3><p>Votre personnage, <strong>amnésique</strong>, doit survivre dans un monde inquiétant où chaque recoin cache un nouveau mystère. Explorez des lieux <strong>hantés par des souvenirs oubliés</strong> et découvrez la vérité tout en échappant à une entité terrifiante qui vous traque sans relâche.</p>`
      },
      {
        type: 'text',
        value: `<h3>Exploration & Résolution d'Énigmes</h3><p>Chaque pièce, chaque objet trouvé est une pièce du puzzle. Utilisez vos compétences pour <strong>résoudre des énigmes en lien avec des fragments de mémoire</strong> et déverrouillez de nouvelles zones tout en progressant dans l'histoire.</p><p>Vos choix influeront sur votre survie et sur le destin du personnage.</p>`
      },
      {
        type: 'text',
        value: `<h3>Production</h3><p><strong>Projet :</strong> Titre indépendant en développement depuis 2023 <br><strong>Équipe :</strong> The Project — 8+ contributeurs <br><strong>Statut :</strong> Développement avancé (2024-2026)</p><p>Je supervise l'intégralité du projet en tant que <strong>Producer et Directeur Créatif</strong> — vision créative, leadership artistique, pilotage technique et gestion de l'équipe interdisciplinaire.</p><a href="https://www.asso-theproject.com/the-broken-timepiece.html" target="_blank" rel="noopener noreferrer" class="detail-link"><span>Découvrir le projet</span><i class="fas fa-arrow-right"></i></a>`
      }
    ]
  },

  {
    id: 'conference-tedx',
    number: '01',
    title: 'Conférence',
    subtitle: 'Les Métavers peuvent-ils transformer le Télétravail ?',
    category: 'Vidéo',
    year: '2023',
    role: 'Chef de Projet · Motion Designer',
    tools: 'After Effects · Premiere Pro',
    heroImage: './uploads/Conference-TEDx-7MRl.png',
    description: 'Conférence inspirée des codes TEDx — Les métavers peuvent-ils transformer notre conception du télétravail ?',
    content: [
      {
        type: 'text',
        value: `<p>Cette conférence explore la transformation du télétravail à travers le prisme des environnements immersifs et des métavers. En s'appuyant sur les théories du management moderne et l'évolution des modes de travail, la présentation interroge : <strong>comment les mondes virtuels redéfinissent-ils l'espace professionnel et la collaboration ?</strong></p><p>La recherche combine une analyse théorique (fondée sur les principes du management et de l'innovation organisationnelle) avec une réflexion prospective sur les infrastructures technologiques émergentes et leur adoption en milieu professionnel.</p>`
      },
      {
        type: 'image',
        src: './uploads/Conference-TEDx-7MRl.png',
        caption: 'Conférence — Les Métavers et le Télétravail'
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/pHHrabRV73Y',
        caption: 'Conférence TEDx — Les Métavers et le Télétravail'
      },
      {
        type: 'text',
        value: `<h3>Production & Format</h3><p><strong>Contexte :</strong> Mémoire de fin de Bachelor (2023) <br><strong>Format :</strong> Conférence-vidéo inspirée des codes TEDx <br><strong>Captation :</strong> Grymm Visual Storyteller <br><strong>Post-production :</strong> After Effects + Premiere Pro</p><p>L'enjeu créatif : convertir une recherche théorique en <strong>storytelling immersif</strong> plutôt qu'une présentation académique classique. La vidéo répond à trois défis simultanés : richesse du contenu, engagement de l'audience, accessibilité médias.</p>`
      }
    ]
  },

  {
    id: 'pixelwear',
    number: '02',
    title: 'Pixelwear',
    subtitle: 'Créer, échanger et vendre des tenues pour vos avatars',
    category: 'Web/Digital',
    year: '2023',
    role: 'UI/UX Designer · Chef de Projet',
    tools: 'Figma · Illustrator · After Effects',
    heroImage: './uploads/PixelWear_hero.png',
    description: 'Plateforme e-commerce permettant de créer, d\'échanger et de vendre des tenues numériques pour avatars dans les métavers.',
    content: [
      {
        type: 'text',
        value: `<p><strong>PixelWear</strong> est une plateforme e-commerce dédiée au commerce de biens numériques — spécifiquement les vêtements et accessoires d'avatar pour les environnements immersifs. Le projet identifie un besoin non satisfait : l'absence d'écosystème unifié et interopérable pour les vêtements virtuels.</p><p>La plateforme s'appuie sur l'<strong>API Ready Player Me</strong> pour offrir une intégration transparent avec quarante métavers majeurs (VRChat, Spatial, HiberWorld, etc.). L'utilisateur peut concevoir, acheter, vendre et porter ses créations numériques sans friction.</p><p>Les fonctionnalités incluent : un <strong>éditeur graphique 3D intuitif</strong> (sans connaissances techniques), une <strong>garde-robe numérique personnalisée</strong>, et un <strong>système de fidélité</strong> encourageant l'engagement à long terme.</p>`
      },
      {
        type: 'gallery',
        images: [
          { src: './uploads/Moodboard_PixelWear.png',  caption: 'Pixelwear — Moodboard' },
          { src: './uploads/PixealWear--portfolio-paul-lamouret-4ulj.png', caption: 'Pixelwear — Vue 1' },
          { src: './uploads/PixealWear2--portfolio-paul-lamouret-wVlI.png', caption: 'Pixelwear — Vue finale' }
        ]
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/TsRx0_10LnM',
        caption: 'Pixelwear — Présentation du projet'
      },
      {
        type: 'text',
        value: `<h3>Contexte de Production</h3><p>Pixelwear a été développé en <strong>2023</strong> dans le cadre d'un projet entrepreneurial simulant la création d'une startup innovante.</p><p><strong>Mes responsabilités :</strong> <br>— Conception UX/UI (Figma) et architecture produit <br>— Stratégie de positionnement marché <br>— Direction générale et timeline du projet</p><p>L'enjeu était triple : <strong>identifier</strong> un marché émergent mal servi, <strong>concevoir</strong> une proposition technique viable, <strong>produire</strong> des assets visuels convaincants (prototypes interactifs, animations, présentations).</p>`
      }
    ]
  },

  {
    id: 'e-sentiellle',
    number: '03',
    title: 'E-sentiellle',
    subtitle: 'Le désodorisant connecté qui s\'adapte à votre vie.',
    category: 'Vidéo',
    year: '2021',
    role: 'Réalisateur · Motion Designer',
    tools: 'After Effects · Premiere Pro',
    heroImage: './uploads/E-sentielle-blog-portflio---paul-lamouret-WKd2.png',
    description: 'Spot publicitaire pour E-sentiellle, le désodorisant intelligent qui diffuse les parfums de votre choix selon votre mode de vie.',
    content: [
      {
        type: 'text',
        value: `<p>Imaginez un intérieur qui sent toujours bon, sans effort. Avec <strong>E-Sentielle</strong>, votre désodorisant intelligent, choisissez vos parfums préférés depuis votre smartphone et programmez leur diffusion selon vos besoins.</p><p>Un dîner improvisé ? Une soirée en amoureux ? Ou encore une erreur de nettoyage. E-Sentielle ajuste l'ambiance olfactive à chaque moment. Et grâce à ses capteurs, il s'active uniquement quand vous en avez besoin, pour une maison fraîche et accueillante, à tout instant.</p><p><strong>E-Sentielle : Le Parfum au Naturel.</strong></p>`
      },
      {
        type: 'image',
        src: './uploads/E-sentielle-blog-portflio---paul-lamouret-WKd2.png',
        caption: 'E-sentiellle — Spot Publicitaire'
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/GGJdQ8L9AHk',
        caption: 'E-sentiellle — Spot Publicitaire'
      },
      {
        type: 'text',
        value: `<h3>Production</h3><p><strong>Année :</strong> 2021 (L3) <br><strong>Format :</strong> Spot publicitaire < 2 min, tournage monolocal <br><strong>Casting :</strong> Natte You, Ludovic Coutaud, Joëlle Haddad, Patrick Dupain, Moussa Kobzili, Laura Cezar</p><p>L'enjeu était singulier : raconter la proposition de valeur du produit (confort + technologie) en <strong>90 secondes sans dialogue</strong>, en s'appuyant uniquement sur la mise en scène visuelle et le pouvoir narratif de l'image.</p><p>Le résultat est un film de marque fluide et accessible, diffusé dans le contexte académique.</p>`
      }
    ]
  },

  {
    id: 'streeemote',
    number: '04',
    title: 'Streeemote',
    subtitle: 'Extension Twitch — Retransmettre les émotions en génération procédurale',
    category: 'Web/Digital',
    year: '2022',
    role: 'Chef de Projet · UX Designer',
    tools: 'Figma · JavaScript · After Effects',
    heroImage: './uploads/-120877374-gettyimages-1232608943-jYfw.jpg',
    description: 'Dispositif retransmettant les émotions d\'un Live Twitch sous la forme d\'emotes en génération procédurale, intégré directement au tchat.',
    content: [
      {
        type: 'text',
        value: `<p><strong>Streeemote</strong> est une extension Twitch qui génère dynamiquement des emotes personnalisées basées sur le sentiment émotionnel d'un stream en direct. Le concept : convertir les émotions collectives du chat (et du streamer) en ressources visuelles uniques et éphémères.</p><p>La proposition de valeur est double — pour Twitch : rétention d'audience et différenciation ; pour les streamers et viewers : enrichissement de l'expérience de participation en direct.</p>`
      },
      {
        type: 'text',
        value: `<h3>Mécanisme Technique</h3><p>Un algorithme propriétaire analyse plusieurs signaux en temps réel : sentiment du texte du chat, patterns de réaction, engagement viewer, dynamique du stream. Ces données alimentent un moteur de génération procédurale d'émotes, produisant de nouvelles variantes constamment.</p><p>Résultat : les utilisateurs disposent d'un vocabulaire visuel évolutif, unique à chaque session, reflétant authentiquement l'atmosphère du direct.</p>`
      },
      {
        type: 'image',
        src: './uploads/-120877374-gettyimages-1232608943-jYfw.jpg',
        caption: 'Streeemote — Extension Twitch'
      },
      {
        type: 'text',
        value: `<h3>Conception & Innovation</h3><p><strong>Contexte :</strong> Séminaire M1 (2022) <br><strong>Brief :</strong> Inventer un dispositif inédit pour transmettre l'émotion <br><strong>En partenariat :</strong> Vivien André</p><p>L'intuition centrale : plutôt que <strong>traduire</strong> l'émotion en symbolique figée (emojis), la <strong>générer dynamiquement</strong> pour qu'elle reste authentique, vivante et contextualisée à chaque moment. Application idéale : Twitch, plateforme intrinsèquement émotionnelle.</p>`
      }
    ]
  },

  {
    id: 'dooh-ready-player',
    number: '05',
    title: 'Campagne DOOH',
    subtitle: 'La campagne DOOH 3.0 pour Ready Player Two',
    category: 'Web/Digital',
    year: '2022',
    role: 'Directeur Artistique',
    tools: 'After Effects · Illustrator · Photoshop',
    heroImage: './uploads/Banniere-emvd.png',
    description: 'Campagne 360° transmédia pour la sortie fictive de Ready Player Two — dispositifs DOOH, événement à la Gaîté Lyrique et expérience immersive.',
    content: [
      {
        type: 'text',
        value: `<p>En réponse à un appel à projet fictif, j'ai conçu une <strong>campagne 360° transmédia</strong> pour le lancement du film <em>Ready Player Two</em>. La stratégie articule dispositifs DOOH (affichage numérique urbain), activation en lieux publics (Gaîté Lyrique), et engagements digitaux.</p><p>L'objectif : créer une immersion progressive dans l'univers du film via plusieurs touchpoints, du marketing social aux expériences AR, ciblant particulièrement la région Île-de-France.</p>`
      },
      {
        type: 'text',
        value: `<h3>Plan de Campagne</h3><p>Trois phases temporelles :</p><p><strong>Phase 1 (J-2 semaines)</strong> : Teasers sur réseaux sociaux + campagne print (métros, bus, bornes numériques) = anticipation et build-up.</p><p><strong>Phase 2 (J-1 jour)</strong> : Événement physique d'avant-première avec activations immersives et distribution d'avatar personnalisés.</p><p><strong>Phase 3 (J+1 à J+30)</strong> : Exposition "The OASIS Experience" en galerie + filtres AR Instagram/Snapchat + presences en cinémas (affichage interactif).</p><p>Le fil conducteur : transmettre l'univers virtuel par l'expérience physique progressive, culminant en expérience numérique immersive.</p>`
      },
      {
        type: 'gallery',
        images: [
          { src: './uploads/Moodboard_DOOH.png',       caption: 'Moodboard inspirationnel' },
          { src: './uploads/Affiche-Metro-1-qHdG.png', caption: 'Affiche Métro — Format 1' },
          { src: './uploads/Afiche-Metro-2-JxXA.png',  caption: 'Affiche Métro — Format 2' },
          { src: './uploads/Afiche-Metro-3-tP82.png',  caption: 'Affiche Métro — Format 3' },
          { src: './uploads/Bornes-Metro-pJ7y.png',    caption: 'Bornes Métro' }
        ]
      },
      {
        type: 'text',
        value: `<h3>Contexte & Résultats</h3><p><strong>Projet d'étude :</strong> M1 (2022) <br><strong>Co-direction :</strong> Ludmilla Fiore <br><strong>Exercice :</strong> Réponse RFP (Request For Proposal) complexe en environnement académique</p><p>L'objectif pédagogique : démontrer la maîtrise de trois compétences majeures — <strong>stratégie narrative</strong>, <strong>storytelling transmédia</strong>, et <strong>gestion budgétaire</strong> appliquée.</p><p>Le projet a reçu une reconnaissance notable du jury, justifiant sa publication ici comme cas d'école en stratégie marketing 360°.</p>`
      },
      {
        type: 'text',
        value: `<div style="margin-top: 40px; padding-top: 40px; border-top: 1px solid var(--grey-light);"><a href="./uploads/files/DOOH_PDF.pdf" download target="_blank" rel="noopener noreferrer" class="detail-link"><span>Télécharger le brief complet (PDF)</span><i class="fas fa-download" style="font-size:9px;"></i></a></div>`
      }
    ]
  },

  {
    id: 'mob-e',
    number: '06',
    title: 'Möb-e',
    subtitle: 'Le site e-commerce responsable',
    category: 'Web/Digital',
    year: '2023',
    role: 'UI/UX Designer · Chef de Projet',
    tools: 'WordPress · Figma · Photoshop',
    heroImage: './uploads/Mob-e_hero.png',
    description: 'Plateforme e-commerce éco-responsable réalisée sous WordPress — stratégie de communication, gestion de projet et intégration complète.',
    content: [
      {
        type: 'text',
        value: `<p>En réponse à un <strong>appel d'offres fictif</strong>, je devais créer sous WordPress une plateforme e-commerce sur laquelle différentes start-up ou entreprises <em>Tech for Good</em> pourraient vendre leurs produits. Ma prestation comprenait également toute la <strong>stratégie de communication marketing</strong> autour des démarches écoresponsables, ainsi que la partie gestion de projet.</p>`
      },
      {
        type: 'text',
        value: `<h3>Scénario</h3><p>Notre agence digitale a été contactée par <strong>Nathan KIPASS</strong>, le fondateur de Möbius, une entreprise souhaitant « changer la façon de penser et de consommer des Français ». Spécialisée depuis 10 ans dans l'élaboration de coffrets pédagogiques, elle sensibilise élèves, étudiants et dirigeants à consommer de façon plus responsable.</p><p>Les dirigeants de Möbius souhaitent lancer une nouvelle marque, <strong>Möb-e</strong>, avec une boutique e-commerce vendant exclusivement des produits « utiles » et durables. La principale externalité positive visée : <strong>limiter la consommation en énergie</strong> et réduire au maximum la production de déchets des consommateurs.</p><p>Des produits comme <em>Groundfridge, Everloop, Oquari</em> ou <em>Reuse</em> devront être présents sur le site. Leur point commun : ils sont tous durables et préservent au mieux l'environnement, bien que leurs fabricants soient tous différents.</p>`
      },
      {
        type: 'gallery',
        images: [
          { src: './uploads/Moodboard_Mob-e.png',        caption: 'Moodboard inspirationnel' },
          { src: './uploads/Mockup-Insta2-lbtA.png',       caption: 'Mockup Instagram — Format 2' },
          { src: './uploads/Mockup-Insta-3yKU.png',        caption: 'Mockup Instagram' },
          { src: './uploads/maquette-Facebook-clBT.png',   caption: 'Maquette Facebook' },
          { src: './uploads/maquette-twitter-Cptc.png',    caption: 'Maquette Twitter' }
        ]
      },
      {
        type: 'text',
        value: `<h3>Responsabilités & Réalisations</h3><p><strong>Scope de projet :</strong> Responsabilité unique, périmètre complet</p><p>Audit stratégique · Conception UX/UI · Gestion de projet · Création graphique (branding, mockups réseaux) · Stratégie digitale</p><p><strong>Timeline :</strong> 6 semaines (cadre académique, RNCP 6)</p><p><strong>Livrables :</strong> Book de conception, plan de communication détaillé, présentation écosystème produit, maquettes WordPress, stratégie et mockups réseaux sociaux.</p>`
      },
      {
        type: 'text',
        value: `<div style="margin-top: 40px; padding-top: 40px; border-top: 1px solid var(--grey-light);"><a href="./uploads/files/Mob-e_PDF.pdf" download target="_blank" rel="noopener noreferrer" class="detail-link"><span>Télécharger le brief complet (PDF)</span><i class="fas fa-download" style="font-size:9px;"></i></a></div>`
      }
    ]
  },

  {
    id: 'jdr-zaun',
    number: '07',
    title: 'JDR',
    subtitle: 'Zaun sous Haute Tension',
    category: 'Jeu Vidéo',
    year: '2023',
    role: 'DA · Game Designer · Dev Front-end',
    tools: 'Photoshop · Illustrator · HTML · CSS · JavaScript',
    heroImage: './uploads/BG-Home-N6Eq.png',
    description: 'JDR basé sur l\'univers de League of Legends — backgrounds, game design et web app front-end réalisés en une semaine de workshop.',
    content: [
      {
        type: 'text',
        value: `<p>Intense workshop d'une semaine (M1) combinant <strong>Game Design</strong> et <strong>développement front-end</strong> dans l'univers de <strong>League of Legends</strong>. Équipe de 15 personnes répartie en pôles thématiques.</p><p>Ma contribution : design complet du JDR de table, architecture du gameplay, et développement d'une web app asynchrone (HTML/CSS/JS) pour gestion des personnages et quêtes en temps réel.</p>`
      },
      {
        type: 'text',
        value: `<h3>Setting : Piltover & Zaun</h3><p><strong>Piltover</strong>, cité du progrès technologique (Hextech) et <strong>Zaun</strong>, métropole marginalisée développant sa propre techno-chimie. Cette dualité crée tension politique, conflits socio-économiques, et opportunités dramaturgiques. Les joueurs naviguent entre ces deux univers comme agents de changement, détectives ou révolutionnaires.</p><p>Le JDR système s'inspire des mécas de jeu de rôle trad., adaptées pour l'univers LoL : jets de compétences, narratif collaboratif, progression de personnage.</p>`
      },
      {
        type: 'gallery',
        images: [
          { src: './uploads/BG-Home-N6Eq.png',      caption: 'Zaun — Vue principale' },
          { src: './uploads/BG-Piltover-IhT2.png',  caption: 'Piltover' },
          { src: './uploads/BG-Bar-EHSP.png',        caption: 'The Bar' },
          { src: './uploads/BG-Zaun-uPQU.png',       caption: 'Zaun City' },
          { src: './uploads/BG-Home-8Xxa.png',       caption: 'Zaun — Variante' }
        ]
      },
      {
        type: 'text',
        value: `<h3>Contexte de Production</h3><p><strong>Format :</strong> Séminaire intensif M1 — une semaine de travail continu <br><strong>Brief :</strong> JDR grandeur nature sur campus <br><strong>Équipe :</strong> 15 contributeurs en pôles spécialisés</p><p>Pôles : Game Design · Scénario · UI/UX · Direction Artistique · Gestion de Projet</p><p>L'exercice recrée les conditions réelles de production : <strong>contrainte temporelle extrême</strong>, <strong>équipe hétéroclite</strong>, <strong>coordination dense</strong>. Un intensif de gestion et créativité.</p>`
      }
    ]
  },

  {
    id: 'charte-graphique',
    number: '08',
    title: 'Charte Graphique',
    subtitle: 'Refonte de l\'identité visuelle — Langage & Intégration',
    category: 'Infographie',
    year: '2021',
    role: 'Graphiste · Directeur Artistique',
    tools: 'InDesign · Illustrator · Photoshop',
    heroImage: './uploads/Langage-Integration-Portfolio-Paul-LAMOURET-Ia1m.jpg',
    description: 'Refonte complète de la charte graphique de l\'association Langage & Intégration — APAJH : logo, déclinaisons et papeterie pour 7 établissements.',
    content: [
      {
        type: 'text',
        value: `<p><strong>Langage & Intégration – APAJH</strong> est une organisation médico-sociale accueillant plus de 600 enfants et adolescents sourds ou DYS dans 7 établissements d'Île-de-France et Oise.</p> 
        <p><strong>Mission :</strong> insertion socio-professionnelle et défense des valeurs citoyennes.</p>
        <p><strong>Mandat :</strong> refonte complète du système d'identité visuelle existant (obsolète et incomplet). Livrable : design système exhaustif, déclinaisons logo pour les 7 établissements, papeterie normalisée (carte de visite, en-têtes, correspondance).</p>`
      },
      {
        type: 'gallery',
        images: [
          { src: './uploads/Langage-Integration-Portfolio-Paul-LAMOURET-Ia1m.jpg', caption: 'Vue d\'ensemble' },
          { src: './uploads/Charte-Graphique-Page-04-3FXu.jpg', caption: 'Page 04' },
          { src: './uploads/Charte-Graphique-Page-06-QW5F.jpg', caption: 'Page 06' },
          { src: './uploads/Charte-Graphique-Page-08-lldt.jpg', caption: 'Page 08' },
          { src: './uploads/Charte-Graphique-Page-09-d7Y0.jpg', caption: 'Page 09' },
          { src: './uploads/Charte-Graphique-Page-10-u9U1.jpg', caption: 'Page 10' },
          { src: './uploads/Charte-Graphique-Page-11-8tLO.jpg', caption: 'Page 11' }
        ]
      },
      {
        type: 'text',
        value: `<h3>Déploiement</h3>
        <p><strong>Première mission :</strong> Prestataire indépendant graphiste (2021)</p>
        <p><strong>Livrables :</strong> <br>— Logo principal + variantes monochromes (7 établissements) <br>— Charte typographique complète <br>— Applications papeterie (cartes visite, en-têtes, correspondance) <br>— Signalétique interne et badges</p><p>Ce projet a fondé l'identité visuelle de l'association pour les cinq années qui ont suivi.</p>`
      }
    ]
  },

  {
    id: 'r2d2-black-star',
    number: '09',
    title: 'R2D2',
    subtitle: 'Beyond the Black Star',
    category: 'Motion Design',
    year: '2021',
    role: 'Motion Designer · Réalisateur',
    tools: 'After Effects · Premiere Pro · Photoshop',
    heroImage: './uploads/R2D2-Black-Star-afGs.png',
    description: 'Trailer motion design 3D pour la nouvelle série Disney+ R2D2: Beyond the Black Star.',
    content: [
      {
        type: 'text',
        value: `<p>En réponse à l'appel d'offres fictif au cours du 3e trimestre de ma 3e année de licence, j'ai réalisé le <strong>trailer en Motion Design 3D</strong> de la nouvelle série de <strong>Disney Plus</strong> : <em>R2D2: Beyond the Black Star</em>.</p><p>J'ai dû m'occuper de <strong>toutes les animations des personnages</strong>, du <strong>sound design</strong> sans oublier de la <strong>composition graphique</strong>. Seuls les assets 3D utilisés dans ce trailer de 30 secondes ont été fournis.</p>`
      },
      {
        type: 'image',
        src: './uploads/R2D2-Black-Star-afGs.png',
        caption: 'R2D2 — Beyond the Black Star'
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/TF4KJOQkfV4',
        caption: 'R2D2 — Beyond the Black Star (Trailer)'
      },
      {
        type: 'text',
        value: `<h3>Production & Contraintes</h3><p><strong>Contexte :</strong> Projet d'étude L3 — appel fictif studio <br><strong>Outils :</strong> After Effects CC (3D Elements) · Photoshop · Composition post-production</p><p><strong>Contrainte majeure :</strong> 30 secondes d'animation finalisée, deadline exigeante.</p><p>Les trade-offs assumés : <strong>animations primaires cinématiques</strong> plutôt que boucles d'effets complexes.</p>`
      }
    ]
  },

  {
    id: 'reliquia',
    number: '10',
    title: 'Reliquia',
    subtitle: 'The Immortality Stone',
    category: 'Jeu Vidéo',
    year: '2023',
    role: 'Producer · Directeur Créatif',
    tools: 'Unity · Photoshop · Illustrator',
    heroImage: './uploads/Reliquia_hero.png',
    description: 'Jeu d\'aventure et d\'énigmes développé par The Project — incarnez William Winchester et percez le mystère de la Pierre de l\'Immortalité.',
    content: [
      {
        type: 'text',
        value: `<p><strong>Reliquia : The Immortality Stone</strong> est un jeu d'aventure et d'énigmes en low poly. Vous incarnez <strong>William Winchester</strong>, un étudiant en archéologie qui souhaite découvrir la vérité sur la disparition de ses parents à la recherche de la pierre de l'immortalité.</p><p>Explorez les <strong>catacombes de Paris</strong>, utilisez votre pierre magique et exploitez ses pouvoirs pour percer le mystère. Aux côtés de David et Roxane, progressez dans les profondeurs historiques de la capitale française.</p>`
      },
      {
        type: 'image',
        src: './uploads/Reliquia_hero.png',
        caption: 'Reliquia — The Immortality Stone'
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/1nfFoxAAWDY',
        caption: 'Reliquia — The Immortality Stone (Gameplay)'
      },
      {
        type: 'text',
        value: `<h3>Exploration des Catacombes</h3><p>Reliquia vous entraîne dans une aventure mémorable au cœur des <strong>catacombes souterraines de Paris</strong>. Devenez chercheur de la <strong>Fondation Archéologie Winchwood</strong>, résolvez des énigmes captivantes et percez les secrets cachés dans les profondeurs historiques.</p><p>Chaque corridor, chaque chambre offre une nouvelle pièce du puzzle menant à la vérité sur la pierre de l'immortalité.</p>`
      },
      {
        type: 'text',
        value: `<h3>La Magie au Service de l'Exploration</h3><p>La <strong>palette des pouvoirs magiques</strong> est votre principal atout. À vous de choisir les bons sortilèges au bon moment : vous défendre, combattre ou vous échapper de situations périlleuses. Le gameplay a été optimisé pour une prise en main intuitive, mêlant <strong>exploration, énigmes et action</strong> en harmonie.</p>`
      },
      {
        type: 'text',
        value: `<h3>Production & Disponibilité</h3><p><strong>Statut :</strong> Projet terminé — Version LTS disponible <br><strong>Durée de jeu :</strong> 35 à 45 minutes <br><strong>Équipe :</strong> The Project — 12 contributeurs <br><strong>Développement :</strong> 2020–2023</p><p>Je supervise l'intégralité du projet en tant que <strong>Producer et Directeur Créatif</strong> — leadership artistique, vision design, pilotage technique et gestion de l'équipe.</p><p>Reliquia est une démo jouable representative de notre capacité à livrer des expériences narratives cohérentes et immersives.</p><a href="https://www.asso-theproject.com/Landing-Page-Reliquia-The-Immortality-Stone.html" target="_blank" rel="noopener noreferrer" class="detail-link"><span>Découvrir le projet</span><i class="fas fa-arrow-right"></i></a>`
      }
    ]
  },

  {
    id: 'kinetic-beastars',
    number: '11',
    title: 'Kinetic Typographie',
    subtitle: 'Opening Beastars — Wildside',
    category: 'Motion Design',
    year: '2021',
    role: 'Motion Designer',
    tools: 'After Effects · Illustrator',
    heroImage: './uploads/Beastars_project.png',
    description: 'Animation kinetic typographie de 1:30 min sur la chanson Wildside de l\'anime Beastars',
    content: [
      {
        type: 'text',
        value: `<p>Au cours d'un examen du semestre 1 en <strong>3ème année de Bachelor</strong>, nous avons dû choisir une chanson de notre choix pour y créer toute l'animation en <strong>Kinetic Typographie</strong> sur une durée de 1:30 minutes. Par chance, <em>Wildside</em> de l'anime Beastars avait déjà la longueur exacte.</p><p>La contrainte principale imposée était de réaliser la vidéo en <strong>une semaine</strong>. Ayant une alternance en parallèle, j'ai décidé de la faire en un week-end. J'ai mis environ <strong>24h au total</strong> pour la réaliser.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/XZ6is40RN7E',
        caption: 'Kinetic Typographie — Wildside (Beastars)'
      },
      {
        type: 'text',
        value: `<h3>Contexte Académique</h3><p><strong>Format :</strong> Examen semestre L3 (2021) <br><strong>Contrainte :</strong> 1:30 min de contenu finalisé en 1 semaine <br><strong>Matière :</strong> Kinetic typographie sur track audio <em>Wildside</em> (anime Beastars)</p><p><strong>Production :</strong> 24h de travail intensif concentré. Ce projet démontre la capacité à <strong>livrer à la hauteur</strong> sous contrainte temporelle extrême, en donnant priorité à l'impact visuel et à la synchronisation audio-vidéo.</p>`
      }
    ]
  },

  {
    id: 'un-dimanche-de-trop',
    number: '12',
    title: 'Un Dimanche de Trop',
    subtitle: 'Court-métrage',
    category: 'Vidéo',
    year: '2019',
    role: 'Réalisateur · Monteur',
    tools: 'Premiere Pro · After Effects',
    heroImage: './uploads/Un-Dimanche-de-Trop-gTzq.png',
    description: 'Court-métrage réalisé dans le cadre d\'un projet académique.',
    content: [
      {
        type: 'text',
        value: '<p>En première année de Bachelor à Digital Campus Paris, nous avions 6 semaines pour créer de A à Z un court-métrage presque professionnel. La thématique imposée était la colère, ainsi nous avons décidé de la traiter sous le ton de la comédie.</p>'
      },
      {
        type: 'image',
        src: './uploads/Un-Dimanche-de-Trop-gTzq.png',
        caption: 'Un Dimanche de Trop'
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/Sf25Pexa0LE',
        caption: 'Un Dimanche de Trop — Court Métrage'
      },
      {
        type: 'text',
        value: `<h3>Production</h3><p><strong>Contexte :</strong> Projet L1 court-métrage (2019) <br><strong>Timeline :</strong> 6 semaines de conception à finalisation <br><strong>Thème imposé :</strong> La colère</p><p><strong>Mes rôles :</strong> Scénariste · Réalisateur · Monteur · Responsable casting</p>
        <p><strong>Format :</strong> Comédie 5 min, approche légère du sujet imposé</p>
        <p><strong>Casting :</strong> Pierre Laclau & Benoît De Gaulejac</p>`
      }
    ]
  },

  {
    id: 'action-pepin',
    number: '13',
    title: 'Action Pépin',
    subtitle: 'Campagne de Sensibilisation Gastronomie',
    category: 'Vidéo',
    year: '2020',
    role: 'Réalisateur · Motion Designer',
    tools: 'Premiere Pro · After Effects',
    heroImage: './uploads/La-pelure-voulant-devenir-un-potage-Action-Pepin-Jet1.png',
    description: 'Campagne de sensibilisation au zéro déchet dans la gastronomie française — réalisée en 1 mois.',
    content: [
      {
        type: 'text',
        value: `<p><strong>Action Pépin</strong> est une campagne de sensibilisation de la <strong>Gastronomie française</strong> vue par les jeunes d'aujourd'hui. Nous devions réaliser en 1 mois toute la campagne marketing et digitale autour de l'action, voici son film promotionnel.</p>`
      },
      {
        type: 'text',
        value: `<h3>La problématique</h3><p>Toute la campagne repose sur un constat fondamental : le <strong>gaspillage alimentaire</strong>. La problématique qui en découle était donc :</p><p><em>"Comment valoriser la Gastronomie française auprès de consommateurs désirant une démarche éco-responsable et éthique, alors que le gaspillage alimentaire fait partie intégrante de l'image de la gastronomie française ?"</em></p><p>Action Pépin propose un dispositif permettant de <strong>valoriser le mouvement zéro déchet</strong> de la gastronomie française — en changeant les perspectives des consommateurs.</p>`
      },
      {
        type: 'image',
        src: './uploads/La-pelure-voulant-devenir-un-potage-Action-Pepin-Jet1.png',
        caption: 'Action Pépin — Spot Publicitaire'
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/ES1dQewHe68',
        caption: 'Action Pépin — Spot Publicitaire'
      },
      {
        type: 'text',
        value: `<h3>Production & Assets</h3><p><strong>Format :</strong> Spot 60 secondes en stock footage <br><strong>Sans tournage original</strong> <br><strong>Timeline :</strong> 1 mois (conception + production)</p><p><strong>L'enjeu :</strong> Construire une narration convaincante sans ressources visuelles originales.</p><p><strong>Approche :</strong> Montage éditorial percutant + sound design soigné + motion graphics épurée pour <strong>transcender</strong> la qualité perçue du stock footage.</p>`
      }
    ]
  },

  {
    id: 'fine-makers',
    number: '15',
    title: 'Fine Makers',
    subtitle: 'Agence Beauté & Parfums — Vidéo de Présentation',
    category: 'Vidéo',
    year: '2022',
    role: 'Monteur · Motion Designer',
    tools: 'Premiere Pro · After Effects',
    heroImage: './uploads/FineMakers_card.png',
    description: 'Montage vidéo et animation motion design pour Fine Makers, agence parisienne spécialisée en développement complet de marques beauté et parfums.',
    content: [
      {
        type: 'text',
        value: `<p><strong>Fine Makers</strong> est une agence parisienne accompagnant les marques de beauté et de parfums à travers un service complet : design, R&D, formulation, packaging, fabrication et logistique. Ils positionnent comme les <strong>« makers » experts des marques les plus exigeantes</strong>.</p><p>Le projet consistait à créer une <strong>vidéo de présentation dynamique</strong> mettant en avant cette approche intégrée, du concept au produit fini. J'ai réalisé le <strong>montage complet</strong> et les <strong>animations motion design</strong> pour transformer une vision B2B complexe en narration visuelle fluide et captivante.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/cmmMJihmyDk',
        caption: 'Fine Makers — Vidéo de Présentation'
      },
      {
        type: 'text',
        value: `<h3>Stratégie Créative</h3><p>La vidéo met en lumière les six piliers de Fine Makers : Design, R&D, Réglementaire, Packaging, Fabrication et Logistique. J'ai adopté une approche <strong>progressive et fluide</strong> — montrer comment chaque étape s'articule vers un produit final de qualité premium.</p><p>Les <strong>transitions fluides</strong>, les <strong>animations de texte élégantes</strong> et la <strong>colorimétrie raffinée</strong> renforcent l'image d'excellence et de précision de l'agence, tout en restant accessible à un public B2B.</p>`
      },
      {
        type: 'text',
        value: `<h3>Production & Workflow</h3><p>Chaîne de montage : Premiere Pro (structure narrative + assemblage brut) → After Effects (animations, transitions, color grading) → mix audio final.</p><p>La synchronisation son-image a été le pivot stratégique du pacing, guidant le rythme narratif de l'agence de bout en bout. Workflow inversé : soundtrack temporaire → montage affiné → finalisation audio.</p>`
      }
    ]
  },

  {
    id: 'land-sea-air',
    number: '16',
    title: 'Land Sea Air',
    subtitle: 'Le Parfum — Trilogie',
    category: 'Vidéo',
    year: '2023',
    role: 'Monteur',
    tools: 'Premiere Pro',
    heroImage: './uploads/LSA_background.png',
    description: 'Trilogie sensorielle — terre, mer, air — montage du film publicitaire et making-of complet.',
    content: [
      {
        type: 'text',
        value: `<p><strong>Land Sea Air</strong> est une trilogie parfumée qui capture l'essence de trois univers distincts : la terre, la mer et l'air. Chaque fragrance raconte une histoire sensorielle unique, explorant les dimensions du luxe et de l'exploration à travers ces trois éléments naturels.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/_XMLNp_l57Q',
        caption: 'Land Sea Air — Film Publicitaire'
      },
      {
        type: 'text',
        value: `<h3>Making Of</h3><p>Au-delà du film publicitaire diffusé, j'ai réalisé l'intégralité du <strong>montage du Making Of</strong> de cette production — mettant en lumière les coulisses de la création, les inspirations artistiques et les détails raffinés du projet.</p><p>J'ai travaillé à partir des rushs bruts pour créer une narration fluide et captivante, structurant les différentes phases de production tout en préservant l'essence poétique du projet.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/fagUHh9z64A',
        caption: 'Land Sea Air — Making Of'
      },
      {
        type: 'text',
        value: `<h3>Production</h3><p><strong>Deux livrables distincts :</strong></p><p>(1) <em>Film publicitaire</em> — 60-90 secondes pour diffusion brand <br>(2) <em>Making-of</em> — structure narrative (découverte → création → finalisation)</p><p><strong>Le challenge :</strong> Extraire deux films d'un même matériel source, avec deux rythmes narratifs opposés.</p><p>La publicité <strong>vend</strong> l'émotion et l'aspiration ; le making-of <strong>démontre</strong> le craft et l'expertise.</p>`
      }
    ]
  },

  {
    id: 'mg-marvel-r',
    number: '17',
    title: 'MG MARVEL R',
    subtitle: 'Événement Automobile — Concert & Retouches Spot',
    category: 'Vidéo',
    year: '2021',
    role: 'Monteur Concert · Finition Post-Production',
    tools: 'Premiere Pro · After Effects',
    heroImage: './uploads/MarvelR_hero.png',
    description: 'Montage complet du concert Gaëtan Roussel + retouches et finalisations du spot MG MARVEL R.',
    content: [
      {
        type: 'text',
        value: `<p>Cet événement automobile avait deux volets distincts : la finition du <strong>spot publicitaire MG MARVEL R</strong> et surtout, le <strong>montage complet du concert live de Gaëtan Roussel</strong> — le cœur créatif de ma contribution.</p><p>Mon rôle s'est concentré sur la transformation des rushs bruts en expérience musicale captivante, tout en assurant les retouches finales du spot publicitaire de la marque.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/haUATHp0B6s',
        caption: 'MG MARVEL R — Spot Publicitaire'
      },
      {
        type: 'text',
        value: `<h3>Le Concert — Cœur du Projet</h3><p>Le montage du concert avec Gaëtan Roussel était un exercice de <strong>synchronisation musicale</strong> et de <strong>narratif émotionnel</strong>. Chaque transition, chaque cut, chaque effet devait amplifier l'énergie de la performance live tout en respectant l'intégrité artistique du spectacle.</p><p>J'ai structuré la narration autour des moments clés de la musique — démarrages énergiques, moments d'intimité, crescendos — créant une expérience fluide et engageante pour une audience YouTube.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/k4V2kLkOw6E',
        caption: 'Concert Gaëtan Roussel — Montage Complet'
      },
      {
        type: 'text',
        value: `<h3>Réalisations</h3><p><strong>Spot publicitaire :</strong> Retouches du film principal, color grading, finalisation post-production. <br><strong>Concert lié à l'événement :</strong> Montage complet du concert avec Gaëtan Roussel — orchestration musicale, transitions, et synchronisation vidéo.</p>`
      },
      {
        type: 'text',
        value: `<h3>Production</h3><p><strong>Scope :</strong> Deux livrables distincts issus du même événement automobile.</p><p>(1) <em>Spot 60s :</em> Montage percutant + infographies dynamiques + color grading premium</p><p>(2) <em>Concert :</em> Montage complet du spectacle musical, structure narrative musicale, synchronisation optimisée pour YouTube.</p><p>La dualité de ce projet mettait en avant différents savoir-faire : retouche/finition pour la pub, orchestration éditoriale pour le concert.</p>`
      }
    ]
  },

  {
    id: 'village-gastronomique',
    number: '18',
    title: 'Village Gastronomique',
    subtitle: 'Événement Culinaire Français',
    category: 'Vidéo',
    year: '2023',
    role: 'Monteur · Motion Designer',
    tools: 'Premiere Pro · After Effects · Instagram Reels',
    heroImage: './uploads/VillageGastronomique.png',
    description: 'Reportage vidéo et gestion des réseaux sociaux pour l\'événement Village Gastronomique.',
    content: [
      {
        type: 'text',
        value: `<p><strong>Village Gastronomique</strong> est un événement unique qui célèbre la richesse et la diversité de la <strong>gastronomie française</strong>. C'est un lieu de rencontre où producteurs, restaurateurs et amateurs de bonne cuisine se retrouvent pour partager leur passion.</p><p>J'ai réalisé le <strong>montage de la vidéo de présentation</strong> et géré la production des <strong>contenus Instagram</strong> pour l'événement, créant une stratégie de présence digitale cohérente et engageante.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/khQZZuujhZY',
        caption: 'Village Gastronomique — Présentation Événement'
      },
      {
        type: 'text',
        value: `<h3>Production & Stratégie Digitale</h3><p><strong>Missions :</strong> <br>— Montage film institutionnel long format <br>— Production de contenus courts (Reels Instagram, 15-60 sec) <br>— Stratégie amplification digitale</p><p><strong>Différenciation par format :</strong> Le film long <strong>contextualise</strong> et <strong>narre</strong> ; les Reels <strong>capturent</strong> les moments forts pour viral potential.</p><p>Les contenus courts sont optimisés pour engagement, partageabilité et algorithme Instagram.</p><a href="https://villagegastronomique.fr/" target="_blank" rel="noopener noreferrer" class="detail-link"><span>Site événement</span><i class="fas fa-arrow-right"></i></a>`
      }
    ]
  },

  {
    id: 'experience-webgl',
    number: '19',
    title: 'Expérience WebGL',
    subtitle: 'Immersion Interactive — Maison de Luxe',
    category: 'Web/Digital',
    year: '2026',
    role: 'Chef de Projet',
    tools: 'WebGL · Three.js',
    heroImage: './uploads/WebGL_hero.png',
    description: 'Pilotage du développement d\'une expérience web immersive en WebGL pour une Maison de luxe — en binôme.',
    content: [
      {
        type: 'text',
        value: `<p>Travailler pour une <strong>Maison d'exception</strong> demande une attention particulière à chaque détail. J'ai piloté le développement d'une <strong>expérience web immersive en WebGL</strong> en partenariat étroit avec un collègue, pour l'une des plus prestigieuses Maisons de luxe parisiennes.</p><p>Mon rôle a consisté à : <strong>orchestrer</strong> les échanges entre équipes techniques, <strong>cadrer</strong> les livrables, <strong>animer</strong> les points de suivi et <strong>maintenir</strong> la confiance client — en veillant que chaque rendu respecte la vision et l'univers de la Maison.</p><p>L'expérience devait <strong>transporter l'utilisateur dans l'univers rare et poétique</strong> de la marque, directement depuis un navigateur. Un vrai défi à la fois technique et artistique.</p>`
      },
      {
        type: 'text',
        value: `<div style="margin-top: 40px; padding-top: 40px; border-top: 1px solid var(--grey-light);"><a href="https://www.vancleefarpels.com/us/en/watches/extraordinary-objects/planetarium-experience.html" target="_blank" rel="noopener noreferrer" class="detail-link"><span>Découvrir l'expérience</span><i class="fas fa-arrow-right"></i></a></div>`
      }
    ]
  },

  {
    id: 'application-montres',
    number: '20',
    title: 'Application Digitale',
    subtitle: 'Interface Horlogère — Maison de Prestige',
    category: 'Web/Digital',
    year: '2025',
    role: 'Chef de Projet',
    tools: 'Application Web · Mobile',
    heroImage: './uploads/Application_hero.png',
    description: 'Chef de Projet sur une application digitale horlogère pour une Maison de prestige — en binôme.',
    content: [
      {
        type: 'text',
        value: `<p>Ce projet a marqué un tournant dans ma compréhension du secteur du luxe et de ses exigences. J'ai piloté le développement d'une <strong>application digitale pour l'univers horloger</strong> d'une Maison dont les pièces sont portées par des collectionneurs à travers le monde.</p><p>Mes responsabilités : <strong>cadrer</strong> les besoins client, <strong>structurer</strong> les sprints, <strong>faciliter</strong> les ateliers collaboratifs et <strong>superviser</strong> le suivi technique quotidien. En travaillant main dans la main avec un partenaire, nous avons géré l'intégralité du cycle de production.</p><p>Le défi singulier : concevoir une interface <strong>aussi précise et raffinée que les objets qu'elle représente</strong>. Il n'y avait de place pour aucun compromis.</p>`
      }
    ]
  },

  {
    id: 'jumeau-numerique',
    number: '21',
    title: 'Jumeau Numérique',
    subtitle: 'Pièce d\'Exception — Maison de Renommée Mondiale',
    category: 'Web/Digital',
    year: '2024',
    role: 'Chef de Projet · Suivi & Relation Client',
    tools: 'Unreal Engine 5 · Fichiers Source 3D',
    heroImage: './uploads/JumeauNumerique_hero.png',
    description: 'Pilotage complet de la création d\'une expérience immersive d\'une pièce d\'exception sur Unreal Engine.',
    content: [
      {
        type: 'text',
        value: `<p>Transposer numériquement une pièce d'exception pour une Maison de prestige mondial, c'est bien plus qu'un défi technique. La Maison nous a fourni les <strong>fichiers source 3D</strong> de la pièce, et ma mission était d'<strong>orchestrer toute la chaîne de production</strong> pour en faire une véritable expérience immersive sous Unreal Engine 5.</p>`
      },
      {
        type: 'text',
        value: `<h3>Le Rôle</h3><p>J'ai piloté à la fois l'<strong>organisation interne</strong> et la <strong>relation client</strong>. Côté équipe, j'ai réparti les tâches entre nos ressources internes et les freelances spécialisés, géré les sprints et supervisé l'intégration des assets jour après jour. Côté client, j'ai assuré une <strong>communication fluide</strong> — weekly meetings pour présenter l'avancement, explications claires des défis rencontrés et des solutions apportées, ajustements continus basés sur leurs retours.</p><p>En binôme, nous avons transformé les données brutes en une <strong>expérience interactive immersive</strong> qui respecte à la fois l'objet physique et la vision créative de la Maison.</p>`
      }
    ]
  }

];
