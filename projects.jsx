// EVRYWHR — Projects index + detail pages.

function ProjThumb({ p, theme, big }) {
  const det = window.EVRYWHR.PROJECT_DETAIL[p.id] || {};
  const yt = det.youtube;
  const poster = det.cover || (yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : null);
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: big ? "16 / 9" : "4 / 3",
      backgroundImage: poster ? "none" : `repeating-linear-gradient(135deg, ${theme.line} 0 1px, transparent 1px 9px)`,
      background: poster ? "#000" : undefined,
      border: `1px solid ${theme.line}`, borderRadius: 3, overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center" }}>
      {poster ? (
        <React.Fragment>
          <img src={poster} alt={p.name} loading="lazy"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          {yt && <span style={{ position: "relative", width: 46, height: 46, borderRadius: 999,
            background: "rgba(0,0,0,0.45)", color: "#fff", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 15, paddingLeft: 3, backdropFilter: "blur(2px)" }}>▶</span>}
        </React.Fragment>
      ) : (
        <span style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
          color: theme.muted }}>{p.kind.split("·")[0].trim()}</span>
      )}
    </div>
  );
}

// Inline YouTube player: poster + play badge, swaps to an autoplay iframe on click.
function FilmPlayer({ id, theme, title, playing, onPlay, poster }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9",
      borderRadius: 3, overflow: "hidden", border: `1px solid ${theme.line}`, background: "#000" }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title} allowFullScreen referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
      ) : (
        <button onClick={onPlay} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          aria-label={`Play ${title}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", padding: 0,
            cursor: "pointer", background: "transparent", display: "block" }}>
          <img src={poster || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt={title}
            onError={(e) => { if (!poster) e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.34))" }} />
          <span style={{ position: "absolute", top: "50%", left: "50%",
            transform: `translate(-50%,-50%) scale(${hov ? 1.08 : 1})`, transition: "transform .25s cubic-bezier(.16,1,.3,1)",
            width: 80, height: 80, borderRadius: 999, background: theme.accent,
            color: theme.dark ? "#15130f" : "#faf7f0", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 27, paddingLeft: 6,
            boxShadow: "0 10px 34px rgba(0,0,0,0.45)" }}>▶</span>
          <span style={{ position: "absolute", left: 16, bottom: 14, fontFamily: theme.fontMono, fontSize: 11,
            letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff",
            textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}>▷ Watch · Film</span>
        </button>
      )}
    </div>
  );
}

function ProjectCard({ p, i, theme, onOpen }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={() => onOpen(p.id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: 0,
        color: theme.ink, transform: h ? "translateY(-4px)" : "none", transition: "transform .3s cubic-bezier(.16,1,.3,1)" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
        <ProjThumb p={p} theme={theme} />
        <div style={{ position: "absolute", inset: 0, background: theme.accentFill, opacity: h ? 0.08 : 0,
          transition: "opacity .3s ease", pointerEvents: "none" }} />
      </div>
      <h3 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(22px,2.4vw,30px)",
        lineHeight: 1.05, margin: "14px 0 0", letterSpacing: "-0.01em" }}>{p.name}</h3>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginTop: 8 }}>
        <span style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase",
          color: theme.accent }}>{p.kind}</span>
        <span style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase",
          color: theme.muted, whiteSpace: "nowrap" }}>{p.coord}</span>
      </div>
    </button>
  );
}

function FilmMini({ p, theme, onOpen }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={() => onOpen(p.id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: 0,
        width: "100%", display: "block",
        color: theme.ink, transform: h ? "translateY(-3px)" : "none", transition: "transform .3s cubic-bezier(.16,1,.3,1)" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
        <ProjThumb p={p} theme={theme} big />
        <div style={{ position: "absolute", inset: 0, background: theme.accentFill, opacity: h ? 0.1 : 0,
          transition: "opacity .3s ease", pointerEvents: "none" }} />
      </div>
      <h4 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(17px,1.5vw,21px)",
        lineHeight: 1.08, margin: "10px 0 0", letterSpacing: "-0.01em" }}>{p.name}</h4>
      <span style={{ display: "block", fontFamily: theme.fontMono, fontSize: 10, letterSpacing: "0.1em",
        textTransform: "uppercase", color: theme.muted, marginTop: 5 }}>{p.coord}</span>
    </button>
  );
}

// End-of-scroller card linking out to the YouTube channel.
function WatchMoreCard({ theme }) {
  const [h, setH] = useState(false);
  return (
    <a href="https://www.youtube.com/@go_everywhere_do_everything" target="_blank" rel="noopener noreferrer"
      onClick={(e) => { e.preventDefault(); window.open("https://www.youtube.com/@go_everywhere_do_everything", "_blank", "noopener"); }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "block", textDecoration: "none", color: theme.ink,
        transform: h ? "translateY(-3px)" : "none", transition: "transform .3s cubic-bezier(.16,1,.3,1)" }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 3, overflow: "hidden",
        background: theme.surface, border: `1px dashed ${h ? theme.accent : theme.line}`, display: "flex",
        flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12,
        transition: "border-color .3s ease" }}>
        <span style={{ width: 54, height: 54, borderRadius: 999, display: "flex", alignItems: "center",
          justifyContent: "center", flexShrink: 0, background: theme.accent, color: theme.dark ? "#15130f" : "#faf7f0",
          transform: h ? "scale(1.06)" : "none", transition: "transform .3s cubic-bezier(.16,1,.3,1)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
        </span>
        <span style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
          color: theme.muted }}>More on YouTube</span>
      </div>
    </a>
  );
}

function ChannelFeature({ channel, films, theme, onOpen }) {
  if (!channel) return null;
  return (
    <section style={{ border: `1px solid ${theme.line}`, borderRadius: 4, background: theme.surface,
      padding: "clamp(22px,3.4vw,44px)" }}>
      <div style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
        <Eyebrow theme={theme}>Flagship · The Channel</Eyebrow>
        <div className="gede-headrow" style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 18, margin: "12px 0 0" }}>
          <h2 className="gede-title" style={{ fontFamily: theme.fontDisplay, fontWeight: 400,
            fontSize: "clamp(28px,3.6vw,52px)", lineHeight: 1.0, letterSpacing: "-0.018em", margin: 0,
            whiteSpace: "nowrap" }}>{channel.name}</h2>
          <button className="ev-btn" onClick={() => onOpen(channel.id)} style={{ padding: "13px 24px", borderRadius: 999,
            border: "none", cursor: "pointer", background: theme.accent, color: theme.dark ? "#15130f" : "#faf7f0",
            fontFamily: theme.fontMono, fontSize: 11.5, letterSpacing: "0.12em", textTransform: "uppercase",
            whiteSpace: "nowrap", flexShrink: 0 }}>Enter the channel →</button>
        </div>
        <p className="gede-desc" style={{ fontFamily: theme.fontBody, fontSize: "clamp(15px,1.25vw,18px)",
          lineHeight: 1.5, color: theme.muted, margin: "12px 0 0", whiteSpace: "nowrap", overflow: "hidden",
          textOverflow: "ellipsis" }}>A travel channel built on curiosity. We take the questions people ask most about the world and turn each one into a journey.</p>
      </div>
      <div className="gede-scroller" style={{ display: "flex", gap: "clamp(16px,1.8vw,24px)",
        overflowX: "auto", scrollSnapType: "x proximity", paddingBottom: 16, scrollPaddingLeft: 2 }}>
        {films.map((f) => (
          <div key={f.id} style={{ flex: "0 0 calc((100% - 3 * clamp(16px,1.8vw,24px)) / 4 - 13px)",
            minWidth: 230, scrollSnapAlign: "start" }}>
            <FilmMini p={f} theme={theme} onOpen={onOpen} />
          </div>
        ))}
        <div style={{ flex: "0 0 calc((100% - 3 * clamp(16px,1.8vw,24px)) / 4 - 13px)",
          minWidth: 230, scrollSnapAlign: "start" }}>
          <WatchMoreCard theme={theme} />
        </div>
      </div>
    </section>
  );
}

function ProjectsHead({ theme }) {
  return (
    <div style={{ padding: "clamp(26px,4vw,52px) var(--pad) 0" }}>
      <div className="proj-head" style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)",
        gap: "clamp(20px,4vw,64px)", alignItems: "center" }}>
        <h1 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(44px,7vw,96px)",
          lineHeight: 1.0, margin: 0, letterSpacing: "0.01em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Projects</h1>
        <p style={{ margin: 0, marginLeft: "auto", maxWidth: 480, fontFamily: theme.fontBody, color: theme.muted,
          fontSize: "clamp(16px,1.35vw,20px)", lineHeight: 1.5, textWrap: "pretty" }}>
          films, visuals, artwork, and cultural projects rooted in curiosity, place, and perspective</p>
      </div>
    </div>
  );
}

// Staggered two-column card (Projects index — Option C).
function StaggerCard({ p, theme, onOpen }) {
  const det = window.EVRYWHR.PROJECT_DETAIL[p.id] || {};
  const cover = det.cover || (det.youtube ? `https://i.ytimg.com/vi/${det.youtube}/hqdefault.jpg` : null);
  const [h, setH] = useState(false);
  return (
    <button onClick={() => onOpen(p.id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "block", width: "100%", textAlign: "left",
        background: "transparent", border: "none", padding: 0, cursor: "pointer", color: theme.ink }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: "3 / 2", overflow: "hidden", borderRadius: 3,
        background: cover ? "#000" : undefined, border: `1px solid ${theme.line}`,
        backgroundImage: cover ? "none" : `repeating-linear-gradient(135deg, ${theme.line} 0 1px, transparent 1px 9px)`,
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        {cover ? (
          <img src={cover} alt={p.name} loading="lazy" draggable="false"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              objectPosition: det.coverPos || "center", transform: h ? "scale(1.04)" : "none",
              transition: "transform 1s cubic-bezier(.16,1,.3,1)" }} />
        ) : (
          <span style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
            color: theme.muted }}>{p.kind.split("·")[0].trim()}</span>
        )}
      </div>
      <h3 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(26px,2.8vw,42px)", lineHeight: 1.02,
        letterSpacing: "-0.015em", margin: "clamp(16px,1.6vw,24px) 0 0", color: h ? theme.accent : theme.ink,
        transition: "color .25s" }}>{p.name}</h3>
      <p style={{ fontFamily: theme.fontBody, fontSize: "clamp(13px,1.1vw,16px)", color: theme.muted,
        margin: "clamp(8px,0.8vw,12px) 0 0" }}>{p.coord}</p>
    </button>
  );
}

function ProjectsIndex({ theme, t, onOpen }) {
  const all = window.EVRYWHR.PROJECTS;
  const channel = all.find((p) => p.seriesRole === "channel");
  const standalone = all.filter((p) => !p.series);
  const cards = [channel, ...standalone].filter(Boolean);
  const left = cards.filter((_, i) => i % 2 === 0);
  const right = cards.filter((_, i) => i % 2 === 1);
  return (
    <div>
      <style>{`
        @media (max-width:680px){
          .proj-stagger{grid-template-columns:1fr !important;gap:clamp(40px,8vw,56px) !important}
          .proj-stagger > div{margin-top:0 !important;gap:clamp(40px,8vw,56px) !important}
        }
      `}</style>
      <ProjectsHead theme={theme} />
      <div style={{ padding: "clamp(34px,5vw,60px) var(--pad) 110px" }}>
        <div className="proj-stagger" style={{ display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "clamp(24px,4vw,72px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(56px,9vw,130px)" }}>
            {left.map((p) => <StaggerCard key={p.id} p={p} theme={theme} onOpen={onOpen} />)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(56px,9vw,130px)",
            marginTop: "clamp(70px,13vw,200px)" }}>
            {right.map((p) => <StaggerCard key={p.id} p={p} theme={theme} onOpen={onOpen} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Detail ----------------------------------------------------------------
// Title that auto-shrinks to stay on a single line within its container.
function FitTitle({ text, theme }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const avail = parent.clientWidth;
      let size = 124;
      el.style.fontSize = size + "px";
      let guard = 0;
      while (el.scrollWidth > avail && size > 20 && guard < 260) { size -= 2; el.style.fontSize = size + "px"; guard++; }
    };
    fit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit).catch(() => {});
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [text]);
  return (
    <h1 ref={ref} style={{ fontFamily: theme.fontDisplay, fontWeight: 400, whiteSpace: "nowrap",
      fontSize: 96, lineHeight: 1.0, margin: "10px 0 0", letterSpacing: "-0.02em" }}>{text}</h1>
  );
}

// Pull-quote band woven between gallery photos; reveals on scroll.
function PullQuote({ quote, theme }) {
  const text = typeof quote === "string" ? quote : quote.t;
  const by = (quote && typeof quote === "object") ? quote.by : null;
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } },
      { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <figure ref={ref} style={{ gridColumn: "1 / -1", margin: "clamp(6px,1.6vw,18px) 0",
      padding: "clamp(28px,4.5vw,58px) clamp(22px,6%,90px)", background: theme.surface,
      border: `1px solid ${theme.line}`, borderRadius: 4, position: "relative", overflow: "hidden",
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
      transition: "opacity .7s ease, transform .8s cubic-bezier(.16,1,.3,1)" }}>
      <span aria-hidden="true" style={{ position: "absolute", top: "-0.18em", left: 12, fontFamily: theme.fontDisplay,
        fontSize: "clamp(96px,13vw,180px)", lineHeight: 1, color: theme.accent, opacity: 0.14,
        pointerEvents: "none" }}>“</span>
      <blockquote style={{ margin: 0, position: "relative", fontFamily: theme.fontDisplay, fontWeight: 400,
        fontSize: "clamp(21px,2.5vw,36px)", lineHeight: 1.28, letterSpacing: "-0.01em", color: theme.ink,
        maxWidth: 1040, textWrap: "pretty" }}>{text}</blockquote>
      {by && (
        <figcaption style={{ marginTop: 16, fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.14em",
          textTransform: "uppercase", color: theme.accent }}>— {by}</figcaption>
      )}
    </figure>
  );
}

// Weave quotes between photos: one quote after every two photos, remainder appended.
function weaveGallery(gallery, quotes) {
  const g = [...(gallery || [])];
  const q = [...(quotes || [])];
  const out = [];
  let n = 0;
  while (g.length) {
    out.push({ type: "photo", label: g.shift() });
    n++;
    if (n % 2 === 0 && q.length) out.push({ type: "quote", q: q.shift() });
  }
  while (q.length) out.push({ type: "quote", q: q.shift() });
  return out;
}

function MiniPlayer({ theme, label }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px",
      background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 3 }}>
      <button onClick={() => setPlaying((p) => !p)} style={{ width: 46, height: 46, borderRadius: 999,
        cursor: "pointer", flexShrink: 0, background: theme.accent, color: theme.dark ? "#15130f" : "#faf7f0",
        border: "none", fontSize: 16 }}>{playing ? "❚❚" : "▶"}</button>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: theme.fontMono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
          color: theme.muted, marginBottom: 7 }}>{label} · {playing ? "now playing" : "Spotify playlist"}</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 26 }}>
          {Array.from({ length: 22 }).map((_, b) => (
            <div key={b} style={{ width: 3, background: theme.accent, borderRadius: 2, height: playing ? undefined : 5,
              animation: playing ? `eqbar ${0.7 + (b % 5) * 0.1}s ease-in-out ${b * 0.05}s infinite alternate` : "none" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WaitlistModal({ theme, onClose, cfg }) {
  const c = cfg || {};
  const action = c.action || "https://assets.mailerlite.com/jsonp/2464597/forms/191040686694335815/subscribe";
  const headline = c.headline || "Be first to the Deserts.";
  const sub = c.sub || "One-of-a-kind scarves, released in small batches. Get the early word.";
  const successTitle = c.successTitle || "Noted.";
  const successBody = c.successBody || "We\u2019ll email the list before it goes public.";
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(true);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const formRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const warm = theme.dark ? theme.surface : "#fbfcf2";
  const blueSoft = `color-mix(in oklch, ${theme.accent} ${theme.dark ? "30%" : "16%"}, ${warm})`;
  const submit = (e) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { e.preventDefault(); setErr("That email doesn\u2019t look right \u2014 try again?"); return; }
    if (!agree) { e.preventDefault(); setErr("Tick the box so we can email you the drop."); return; }
    // let the native POST go to the hidden iframe, then show success
    setErr("");
    setTimeout(() => setDone(true), 120);
  };
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 90, display: "flex",
      alignItems: "center", justifyContent: "center", padding: 24,
      background: theme.dark ? "oklch(0 0 0 / 0.6)" : "oklch(0.2 0.02 60 / 0.42)",
      backdropFilter: "blur(3px)", animation: "fadein 0.25s ease"
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        position: "relative", width: "min(460px, 94vw)", background: warm, color: theme.ink,
        border: `1px solid ${theme.line}`, borderRadius: 8, padding: "34px 34px 32px",
        boxShadow: theme.dark ? "0 40px 90px oklch(0 0 0 / 0.6)" : "0 40px 90px oklch(0.2 0.02 60 / 0.28)",
        animation: "panelin 0.3s cubic-bezier(0.16,1,0.3,1)"
      }}>
        <button onClick={onClose} aria-label="close" style={{
          position: "absolute", top: 16, right: 16, width: 32, height: 32, cursor: "pointer",
          background: "transparent", border: `1px solid ${theme.line}`, borderRadius: 999,
          color: theme.muted, fontSize: 15, lineHeight: 1
        }}>✕</button>

        {/* hidden target so the POST submits in place without leaving the page */}
        <iframe name="evrywhr_ml" title="" style={{ display: "none" }} />

        {done ? (
          <div style={{ padding: "8px 0 4px" }}>
            <h3 style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(28px,5vw,38px)",
              lineHeight: 1.0, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{successTitle}</h3>
            <p style={{ fontFamily: theme.fontBody, fontSize: 16, lineHeight: 1.55, color: theme.muted, margin: 0, textWrap: "pretty" }}>
              {successBody}</p>
            <button onClick={onClose} style={{ marginTop: 22, padding: "12px 22px", borderRadius: 999, border: "none",
              cursor: "pointer", background: theme.accent, color: "#fff", fontFamily: theme.fontMono, fontSize: 12,
              letterSpacing: "0.12em", textTransform: "uppercase" }}>Close</button>
          </div>
        ) : (
          <React.Fragment>
            <h3 style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(28px,5vw,40px)",
              lineHeight: 1.0, margin: "4px 0 10px", letterSpacing: "-0.01em" }}>{headline}</h3>
            <p style={{ fontFamily: theme.fontBody, fontSize: 15.5, lineHeight: 1.55, color: theme.muted, margin: "0 0 20px", textWrap: "pretty" }}>
              {sub}</p>
            <form ref={formRef} action={action}
              method="post" target="evrywhr_ml" onSubmit={submit}>
              <input aria-label="email" type="email" name="fields[email]" autoComplete="email" required
                value={email} onChange={(e) => { setEmail(e.target.value); setErr(""); }}
                placeholder="you@somewhere.earth"
                style={{ display: "block", width: "100%", boxSizing: "border-box", padding: "13px 15px",
                  fontFamily: theme.fontBody, fontSize: 15, color: theme.ink, background: theme.bg,
                  border: `1px solid ${err && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "#c0563f" : theme.line}`,
                  borderRadius: 8, outline: "none" }} />
              <label style={{ display: "flex", gap: 9, alignItems: "flex-start", margin: "14px 0 0", cursor: "pointer",
                fontFamily: theme.fontBody, fontSize: 13, lineHeight: 1.45, color: theme.muted }}>
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)}
                  style={{ marginTop: 2, accentColor: theme.accent, width: 15, height: 15, flexShrink: 0 }} />
                <span>Opt in to receive news and updates. No spam, just the occasional dispatch.</span>
              </label>
              {err && <div style={{ marginTop: 12, fontFamily: theme.fontMono, fontSize: 11.5, letterSpacing: "0.04em", color: "#c0563f" }}>{err}</div>}
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />
              <button type="submit" style={{ marginTop: 20, width: "100%", padding: "14px", borderRadius: 999, border: "none",
                cursor: "pointer", background: theme.accent, color: "#fff", fontFamily: theme.fontMono, fontSize: 12.5,
                letterSpacing: "0.14em", textTransform: "uppercase" }}>Join the waitlist</button>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function ProjectTop({ p, d, theme, playing, onPlay }) {
  const [waitOpen, setWaitOpen] = useState(false);
  const summary = d.intro || d.tagline || (d.body && d.body[0]) || p.blurb || "";
  const cells = [["Work", d.role], ["Location", d.location]];
  const lineStrong = `color-mix(in oklch, ${theme.ink} 26%, transparent)`;
  return (
    <div className="proj-top" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.58fr) minmax(0,1.42fr)",
      gap: "clamp(30px,4vw,72px)", alignItems: "center", margin: "clamp(26px,4vw,52px) 0 0" }}>
      <div className="proj-top-info">
        {d.logo
          ? <h1 style={{ margin: 0 }}><img src={d.logo} alt={p.name}
              style={{ display: "block", width: "clamp(220px,80%,420px)", height: "auto" }} /></h1>
          : <h1 style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(25px,2.7vw,42px)",
              lineHeight: 1.06, letterSpacing: "-0.015em", margin: 0, textWrap: "balance" }}>{p.name}</h1>}
        {summary && (
          <p style={{ fontFamily: theme.fontBody, fontSize: "clamp(14px,1.05vw,16px)", lineHeight: 1.6,
            color: theme.muted, margin: "clamp(16px,1.8vw,22px) 0 0", maxWidth: 380, textWrap: "pretty" }}>{summary}</p>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(18px,2.4vw,32px)",
          margin: "clamp(22px,2.8vw,32px) 0 0", maxWidth: 430 }}>
          {cells.map(([k, v]) => (
            <div key={k} style={{ borderTop: `1px solid ${theme.line}`, paddingTop: 13 }}>
              <div style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase",
                color: theme.muted, marginBottom: 9 }}>{k}</div>
              <div style={{ fontFamily: theme.fontBody, fontSize: 13, lineHeight: 1.45, color: theme.ink }}>{v}</div>
            </div>
          ))}
        </div>
        {(d.youtube || d.watch) && (
          <button className="ev-watch"
            onClick={() => {
              if (d.youtube) { window.open(`https://www.youtube.com/watch?v=${d.youtube}`, "_blank", "noopener"); return; }
              const wl = d.waitlist || {};
              if (wl.popup && typeof window.ml === "function") {
                try { window.ml("show", wl.popup, true); } catch (e) {}
                setTimeout(() => {
                  if (!document.querySelector('.ml-form-embedContainer, .ml-form-popup, iframe[src*="mailerlite"]')) setWaitOpen(true);
                }, 1100);
              } else { setWaitOpen(true); }
            }}
            style={{ display: "inline-flex", alignItems: "center", gap: 11, marginTop: "clamp(22px,2.8vw,34px)",
              padding: "14px 26px", borderRadius: 999, border: `1px solid ${lineStrong}`, background: "transparent",
              cursor: "pointer", fontFamily: theme.fontMono, fontSize: 12, letterSpacing: "0.14em",
              textTransform: "uppercase", color: theme.ink, transition: "border-color .2s ease, color .2s ease" }}>
            {d.youtube && <span style={{ color: theme.accent, fontSize: 13 }}>▷</span>}
            <span>{d.youtube ? "Watch on YouTube" : d.watch}</span></button>
        )}
      </div>
      <div className="proj-top-media">
        {d.youtube
          ? <FilmPlayer id={d.youtube} theme={theme} title={p.name} playing={playing} onPlay={onPlay} poster={d.cover} />
          : (d.cover
              ? <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 3,
                  overflow: "hidden", border: `1px solid ${theme.line}`, background: "#000" }}>
                  <img src={d.cover} alt={p.name} loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: d.coverPos || "center" }} />
                </div>
              : <Placeholder label={d.hasVideo ? "▷  WATCH · FILM" : "PHOTO SERIES"} theme={theme} ratio="16 / 9" />)}
      </div>
      {waitOpen && <WaitlistModal theme={theme} cfg={d.waitlist} onClose={() => setWaitOpen(false)} />}
    </div>
  );
}

function FilmsScroll({ films, theme, onOpen }) {
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const overTrack = useRef(false);
  const [progress, setProgress] = useState(0);
  const CARD_H = 210, GAP = 16, ZOOM = 1.06;

  const onScroll = useCallback(() => {
    const el = trackRef.current; if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  // drag to scroll with light inertia + click suppression after a drag
  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    let down = false, sx = 0, sl = 0, lastX = 0, vx = 0, lastT = 0, raf = 0, moved = false;
    const glide = () => {
      if (Math.abs(vx) < 0.2) return;
      el.scrollLeft += vx; vx *= 0.93; raf = requestAnimationFrame(glide);
    };
    const onDown = (e) => { down = true; moved = false; sx = e.clientX; sl = el.scrollLeft; lastX = e.clientX; lastT = performance.now(); vx = 0; cancelAnimationFrame(raf); };
    const onMove = (e) => {
      if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; el.scrollLeft = sl - dx;
      const now = performance.now(), dt = now - lastT; if (dt > 0) vx = -(e.clientX - lastX) / dt * 16; lastX = e.clientX; lastT = now;
    };
    const onUp = () => { if (!down) return; down = false; raf = requestAnimationFrame(glide); };
    const onClickCapture = (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClickCapture, true);
    return () => { el.removeEventListener("pointerdown", onDown); window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp); el.removeEventListener("click", onClickCapture, true); cancelAnimationFrame(raf); };
  }, []);

  // keyboard arrows (only while pointer is over the track)
  useEffect(() => {
    const onKey = (e) => {
      if (!overTrack.current) return;
      const el = trackRef.current; if (!el) return;
      const step = (el.querySelector(".gede-films-card")?.offsetWidth || 380) + GAP;
      if (e.key === "ArrowRight") { el.scrollBy({ left: step, behavior: "smooth" }); }
      if (e.key === "ArrowLeft") { el.scrollBy({ left: -step, behavior: "smooth" }); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const nudge = (dir) => {
    const el = trackRef.current; if (!el) return;
    const step = (el.querySelector(".gede-films-card")?.offsetWidth || 380) + GAP;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  const atStart = progress <= 0.001, atEnd = progress >= 0.999;
  const onBar = (e) => {
    const el = trackRef.current, bar = barRef.current; if (!el || !bar) return;
    const r = bar.getBoundingClientRect(); const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    el.scrollLeft = p * (el.scrollWidth - el.clientWidth);
  };

  return (
    <div>
      <style>{`
        .gede-films-card{cursor:pointer}
        .gede-films-track{scrollbar-width:none;-ms-overflow-style:none}
        .gede-films-track::-webkit-scrollbar{display:none;height:0}
        .gede-films-card:hover .gede-films-img{transform:scale(${ZOOM}) !important}
        .gede-films-arrow{transition:transform .2s}
        .gede-films-arrow:not(:disabled):hover{transform:translateY(-2px)}
      `}</style>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <Eyebrow theme={theme}>Where would you like to go?</Eyebrow>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => nudge(-1)} disabled={atStart} aria-label="Previous" className="gede-films-arrow"
            style={{ width: 42, height: 42, borderRadius: 999, border: `1px solid ${theme.line}`, background: theme.surface,
              cursor: atStart ? "default" : "pointer", opacity: atStart ? 0.4 : 1, display: "grid", placeItems: "center", color: theme.ink }}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button onClick={() => nudge(1)} disabled={atEnd} aria-label="Next" className="gede-films-arrow"
            style={{ width: 42, height: 42, borderRadius: 999, border: "none", background: theme.accent,
              cursor: atEnd ? "default" : "pointer", opacity: atEnd ? 0.4 : 1, display: "grid", placeItems: "center", color: "#fff" }}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
      <div ref={trackRef} className="gede-films-track" onScroll={onScroll}
        onMouseEnter={() => { overTrack.current = true; }} onMouseLeave={() => { overTrack.current = false; }}
        style={{ display: "flex", alignItems: "flex-start", gap: GAP, overflowX: "auto", overflowY: "hidden",
          marginTop: 18, paddingBottom: 4 }}>
        {films.map((f) => {
          const det = window.EVRYWHR.PROJECT_DETAIL[f.id] || {};
          const cover = det.cover || (det.youtube ? `https://i.ytimg.com/vi/${det.youtube}/hqdefault.jpg` : null);
          return (
            <button key={f.id} className="gede-films-card" onClick={() => onOpen(f.id)}
              style={{ flex: "0 0 auto", textAlign: "left", background: "transparent", border: "none", padding: 0,
                color: "inherit", display: "block" }}>
              <div style={{ position: "relative", height: CARD_H, aspectRatio: "16 / 9", overflow: "hidden",
                borderRadius: 4, background: "#000", border: `1px solid ${theme.line}` }}>
                <img src={cover} alt={f.name} draggable="false" className="gede-films-img" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
                    transform: "scale(1)", transition: "transform .9s cubic-bezier(.16,1,.3,1)" }} />
              </div>
              <div style={{ marginTop: 14, maxWidth: `calc(${CARD_H}px * 16 / 9)` }}>
                <div style={{ fontFamily: theme.fontDisplay, fontSize: "clamp(18px,1.5vw,24px)", fontWeight: 400,
                  lineHeight: 1.12, letterSpacing: "-0.01em", color: theme.ink, textWrap: "pretty" }}>{f.name}</div>
              </div>
            </button>
          );
        })}
        <div style={{ flex: "0 0 1px" }} />
      </div>
      <div style={{ marginTop: 24 }}>
        <div ref={barRef}
          onPointerDown={(e) => { onBar(e); const mv = (ev) => onBar(ev); const up = () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); }; window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up); }}
          style={{ position: "relative", height: 2, background: theme.line, borderRadius: 2, cursor: "pointer" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${Math.max(6, progress * 100)}%`,
            background: theme.accent, borderRadius: 2, transition: "width .08s linear" }} />
        </div>
        <div style={{ marginTop: 12, fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.16em",
          textTransform: "uppercase", color: theme.muted }}>Use ← → · drag · or the arrows</div>
      </div>
    </div>
  );
}

function ProjectDetail({ id, theme, onBack, onOpen }) {
  const p = window.EVRYWHR.PROJECTS.find((x) => x.id === id);
  const d = window.EVRYWHR.PROJECT_DETAIL[id];
  const list = window.EVRYWHR.PROJECTS;
  const isChannel = p.seriesRole === "channel";
  const isEpisode = p.series === "gede" && !isChannel;
  const channel = list.find((x) => x.seriesRole === "channel");
  const films = list.filter((x) => x.series === "gede" && x.seriesRole !== "channel");
  const standalone = list.filter((x) => !x.series);
  const related = isChannel
    ? standalone
    : isEpisode
      ? [...films.filter((f) => f.id !== id), ...standalone].slice(0, 3)
      : [channel, ...standalone.filter((x) => x.id !== id)].filter(Boolean).slice(0, 3);
  const [playing, setPlaying] = useState(false);
  useEffect(() => { setPlaying(false); }, [id]);
  if (!p || !d) return null;
  const meta = [["Work", d.role], ["Location", d.location]];
  return (
    <div style={{ padding: "clamp(24px,4vw,46px) var(--pad) 60px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        {isEpisode && channel
          ? <BackLink theme={theme} onClick={() => onOpen(channel.id)} label={channel.name} />
          : <BackLink theme={theme} onClick={onBack} label="All projects" />}
      </div>
      {isChannel && d.logo ? (
        <div className="proj-top" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.58fr) minmax(0,1.42fr)",
          gap: "clamp(30px,4vw,72px)", alignItems: "center", margin: "clamp(26px,4vw,52px) 0 0" }}>
          <div className="proj-top-info">
            <p style={{ fontFamily: theme.fontBody, fontSize: "clamp(14px,1.05vw,16px)", lineHeight: 1.6,
              color: theme.muted, margin: 0, maxWidth: 380, textWrap: "pretty" }}>{d.body[0]}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(18px,2.4vw,32px)",
              margin: "clamp(22px,2.8vw,32px) 0 0", maxWidth: 430 }}>
              {meta.map(([k, v]) => (
                <div key={k} style={{ borderTop: `1px solid ${theme.line}`, paddingTop: 13 }}>
                  <div style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase",
                    color: theme.muted, marginBottom: 9 }}>{k}</div>
                  <div style={{ fontFamily: theme.fontBody, fontSize: 13, lineHeight: 1.45, color: theme.ink }}>{v}</div>
                </div>
              ))}
            </div>
            <div className="gede-social" style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "clamp(22px,2.8vw,34px)" }}>
              <a href="https://www.youtube.com/@go_everywhere_do_everything" target="_blank" rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); window.open("https://www.youtube.com/@go_everywhere_do_everything", "_blank", "noopener"); }}
                aria-label="YouTube" title="YouTube" className="gede-soc"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46,
                  borderRadius: 999, border: `1px solid ${theme.line}`, color: theme.ink, textDecoration: "none",
                  transition: "background .2s ease, color .2s ease, border-color .2s ease" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#FF0033" d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5z" />
                  <path fill="#fff" d="M9.8 15.3V8.7l5.7 3.3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/goeverywhere_doeverything/" target="_blank" rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); window.open("https://www.instagram.com/goeverywhere_doeverything/", "_blank", "noopener"); }}
                aria-label="Instagram" title="Instagram" className="gede-soc"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46,
                  borderRadius: 999, border: `1px solid ${theme.line}`, color: theme.ink, textDecoration: "none",
                  transition: "background .2s ease, color .2s ease, border-color .2s ease" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="url(#igGrad)" strokeWidth="1.9">
                  <defs>
                    <linearGradient id="igGrad" x1="1" y1="1" x2="0" y2="0">
                      <stop offset="0" stopColor="#feda75" />
                      <stop offset="0.35" stopColor="#fa7e1e" />
                      <stop offset="0.6" stopColor="#d62976" />
                      <stop offset="0.8" stopColor="#962fbf" />
                      <stop offset="1" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                  <rect x="2.3" y="2.3" width="19.4" height="19.4" rx="5.4" />
                  <circle cx="12" cy="12" r="4.3" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="url(#igGrad)" stroke="none" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@go3verywheredo3verything" target="_blank" rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); window.open("https://www.tiktok.com/@go3verywheredo3verything", "_blank", "noopener"); }}
                aria-label="TikTok" title="TikTok" className="gede-soc"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46,
                  borderRadius: 999, border: `1px solid ${theme.line}`, color: theme.ink, textDecoration: "none",
                  transition: "background .2s ease, color .2s ease, border-color .2s ease" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path transform="translate(-0.9,0.9)" fill="#25F4EE" d="M16.5 3c.32 2.06 1.62 3.68 3.6 3.94v2.86c-1.3.04-2.58-.34-3.66-1.06l-.02 6.1a5.62 5.62 0 1 1-5.62-5.62c.3 0 .6.02.88.07v2.94a2.72 2.72 0 1 0 1.94 2.6V3h2.9z" />
                  <path transform="translate(0.9,-0.9)" fill="#FE2C55" d="M16.5 3c.32 2.06 1.62 3.68 3.6 3.94v2.86c-1.3.04-2.58-.34-3.66-1.06l-.02 6.1a5.62 5.62 0 1 1-5.62-5.62c.3 0 .6.02.88.07v2.94a2.72 2.72 0 1 0 1.94 2.6V3h2.9z" />
                  <path fill={theme.ink} d="M16.5 3c.32 2.06 1.62 3.68 3.6 3.94v2.86c-1.3.04-2.58-.34-3.66-1.06l-.02 6.1a5.62 5.62 0 1 1-5.62-5.62c.3 0 .6.02.88.07v2.94a2.72 2.72 0 1 0 1.94 2.6V3h2.9z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="proj-top-media" style={{ display: "flex", justifyContent: "center", alignItems: "center",
            aspectRatio: "2.4 / 1", borderRadius: 3, border: `1px solid ${theme.line}`,
            background: `color-mix(in oklch, ${theme.ink} 3%, transparent)`, padding: "clamp(16px,3%,32px)" }}>
            <img src={d.logo} alt={p.name} style={{ display: "block", width: "clamp(220px,72%,420px)", maxHeight: "100%", height: "auto" }} />
          </div>
        </div>
      ) : (
        <ProjectTop p={p} d={d} theme={theme} playing={playing} onPlay={() => setPlaying(true)} />
      )}

      {/* channel: the films */}
      {isChannel && films.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <FilmsScroll films={films} theme={theme} onOpen={onOpen} />
        </div>
      )}

      {/* woven editorial flow (Moscow-style) */}
      {d.mosaic && d.mosaic.length > 0
        ? <FlowMosaic tiles={d.mosaic} shorts={d.shorts || []} theme={theme} />
        : d.flow && d.flow.length > 0 && <FlowStory flow={d.flow} shorts={d.shorts || []} theme={theme} />}

      {/* body + side */}
      {!isChannel && !d.flow && !d.mosaic && d.body && d.body.length > 0 && (
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "clamp(24px,5vw,70px)", marginTop: 38 }} className="detail-grid">
        <div>
          {d.body.map((para, i) => (
            <p key={i} style={{ fontFamily: theme.fontBody, fontSize: 19, lineHeight: 1.62, margin: "0 0 18px",
              color: i === 0 ? theme.ink : theme.muted, textWrap: "pretty" }}>{para}</p>
          ))}
          <div style={{ marginTop: 8 }}>
            {d.watch && (d.youtube
              ? <Btn theme={theme} kind="solid" onClick={() => setPlaying(true)}>{d.watch} →</Btn>
              : <Btn theme={theme} kind="solid" href="#">{d.watch} →</Btn>)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {d.hasPlaylist && <MiniPlayer theme={theme} label={`${p.name} playlist`} />}
          {d.note && (
            <div style={{ padding: "20px 22px", background: theme.surface, border: `1px solid ${theme.line}`,
              borderRadius: 3, borderLeft: `2px solid ${theme.accent}` }}>
              <div style={{ fontFamily: theme.fontMono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
                color: theme.accent, marginBottom: 10 }}>From the field</div>
              <p style={{ fontFamily: theme.fontBody, fontSize: 16, lineHeight: 1.55, fontStyle: "italic",
                margin: 0, color: theme.ink, textWrap: "pretty" }}>{d.note}</p>
            </div>
          )}
          {d.hasShop && (
            <div style={{ padding: "20px 22px", background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 3 }}>
              <div style={{ fontFamily: theme.fontMono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
                color: theme.accent, marginBottom: 8 }}>In the shop soon</div>
              <p style={{ fontFamily: theme.fontBody, fontSize: 15.5, lineHeight: 1.5, margin: 0, color: theme.muted }}>
                The Deserts collection — one-of-one chiffon scarves. Join the waitlist.</p>
            </div>
          )}
        </div>
      </div>
      )}

      {/* releases (Spotify) */}
      {d.releases && d.releases.length > 0 && !d.flow && !d.mosaic && (
        <SpotifyReleases releases={d.releases} theme={theme} />
      )}

      {/* featured pull quote */}
      {d.pullquote && !d.flow && !d.mosaic && (
        <figure style={{ margin: "clamp(48px,7vw,86px) 0 0", borderTop: `1px solid ${theme.line}`, paddingTop: "clamp(34px,5vw,56px)", textAlign: "center" }}>
          <blockquote style={{ margin: "0 auto", maxWidth: 1040, fontFamily: theme.fontDisplay, fontWeight: 400,
            fontSize: "clamp(26px,3.6vw,50px)", lineHeight: 1.16, letterSpacing: "0.005em", color: theme.ink, textWrap: "balance" }}>
            <span style={{ color: theme.accent2 }}>“</span>{d.pullquote}<span style={{ color: theme.accent2 }}>”</span>
          </blockquote>
        </figure>
      )}

      {/* origin story */}
      {d.story && d.story.length > 0 && !d.flow && !d.mosaic && (
        <div style={{ marginTop: "clamp(48px,7vw,82px)" }}>
          <Eyebrow theme={theme}>{d.storyTitle || "The story"}</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)",
            gap: "clamp(24px,4vw,56px)", alignItems: "start", marginTop: 20 }} className="story-grid">
            <figure style={{ margin: 0, position: "sticky", top: 70 }} className="story-figure">
              {d.portrait && (
                <img src={d.portrait} alt="Stas and Nick" loading="lazy" style={{ width: "100%", display: "block",
                  borderRadius: 3, border: `1px solid ${theme.line}`, objectFit: "cover" }} />
              )}
              <figcaption style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.14em",
                textTransform: "uppercase", color: theme.muted, marginTop: 10 }}>Stas &amp; Nick · the field</figcaption>
            </figure>
            <div>
              {d.story.map((para, i) => {
                // Rich Option-05 treatment: para can be a string, {beat}, or {p:[segs], drop}
                if (para && para.beat) {
                  return (
                    <p key={i} style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: 30,
                      lineHeight: 1.16, color: theme.accent, margin: "34px 0", maxWidth: 520, textWrap: "pretty" }}>{para.beat}</p>
                  );
                }
                const segs = para && para.p ? para.p : [para];
                const isDrop = !!(para && para.drop);
                return (
                  <p key={i} className={isDrop ? "story-drop" : undefined} style={{ fontFamily: theme.fontBody,
                    fontSize: 17.5, lineHeight: 1.7, margin: "0 0 20px", color: theme.ink, textWrap: "pretty" }}>
                    {segs.map((seg, j) => {
                      if (typeof seg === "string") return <React.Fragment key={j}>{seg}</React.Fragment>;
                      if (seg.aside) return <span key={j} style={{ color: theme.muted }}>{seg.aside}</span>;
                      if (seg.mark) return <mark key={j} style={{ background: `linear-gradient(transparent 60%, ${theme.accent2Fill} 60%)`,
                        color: "inherit", padding: "0 1px" }}>{seg.mark}</mark>;
                      return null;
                    })}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* short-form videos */}
      {d.shorts && d.shorts.length > 0 && !d.flow && !d.mosaic && <ShortsRow shorts={d.shorts} theme={theme} />}

      {/* gallery + woven quotes */}
      {!d.flow && !d.mosaic && ((d.gallery && d.gallery.length > 0) || (d.quotes && d.quotes.length > 0)) && (
        <div style={{ marginTop: 50 }}>
          <Eyebrow theme={theme}>Selects</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16, marginTop: 16 }}>
            {weaveGallery(d.gallery, d.quotes).map((item, i) =>
              item.type === "quote"
                ? <PullQuote key={"q" + i} quote={item.q} theme={theme} />
                : <Placeholder key={"g" + i} label={item.label} theme={theme} ratio={i % 3 === 0 ? "3 / 4" : "4 / 3"} />
            )}
          </div>
        </div>
      )}

      {/* next projects */}
      <div style={{ marginTop: 64, borderTop: `1px solid ${theme.line}`, paddingTop: 28 }}>
        <Eyebrow theme={theme}>{isEpisode ? "More from the channel" : isChannel ? "Elsewhere in the studio" : "Keep wandering"}</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 28, marginTop: 18 }}>
          {related.map((o, i) => <ProjectCard key={o.id} p={o} i={i} theme={theme} onOpen={onOpen} />)}
        </div>
      </div>
    </div>
  );
}

function MozTile({ tile, shorts, theme }) {
  const style = { gridColumn: `span ${tile.c}`, gridRow: `span ${tile.r}`, overflow: "hidden", borderRadius: 2 };
  if (tile.t === "photo") {
    return (
      <figure className="moz-ph" style={{ ...style, margin: 0, position: "relative", background: "#000" }}>
        <img src={tile.src} alt={tile.alt || ""} loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: tile.pos || "center", display: "block" }} />
        {tile.caption && (
          <figcaption style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "30px 13px 11px",
            fontFamily: theme.fontMono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#fff", background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.62))",
            pointerEvents: "none" }}>{tile.caption}</figcaption>
        )}
      </figure>
    );
  }
  if (tile.t === "short") {
    return <div style={{ ...style, background: "#000" }}><ShortCard short={shorts[tile.i]} theme={theme} fill /></div>;
  }
  if (tile.t === "lead") {
    return (
      <div style={{ ...style, display: "flex", alignItems: "center", padding: "clamp(14px,1.8vw,30px)",
        background: theme.surface }}>
        <p style={{ margin: 0, fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(18px,2vw,31px)",
          lineHeight: 1.28, letterSpacing: "-0.005em", color: theme.ink, textWrap: "pretty" }}>{tile.text}</p>
      </div>
    );
  }
  if (tile.t === "quote") {
    const onAcc = tile.bg === "accent";
    const mark = onAcc ? theme.onAccent2 : theme.accent2;
    return (
      <div style={{ ...style, display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "clamp(16px,1.9vw,32px)", background: onAcc ? theme.accent2Fill : theme.surface2,
        color: onAcc ? theme.onAccent2 : theme.ink }}>
        <blockquote style={{ margin: 0, fontFamily: theme.fontDisplay, fontWeight: 400,
          fontSize: "clamp(16px,1.7vw,27px)", lineHeight: 1.22, textWrap: "pretty" }}>
          <span style={{ color: mark, opacity: 0.85 }}>“</span>{tile.q}<span style={{ color: mark, opacity: 0.85 }}>”</span>
        </blockquote>
        {tile.by && (
          <span style={{ marginTop: 14, fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.14em",
            textTransform: "uppercase", opacity: 0.7 }}>— {tile.by}</span>
        )}
      </div>
    );
  }
  return null;
}

function FlowMosaic({ tiles, shorts, theme }) {
  return (
    <div className="moz" style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)",
      gridAutoRows: "var(--mozr)", gridAutoFlow: "row dense", gap: 6, marginTop: "clamp(22px,3vw,40px)",
      "--mozr": "clamp(38px,4.4vw,60px)" }}>
      {tiles.map((t, i) => <MozTile key={i} tile={t} shorts={shorts} theme={theme} />)}
    </div>
  );
}

// ---- Woven editorial flow (photos + quotes + shorts in one scroll) ----------
function FlowCaption({ text, theme, pad }) {
  if (!text) return null;
  return (
    <figcaption style={{ padding: pad ? "12px var(--pad) 0" : 0, marginTop: pad ? 0 : 10,
      fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
      color: theme.muted }}>{text}</figcaption>
  );
}

function FlowQuote({ q, by, theme, plain }) {
  return (
    <figure style={{ margin: plain ? 0 : "clamp(50px,7vw,96px) 0 0", textAlign: plain ? "left" : "center" }}>
      <blockquote style={{ margin: plain ? 0 : "0 auto", maxWidth: plain ? "none" : 1040,
        fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: plain ? "clamp(24px,2.6vw,36px)" : "clamp(26px,3.6vw,50px)",
        lineHeight: 1.18, letterSpacing: "0.004em", color: theme.ink, textWrap: "balance" }}>
        <span style={{ color: theme.accent2 }}>“</span>{q}<span style={{ color: theme.accent2 }}>”</span>
      </blockquote>
      {by && (
        <figcaption style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
          color: theme.muted, marginTop: plain ? 16 : 20 }}>— {by}</figcaption>
      )}
    </figure>
  );
}

function FlowBlock({ b, shorts, theme }) {
  const topGap = "clamp(44px,6vw,92px)";
  if (b.type === "lead") {
    return (
      <p style={{ maxWidth: 800, margin: "clamp(30px,4vw,52px) 0 0", fontFamily: theme.fontDisplay, fontWeight: 400,
        fontSize: "clamp(22px,2.5vw,34px)", lineHeight: 1.34, letterSpacing: "-0.005em", color: theme.ink,
        textWrap: "pretty" }}>{b.text}</p>
    );
  }
  if (b.type === "say") {
    return (
      <p style={{ maxWidth: 760, margin: `${topGap} 0 0`, fontFamily: theme.fontBody, fontSize: "clamp(17px,1.4vw,20px)",
        lineHeight: 1.62, color: theme.muted, textWrap: "pretty" }}>{b.text}</p>
    );
  }
  if (b.type === "quote") {
    return <FlowQuote q={b.q} by={b.by} theme={theme} />;
  }
  if (b.type === "full") {
    return (
      <figure style={{ margin: `${topGap} 0 0`, marginLeft: "calc(-1 * var(--pad))", marginRight: "calc(-1 * var(--pad))" }}>
        <img src={b.src} alt={b.alt || ""} loading="lazy"
          style={{ width: "100%", display: "block", maxHeight: "88vh", objectFit: "cover", background: "#000" }} />
        <FlowCaption text={b.caption} theme={theme} pad />
      </figure>
    );
  }
  if (b.type === "portrait") {
    return (
      <figure style={{ margin: `${topGap} auto 0`, maxWidth: 640 }}>
        <img src={b.src} alt={b.alt || ""} loading="lazy"
          style={{ width: "100%", display: "block", borderRadius: 3, border: `1px solid ${theme.line}` }} />
        <FlowCaption text={b.caption} theme={theme} />
      </figure>
    );
  }
  if (b.type === "split") {
    const photoRight = b.side === "photo-right";
    const photo = (
      <figure style={{ margin: 0 }}>
        <img src={b.src} alt={b.alt || ""} loading="lazy"
          style={{ width: "100%", display: "block", maxHeight: 620, objectFit: "cover", borderRadius: 3,
            border: `1px solid ${theme.line}` }} />
        <FlowCaption text={b.caption} theme={theme} />
      </figure>
    );
    const aside = b.quote
      ? <FlowQuote q={b.quote} by={b.by} theme={theme} plain />
      : <p style={{ margin: 0, fontFamily: theme.fontBody, fontSize: "clamp(17px,1.4vw,20px)", lineHeight: 1.6,
          color: theme.muted, textWrap: "pretty" }}>{b.text}</p>;
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
        gap: "clamp(28px,5vw,64px)", alignItems: "center", margin: `${topGap} 0 0` }}>
        {photoRight ? <React.Fragment><div>{aside}</div>{photo}</React.Fragment>
                    : <React.Fragment>{photo}<div>{aside}</div></React.Fragment>}
      </div>
    );
  }
  if (b.type === "shortSplit") {
    const card = (
      <div style={{ width: "min(100%, 300px)", margin: "0 auto" }}>
        <ShortCard short={shorts[b.i]} theme={theme} />
      </div>
    );
    const text = (
      <div>
        {b.heading && (
          <div style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
            color: theme.accent, marginBottom: 12 }}>{b.heading}</div>
        )}
        <p style={{ margin: 0, fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(21px,2.2vw,30px)",
          lineHeight: 1.3, letterSpacing: "-0.005em", color: theme.ink, textWrap: "pretty" }}>{b.text}</p>
      </div>
    );
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
        gap: "clamp(28px,5vw,60px)", alignItems: "center", margin: `${topGap} 0 0` }}>
        {card}{text}
      </div>
    );
  }
  if (b.type === "shorts") {
    return (
      <div style={{ margin: `${topGap} 0 0`, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        {b.is.map((i) => (
          <div key={i} style={{ width: "clamp(220px,30vw,300px)" }}>
            <ShortCard short={shorts[i]} theme={theme} />
          </div>
        ))}
      </div>
    );
  }
  return null;
}

function FlowStory({ flow, shorts, theme }) {
  return <div>{flow.map((b, k) => <FlowBlock key={k} b={b} shorts={shorts} theme={theme} />)}</div>;
}

function useReleaseCover(id) {
  const [meta, setMeta] = useState(null);
  React.useEffect(() => {
    let alive = true;
    fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(`https://open.spotify.com/album/${id}`)}`)
      .then((r) => r.json())
      .then((j) => { if (alive && j) setMeta({ cover: j.thumbnail_url || "", title: j.title || "" }); })
      .catch(() => {});
    return () => { alive = false; };
  }, [id]);
  return meta;
}

// Clickable album cover — click promotes it into the player (hero) slot.
function ReleaseCover({ id, theme, big, active, onPlay }) {
  const meta = useReleaseCover(id);
  const [h, setH] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 4, overflow: "hidden",
      background: "#000", border: `1px solid ${active ? theme.accent : theme.line}` }}>
      <button onClick={onPlay} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        aria-label={`Play ${meta?.title || "release"}`}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", padding: 0, cursor: "pointer",
          background: meta ? "#000" : `repeating-linear-gradient(135deg, ${theme.line} 0 1px, transparent 1px 9px)`,
          display: "flex", alignItems: "center", justifyContent: "center" }}>
        {meta && meta.cover && (
          <img src={meta.cover} alt={meta.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              transform: h ? "scale(1.04)" : "none", transition: "transform .6s cubic-bezier(.16,1,.3,1)" }} />
        )}
        <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.46))",
          opacity: h ? 1 : 0.5, transition: "opacity .3s ease" }} />
        {meta && meta.title && (
          <span style={{ position: "absolute", left: big ? 16 : 11, right: big ? 16 : 11, bottom: big ? 14 : 10, textAlign: "left",
            fontFamily: theme.fontBody, fontSize: big ? 13 : 11, fontWeight: 500, letterSpacing: ".02em", color: "#f7f4ee",
            textShadow: "0 1px 8px rgba(0,0,0,.7)", opacity: h ? 1 : 0.92, transition: "opacity .3s",
            overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{meta.title}</span>
        )}
        <span style={{ position: "relative", width: big ? 72 : 52, height: big ? 72 : 52, borderRadius: 999, background: theme.accent,
          color: theme.dark ? "#15130f" : "#faf7f0", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: big ? 26 : 19, paddingLeft: 3, transform: h ? "scale(1.08)" : "none",
          transition: "transform .25s cubic-bezier(.16,1,.3,1)", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>▶</span>
      </button>
    </div>
  );
}

// The single Spotify player — only ever rendered in the large hero cell, where
// there is room for Spotify's full layout (cover + tracklist + play button).
function ReleasePlayer({ id, theme }) {
  const meta = useReleaseCover(id);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 4, overflow: "hidden",
      background: "#000", border: `1px solid ${theme.accent}` }}>
      <iframe title={meta?.title || "SCOBY release"} loading="lazy"
        src={`https://open.spotify.com/embed/album/${id}?utm_source=generator`}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
    </div>
  );
}

function SpotifyReleases({ releases, theme }) {
  const [active, setActive] = useState(releases[0] && releases[0].id);
  const [playing, setPlaying] = useState(false);
  const others = releases.filter((r) => r.id !== active);
  const pick = (id) => { setActive(id); setPlaying(true); };
  return (
    <div style={{ marginTop: "clamp(44px,6vw,76px)" }}>
      <style>{`
        .scoby-mosaic{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;gap:10px}
        .scoby-mosaic .scoby-hero{grid-column:span 2;grid-row:span 2}
        @media (max-width:680px){.scoby-mosaic{grid-template-columns:repeat(2,1fr)}}
      `}</style>
      <Eyebrow theme={theme}>Listen to SCOBY</Eyebrow>
      <p style={{ margin: "12px 0 22px", maxWidth: 640, fontFamily: theme.fontBody, fontSize: "clamp(15px,1.2vw,17px)",
        lineHeight: 1.55, color: theme.muted, textWrap: "pretty" }}>
        Alongside the set, we shot the album and single cover photography for SCOBY's releases.</p>
      <div className="scoby-mosaic">
        <div className="scoby-hero" style={{ aspectRatio: "1/1" }}>
          {playing
            ? <ReleasePlayer id={active} theme={theme} />
            : <ReleaseCover id={active} theme={theme} big active onPlay={() => setPlaying(true)} />}
        </div>
        {others.map((r) => (
          <div key={r.id} style={{ aspectRatio: "1/1" }}>
            <ReleaseCover id={r.id} theme={theme} onPlay={() => pick(r.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ShortsRow({ shorts, theme }) {
  return (
    <div style={{ marginTop: 50 }}>
      <Eyebrow theme={theme}>Shorts</Eyebrow>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 16, marginTop: 16 }}>
        {shorts.map((s, i) => <ShortCard key={i} short={s} theme={theme} />)}
      </div>
    </div>
  );
}

function ShortCard({ short, theme, fill }) {
  const isIG = /instagram\.com/.test(short.url || "");
  const igCode = isIG ? ((short.url.match(/\/reel\/([^/?#]+)/) || short.url.match(/\/p\/([^/?#]+)/) || [])[1] || "") : "";
  const [h, setH] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(null);
  const [vid, setVid] = useState(short.id || "");
  React.useEffect(() => {
    if (isIG) return;
    let alive = true;
    fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(short.url)}`)
      .then((r) => r.json())
      .then((j) => {
        if (!alive || !j) return;
        if (j.thumbnail_url) setPoster(j.thumbnail_url);
        if (!short.id) {
          const id = j.embed_product_id || ((j.html || "").match(/data-video-id="(\d+)"/) || [])[1]
            || ((j.html || "").match(/\/video\/(\d+)/) || [])[1] || "";
          if (id) setVid(id);
        }
      })
      .catch(() => {});
    return () => { alive = false; };
  }, [short.url, short.id, isIG]);
  const wrap = { position: "relative", width: "100%", height: fill ? "100%" : undefined,
    aspectRatio: fill ? undefined : "9 / 16", overflow: "hidden", borderRadius: fill ? 0 : 3,
    border: fill ? "none" : `1px solid ${theme.line}`, background: "#000" };
  if (isIG) {
    return (
      <div style={wrap}>
        {playing ? (
          <iframe
            src={`https://www.instagram.com/reel/${igCode}/embed/`}
            title={short.label || "Instagram reel"} scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
        ) : (
          <button onClick={() => setPlaying(true)}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            aria-label={`Play ${short.label || "Instagram reel"}`}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", padding: 0,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              backgroundImage: `repeating-linear-gradient(135deg, ${theme.line} 0 1px, transparent 1px 9px)` }}>
            <span style={{ position: "relative", width: 56, height: 56, borderRadius: 999, background: theme.accent,
              color: theme.dark ? "#15130f" : "#faf7f0", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 19, paddingLeft: 4,
              transform: `scale(${h ? 1.08 : 1})`, transition: "transform .25s cubic-bezier(.16,1,.3,1)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}>▶</span>
            <span style={{ position: "absolute", left: 12, bottom: 11, fontFamily: theme.fontMono, fontSize: 9.5,
              letterSpacing: "0.14em", textTransform: "uppercase", color: theme.muted }}>Reel</span>
          </button>
        )}
      </div>
    );
  }
  return (
    <div style={wrap}>
      {playing ? (
        <iframe
          src={`https://www.tiktok.com/player/v1/${vid}?autoplay=1&music_info=0&description=0&rel=0`}
          title={short.label} allowFullScreen referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
      ) : (
        <button onClick={() => setPlaying(true)}
          onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
          aria-label={`Play ${short.label}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", padding: 0,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            backgroundImage: poster ? "none" : `repeating-linear-gradient(135deg, ${theme.line} 0 1px, transparent 1px 9px)` }}>
          {poster && (
            <React.Fragment>
              <img src={poster} alt={short.label} loading="lazy"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <span style={{ position: "absolute", inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.35))" }} />
            </React.Fragment>
          )}
          <span style={{ position: "relative", width: 56, height: 56, borderRadius: 999, background: theme.accent,
            color: theme.dark ? "#15130f" : "#faf7f0", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 19, paddingLeft: 4,
            transform: `scale(${h ? 1.08 : 1})`, transition: "transform .25s cubic-bezier(.16,1,.3,1)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}>▶</span>
        </button>
      )}
    </div>
  );
}

Object.assign(window, { ProjectsIndex, ProjectDetail });
