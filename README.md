# sudhir-singh.co.in

Personal portfolio website — minimal, text-first, left-sidebar navigation. Inspired by [rishimehta.xyz](https://rishimehta.xyz).

This repository contains two versions of the portfolio:
1. **Vanilla HTML/CSS/JS** (Root): A lightweight, zero-dependency static version.
2. **Next.js / TypeScript** (`sudhirs-profile/`): A modern, dynamic framework-based implementation of the same layout with API-driven content.

## Quick Start

### 1. Vanilla Static Version (Root)

Open directly in your browser:
```bash
open index.html
```

Or serve locally:
```bash
npx serve .
# → http://localhost:3000
```

### 2. Next.js Version (`sudhirs-profile`)

Change directory, install dependencies, and run the development server:
```bash
cd sudhirs-profile
npm install
npm run dev
# → http://localhost:4001
```

## Stack

- **Vanilla**: HTML5, CSS3, ES6 JavaScript
- **Next.js**: React, Next.js 14, TypeScript, CSS Variables

## Structure

```
sudhir-singh.co.in/
├── index.html          # Vanilla Layout + sections
├── styles.css          # Vanilla Sidebar + content styles
├── script.js           # Vanilla Section switching
├── data.js             # Vanilla portfolio data
└── sudhirs-profile/    # Next.js Application
    ├── app/            # Next.js Page & API routes
    ├── public/         # Static assets (images, avatar)
    └── package.json    # Project configuration & scripts
```

## Sections

| Nav label | Content |
|-----------|---------|
| About     | Intro, current AI/ML focus |
| Education | Degrees and institutions |
| Experience | 7+ years across Healthcare, BioTech, Walmart |
| Projects  | miniAgent, HuggingFace Knowledge Assistant, Fake Review Detection, others |
| Skills    | Python, ML, NLP, LLMs, Agentic AI, Java, Spring Boot |
| Contact   | Email and links |

## Design Reference

- Layout: fixed left sidebar, scrollable right content panel
- Optimized for 1366px–1920px (standard laptop/desktop)
- Responsive breakpoint at 768px

## Deploy

**GitHub Pages / Netlify / Vercel**

- Root version: Drag-and-drop the root folder or deploy direct via GitHub Pages using the `main` branch.
- Next.js version: Deploy the `sudhirs-profile` subfolder using default Next.js build command (`next build`).

## Source Content

Original profile: [sudhir13s.github.io](https://sudhir13s.github.io)
