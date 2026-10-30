# Experience in my own words

## 2026-10-30

### Completed

- Rewrote every role on Experience in one or two plain bullets.
- Added a line under the title pointing to LinkedIn, and to email for the resume.
- Removed the test suite.

### Changes

- `src/content/pages/experience.md`: new wording. Facts come from the resume and LinkedIn profile.
- `tests/site.test.mjs` and the `test` script are gone. CI now type-checks and builds.

### Decisions

- **Resume by email:** the resume PDF has a phone number, so it stays off the site.
- **No tests:** this is a personal profile, and the owner doesn't want test cases for it.

### Backlog

- No matching backlog line: this came directly from owner feedback.
