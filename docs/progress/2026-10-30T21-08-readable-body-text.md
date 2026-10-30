# Readable body text and pnpm fix

## 2026-10-30

### Completed

- Softened body text so headings and bold tech names stand out, in light and dark mode.
- Made the repo its own pnpm workspace root (PR #8).

### Changes

- `src/styles/site.css`: a new `--body` color, a narrower 640px column, and more space between bullets.
- `pnpm-workspace.yaml`: stops a workspace file in a parent folder from adopting this repo.

### Decisions

- **One shared rule:** the fix lives in the Markdown styles, so every tab gets it.

### Backlog

- No matching backlog line: both came directly from owner feedback.
