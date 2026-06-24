// EVRYWHR — Lore world. Draggable, floating fragments over a field you can wander.
const { useState, useRef, useEffect, useCallback } = React;

// Per-icon size multipliers (base 128px).
const LORE_SIZE = {
  origin: 1.18,
  crew: 1.7,
  manifesto: 1.18,
  frequencies: 0.82,
  rituals: 0.66,
};
// Hand-placed base layout (% of field) for a pleasing scatter; chaos spreads it.
const LORE_BASE = [
  { x: 15, y: 24 }, { x: 39, y: 32 }, { x: 65, y: 19 }, { x: 84, y: 38 },
  { x: 21, y: 48 }, { x: 47, y: 64 }, { x: 73, y: 63 }, { x: 35, y: 85 }
];

function seeded(i) { const s = Math.sin(i * 999.13) * 43758.5453; return s - Math.floor(s); }

// ---------- Animated equalizer for the Frequencies player --------------------
function Equalizer({ playing, color }) {
  const bars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 44 }}>
      {bars.map((b) => (
        <div key={b} style={{
          width: 4, background: color, borderRadius: 2,
          height: playing ? undefined : 6,
          animation: playing ? `eqbar 0.9s ease-in-out ${b * 0.08}s infinite alternate` : "none"
        }} />
      ))}
    </div>
  );
}

// ---------- Striped placeholder ---------------------------------------------
function Placeholder({ label, ratio, theme, height }) {
  return (
    <div style={{
      position: "relative", width: "100%",
      aspectRatio: ratio || "16 / 9", height,
      backgroundImage: `repeating-linear-gradient(135deg, ${theme.line} 0 1px, transparent 1px 9px)`,
      border: `1px solid ${theme.line}`, borderRadius: 2,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <span style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.12em",
        textTransform: "uppercase", color: theme.muted }}>{label}</span>
    </div>
  );
}

// ---------- Field Notes scrapbook card (paper undistorted; text auto-fits the opaque safe rect) ----
// Per-paper safe centered opaque rect (half-width, half-height as fraction of the paper box),
// measured from each PNG's alpha channel.
const FN_NOTE = [
  { paper: "pinkcard",     l: 0.13, r: 0.32, t: 0.22, b: 0.17, ff: "'Cormorant Garamond', serif", w: 700, lh: 1.16, start: 32 },
  { paper: "whitecard",    hw: 0.395, hh: 0.225, ff: "'Cormorant Garamond', serif",  w: 600,          lh: 1.18, start: 19 },
  { paper: "yellowsq",     hw: 0.425, hh: 0.415, ff: "'Special Elite', monospace",   w: 400,          lh: 1.46, start: 15 },
  { paper: "greenfold",    hw: 0.365, hh: 0.425, ff: "'Oswald', sans-serif",         w: 600, up: true, lh: 1.3,  start: 16 },
  { paper: "yellowtissue", hw: 0.235, hh: 0.19,  ff: "'Syne', sans-serif",           w: 800,          lh: 1.15, start: 19 },
  { paper: "lined",        hw: 0.455, hh: 0.465, ff: "'Hanken Grotesk', sans-serif", w: 500, it: true, lh: 1.46, start: 14 },
  { paper: "graph",        hw: 0.355, hh: 0.19,  ff: "'Caveat', cursive",            w: 600,          lh: 1.05, start: 25 },
  { paper: "kraft",        hw: 0.355, hh: 0.265, ff: "'Cormorant Garamond', serif",  w: 700,          lh: 1.18, start: 18 },
  { paper: "greenfold",    hw: 0.365, hh: 0.425, ff: "'Special Elite', monospace",   w: 400,          lh: 1.46, start: 14 }
];
const FN_ROT = [-2, 1.6, -1.2, 1.8, -1.6, 1.3, -1.8, 1.4, -1.1];

function FieldNote({ txt, idx }) {
  const cfg = FN_NOTE[idx];
  const ref = useRef(null);
  const [fs, setFs] = useState(cfg.start);
  const fit = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    let size = cfg.start;
    el.style.fontSize = size + "px";
    let guard = 0;
    while ((el.scrollHeight > el.clientHeight + 0.5 || el.scrollWidth > el.clientWidth + 0.5) && size > 9 && guard < 80) {
      size -= 0.5; el.style.fontSize = size + "px"; guard++;
    }
    setFs(size);
  }, [cfg.start, txt]);
  useEffect(() => {
    fit();
    const t = setTimeout(fit, 350); // re-fit once webfonts settle
    return () => clearTimeout(t);
  }, [fit]);
  const inset = (v) => `${(0.5 - v) * 100}%`;
  const box = {
    left: cfg.l != null ? `${cfg.l * 100}%` : inset(cfg.hw),
    right: cfg.r != null ? `${cfg.r * 100}%` : inset(cfg.hw),
    top: cfg.t != null ? `${cfg.t * 100}%` : inset(cfg.hh),
    bottom: cfg.b != null ? `${cfg.b * 100}%` : inset(cfg.hh)
  };
  return (
    <figure style={{
      position: "relative", width: "100%", margin: 0,
      transform: `rotate(${FN_ROT[idx]}deg)`,
      filter: "drop-shadow(0 6px 13px rgba(0,0,0,0.24))"
    }}>
      <img src={`assets/scrapbook/paper-${cfg.paper}.png`} alt="" draggable={false}
        style={{ display: "block", width: "100%", height: "auto" }} />
      <div ref={ref} style={{
        position: "absolute", left: box.left, right: box.right, top: box.top, bottom: box.bottom,
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", overflow: "hidden", color: "#23232b",
        fontFamily: cfg.ff, fontWeight: cfg.w, fontStyle: cfg.it ? "italic" : "normal",
        lineHeight: cfg.lh, letterSpacing: cfg.up ? "0.02em" : "-0.005em",
        textTransform: cfg.up ? "uppercase" : "none", textWrap: "pretty", fontSize: fs
      }}>
        <span>{txt}</span>
      </div>
    </figure>
  );
}

// ---------- Fragment detail panel -------------------------------------------
function FragmentPanel({ frag, theme, onClose }) {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  if (!frag) return null;
  const warm = theme.dark ? theme.surface : "#fbfcf2";
  const limeChip = theme.accent2Fill;
  const blueSoft = `color-mix(in oklch, ${theme.accent} ${theme.dark ? "30%" : "16%"}, ${warm})`;
  const limeSoft = `color-mix(in oklch, ${theme.accent2Fill} ${theme.dark ? "34%" : "55%"}, ${warm})`;
  const rich = (s) => s.split(/\*\*(.+?)\*\*/g).map((seg, j) => j % 2
    ? <strong key={j} style={{ color: theme.ink, fontWeight: 600 }}>{seg}</strong> : seg);
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 80, display: "flex",
      alignItems: "center", justifyContent: "center", padding: "24px",
      background: theme.dark ? "oklch(0 0 0 / 0.6)" : "oklch(0.2 0.02 60 / 0.42)",
      backdropFilter: "blur(3px)", animation: "fadein 0.25s ease"
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        position: "relative", width: "min(620px, 94vw)", maxHeight: "86vh", overflowY: "auto",
        background: warm, color: theme.ink, border: `1px solid ${theme.line}`,
        borderRadius: 8, padding: "34px 38px 38px",
        boxShadow: theme.dark ? "0 40px 90px oklch(0 0 0 / 0.6)" : "0 40px 90px oklch(0.2 0.02 60 / 0.28)",
        animation: "panelin 0.3s cubic-bezier(0.16,1,0.3,1)"
      }}>
        <button onClick={onClose} aria-label="close" style={{
          position: "absolute", top: 18, right: 18, width: 34, height: 34, cursor: "pointer",
          background: "transparent", border: `1px solid ${theme.line}`, borderRadius: 999,
          color: theme.muted, fontSize: 16, lineHeight: 1
        }}>✕</button>

        <style>{`.lore-dropcap::first-letter{font-family:${theme.fontDisplay};font-weight:600;font-size:58px;line-height:0.7;float:left;margin:6px 12px 0 0;color:${theme.accent};}`}</style>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 4 }}>
          <div style={{ width: 62, height: 62, flexShrink: 0, borderRadius: 999, background: limeChip,
            color: theme.onAccent2, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: theme.fontDisplay, fontSize: 32, lineHeight: 1 }}>{frag.glyph}</div>
          <div>
            <h2 style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(32px, 5.4vw, 48px)",
              lineHeight: 0.92, margin: 0, letterSpacing: "-0.01em" }}>{frag.label}</h2>
          </div>
        </div>

        {frag.isPlayer && (
          <div>
            {frag.body && frag.body[0] && <p style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(22px,3vw,25px)", lineHeight: 1.28, color: theme.ink, margin: "24px 0 14px", textWrap: "pretty" }}>{frag.body[0]}</p>}
            {frag.body && frag.body.slice(1).map((p, i) => (
              <p key={i} style={{ fontFamily: theme.fontBody, fontSize: 17, lineHeight: 1.62, color: theme.muted, margin: i ? "12px 0 0" : 0, textWrap: "pretty" }}>{p}</p>
            ))}
            <div style={{ marginTop: 18, padding: 16, borderRadius: 14, background: blueSoft }}>
              <div style={{ fontFamily: theme.fontMono, fontSize: 10, letterSpacing: "0.14em",
                textTransform: "uppercase", color: theme.accent, marginBottom: 10 }}>
                the archive · now playing
              </div>
              <iframe
                data-testid="embed-iframe"
                title="EVRYWHR — Frequencies playlist"
                style={{ borderRadius: 12, border: "none", display: "block" }}
                src="https://open.spotify.com/embed/playlist/4VrbGUFKlGO3DzOgXrjJzx?utm_source=generator&si=95548dce45aa4587"
                width="100%" height="352"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {frag.isMap && (
          <React.Fragment>
            {frag.body && frag.body[0] && <p style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(22px,3vw,25px)", lineHeight: 1.28, color: theme.ink, margin: "24px 0 16px", textWrap: "pretty" }}>{frag.body[0]}</p>}
            <div style={{ position: "relative", marginBottom: 22 }}>
            <img src="assets/lore-map-blue.png" alt="World map" draggable={false} style={{ display: "block",
              width: "100%", aspectRatio: "1506 / 1080", objectFit: "cover", borderRadius: 2,
              border: `1px solid ${theme.line}` }} />
            {frag.pins.map((p, i) => (
              <div key={i} style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, zIndex: 5 }}>
                <img src="assets/pin-pushpin.png" alt="" draggable={false}
                  style={{ position: "absolute", left: 0, top: 0, width: 26, height: 46,
                    transform: "translate(-50%,-100%)", filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.45))" }} />
                <span style={{ position: "absolute", top: -4 + (p.dy || 0), whiteSpace: "nowrap",
                  ...(p.left ? { right: 16, textAlign: "right" } : { left: 16 }),
                  fontFamily: theme.fontMono, fontSize: 9.5, letterSpacing: "0.05em", fontWeight: 700, color: "#1b2b34",
                  background: "rgba(255,255,255,0.86)", border: "1px solid rgba(27,43,52,0.14)", borderRadius: 5,
                  padding: "2px 6px", boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                  textTransform: "uppercase" }}>{p.place}</span>
              </div>
            ))}
            </div>
          </React.Fragment>
        )}

        {frag.isReel && (
          <div style={{ marginTop: 18, position: "relative", aspectRatio: "16 / 9", borderRadius: 12, overflow: "hidden",
            background: "linear-gradient(135deg, #2c3322, #1b2118)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ width: 74, height: 74, borderRadius: 999, background: theme.accent2Fill, color: theme.onAccent2,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>▶</span>
            <span style={{ position: "absolute", left: 16, bottom: 14, fontFamily: theme.fontMono, fontSize: 10,
              letterSpacing: "0.16em", textTransform: "uppercase", color: "#dfe6c8" }}>Play reel · 90 sec</span>
          </div>
        )}

        {frag.id === "fieldnotes" ? (
          <div style={{ columns: 2, columnGap: 14, marginTop: 18 }}>
            {frag.body.map((q, i) => {
              const clean = q.replace(/^[“"]/, "").replace(/[”"]$/, "");
              const tint = i % 3 === 0 ? limeSoft : i % 3 === 1 ? blueSoft : theme.surface;
              const mk = i % 3 === 1 ? theme.accent : theme.accent2;
              return (
                <div key={i} style={{ breakInside: "avoid", marginBottom: 14, padding: "14px 18px 16px",
                  borderRadius: 12, background: tint, border: i % 3 === 2 ? `1px solid ${theme.line}` : "none" }}>
                  <div style={{ fontFamily: theme.fontDisplay, fontSize: 32, lineHeight: 0.4, color: mk }}>“</div>
                  <p style={{ fontFamily: theme.fontDisplay, fontStyle: "italic", fontSize: 18, lineHeight: 1.3,
                    color: theme.ink, margin: "10px 0 0", textWrap: "pretty" }}>{clean}</p>
                </div>
              );
            })}
          </div>
        ) : frag.id === "manifesto" ? (
          <div style={{ textAlign: "center", padding: "24px 6px 12px" }}>
            <p style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(26px,4.4vw,34px)",
              lineHeight: 1.18, color: theme.ink, margin: 0, textWrap: "balance" }}>
              {frag.body[0]}{frag.body[1] ? " " : ""}
              {frag.body[1] && <span style={{ color: theme.accent2,
                background: `linear-gradient(transparent 62%, ${theme.accent2Fill} 62%)`, padding: "0 4px" }}>{frag.body[1]}</span>}
            </p>
          </div>
        ) : frag.groups ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 14 }}>
            {frag.groups.map((g, gi) => {
              const first = gi % 2 === 0;
              const pillBg = first ? theme.accent2Fill : blueSoft;
              const pillC = first ? theme.onAccent2 : theme.accent;
              const mk = first ? theme.accent2 : theme.accent;
              return (
                <div key={gi}>
                  <span style={{ display: "inline-flex", alignItems: "center", fontFamily: theme.fontMono, fontSize: 11,
                    letterSpacing: "0.16em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 999,
                    marginBottom: 12, background: pillBg, color: pillC }}>{g.by}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {g.items.map((it, i) => (
                      <p key={i} style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 12,
                        alignItems: "baseline", fontFamily: theme.fontBody, fontSize: 16.5, lineHeight: 1.5,
                        color: theme.ink, textWrap: "pretty" }}>
                        <span aria-hidden="true" style={{ color: mk, fontFamily: theme.fontDisplay, fontSize: 17,
                          lineHeight: 1, transform: "translateY(2px)" }}>✦</span>
                        <span>{it}</span>
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (frag.body && frag.body.length && !frag.isPlayer && !frag.isMap && !frag.isReel) ? (() => {
          const b = frag.body;
          const hasPunch = b.length >= 2;
          const punch = hasPunch ? b[b.length - 1] : null;
          const middle = b.slice(1, hasPunch ? -1 : undefined);
          return (
            <React.Fragment>
              <p style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(22px,3vw,25px)",
                lineHeight: 1.28, color: theme.ink, margin: "24px 0 18px", textWrap: "pretty" }}>{b[0]}</p>
              {middle.map((p, i) => (
                <p key={i} className={i === 0 ? "lore-dropcap" : undefined}
                  style={{ fontFamily: theme.fontBody, fontSize: 17, lineHeight: 1.62, color: theme.muted,
                    margin: i ? "15px 0 0" : 0, textWrap: "pretty" }}>{rich(p)}</p>
              ))}
              {punch && (
                <p style={{ marginTop: 20, padding: "16px 20px", background: blueSoft, borderRadius: 10,
                  fontFamily: theme.fontBody, fontSize: 17, lineHeight: 1.6, color: theme.ink, textWrap: "pretty" }}>{rich(punch)}</p>
              )}
            </React.Fragment>
          );
        })() : null}

        <div style={{ marginTop: 24, fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.16em",
          textTransform: "uppercase", color: theme.accent }}>— {frag.tag} —</div>
      </div>
    </div>
  );
}

// ---------- One floating, draggable icon ------------------------------------
function LoreNode({ frag, pos, theme, motion, idx, onOpen, onDrag }) {
  const ref = useRef(null);
  const drag = useRef(null);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const floatDur = 7 - (motion / 100) * 3;       // faster bob with more motion
  const floatAmt = 4 + (motion / 100) * 12;

  const onDown = (e) => {
    e.stopPropagation();
    const el = ref.current;
    el.setPointerCapture(e.pointerId);
    drag.current = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y, moved: false };
    setActive(true);
  };
  const onMove = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.sx, dy = e.clientY - drag.current.sy;
    if (Math.abs(dx) + Math.abs(dy) > 4) drag.current.moved = true;
    const parent = ref.current.parentElement.getBoundingClientRect();
    onDrag(frag.id, {
      x: Math.max(2, Math.min(98, drag.current.ox + (dx / parent.width) * 100)),
      y: Math.max(4, Math.min(96, drag.current.oy + (dy / parent.height) * 100))
    });
  };
  const onUp = (e) => {
    const moved = drag.current && drag.current.moved;
    drag.current = null;
    setActive(false);
    if (!moved) onOpen(frag);
  };

  return (
    <div ref={ref} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp}
      onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}
      style={{
        position: "absolute", left: `${pos.x}%`, top: `${pos.y}%`,
        transform: "translate(-50%,-50%)", cursor: active ? "grabbing" : "grab",
        zIndex: active ? 30 : 10, touchAction: "none", userSelect: "none"
      }}>
      <div className="lore-node" style={{
        animation: active ? "none" : `floaty ${floatDur}s ease-in-out ${idx * 0.4}s infinite alternate`,
        ["--amt"]: `${floatAmt}px`
      }}>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          transform: active ? "scale(1.08)" : hover ? "scale(1.14)" : "scale(1)", transition: "transform 0.25s cubic-bezier(.16,1,.3,1)"
        }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            filter: active
              ? `drop-shadow(0 18px 30px ${theme.dark ? "oklch(0 0 0 / 0.5)" : "oklch(0.2 0.02 60 / 0.3)"})`
              : `drop-shadow(0 8px 16px ${theme.dark ? "oklch(0 0 0 / 0.4)" : "oklch(0.2 0.02 60 / 0.2)"})`
          }}><LoreIcon id={frag.id} size={94 * (LORE_SIZE[frag.id] || 1)} /></div>
          <span style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.14em",
            textTransform: "uppercase", color: theme.ink, background: theme.bg, padding: "2px 7px",
            borderRadius: 999, whiteSpace: "nowrap" }}>{frag.label}</span>
        </div>
      </div>
    </div>
  );
}

// ---------- The world --------------------------------------------------------
function LoreWorld({ theme, motion, chaos, copy }) {
  const data = window.EVRYWHR.LORE;
  const initial = useCallback(() => {
    const spread = chaos / 100;
    const o = {};
    data.forEach((f, i) => {
      const b = LORE_BASE[i] || { x: 50, y: 50 };
      const jx = (seeded(i + 1) - 0.5) * 60 * spread;
      const jy = (seeded(i + 7) - 0.5) * 46 * spread;
      o[f.id] = { x: Math.max(6, Math.min(94, b.x + jx)), y: Math.max(8, Math.min(92, b.y + jy)) };
    });
    return o;
  }, [chaos, data]);

  const [pos, setPos] = useState(initial);
  const [open, setOpen] = useState(null);
  useEffect(() => { setPos(initial()); }, [chaos]); // eslint-disable-line

  const setOne = (id, p) => setPos((prev) => ({ ...prev, [id]: p }));
  const scatter = () => {
    setPos(() => {
      const o = {};
      data.forEach((f, i) => { o[f.id] = { x: 8 + Math.random() * 84, y: 12 + Math.random() * 78 }; });
      return o;
    });
  };

  return (
    <section id="lore" style={{ position: "relative", padding: "clamp(40px,6vw,84px) var(--pad) 0" }}>
      <div style={{
        background: "#e6ed9b", border: "1.5px solid #c5d13d", borderRadius: 22,
        padding: "clamp(22px,3.4vw,46px)", color: "#23270c"
      }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        flexWrap: "wrap", gap: 16, padding: "0 0 8px" }}>
        <div>
          <div className="eyebrow">{copy.loreKicker}</div>
          <h2 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, margin: "6px 0 0",
            fontSize: "clamp(40px, 8vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.015em", textTransform: "uppercase" }}>
            {copy.loreTitle}
          </h2>
        </div>
        <div style={{ maxWidth: 380 }}>
          <p style={{ fontFamily: theme.fontBody, fontSize: 16.5, lineHeight: 1.55, color: "#54611f", margin: 0, textWrap: "pretty" }}>
            {copy.loreLead}
          </p>
        </div>
      </div>

      <div style={{
        position: "relative", margin: "22px 0 0", height: "max(360px, min(640px, calc(100svh - 340px)))",
        border: `1px solid ${theme.line}`, borderRadius: 4, overflow: "hidden",
        backgroundImage: `url("assets/lore/sky.jpg")`,
        backgroundSize: "cover", backgroundPosition: "center"
      }}>
        {/* subtle tint for cohesion + text legibility (stronger in dark mode) */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: theme.dark
            ? "linear-gradient(180deg, oklch(0.2 0.03 220 / 0.55), oklch(0.18 0.03 220 / 0.68))"
            : "linear-gradient(180deg, oklch(1 0 0 / 0.06), oklch(0.7 0.05 230 / 0.08))" }} />
        {/* faint coordinate grid */}
        <div style={{ position: "absolute", inset: 0, opacity: theme.dark ? 0.18 : 0.12,
          backgroundImage: `linear-gradient(${theme.dark ? "#cfe6ef" : "#3a5a6a"} 1px, transparent 1px), linear-gradient(90deg, ${theme.dark ? "#cfe6ef" : "#3a5a6a"} 1px, transparent 1px)`,
          backgroundSize: "64px 64px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 14, left: 16, fontFamily: theme.fontMono, fontSize: 10.5,
          letterSpacing: "0.14em", textTransform: "uppercase", color: theme.dark ? "#dceaf0" : "#2c4654",
          pointerEvents: "none", textShadow: theme.dark ? "none" : "0 1px 2px oklch(1 0 0 / 0.6)" }}>
          drag the pieces · tap to open
        </div>
        {data.map((f, i) => (
          <LoreNode key={f.id} frag={f} idx={i} pos={pos[f.id] || { x: 50, y: 50 }}
            theme={theme} motion={motion} onOpen={setOpen} onDrag={setOne} />
        ))}
      </div>
      </div>

      {open && <FragmentPanel frag={open} theme={theme} onClose={() => setOpen(null)} />}
    </section>
  );
}

Object.assign(window, { LoreWorld, Placeholder });
