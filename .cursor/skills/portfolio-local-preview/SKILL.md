---
name: portfolio-local-preview
description: Preview the HTML/CSS/JS portfolio locally and never commit or push until the user asks to update the live Netlify site. Use when editing the portfolio, starting a local server, deploying, pushing to GitHub, or updating abhishekbhowmick.netlify.app.
---

# Portfolio local preview

## When to use

Any change to the live site files at the workspace root (`index.html`, `css/`, `js/`, `work/`, `img/`, `projects/`).

## Steps

1. If the user has not already approved this exact list, show the task filter and wait.
2. Edit only approved files in `E:\For-Portfolio`. Never create a second copy under a nested `website/` folder.
3. Start a local server from the workspace root if none is running:

```powershell
python -m http.server 5500
```

4. Tell the user to review `http://127.0.0.1:5500`.
5. Iterate locally until they are satisfied.
6. **Stop.** Do not commit or push.

## Live site

Commit and `git push origin main` from `E:\For-Portfolio` **only** when they say to update the live site, deploy, or push to GitHub/Netlify.
