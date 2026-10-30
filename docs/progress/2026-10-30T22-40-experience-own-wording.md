# Experience in my own words

## 2026-10-30

### Completed

- Rewrote every role on Experience in one or two plain bullets.
- Added a line under the title linking the resume and LinkedIn.
- Removed the test suite.

### Changes

- `src/content/pages/experience.md`: new wording. Facts come from the resume and LinkedIn profile.
- `tests/site.test.mjs` and the `test` script are gone. CI now type-checks and builds.

### Decisions

- **Resume linked:** the owner already shares it publicly when applying, so it goes on the site as it is, including the phone number.
- **No tests:** this is a personal profile, and the owner doesn't want test cases for it.

### Backlog

- No matching backlog line: this came directly from owner feedback.
