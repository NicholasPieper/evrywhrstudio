// EVRYWHR — Dispatches (the blog): guides, field notes, gear, itineraries.

function DispatchRow({ d, i, theme, onOpen }) {
  const [h, setH] = useState(false);
  return (
    <button type="button" onClick={() => onOpen && onOpen(d.id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 22, alignItems: "center",
        textAlign: "left", width: "100%", textDecoration: "none", color: theme.ink, background: "transparent",
        borderLeft: "none", borderRight: "none", borderBottom: "none", borderTop: `1px solid ${theme.line}`,
        cursor: "pointer", padding: "22px 0",
        transform: h ? "translateX(8px)" : "none", transition: "transform .3s cubic-bezier(.16,1,.3,1)" }}
      className="dispatch-row">
      <span style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase",
        color: theme.accent }}>{d.cat}</span>
      <div>
        <h3 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(24px,3.2vw,38px)",
          lineHeight: 1.02, margin: 0, letterSpacing: "-0.01em", color: h ? theme.accent : theme.ink,
          transition: "color .2s ease" }}>{d.title}</h3>
        <p style={{ fontFamily: theme.fontBody, fontSize: 15.5, lineHeight: 1.5, color: theme.muted,
          margin: "7px 0 0", maxWidth: 560, textWrap: "pretty" }}>{d.excerpt}</p>
      </div>
      <div style={{ textAlign: "right", fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.1em",
        textTransform: "uppercase", color: theme.muted, whiteSpace: "nowrap" }}>
        <div>{d.read}</div><div style={{ marginTop: 4 }}>{d.coord}</div>
      </div>
    </button>
  );
}

function DispatchesView({ theme, onOpen }) {
  const all = window.EVRYWHR.DISPATCHES;
  const cats = window.EVRYWHR.DISPATCH_CATS;
  const [cat, setCat] = useState("All");
  const feat = all.find((d) => d.feat) || all[0];
  const rest = all.filter((d) => d.id !== feat.id);
  const list = cat === "All" ? rest : rest.filter((d) => d.cat === cat);

  return (
    <div>
      {/* featured */}
      <button type="button" onClick={() => onOpen && onOpen(feat.id)} style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(20px,4vw,50px)",
        alignItems: "center", textAlign: "left", width: "100%", border: "none", background: "transparent",
        cursor: "pointer", textDecoration: "none", color: theme.ink,
        padding: "clamp(30px,5vw,56px) var(--pad) 0" }} className="feat-grid">
        {feat.hero
          ? <div style={{ aspectRatio: "16 / 10", overflow: "hidden", borderRadius: 3, border: `1px solid ${theme.line}` }}>
              <img src={feat.hero} alt={feat.title} loading="lazy" style={{ width: "100%", height: "100%",
                objectFit: "cover", objectPosition: feat.heroPos || "center", display: "block" }} />
            </div>
          : <Placeholder label="FEATURE · HERO" theme={theme} ratio="16 / 10" />}
        <div>
          <Tag theme={theme} active>{feat.cat} · Featured</Tag>
          <h2 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(32px,4.4vw,56px)",
            lineHeight: 1.04, margin: "16px 0 0", letterSpacing: "-0.015em" }}>{feat.title}</h2>
          <p style={{ fontFamily: theme.fontBody, fontSize: 18, lineHeight: 1.55, color: theme.muted,
            margin: "18px 0 0", maxWidth: 480, textWrap: "pretty" }}>{feat.excerpt}</p>
          <div style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
            color: theme.accent2, marginTop: 18 }}>Read · {feat.read} →</div>
        </div>
      </button>

      {/* filters */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", padding: "clamp(24px,3vw,40px) var(--pad) 0" }}>
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} style={{ cursor: "pointer", background: "transparent",
            border: "none", padding: 0 }}>
            <Tag theme={theme} active={c === cat}>{c}</Tag>
          </button>
        ))}
      </div>

      {/* list */}
      <div style={{ padding: "clamp(16px,2vw,24px) var(--pad) 100px" }}>
        <div style={{ borderBottom: `1px solid ${theme.line}` }}>
          {list.map((d, i) => <DispatchRow key={d.id} d={d} i={i} theme={theme} onOpen={onOpen} />)}
        </div>
        {list.length === 0 && <p style={{ fontFamily: theme.fontBody, color: theme.muted, padding: "30px 0" }}>
          Nothing here yet — more dispatches incoming.</p>}
      </div>
    </div>
  );
}

// ---------- Article (full read) --------------------------------------------

function smoothTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: "smooth" });
}

function ArticleBlock({ b, theme }) {
  const body = theme.fontBody, disp = theme.fontDisplay, mono = theme.fontMono;

  if (b.t === "lead")
    return <p style={{ fontFamily: body, fontSize: "clamp(20px,2.4vw,24px)", lineHeight: 1.5, color: theme.ink,
      margin: "0 0 26px", textWrap: "pretty", fontWeight: 400 }}>{b.text}</p>;

  if (b.t === "p")
    return <p style={{ fontFamily: body, fontSize: 17.5, lineHeight: 1.72, color: theme.ink,
      margin: "0 0 20px", textWrap: "pretty" }}>{b.text}</p>;

  if (b.t === "h2")
    return (
      <div id={b.id} style={{ scrollMarginTop: 30, margin: "56px 0 8px", display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ flex: "0 0 auto", width: 56, height: 56, borderRadius: "50%", background: theme.accent,
          color: theme.dark ? "#15130f" : "#fff", fontFamily: theme.fontMono, fontWeight: 600, fontSize: 19,
          display: "flex", alignItems: "center", justifyContent: "center", letterSpacing: "0.02em" }}>{b.n}</span>
        <h2 style={{ fontFamily: disp, fontWeight: 500, fontSize: "clamp(28px,3.6vw,40px)", lineHeight: 1.02,
          letterSpacing: "-0.015em", margin: 0, color: theme.ink }}>{b.text}</h2>
      </div>
    );

  if (b.t === "h3")
    return <h3 style={{ fontFamily: disp, fontWeight: 500, fontSize: "clamp(23px,2.7vw,30px)", lineHeight: 1.1,
      letterSpacing: "-0.01em", margin: "38px 0 14px", color: theme.ink }}>{b.text}</h3>;

  if (b.t === "label")
    return <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
      color: theme.accent2, margin: "26px 0 12px" }}>{b.text}</div>;

  if (b.t === "img")
    return (
      <figure style={{ margin: b.wide ? "30px 0" : "26px 0" }}>
        <div style={{ overflow: "hidden", borderRadius: 3, border: `1px solid ${theme.line}` }}>
          <img src={b.src} alt={b.alt || ""} loading="lazy" style={{ width: "100%", display: "block",
            aspectRatio: b.ratio || (b.portrait ? "4 / 5" : "3 / 2"), objectFit: "cover", objectPosition: b.pos || "center" }} />
        </div>
        {b.caption && <figcaption style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.04em",
          color: theme.muted, marginTop: 10, lineHeight: 1.4 }}>{b.caption}</figcaption>}
      </figure>
    );

  if (b.t === "spots")
    return (
      <div style={{ margin: "8px 0 22px" }}>
        {b.items.map((it, i) => (
          <div key={i} style={{ borderTop: `2px dotted ${theme.accentFill}`, padding: "14px 0" }}>
            <span style={{ fontFamily: disp, fontWeight: 600, fontSize: 20, color: theme.ink, letterSpacing: "-0.01em" }}>{it[0]}.</span>
            <span style={{ fontFamily: body, fontSize: 16.5, lineHeight: 1.62, color: theme.muted }}> {it[1]}</span>
          </div>
        ))}
      </div>
    );

  if (b.t === "deflist")
    return (
      <div style={{ margin: "4px 0 22px" }}>
        {b.items.map((it, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "minmax(120px,150px) 1fr", gap: "8px 22px",
            borderTop: `1px solid ${theme.line}`, padding: "15px 0" }} className="art-def">
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
              color: theme.accent, paddingTop: 4 }}>{it[0]}</div>
            <div style={{ fontFamily: body, fontSize: 16.5, lineHeight: 1.62, color: theme.ink }}>{it[1]}</div>
          </div>
        ))}
      </div>
    );

  if (b.t === "note")
    return (
      <div style={{ background: theme.accent2Fill, borderRadius: 8,
        padding: "16px 20px", margin: "10px 0 24px" }}>
        <p style={{ fontFamily: body, fontSize: 15.5, lineHeight: 1.6, color: theme.onAccent2 || "#3a4416", margin: 0, textWrap: "pretty" }}>{b.text}</p>
      </div>
    );

  if (b.t === "contact")
    return (
      <div style={{ display: "inline-flex", alignItems: "baseline", gap: 12, flexWrap: "wrap",
        border: `1px solid ${theme.line}`, borderRadius: 999, padding: "9px 18px", margin: "2px 0 24px" }}>
        <span style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: theme.accent }}>{b.label}</span>
        <span style={{ fontFamily: body, fontSize: 16, color: theme.ink, fontWeight: 500 }}>{b.value}</span>
      </div>
    );

  if (b.t === "table")
    return (
      <div style={{ margin: "16px 0 26px", overflowX: "auto" }} className="art-table-wrap">
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: body }}>
          <thead>
            <tr>{b.head.map((h, i) => (
              <th key={i} style={{ textAlign: "left", fontFamily: mono, fontSize: 10.5, letterSpacing: "0.1em",
                textTransform: "uppercase", color: theme.muted, fontWeight: 400, padding: "0 14px 10px 0",
                borderBottom: `1px solid ${theme.ink}`, whiteSpace: "nowrap" }}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {b.rows.map((r, ri) => (
              <tr key={ri}>{r.map((c, ci) => (
                <td key={ci} style={{ padding: "13px 14px 13px 0", borderBottom: `1px solid ${theme.line}`,
                  verticalAlign: "top", fontSize: ci === 0 ? 15.5 : 14.5, lineHeight: 1.45,
                  color: ci === 0 ? theme.ink : theme.muted, fontWeight: ci === 0 ? 500 : 400,
                  fontFamily: ci === 0 ? disp : body, letterSpacing: ci === 0 ? "-0.005em" : "0",
                  whiteSpace: ci === 1 || ci === 2 ? "nowrap" : "normal",
                  minWidth: ci === 3 ? 260 : "auto" }}>{c}</td>
              ))}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  if (b.t === "toc")
    return (
      <div style={{ background: theme.surface2, borderRadius: 5, padding: "22px 26px", margin: "10px 0 30px" }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
          color: theme.muted, marginBottom: 14 }}>{b.title}</div>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, columnGap: 40, columnWidth: 230 }}>
          {b.items.map((it, i) => (
            <li key={i} style={{ breakInside: "avoid", marginBottom: 9 }}>
              <button onClick={() => smoothTo(it[0])} style={{ background: "transparent", border: "none", cursor: "pointer",
                padding: 0, textAlign: "left", display: "flex", gap: 12, alignItems: "baseline", color: theme.ink }}
                className="art-toc-link">
                <span style={{ fontFamily: mono, fontSize: 11, color: theme.accent, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: body, fontSize: 16, lineHeight: 1.3 }}>{it[1]}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    );

  if (b.t === "duo")
    return (
      <figure style={{ margin: "26px 0" }} className="art-duo-fig">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignItems: "start" }} className="art-duo">
          {b.items.map((im, i) => (
            <div key={i}>
              <div style={{ overflow: "hidden", borderRadius: 3, border: `1px solid ${theme.line}` }}>
                <img src={im.src} alt={im.alt || ""} loading="lazy" style={{ width: "100%", display: "block",
                  aspectRatio: im.ratio || "3 / 4", objectFit: "cover", objectPosition: im.pos || "center" }} />
              </div>
            </div>
          ))}
        </div>
        {b.caption && <figcaption style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.04em",
          color: theme.muted, marginTop: 10, lineHeight: 1.4 }}>{b.caption}</figcaption>}
      </figure>
    );

  if (b.t === "ph")
    return (
      <figure style={{ margin: "26px 0" }}>
        <div style={{ aspectRatio: b.ratio || "16 / 9", borderRadius: 3, border: `1px solid ${theme.line}`,
          background: `repeating-linear-gradient(135deg, ${theme.surface2}, ${theme.surface2} 11px, transparent 11px, transparent 22px)`,
          display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
            color: theme.muted }}>{b.label || "Photo"}</span>
        </div>
        {b.caption && <figcaption style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.04em",
          color: theme.muted, marginTop: 10, lineHeight: 1.4 }}>{b.caption}</figcaption>}
      </figure>
    );

  if (b.t === "stay" || b.t === "eat") {
    const isStay = b.t === "stay";
    const acc = isStay ? theme.accent : theme.accent2;
    const tint = (isStay ? theme.accentFill : theme.accent2Fill) + (theme.dark ? "26" : "44");
    const label = b.label || (isStay ? "Where we stayed" : "What we ate");
    return (
      <div style={{ background: tint, borderRadius: 8, padding: "15px 20px", margin: "8px 0 22px",
        borderLeft: `3px solid ${acc}` }}>
        <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
          color: acc, fontWeight: 600, marginBottom: 7, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 9 }}>{isStay ? "\u25C6" : "\u25CF"}</span>{label}</div>
        <p style={{ fontFamily: body, fontSize: 16, lineHeight: 1.6, color: theme.ink, margin: 0, textWrap: "pretty" }}>{b.text}</p>
      </div>
    );
  }

  if (b.t === "embed")
    return (
      <figure style={{ marginTop: 36, marginBottom: 24 }} className="art-break">
        <div style={{ overflow: "hidden", borderRadius: 6, border: `1px solid ${theme.line}`,
          boxShadow: "0 14px 40px rgba(40,40,40,0.12)" }}>
          <iframe src={b.src} title={b.title || "Embedded map"} loading="lazy"
            style={{ width: "100%", height: b.height || "min(620px, 76vh)", border: "none", display: "block" }}></iframe>
        </div>
        {b.caption && <figcaption style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.04em",
          color: theme.muted, marginTop: 10, lineHeight: 1.4 }}>{b.caption}</figcaption>}
      </figure>
    );

  if (b.t === "videos")
    return (
      <div style={{ margin: "30px 0 24px" }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
          color: theme.accent2, marginBottom: 14 }}>{b.title}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="art-vids">
          {b.items.map((v, i) => (
            <a key={i} href={`https://youtu.be/${v.id}`} target="_blank" rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); window.open(`https://youtu.be/${v.id}`, "_blank", "noopener"); }}
              className="art-vid" style={{ display: "block", textDecoration: "none", color: theme.ink }}>
              <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 4,
                border: `1px solid ${theme.line}`, background: theme.surface2 }}>
                <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.label} loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(20,20,20,0.6)",
                    display: "flex", alignItems: "center", justifyContent: "center" }} className="art-vid-play">
                    <span style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent",
                      borderLeft: "13px solid #fff", marginLeft: 3 }}></span>
                  </span>
                </span>
              </div>
              <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase",
                color: theme.muted, marginTop: 8 }}>{v.label}</div>
            </a>
          ))}
        </div>
      </div>
    );

  if (b.t === "outro")
    return <p style={{ fontFamily: disp, fontStyle: "italic", fontSize: "clamp(21px,2.6vw,27px)", lineHeight: 1.4,
      color: theme.ink, margin: "44px 0 0", textWrap: "pretty" }}>{b.text}</p>;

  return null;
}

function DispatchArticle({ id, theme, onBack, onOpen }) {
  const d = (window.EVRYWHR.DISPATCH_DETAIL || {})[id];
  const meta = window.EVRYWHR.DISPATCHES.find((x) => x.id === id);
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, [id]);

  if (!d) {
    return (
      <div style={{ padding: "clamp(34px,6vw,80px) var(--pad)" }}>
        <BackLink theme={theme} onClick={onBack} label="All dispatches" />
        <p style={{ fontFamily: theme.fontBody, color: theme.muted, marginTop: 30 }}>
          This dispatch isn’t written up yet — check back soon.</p>
      </div>
    );
  }

  const others = window.EVRYWHR.DISPATCHES.filter((x) => x.id !== id).slice(0, 3);

  return (
    <article>
      <style>{`
        .art-col{max-width:720px;margin:0 auto;padding:0 var(--pad)}
        .art-wide{margin-left:0;margin-right:0;}
        .art-break{margin-left:calc(50% - 44vw);margin-right:calc(50% - 44vw);}
        .art-toc-link:hover span:last-child{color:${theme.accent}}
        .art-vid .art-vid-play{transition:background .2s ease, transform .2s ease}
        .art-vid:hover .art-vid-play{background:${theme.accent};transform:scale(1.08)}
        @media(max-width:700px){
          .art-def{grid-template-columns:1fr !important;gap:4px !important}
          .art-table-wrap td:nth-child(4){white-space:normal !important;min-width:0 !important}
          .art-duo{grid-template-columns:1fr !important}
        }
      `}</style>

      {/* back link */}
      <div className="art-col" style={{ paddingTop: "clamp(22px,3vw,34px)" }}>
        <BackLink theme={theme} onClick={onBack} label="All dispatches" />
      </div>

      {/* masthead — Color Pop */}
      <div style={{ background: theme.accent, color: theme.dark ? "#15130f" : "#fff",
        margin: "20px 0 0", padding: "clamp(30px,4vw,50px) 0" }}>
        <div className="art-col">
          <span style={{ display: "inline-block", background: theme.accent2Fill, color: theme.onAccent2 || "#3a4416",
            fontFamily: theme.fontMono, fontWeight: 600, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "6px 13px", borderRadius: 999 }}>{d.kicker || (meta && meta.cat)}</span>
          <h1 style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(34px,5.4vw,60px)",
            lineHeight: 1.0, letterSpacing: "-0.02em", margin: "18px 0 0", color: "inherit", textWrap: "balance" }}>{d.title}</h1>
          {d.standfirst && <p style={{ fontFamily: theme.fontBody, fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.5,
            color: theme.dark ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.82)", margin: "18px 0 0", maxWidth: 620, textWrap: "pretty" }}>{d.standfirst}</p>}
          {d.meta && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 0, marginTop: 26,
              borderTop: "1px solid rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.35)" }}>
              {d.meta.map((m, i) => (
                <div key={i} style={{ padding: "11px 26px 11px 0" }}>
                  <div style={{ fontFamily: theme.fontMono, fontSize: 9.5, letterSpacing: "0.14em", textTransform: "uppercase",
                    color: theme.dark ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.7)" }}>{m[0]}</div>
                  <div style={{ fontFamily: theme.fontBody, fontSize: 15, fontWeight: 600, color: "inherit", marginTop: 4 }}>{m[1]}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* hero */}
      {d.hero ? (
        <div className="art-col" style={{ paddingTop: "clamp(28px,4vw,42px)" }}>
          <div style={{ aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 4, border: `1px solid ${theme.line}` }}>
            <img src={d.hero} alt="" style={{ width: "100%", height: "100%", objectFit: "cover",
              objectPosition: d.heroPos || "center", display: "block" }} />
          </div>
        </div>
      ) : d.heroPh ? (
        <div className="art-col" style={{ paddingTop: "clamp(28px,4vw,42px)" }}>
          <div style={{ aspectRatio: "16 / 9", borderRadius: 4, border: `1px solid ${theme.line}`,
            background: `repeating-linear-gradient(135deg, ${theme.surface2}, ${theme.surface2} 13px, transparent 13px, transparent 26px)`,
            display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: theme.fontMono, fontSize: 11.5, letterSpacing: "0.16em", textTransform: "uppercase",
              color: theme.muted }}>{d.heroPh}</span>
          </div>
        </div>
      ) : null}

      {/* body */}
      <div className="art-col" style={{ padding: "clamp(34px,5vw,54px) var(--pad) 0" }}>
        {d.blocks.map((b, i) => <ArticleBlock key={i} b={b} theme={theme} />)}

        {/* socials */}
        {d.socials && (
          <div style={{ marginTop: 46, paddingTop: 26, borderTop: `1px solid ${theme.line}` }}>
            <div style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
              color: theme.muted, marginBottom: 16 }}>{d.socialsTitle || "Follow the journey"}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {d.socials.map((s, i) => (
                <a key={i} href={s[2]} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => { e.preventDefault(); window.open(s[2], "_blank", "noopener"); }}
                  style={{ display: "flex", alignItems: "baseline", gap: 12, textDecoration: "none",
                    cursor: "pointer", padding: 0, textAlign: "left" }} className="art-toc-link">
                  <span style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: theme.accent, minWidth: 84 }}>{s[0]}</span>
                  <span style={{ fontFamily: theme.fontBody, fontSize: 16, color: theme.ink }}>{s[1]}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* keep reading */}
      <div className="art-col" style={{ padding: "clamp(40px,6vw,72px) var(--pad) 100px" }}>
        <div style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
          color: theme.muted, marginBottom: 6 }}>Keep reading</div>
        <div style={{ borderTop: `1px solid ${theme.line}` }}>
          {others.map((o, i) => <DispatchRow key={o.id} d={o} i={i} theme={theme} onOpen={onOpen} />)}
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { DispatchesView, DispatchArticle });
