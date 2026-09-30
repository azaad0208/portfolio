# Agent instructions — Abhishek Bhowmick portfolio

Workspace: `E:\For-Portfolio`. Live Git repo: `website/` → `https://github.com/azaad0208/portfolio`. Host: Netlify at `https://abhishekbhowmick.netlify.app/`.

## Hard rules

- Before any website edit, show a **task filter** (in scope / out of scope / needs / live) and wait unless the user already approved that exact list.
- After edits, **preview locally** (start a local server if one is not running). Do not skip this.
- **Never commit or push** `website/` until the user says to update the live site.
- Do not add extra sections, copy, or work cards they did not approve.
- Stay on current HTML/CSS/JS until they request a full revamp.

## Local preview

Serve `website/` (Python: `python -m http.server 5500` from `website/`). Give the user `http://127.0.0.1:5500`.

## Live update

Only when they ask: commit in `website/`, push `origin main`. Confirm Netlify will pick it up. Do not force-push.

Human-editable copies: `INSTRUCTIONS.md`, `docs/WORKFLOW.md`.
