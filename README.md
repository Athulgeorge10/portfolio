# Athul George — Portfolio

A premium, frontend-only personal portfolio for **Athul George** (final-year B.Tech CSE student).
Built with **React + Vite**. No backend, no contact form — every "Let's Connect" action is a direct
`mailto:` / `tel:` / LinkedIn link.

## Run locally

```bash
npm install
npm run dev      # start dev server
npm run build    # production build (outputs to dist/)
```

## Project structure

```
src/
├── assets/
│   ├── profile.jpg          ← hero portrait (replace with your own photo, keep the name)
│   └── projects/            ← real project screenshots (ucg1/ucg2, jaagratha, notely)
├── components/              ← one folder per section (Navbar, Hero, About, …) + ProjectCard,
│                              ProjectModal, ProjectGallery, SectionHeading, Reveal, icons
├── data/
│   └── portfolioData.js     ← ALL site content lives here (single source of truth)
├── hooks/
│   └── useScrollReveal.js   ← scroll-reveal + active-section scroll spy
├── index.css                ← design tokens + global styles
└── App.jsx                  ← section order
```

## Editing content

Open `src/data/portfolioData.js` — it holds every section's copy, skills, projects
(including their screenshot names), experience, education, certifications, and contact details.

**Profile photo:** overwrite `src/assets/profile.jpg` with your own square photo.
**Project screenshots:** drop files into `src/assets/projects/`, then reference their names in the
`images` array of the matching project in `portfolioData.js` (a project can list several shots —
UCG uses `ucg1` + `ucg2` to build its mini-gallery).

No URLs for GitHub/Live demos are hard-coded because none were provided — nothing is invented.

## Design notes

- Dark, glassmorphic, blue/cyan/violet accents with subtle animated gradients
- Scroll-reveal animations and a sticky glass navbar with scroll-spy + progress bar
- `prefers-reduced-motion` is fully respected
- Semantic HTML with ARIA labels, a skip link, and keyboard-focusable modals/menus
