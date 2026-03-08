# Zone Terrasse — Prototype

Prototype du site [zoneterrasse.ca](https://zoneterrasse.ca/) reconstruit à partir du contenu extrait du site original.

## Structure

```
zoneterrase/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles (extrait du HTML)
├── js/
│   └── main.js         # Navigation mobile
├── .gitignore
└── README.md
```

## Améliorations techniques (non-visuelles)

Le visuel est fidèle à l'original. Les changements sont sous le capot :

### SEO
- Meta title et description optimisés
- URL canonique
- Open Graph tags (Facebook, LinkedIn)
- Schema.org `LocalBusiness` structuré (Google rich results)
- Suppression du keyword stuffing dans le hero

### Accessibilité (WCAG)
- Lien "skip to content"
- Hiérarchie de headings correcte (h1 → h2 → h3)
- `aria-label` sur la navigation, les formulaires, les sections
- `aria-expanded` sur le menu mobile
- `<label>` associés à chaque champ de formulaire
- Attributs `autocomplete` sur les inputs

### Performance
- CSS externalisé (au lieu de ~500KB inline)
- JS externalisé
- `display=swap` sur les Google Fonts
- `loading="lazy"` sur toutes les images
- `width` et `height` sur les images (évite le layout shift)
- `preconnect` pour Google Fonts

### Nettoyage
- HTML sémantique (`<main>`, `<section>`, `<aside>`, `<nav>`)
- Suppression du branding GoDaddy
- Code propre et lisible (~300 lignes CSS vs ~5000+ original)

## Images

Les images sont servies depuis le CDN original du site (`img1.wsimg.com`).

## Comment voir le prototype

Ouvrir `index.html` dans un navigateur.
