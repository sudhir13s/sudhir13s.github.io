# sudhir-singh.co.in

Personal portfolio website — minimal, text-first, left-sidebar navigation. Inspired by [rishimehta.xyz](https://rishimehta.xyz).

## Quick Start

```bash
# No build step — open directly
open index.html
```

Or serve locally:

```bash
npx serve .
# → http://localhost:3000
```

## Stack

- Vanilla HTML / CSS / JS — no framework, no build tool
- Static files — deployable anywhere (GitHub Pages, Netlify, Vercel)

## Structure

```
sudhir-singh.co.in/
├── index.html      # Layout + sections
├── styles.css      # Sidebar + content styles
└── script.js       # Section switching
```

## Sections

| Nav label | Content |
|-----------|---------|
| About     | Intro, current PhD focus |
| Education | Degrees and institutions |
| Experience | 7+ years across Healthcare, BioTech, Walmart |
| Projects  | Fake Review Detection, Asthma Prediction, others |
| Skills    | Python, ML, NLP, Deep Learning, LLMs |
| Contact   | Email and links |

## Design Reference

- Layout: fixed left sidebar, scrollable right content panel
- Optimized for 1366px–1920px (standard laptop/desktop)
- Responsive breakpoint at 768px

## Deploy

**GitHub Pages**

```bash
git push origin main
# Enable Pages → branch: main / root
```

**Netlify / Vercel**

Drag-and-drop the folder — done.

## Source Content

Original profile: [sudhir13s.github.io](https://sudhir13s.github.io)
