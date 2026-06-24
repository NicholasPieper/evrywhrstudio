// EVRYWHR — main app: routing, masthead, hero, home sections, footer + Tweaks.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "archive",
  "palette": "Field",
  "displayFont": "Cormorant Garamond",
  "bodyFont": "Montserrat",
  "motion": 60,
  "chaos": 45,
  "density": "regular",
  "grain": true,
  "studioName": "EVRYWHR",
  "tagline": "The world is worth understanding, not just visiting.",
  "heroSub": "A creative studio for travel-inspired storytelling — we produce films, visuals, artwork, and cultural projects rooted in curiosity, place, and perspective.",
  "manifesto": "We don't travel to confirm what we already believe. We go to leave a little less certain, a little more curious, and a lot more connected.",
  "loreTitle": "The Lore",
  "loreLead": "A small map of where EVRYWHR comes from. Open a few pieces, follow what catches your eye, and get to know the world behind the work."
}/*EDITMODE-END*/;

const DENSITY = { compact: 28, regular: 52, airy: 88 };
const GRAIN_URL = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const VIEW_FOR = { "Lore": "lore", "Projects": "projects", "Dispatches": "dispatches", "Work With Us": "work", "Shop": "shop" };

// Shop is hosted off-site. Set this to the Shopify or Fourthwall store URL when ready.
// Until then it points home; every "shop" link routes through here.
const STORE_URL = "";

// ---------- Masthead ---------------------------------------------------------
function Masthead({ theme, copy, go, view, cartCount, onCart }) {
  const NAV = window.EVRYWHR.NAV;
  const [sound, setSound] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = view.name === "home";
  useEffect(() => {
    if (!isHome) { setScrolled(false); return; }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.62);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // overlay = transparent header floating on the hero photo (home, not yet scrolled)
  const overlay = isHome && !scrolled;
  const onPhoto = "#f7f4ee";
  const onPhotoDim = "rgba(247,244,238,0.82)";
  const isActive = (n) => {
    const v = VIEW_FOR[n];
    if (v === "lore") return view.name === "home";
    return view.name === v || (n === "Projects" && view.name === "project");
  };
  const logoColor = overlay ? onPhoto : theme.ink;
  const linkColor = (active) => active ? (overlay ? onPhoto : theme.accent) : (overlay ? onPhotoDim : theme.muted);
  const chipBorder = overlay ? "rgba(247,244,238,0.5)" : theme.line;
  return (
    <header style={{
      position: isHome ? "fixed" : "sticky", top: 0, left: 0, right: 0, zIndex: 60, display: "flex", alignItems: "center",
      justifyContent: "space-between", gap: 18, padding: "13px var(--pad)",
      borderBottom: overlay ? "1px solid transparent" : `1px solid ${theme.line}`,
      background: overlay ? "transparent" : theme.bg,
      backdropFilter: overlay ? "none" : "blur(8px)",
      transition: "background .35s ease, border-color .35s ease, backdrop-filter .35s ease"
    }}>
      <button onClick={() => go("home")} aria-label={copy.studioName} style={{ display: "flex", alignItems: "flex-end", gap: 3,
        background: "transparent", border: "none", cursor: "pointer", padding: 0, lineHeight: 1 }}>
        <span style={{ display: "inline-block", height: 28, width: 137.5,
          background: overlay ? "#ffffff" : "#a4b8e8",
          WebkitMaskImage: "url('assets/logo-evrywhr.png?v=1')", maskImage: "url('assets/logo-evrywhr.png?v=1')",
          WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
          WebkitMaskSize: "contain", maskSize: "contain",
          WebkitMaskPosition: "left center", maskPosition: "left center",
          filter: overlay ? "drop-shadow(0 1px 14px oklch(0.12 0.03 240 / 0.45))" : "none",
          transition: "background .35s ease" }} />
        <span style={{ fontFamily: theme.fontMono, fontWeight: 700, fontSize: 25, lineHeight: 1, color: "#a4b8e8", marginBottom: 1 }}>.</span>
      </button>
      <nav style={{ display: "flex", alignItems: "center", gap: 20 }} className="mast-nav">
        {NAV.map((n) => (
          <button key={n} onClick={() => go(VIEW_FOR[n])} className="navlink"
            style={{ fontFamily: theme.fontMono, fontSize: 11.5, letterSpacing: "0.12em", textTransform: "uppercase",
              color: linkColor(isActive(n)), background: "transparent", border: "none",
              cursor: "pointer", padding: 0, transition: "color .35s ease",
              textShadow: overlay ? "0 1px 14px oklch(0.12 0.03 240 / 0.5)" : "none" }}>{n}</button>
        ))}
      </nav>
    </header>
  );
}

// ---------- Hero -------------------------------------------------------------
function Hero({ theme, motion, copy, go }) {
  const tickerDur = 40 - (motion / 100) * 24;
  const coords = "17.6°S 149.5°W · CORCOVADO · 43.0°N 47.5°E · MICHOACÁN · 18.3°N 103.3°W · TEAHUPO'O · THE DESERT · RANGIROA · ";
  const scrollLore = () => { const el = document.getElementById("lore");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" }); };
  const onPhoto = "#f7f4ee";
  const onPhotoMuted = "rgba(247,244,238,0.84)";
  return (
    <section id="top" style={{ position: "relative" }}>
      <div style={{ position: "relative", width: "100%", minHeight: "100svh",
        display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden",
        backgroundImage: "url('assets/hero-wave.jpg')", backgroundSize: "cover", backgroundPosition: "center 42%" }}>
        {/* legibility scrim */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(180deg, oklch(0.14 0.04 240 / 0.6) 0%, oklch(0.13 0.03 240 / 0.3) 26%, transparent 48%, oklch(0.12 0.03 240 / 0.34) 70%, oklch(0.09 0.03 240 / 0.66) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(90deg, oklch(0.10 0.03 240 / 0.55) 0%, oklch(0.10 0.03 240 / 0.12) 40%, transparent 62%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(120% 80% at 18% 100%, oklch(0.09 0.03 240 / 0.5) 0%, transparent 60%)" }} />

        {/* content — eyebrow, wordmark, body, buttons (centered, biased downward) */}
        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          width: "100%", padding: "clamp(118px,21vh,260px) var(--pad) clamp(22px,4vh,46px)" }}>
          <Eyebrow theme={theme} color={onPhoto}>Creative Travel Studio</Eyebrow>
          <h1 aria-label={copy.studioName} style={{ margin: "10px 0 0", lineHeight: 0 }}>
            <img src="assets/logo-evrywhr.png?v=1" alt={copy.studioName} draggable={false}
              style={{ display: "block", height: "clamp(70px,15vw,168px)", width: "auto", maxWidth: "100%",
                objectFit: "contain", filter: "drop-shadow(0 2px 30px oklch(0.12 0.03 240 / 0.4))" }} />
          </h1>
          <div style={{ maxWidth: 600, marginTop: "clamp(16px,2.2vw,28px)" }}>
            <p style={{ fontFamily: theme.fontBody, fontSize: 17.5, lineHeight: 1.6, color: onPhotoMuted,
              maxWidth: 520, margin: 0, textWrap: "pretty", textShadow: "0 1px 18px oklch(0.12 0.03 240 / 0.5)" }}>{copy.heroSub}</p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: "clamp(26px,4vh,46px)" }}>
            <button onClick={scrollLore} className="btn-ghost" style={{ fontFamily: theme.fontMono, fontSize: 12,
              letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", padding: "15px 28px",
              borderRadius: 16, color: "#dfe6f7", textShadow: "0 1px 10px oklch(0.12 0.03 240 / 0.5)",
              background: "rgba(255,255,255,0.06)",
              border: `1.5px solid ${theme.accentFill}`,
              backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
              Enter the Lore</button>
            <button onClick={() => go("projects")} className="btn-ghost" style={{ fontFamily: theme.fontMono, fontSize: 12,
              letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", padding: "15px 28px",
              borderRadius: 16, color: "#f0f3cf", textShadow: "0 1px 10px oklch(0.12 0.03 240 / 0.5)",
              background: "rgba(255,255,255,0.06)",
              border: `1.5px solid ${theme.accent2Fill}`,
              backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
              See the work</button>
          </div>
        </div>

        {/* bottom — coordinates ticker */}
        <div style={{ position: "relative", width: "100%" }}>

          {/* coordinates ticker — over the photo */}
          <div style={{ position: "relative", borderTop: "1px solid rgba(247,244,238,0.22)",
            overflow: "hidden", whiteSpace: "nowrap", padding: "10px 0" }}>
            <div style={{ display: "inline-block", animation: `marquee ${tickerDur}s linear infinite`,
              fontFamily: theme.fontMono, fontSize: 12, letterSpacing: "0.18em", color: onPhotoMuted,
              textShadow: "0 1px 14px oklch(0.12 0.03 240 / 0.5)" }}>
              {coords + coords}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Manifesto strip --------------------------------------------------
function ManifestoStrip({ theme, copy }) {
  return (
    <section style={{ padding: "clamp(50px,8vw,110px) var(--pad)" }}>
      <div style={{ maxWidth: 1000 }}>
        <Eyebrow theme={theme}>The Creed</Eyebrow>
        <p style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(30px,5.2vw,72px)",
          lineHeight: 1.04, letterSpacing: "-0.015em", margin: "14px 0 0", textWrap: "balance" }}>{copy.manifesto}</p>
      </div>
    </section>
  );
}

// ---------- Home projects teaser --------------------------------------------
const ROW_MEDIA = {
  gedo: "assets/work/gedo.jpg?v=1",
  scarves: "assets/work/deserts.jpg?v=1",
  scoby: "assets/work/scoby-desert.jpg?v=1",
};
function ProjectRow({ p, i, theme, onOpen }) {
  const [hov, setHov] = useState(false);
  const detail = (window.EVRYWHR.PROJECT_DETAIL || {})[p.id] || {};
  const hasVideo = detail.hasVideo;
  const photo = ROW_MEDIA[p.id];
  const mediaLabel = hasVideo ? "Watch · Film" : "Photo series";
  return (
    <button onClick={() => onOpen(p.id)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "block", width: "100%", textAlign: "left", color: theme.ink, cursor: "pointer",
        borderTop: `1px solid ${theme.line}`, borderLeft: "none", borderRight: "none", borderBottom: "none",
        padding: "22px var(--pad)", background: hov ? theme.surface : "transparent", transition: "background .25s ease" }}>
      <div style={{ display: "grid", gridTemplateColumns: "54px 1fr auto", alignItems: "center", gap: 18,
        transform: hov ? "translateX(10px)" : "none", transition: "transform .3s cubic-bezier(.16,1,.3,1)" }}>
        <span style={{ fontFamily: theme.fontMono, fontSize: 12, color: theme.accent }}>{String(i + 1).padStart(2, "0")}</span>
        <div>
          <div style={{ fontFamily: theme.fontDisplay, fontSize: "clamp(26px,4vw,46px)", lineHeight: 1,
            letterSpacing: "-0.01em" }}>{p.name}</div>
        </div>
        <div style={{ textAlign: "right", fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.1em",
          textTransform: "uppercase", color: theme.muted }}>
          <div style={{ color: hov ? theme.accent2 : theme.muted }}>{p.kind}</div>
          <div style={{ marginTop: 4 }}>{p.coord}</div>
        </div>
      </div>

      {/* featured media + description — expands on hover */}
      <div style={{ overflow: "hidden", maxHeight: hov ? 360 : 0, opacity: hov ? 1 : 0,
        transform: hov ? "translateX(10px)" : "translateX(0)",
        transition: "max-height .45s cubic-bezier(.16,1,.3,1), opacity .35s ease, transform .3s cubic-bezier(.16,1,.3,1)" }}>
        <div style={{ paddingLeft: 72, paddingTop: 18, display: "grid",
          gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: "clamp(24px,3vw,48px)",
          alignItems: "center" }} className="work-expand">
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 4,
            border: `1px solid ${theme.line}`, background: photo ? "#e9e6df" : "transparent",
            backgroundImage: photo ? undefined : `repeating-linear-gradient(135deg, ${theme.line} 0 1px, transparent 1px 9px)` }}>
            {photo ? (
              <img src={photo} alt={p.name} draggable={false}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
                  transform: hov ? "scale(1.04)" : "scale(1)", transition: "transform .6s ease" }} />
            ) : null}
            {!photo && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 58, height: 58, borderRadius: 999, background: theme.accent,
                  color: theme.dark ? "#15130f" : "#faf7f0", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: hasVideo ? 18 : 15, boxShadow: "0 8px 24px rgba(0,0,0,.32)",
                  transform: hov ? "scale(1)" : "scale(.85)", transition: "transform .4s cubic-bezier(.16,1,.3,1)" }}>
                  {hasVideo ? "▶" : "◎"}
                </div>
              </div>
            )}
            <span style={{ position: "absolute", left: 12, bottom: 11, fontFamily: theme.fontMono, fontSize: 10,
              letterSpacing: "0.14em", textTransform: "uppercase", color: photo ? "#faf7f0" : theme.muted,
              textShadow: photo ? "0 1px 4px rgba(0,0,0,.5)" : "none" }}>{mediaLabel}</span>
          </div>
          <p style={{ fontFamily: theme.fontBody, fontSize: "clamp(15px,1.15vw,18px)", lineHeight: 1.55,
            color: theme.muted, margin: 0, maxWidth: 440, textWrap: "pretty" }}>{p.blurb}</p>
        </div>
      </div>
    </button>
  );
}

function ProjectsTeaser({ theme, onOpen, go }) {
  const featured = ["gedo", "scarves", "scoby"];
  const list = featured
    .map((id) => window.EVRYWHR.PROJECTS.find((p) => p.id === id))
    .filter(Boolean);
  return (
    <section style={{ paddingTop: "clamp(30px,5vw,60px)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap",
        gap: 14, padding: "0 var(--pad) 20px" }}>
        <h2 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(40px,8vw,96px)",
          lineHeight: 0.92, margin: 0, letterSpacing: "-0.015em", textTransform: "uppercase" }}>Selected Work</h2>
        <button onClick={() => go("projects")} style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.14em",
          textTransform: "uppercase", color: theme.accent2, background: "transparent", border: "none", cursor: "pointer" }}>
          All projects →</button>
      </div>
      <div style={{ borderBottom: `1px solid ${theme.line}` }}>
        {list.map((p, i) => <ProjectRow key={p.id} p={p} i={i} theme={theme} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function FeaturedShop({ theme, onAdd, go }) {
  const p = window.EVRYWHR.SHOP.find((x) => x.id === "hoodie-gedo");
  const [h, setH] = useState(false);
  if (!p) return null;
  return (
    <section style={{ paddingTop: "clamp(40px,6vw,84px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px,4vw,56px)",
        alignItems: "center", padding: "clamp(30px,4vw,56px) var(--pad)", borderTop: `1px solid ${theme.line}`,
        borderBottom: `1px solid ${theme.line}` }} className="feat-grid">
        <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
          style={{ position: "relative", overflow: "hidden", borderRadius: 3, cursor: "pointer",
            background: "#e6ed9b", aspectRatio: "4 / 3" }}
          onClick={() => go("shop")}>
          <img src="assets/shop/hoodie-gedo.png?v=2" alt={p.name} draggable={false}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain",
              padding: "clamp(12px,2vw,28px)", transform: h ? "scale(1.05)" : "scale(1)",
              transition: "transform .6s ease" }} />
        </div>
        <div>
          <Eyebrow theme={theme}>Featured · The Shop</Eyebrow>
          <h2 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(30px,3.6vw,50px)",
            lineHeight: 0.98, margin: "16px 0 0", letterSpacing: "-0.015em" }}>
            <span style={{ whiteSpace: "nowrap" }}>Go Everywhere Do Everything</span><br />Hoodie</h2>
          <p style={{ fontFamily: theme.fontBody, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.5,
            color: theme.muted, margin: "16px 0 0", maxWidth: 460 }}>Heavyweight fleece. The flagship piece.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", marginTop: 26 }}>
            <button className="ev-btn" onClick={() => go("shop")} style={{ padding: "13px 26px", borderRadius: 999,
              border: "none", cursor: "pointer", background: "#a4b8e8", color: "#15130f",
              fontFamily: theme.fontMono, fontSize: 11.5, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Shop all →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer -----------------------------------------------------------
function Footer({ theme, copy, go }) {
  const cols = [
    { h: "Explore", items: [["Lore", "lore"], ["Projects", "projects"], ["Dispatches", "dispatches"], ["Shop", "shop"]] },
    { h: "Work", items: [["Stays", "work"], ["Experiences", "work"], ["Products", "work"], ["Get a quote", "work"]] },
    { h: "Channels", items: [["YouTube", "https://www.youtube.com/@go_everywhere_do_everything"], ["Instagram", "https://instagram.com/goeverywhere_doeverything"], ["TikTok", "https://tiktok.com/@go3verywheredo3verything"]] }
  ];
  return (
    <footer style={{ padding: "clamp(44px,5vw,68px) var(--pad) 32px", borderTop: `1px solid ${theme.line}`,
      background: theme.surface }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 28 }} className="foot-grid">
        <div>
          <Eyebrow theme={theme}>Work with us</Eyebrow>
          <p style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(28px,3.4vw,44px)",
            lineHeight: 1.05, margin: "12px 0 18px", letterSpacing: "-0.01em" }}>
            Got a place, a project, or a half-wild idea? Bring it here.</p>
          <button onClick={() => go("work")} style={{ fontFamily: theme.fontMono, fontSize: 13, letterSpacing: "0.06em",
            color: theme.accent, background: "transparent", textDecoration: "none", border: "none", cursor: "pointer",
            padding: 0, borderBottom: `1px solid ${theme.accent}`, paddingBottom: 2 }}>
            Tell us the idea →</button>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
              color: theme.muted, marginBottom: 14 }}>{c.h}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, alignItems: "flex-start" }}>
              {c.items.map(([it, v]) => <button key={it} onClick={() => { if (!v) return; if (/^https?:/.test(v)) window.open(v, "_blank", "noopener"); else go(v); }} className="navlink"
                style={{ fontFamily: theme.fontBody, fontSize: 16, color: theme.ink, background: "transparent",
                  border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>{it}</button>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, marginTop: "clamp(40px,5vw,64px)",
        fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: theme.muted }}>
        <span>© {new Date().getFullYear()} {copy.studioName} Studio</span>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <button onClick={() => go("privacy")} className="navlink" style={{ fontFamily: "inherit", fontSize: "inherit",
            letterSpacing: "inherit", textTransform: "inherit", color: theme.muted, background: "transparent",
            border: "none", cursor: "pointer", padding: 0 }}>Privacy</button>
          <button onClick={() => go("terms")} className="navlink" style={{ fontFamily: "inherit", fontSize: "inherit",
            letterSpacing: "inherit", textTransform: "inherit", color: theme.muted, background: "transparent",
            border: "none", cursor: "pointer", padding: 0 }}>Terms</button>
          <button onClick={() => go("accessibility")} className="navlink" style={{ fontFamily: "inherit", fontSize: "inherit",
            letterSpacing: "inherit", textTransform: "inherit", color: theme.muted, background: "transparent",
            border: "none", cursor: "pointer", padding: 0 }}>Accessibility</button>
        </div>
        <span>Go everywhere · do everything</span>
      </div>
    </footer>
  );
}

// ---------- Home -------------------------------------------------------------
function Home({ theme, t, copy, go, onOpenProject, onAdd }) {
  return (
    <React.Fragment>
      <Hero theme={theme} motion={t.motion} copy={copy} go={go} />
      <ProjectsTeaser theme={theme} onOpen={onOpenProject} go={go} />
      <LoreWorld theme={theme} motion={t.motion} chaos={t.chaos} copy={copy} />
      <FeaturedShop theme={theme} onAdd={onAdd} go={go} />
    </React.Fragment>
  );
}

// ---------- Tweaks panel -----------------------------------------------------
function Panel({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Direction" />
      <TweakRadio label="World" value={t.direction} options={["archive", "signal"]} onChange={(v) => setTweak("direction", v)} />
      <TweakRadio label="Palette" value={t.palette} options={["Field", "Canyon", "Tide"]} onChange={(v) => setTweak("palette", v)} />
      <TweakSection label="Type" />
      <TweakSelect label="Display" value={t.displayFont} options={["Cormorant Garamond", "Syne", "Hanken Grotesk"]} onChange={(v) => setTweak("displayFont", v)} />
      <TweakSelect label="Body" value={t.bodyFont} options={["Montserrat", "Hanken Grotesk", "Syne"]} onChange={(v) => setTweak("bodyFont", v)} />
      <TweakSection label="Feel" />
      <TweakSlider label="Motion" value={t.motion} min={0} max={100} unit="%" onChange={(v) => setTweak("motion", v)} />
      <TweakSlider label="Chaos" value={t.chaos} min={0} max={100} unit="%" onChange={(v) => setTweak("chaos", v)} />
      <TweakRadio label="Density" value={t.density} options={["compact", "regular", "airy"]} onChange={(v) => setTweak("density", v)} />
      <TweakToggle label="Film grain" value={t.grain} onChange={(v) => setTweak("grain", v)} />
      <TweakSection label="Copy" />
      <TweakText label="Studio" value={t.studioName} onChange={(v) => setTweak("studioName", v)} />
      <TweakText label="Tagline" value={t.tagline} onChange={(v) => setTweak("tagline", v)} />
      <TweakText label="Lore title" value={t.loreTitle} onChange={(v) => setTweak("loreTitle", v)} />
    </TweaksPanel>
  );
}

// ---------- App --------------------------------------------------------------
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [view, setView] = useState({ name: "home" });
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const theme = window.EVRYWHR.buildTheme(t);
  const pad = DENSITY[t.density] || DENSITY.regular;
  const copy = {
    studioName: t.studioName, tagline: t.tagline, heroSub: t.heroSub, manifesto: t.manifesto,
    loreKicker: "Get to know us", loreTitle: t.loreTitle, loreLead: t.loreLead
  };

  const go = useCallback((name, id) => {
    if (name === "shop") {
      if (STORE_URL) window.open(STORE_URL, "_blank", "noopener");
      return;
    }
    if (name === "lore") {
      setView({ name: "home" });
      setTimeout(() => { const el = document.getElementById("lore");
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" }); }, 60);
      return;
    }
    setView({ name, id });
    window.scrollTo({ top: 0 });
  }, []);
  const openProject = (id) => go("project", id);

  const addToCart = (p) => { setCart((c) => ({ ...c, [p.id]: { ...p, qty: (c[p.id]?.qty || 0) + 1 } })); setCartOpen(true); };
  const changeQty = (id, d) => setCart((c) => {
    const n = { ...c }; const q = (n[id]?.qty || 0) + d;
    if (q <= 0) delete n[id]; else n[id] = { ...n[id], qty: q };
    return n;
  });
  const cartCount = Object.values(cart).reduce((s, it) => s + it.qty, 0);

  const rootStyle = {
    "--bg": theme.bg, "--ink": theme.ink, "--muted": theme.muted, "--line": theme.line,
    "--accent": theme.accent, "--accent2": theme.accent2, "--pad": `clamp(18px, ${pad / 14}vw, ${pad}px)`,
    background: theme.bg, color: theme.ink, minHeight: "100vh", fontFamily: theme.fontBody,
    transition: "background 0.4s ease, color 0.4s ease"
  };

  let body;
  if (view.name === "home") body = <Home theme={theme} t={t} copy={copy} go={go} onOpenProject={openProject} onAdd={addToCart} />;
  else if (view.name === "projects") body = <ProjectsIndex theme={theme} t={t} onOpen={openProject} />;
  else if (view.name === "project") body = <ProjectDetail id={view.id} theme={theme} onBack={() => go("projects")} onOpen={openProject} />;
  else if (view.name === "dispatches") body = <DispatchesView theme={theme} onOpen={(id) => go("dispatch", id)} />;
  else if (view.name === "dispatch") body = <DispatchArticle id={view.id} theme={theme} onBack={() => go("dispatches")} onOpen={(id) => go("dispatch", id)} />;
  else if (view.name === "work") body = <WorkView theme={theme} onNav={go} />;
  else if (view.name === "shop") body = <ShopView theme={theme} onAdd={addToCart} />;
  else if (view.name === "privacy") body = <LegalView theme={theme} doc="privacy" go={go} />;
  else if (view.name === "terms") body = <LegalView theme={theme} doc="terms" go={go} />;
  else if (view.name === "accessibility") body = <LegalView theme={theme} doc="accessibility" go={go} />;

  return (
    <div style={rootStyle}>
      <style>{`
        .navlink{transition:color .2s ease}
        :focus-visible{outline:2px solid ${theme.accent};outline-offset:3px;border-radius:3px}
        @media (prefers-reduced-motion: reduce){
          *,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}
        }
        .navlink:hover{color:${theme.accent} !important}
        .btn-primary,.ev-btn{transition:transform .2s ease, filter .2s ease}
        .btn-primary:hover,.ev-btn:hover{transform:translateY(-2px);filter:brightness(1.04)}
        .btn-glass{position:relative;overflow:hidden;isolation:isolate;transition:transform .28s cubic-bezier(.2,.8,.2,1),box-shadow .28s ease,background .28s ease}
        .btn-glass::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;background:linear-gradient(180deg,rgba(255,255,255,0.5) 0%,rgba(255,255,255,0.12) 36%,rgba(255,255,255,0) 58%)}
        .btn-glass:hover{transform:translateY(-2px);box-shadow:inset 0 1px 0 rgba(255,255,255,0.65),inset 0 -10px 18px rgba(255,255,255,0.09),0 14px 38px oklch(0.12 0.03 240 / 0.32)}
        .btn-glass:active{transform:translateY(0) scale(0.98)}
        .btn-ghost{transition:transform .28s cubic-bezier(.2,.8,.2,1),background .28s ease,border-color .28s ease}
        .btn-ghost:hover{transform:translateY(-2px);background:rgba(255,255,255,0.14) !important}
        .btn-ghost:active{transform:translateY(0) scale(0.98)}
        .ev-back:hover{color:${theme.accent} !important}
        .proj-idx-row{transition:background .18s ease}
        .proj-idx-row:hover{background:${theme.surface2} !important}
        input::placeholder,textarea::placeholder{color:${theme.muted}}
        .gede-soc:hover{border-color:${theme.accent};background:${theme.surface2}}
        .moz-ph figcaption{opacity:0;transition:opacity .25s ease}
        .moz-ph:hover figcaption{opacity:1}
        .ev-watch:hover{border-color:${theme.accent} !important;color:${theme.accent} !important}
        .story-drop::first-letter{font-family:${theme.fontDisplay};font-weight:600;font-size:62px;line-height:.7;float:left;padding:8px 12px 0 0;color:${theme.accent}}
        @media(max-width:820px){
          .moz{grid-template-columns:repeat(6,1fr) !important;--mozr:clamp(46px,9vw,64px) !important}
          .hero-grid,.detail-grid,.contact-grid,.feat-grid{grid-template-columns:1fr !important}
          .story-grid{grid-template-columns:1fr !important;gap:20px !important}
          .story-figure{position:static !important;max-width:520px}
          .gede-hero{grid-template-columns:1fr !important;gap:22px !important}
          .gede-hero-copy{text-align:center}
          .gede-hero-copy .gede-social{justify-content:center}
          .hero-art{min-height:300px !important}
          .proj-head{grid-template-columns:1fr !important;gap:24px !important}
          .work-expand{grid-template-columns:1fr !important;gap:14px !important}
          .foot-grid{grid-template-columns:1fr 1fr !important}
          .meta-row{grid-template-columns:1fr !important;gap:14px !important}
          .form-row{grid-template-columns:1fr !important}
          .dispatch-row{grid-template-columns:1fr !important;gap:8px !important}
          .mast-nav{gap:12px !important}
          .gede-title,.gede-desc{white-space:normal !important;overflow:visible !important;text-overflow:clip !important}
          .proj-top{grid-template-columns:1fr !important;gap:24px !important}
          .proj-top .proj-top-media{order:-1}
        }
      `}</style>

      <Masthead theme={theme} copy={copy} go={go} view={view} cartCount={cartCount} onCart={() => setCartOpen(true)} />
      {body}
      <Footer theme={theme} copy={copy} go={go} />

      <CartDrawer open={cartOpen} cart={cart} theme={theme} onClose={() => setCartOpen(false)} onQty={changeQty} />

      {t.grain && (
        <div style={{ position: "fixed", inset: 0, zIndex: 70, pointerEvents: "none", backgroundImage: GRAIN_URL,
          backgroundSize: "160px 160px", opacity: theme.grain, mixBlendMode: theme.dark ? "screen" : "multiply",
          animation: t.motion > 0 ? `grainshift ${1.2 - (t.motion / 100) * 0.7}s steps(3) infinite` : "none" }} />
      )}

      <Panel t={t} setTweak={setTweak} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
