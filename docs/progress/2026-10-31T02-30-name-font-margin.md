# Name, font size, and aligned text

## 2026-10-31

### Completed

- Brought the name back to the top bar, centred above the photo, with the navigation starting at the split.
- About now opens with "Hey, I'm Sudhir".
- Body text is 14px.
- Text is justified on wider screens, with a 25px right margin.
- The bracketed protocols line on Education is bold.

### Changes

- `src/layouts/SiteLayout.astro`: restored the name link.
- `src/styles/site.css`: the top bar shares the rail's column width, and the name is 20px with 0.5px letter spacing. Also the font size, margin, and justified text.
- `src/content/pages/about.md`, `education.md`: the title and the bold line.

### Decisions

- **Justified text only above 760px:** on narrow phone lines it leaves wide gaps between words.

### Backlog

- No matching backlog line: this came directly from the owner.
