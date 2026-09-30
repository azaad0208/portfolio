# Agent instructions — Abhishek Bhowmick portfolio

Workspace and live Git repo: `E:\For-Portfolio` → `https://github.com/azaad0208/portfolio`. Host: Netlify at `https://abhishekbhowmick.netlify.app/`.

There is only one copy of the site. Edit files at the workspace root (`index.html`, `css/`, `js/`, `work/`, `img/`). Do not create a nested `website/` folder.

## Hard rules

- Before any website edit, show a **task filter** (in scope / out of scope / needs / live) and wait unless the user already approved that exact list.
- After edits, **preview locally** (start a local server if one is not running). Do not skip this.
- **Never commit or push** until the user says to update the live site.
- Do not add extra sections, copy, or work cards they did not approve.
- Stay on current HTML/CSS/JS until they request a full revamp.

## Local preview

Serve `E:\For-Portfolio` (Python: `python -m http.server 5500`). Give the user `http://127.0.0.1:5500`.

## Live update

Only when they ask: commit in this repo, push `origin main`. Confirm Netlify will pick it up. Do not force-push.

Human-editable copies: `INSTRUCTIONS.md`, `docs/WORKFLOW.md`.
