# PDF history cleanup

## 2026-10-30

### Completed

- Removed every PDF from the history of `main` and force-pushed it. The owner ran the push by hand because agents cannot push to `main`.

### Changes

- `main` now has no PDF in any commit. `profile/*.pdf` stays git-ignored, and the local copies remain on the owner's machine.

### Decisions

- **Rewrite last:** the rewrite was prepared after the site work merged, so one push covered all of it.

### Backlog

- Checked off: removing the PDFs from git history. GitHub Support still needs to purge its cached commits.
