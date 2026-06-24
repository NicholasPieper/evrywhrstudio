# Publish this site to a NEW GitHub repo — guide for Claude Code

**Goal:** take this `evrywhr-site/` folder, push it to a brand-new GitHub repo,
and turn on GitHub Pages so it's live.

This site is **static** — the JSX compiles in the browser via Babel, so there is
**no build step**. Publishing = pushing the files and enabling Pages.

---

## Paste this prompt into Claude Code

> This folder (`evrywhr-site/`) is a complete static website. Please publish it
> as a new GitHub Pages site.
>
> 1. Initialize a git repo here if one doesn't exist, and make a first commit
>    that includes ALL files — including the hidden `.nojekyll` file (use
>    `git add -A` / `git add .` so it isn't skipped).
> 2. Create a new public GitHub repo (use the `gh` CLI if available, e.g.
>    `gh repo create evrywhr --public --source=. --remote=origin --push`).
>    Pick the repo name `evrywhr` unless I tell you otherwise.
> 3. Push to `main`.
> 4. Enable GitHub Pages from the `main` branch, root folder. With the gh CLI:
>    `gh api -X POST repos/{owner}/evrywhr/pages -f "source[branch]=main" -f "source[path]=/"`
>    (or just tell me to flip it on under Settings → Pages if the API call
>    isn't available).
> 5. Print the live URL: `https://<my-username>.github.io/evrywhr/` and remind
>    me it can take ~1 minute to go live.

If `gh` isn't installed, Claude Code can fall back to: create the empty repo
manually on github.com, then
`git remote add origin <url> && git branch -M main && git push -u origin main`,
and enable Pages in **Settings → Pages**.

---

## Things to get right

- **Keep `.nojekyll`.** It must be committed to the repo root — it stops GitHub's
  Jekyll step from interfering with how the `.jsx` files are served. `git add -A`
  includes it; a plain drag-and-drop sometimes skips hidden files.
- **`index.html` must be at the repo root** — GitHub Pages serves it as the
  landing page.
- **Relative paths already work** under any repo name / subpath, so there's
  nothing to edit for the URL to resolve.
- **No `npm install`, no bundler.** React, Babel, and Google Fonts load from CDNs
  at runtime.
- A console notice "You are using the in-browser Babel transformer…" is expected
  and harmless.

## File manifest (everything in this folder belongs in the repo)

```
index.html
data.js
data-ext.js
tweaks-panel.jsx
ui.jsx
lore-icons.jsx
lore.jsx
projects.jsx
work.jsx
shop.jsx
dispatches.jsx
legal.jsx
app.jsx
assets/            ← whole folder (photos, covers, logos, lore map, etc.)
.nojekyll
README.md   (optional to keep)
```

## Optional local check before pushing

```bash
python3 -m http.server 8000
# open http://localhost:8000/index.html
```

All five pages, the photo hero, the lore map, and the Tweaks panel should load.
