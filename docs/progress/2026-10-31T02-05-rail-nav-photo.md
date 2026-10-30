# Navigation on the left and the two-face photo

## 2026-10-31

### Completed

- Moved the top navigation to the left and removed the name from the top bar.
- About now opens with "Hey, I'm Sudhir Singh".
- The left rail shows the role, focus, and location on three lines.
- Replaced the small round photo with the real and illustrated photo side by side, in a circle 220px wide, as the owner asked.

### Changes

- `src/layouts/SiteLayout.astro`, `src/styles/site.css`: new top bar, a 300px rail, and a larger photo on laptop and phone.
- `src/content/profile.json`: `headline` split into `role` and `focus`.
- `public/portrait.jpg`: a 480×480 crop of `profile/RealAndGhibli-croped.jpg` centred on the faces. The background is extended above the heads, so the whole head and the neck fit in the circle.
- `README.md`: updated for the new photo and profile fields.

### Decisions

- **Tab icon unchanged:** `public/avatar.jpg` stays as the icon, because two faces can't be read at that size.
- **Bengaluru kept:** the rail matches the spelling the owner used on About.

### Backlog

- No matching backlog line: this came directly from the owner.
