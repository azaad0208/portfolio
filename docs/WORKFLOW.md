# Local preview, then live (when I say so)

## 1. Change request

Agent shows a task filter. I confirm or cut items. Then they edit files at the workspace root.

## 2. Local check (always)

1. Serve `E:\For-Portfolio` on a local port (default **5500**).
2. I open `http://127.0.0.1:5500` and review.
3. We iterate locally until I am happy.

## 3. Live site (only when I ask)

Phrases that mean go live: “update live”, “push”, “deploy”, “update GitHub”, “update Netlify”.

Then, from `E:\For-Portfolio`:

```powershell
cd E:\For-Portfolio
git status
git add <approved files>
git commit -m "short why message"
git push origin main
```

Netlify deploys from GitHub `main`. Public URL: https://abhishekbhowmick.netlify.app/

## Start the local server yourself

```powershell
cd E:\For-Portfolio
python -m http.server 5500
```

Then open http://127.0.0.1:5500
