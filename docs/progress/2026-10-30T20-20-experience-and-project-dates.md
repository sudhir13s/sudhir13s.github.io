# Experience and project dates

## 2026-10-30

### Completed

- Restored the earlier bullet-style Experience page, with all seven roles.
- Gave every project a month and year, and linked the public GitHub repos.

### Changes

- `src/content/pages/experience.md` uses the wording from the earlier site.
- `src/content/pages/projects.md` has dates, newest first within each group.
- Tests fail if a project has no date or an employer goes missing.

### Decisions

- **Experience keeps the earlier wording:** the owner prefers it to the plain rewrite.
- **Dates:** the resume wins where it covers a project, then the earlier site, then GitHub activity for Lunar Rover and Packet Analyzer.
- **Capstone date is inferred:** May 2021 is the graduation date.
- **No links to private repos:** Interview Prep Hub, TheAIAtlas, and the capstone would return a 404 for visitors.

### Backlog

- No matching backlog line: this came directly from owner feedback.
