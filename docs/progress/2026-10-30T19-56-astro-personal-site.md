# Astro personal site

## 2026-10-30

### Completed

- Replaced the vanilla site and the Next.js app with one static Astro site.
- Wrote every page again in plain first-person words.

### Changes

- Top navigation with a left profile rail: About, Experience, Projects, Research, Education, Blog, Contact.
- Content lives in `src/content/`. Each section has its own URL.
- The blog is set up and empty.
- Resume and LinkedIn PDFs are no longer tracked, and `profile/*.pdf` is ignored.
- Removed the code that blocked right-click and F12.
- Deploying stays manual until the domain is decided.

### Decisions

- **Astro over keeping Next.js:** the site is plain text, so it ships no framework code to the browser, and Markdown makes a later blog easy.
- **Skills and Awards dropped:** the site is about the person, not a resume. The hackathon app stays as a project.
- **BrainSpace left out:** it wasn't in the owner's list of current projects.
- **Public email:** `sudhir.19singh@gmail.com`.

### Backlog

- Checked off: replacing the old sites.
