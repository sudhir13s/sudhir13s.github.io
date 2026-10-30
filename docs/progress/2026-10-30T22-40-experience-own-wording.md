# Experience in my own words

## 2026-10-30

### Completed

- Rewrote every role on Experience in one or two plain bullets.
- Added a line under the title linking the resume and LinkedIn.
- Removed the test suite.
- Removed the Contact page. The one-liner stays on About, and the left rail keeps GitHub, LinkedIn, and Email.

### Changes

- `src/content/pages/experience.md`: new wording. Facts come from the resume and LinkedIn profile.
- `tests/site.test.mjs` and the `test` script are gone. CI now type-checks and builds.

### Decisions

- **Resume linked:** the owner already shares it publicly when applying, so it goes on the site as it is, including the phone number.
- **No tests:** this is a personal profile, and the owner doesn't want test cases for it.

### Backlog

- No matching backlog line: this came directly from owner feedback.

## 2026-10-31

### Completed

- Replaced the Experience page with the owner's own rewrite.

### Changes

- `src/content/pages/experience.md`: the owner's wording, unchanged. Only the resume and LinkedIn links on the intro line were put back.

### Decisions

- **Owner's wording wins:** it replaces the one-or-two-bullet version, so roles now have as many bullets as the owner wrote.
- **Links kept:** without them, the resume PDF had no link anywhere on the site.
- **Wider text:** the owner saw wasted space on the right at laptop width, so the column cap went from 920px to 1400px. The cap only applies on large monitors.
- **Owner's original restored:** the owner supplied the original text. It now replaces the earlier copy, with spelling, grammar, and punctuation fixed and the owner's style kept ("Sweat!", "ancient", "you know what I mean here").
