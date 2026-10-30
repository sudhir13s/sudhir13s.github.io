# sudhir-singh.co.in

Sudhir Singh's personal site. Plain words about who I am, not a resume. Layout inspired by [rishimehta.xyz](https://rishimehta.xyz).

```mermaid
flowchart LR
  Content["Markdown in src/content"] --> Astro["Astro build"]
  Astro --> Dist["Static pages in dist/"]
  Dist --> Pages["GitHub Pages"]
```

## Quick start

```bash
pnpm install
pnpm dev
# → http://localhost:4321
```

## Prerequisites

Node 24 and pnpm 11 (pinned in `package.json`).

## Development

| Command | What it does |
| --- | --- |
| `pnpm dev` | Runs the site locally |
| `pnpm test` | Builds the site and tests the output |
| `pnpm run check` | Type-checks the code |
| `pnpm exec prettier --write .` | Formats the code |

## Changing the content

- **A page:** edit its file in `src/content/pages/`. Its `order` sets its place in the top navigation.
- **Name, headline, links:** edit `src/content/profile.json`.
- **A blog post:** add a Markdown file to `src/content/blog/` with `title`, `date`, and `summary`.
- **Photo:** replace `public/avatar.jpg`, a 200×200 crop of the image in `profile/`.

## Deploying

`.github/workflows/deploy.yml` publishes to GitHub Pages, and runs only by hand for now.

To go live:

1. Set the repo's Pages source to **GitHub Actions**.
2. For a custom domain, set `SITE_URL` to the domain and `BASE_PATH` to `/` in the workflow.
3. Add `push: branches: [main]` to the workflow.

## Private files

Resume and LinkedIn PDFs in `profile/` are git-ignored because they carry personal contact details. Never commit them.
