# Plain technology lists and contact links

## 2026-10-30

### Completed

- Removed the bold from technology lists on Experience.
- Contact now links GitHub, LinkedIn, and email.

### Changes

- `src/content/pages/experience.md`: technology lists stay in the bullets, in plain text.
- `src/content/pages/contact.md`: the one-liner, then three links.
- `tests/site.test.mjs`: covers both changes.

### Decisions

- **Experience only:** the bold style stays available for other pages, since the request was about Experience.

### Backlog

- No matching backlog line: both came directly from owner feedback.
