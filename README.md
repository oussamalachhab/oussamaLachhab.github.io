# Portfolio — Oussama Lachhab (React + Vite)

Version React du portfolio, même style que la version HTML (noir + vert fluo,
écran de chargement animé, timeline de parcours, etc.).

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Puis ouvre l'URL affichée (en général http://localhost:5173).

## Générer la version de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`, prêts à être
déployés (Vercel, Netlify, GitHub Pages, etc.).

## Structure du projet

```
src/
  main.jsx              Point d'entrée React
  App.jsx                Assemble toutes les sections
  index.css              Tous les styles (design tokens, sections, responsive)
  hooks/
    useReveal.js          Animation "reveal" au scroll (IntersectionObserver)
  components/
    Loader.jsx            Écran de chargement animé (0 → 100%)
    Header.jsx             Nav fixe + menu plein écran
    Hero.jsx                Section d'accueil + ticker de technologies
    Quote.jsx                Citation / accroche
    About.jsx                 Section "À propos de moi"
    Skills.jsx                 Compétences par catégorie
    Projects.jsx                Grille de projets phares
    Journey.jsx                  Timeline du parcours (formation + stages)
    Principles.jsx                "Comment je construis"
    Certifications.jsx             Certifications + langues
    Contact.jsx                     Formulaire de contact (mailto)
    Footer.jsx                      Pied de page
  assets/
    profile.png                     Photo de profil (extraite du CV)
```

## À personnaliser

- **Liens sociaux** : les boutons LinkedIn / GitHub pointent vers `#` dans
  `Header.jsx`, `Contact.jsx` et `Footer.jsx` — remplace-les par tes vraies
  URLs.
- **Formulaire de contact** : `Contact.jsx` ouvre le client mail (`mailto:`)
  au clic sur "Envoyer". Pour un vrai envoi sans ouvrir de client mail,
  branche un service comme Formspree ou EmailJS dans `handleSubmit`.
- **Contenu** : chaque section a ses données en haut du fichier (tableaux
  `PROJECTS`, `TIMELINE`, `CATEGORIES`, etc.) — facile à modifier sans
  toucher au JSX.
