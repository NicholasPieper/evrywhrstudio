# EVRYWHR — Creative Travel Studio

A static website. The interface is built with React + JSX that is transpiled
**in the browser** (via Babel Standalone), so there is **no build step** — you
just host the files as-is.

## What's in here

```
index.html         ← entry point (open this)
data.js            ← content + theme system (palette, fonts)
data-ext.js        ← projects / shop / dispatches content
*.jsx              ← UI: app, masthead, hero, lore, projects, shop, work, dispatches…
lore-icons.jsx     ← the hand-drawn lore icons
tweaks-panel.jsx   ← the live "Tweaks" panel
assets/
  hero-wave.jpg    ← hero photograph
.nojekyll          ← tells GitHub Pages to serve files as-is (don't remove)
```

External dependencies (React, Babel, Google Fonts) load from CDNs at runtime,
so the site needs an internet connection to render. No npm install required.

---

## Put it live on GitHub Pages (free)

### Option A — entirely in the browser (no tools to install)

1. Create a new repository on GitHub — e.g. `evrywhr-site`
   (https://github.com/new). Leave it empty (no README).
2. On the new repo page click **uploading an existing file**.
3. Drag in **everything inside this folder** — `index.html`, all the `.js` /
   `.jsx` files, the `assets/` folder, and the `.nojekyll` file.
   - Tip: if drag-and-drop hides the `.nojekyll` file, you can add it later via
     **Add file → Create new file**, name it `.nojekyll`, leave it empty, commit.
4. Click **Commit changes**.
5. Go to **Settings → Pages**.
6. Under **Build and deployment → Source**, choose **Deploy from a branch**.
7. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
8. Wait ~1 minute. Your site will be live at:
   `https://<your-username>.github.io/evrywhr-site/`

### Option B — with Git on your computer

```bash
cd evrywhr-site
git init
git add .                       # the dot includes .nojekyll
git commit -m "EVRYWHR site"
git branch -M main
git remote add origin https://github.com/<your-username>/evrywhr-site.git
git push -u origin main
```

Then do steps 5–8 from Option A to switch Pages on.

---

## Custom domain (optional)

1. In **Settings → Pages → Custom domain**, enter your domain (e.g.
   `evrywhr.studio`) and Save. This creates a `CNAME` file in the repo.
2. At your domain registrar, add DNS records pointing to GitHub Pages:
   - Four `A` records on the apex (`@`): `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - or a `CNAME` record on `www` → `<your-username>.github.io`
3. Back in Settings → Pages, tick **Enforce HTTPS** once the certificate is ready.

---

## Editing later

- **Text & content** live in `data.js` and `data-ext.js`.
- **Colours & fonts** live in `data.js` (the `PALETTES`, `FONTS`, and
  `buildTheme` section near the bottom).
- After editing a file, commit/push (or re-upload it). If a change doesn't show
  up, it's browser caching — the `?v=` numbers on the script tags in
  `index.html` exist for exactly this: bump the number (e.g. `app.jsx?v=17` →
  `app.jsx?v=18`) to force a fresh load.

---

## Note on performance (optional upgrade)

Because the JSX is compiled in the visitor's browser, the page pulls in Babel
(~1.5 MB) and compiles on load — fine for a portfolio/brand site, but not the
leanest possible. If you ever want a faster, pre-compiled production build
(bundled & minified, no Babel at runtime), that's a straightforward next step —
ask and it can be set up with a tiny build pipeline.
