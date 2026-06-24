// EVRYWHR — Work With Us: pitch + "what we do" hover mosaic + intake form.

const WWD = [
  { key: "art",     no: "01", name: "Art Direction",  blurb: "Concept, look and point of view." },
  { key: "film",    no: "02", name: "Film Production", blurb: "Scouted, directed, shot and cut by one crew." },
  { key: "photo",   no: "03", name: "Photography",     blurb: "Stills that feel like being there." },
  { key: "content", no: "04", name: "Content",         blurb: "Social-first shorts." }
];

const WB = "assets/workwithus/";

// ---- mosaic ----------------------------------------------------------------
function tile(extra) {
  return { overflow: "hidden", background: "#e7e4d4", minWidth: 0, minHeight: 0, ...extra };
}
const imgStyle = { width: "100%", height: "100%", objectFit: "cover", display: "block" };
const T = {
  grid: { position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(12,1fr)",
    gridTemplateRows: "1fr 1fr 0.82fr", gap: 7 },
  t1: { gridColumn: "span 7", gridRow: "span 2" },
  t2: { gridColumn: "span 5" }, t3: { gridColumn: "span 5" }, t4: { gridColumn: "span 12" }
};

function PhotoMosaic({ srcs, pos = [] }) {
  const im = (i) => (pos[i] ? { ...imgStyle, objectPosition: pos[i] } : imgStyle);
  return (
    <div style={T.grid}>
      <div style={tile(T.t1)}><img src={srcs[0]} alt="" style={im(0)} /></div>
      <div style={tile(T.t2)}><img src={srcs[1]} alt="" style={im(1)} /></div>
      <div style={tile(T.t3)}><img src={srcs[2]} alt="" style={im(2)} /></div>
      <div style={tile(T.t4)}><img src={srcs[3]} alt="" style={im(3)} /></div>
    </div>
  );
}

function FilmMosaic({ theme }) {
  return (
    <div style={T.grid}>
      <div style={tile(T.t1)}><img src={WB + "film/1.jpg"} alt="" style={imgStyle} /></div>
      <div style={tile(T.t2)}><img src={WB + "film/2.jpg"} alt="" style={imgStyle} /></div>
      <div style={tile({ ...T.t3, background: theme.accentFill, display: "flex", alignItems: "center",
        justifyContent: "center", textAlign: "center", padding: "clamp(14px,1.4vw,20px)" })}>
        <div style={{ fontFamily: theme.fontDisplay, fontStyle: "italic", fontWeight: 500,
          fontSize: "clamp(15px,1.35vw,20px)", lineHeight: 1.16, color: theme.ink, textWrap: "balance" }}>
          “Your story should never be limited by location.”</div>
      </div>
      <div style={tile(T.t4)}><img src={WB + "film/4.jpg"} alt="" style={imgStyle} /></div>
    </div>
  );
}

function ContentMosaic({ theme, vref }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(4,1fr)",
      gridTemplateRows: "auto", alignContent: "center", alignItems: "center", gap: 8,
      background: theme.accent2Fill, padding: 14 }}>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} style={{ aspectRatio: "9 / 16", borderRadius: 7, overflow: "hidden", background: "#000",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }}>
          <video ref={(el) => vref(el, i)} muted loop playsInline style={imgStyle}></video>
        </div>
      ))}
    </div>
  );
}

function Layer({ on, children }) {
  return <div style={{ position: "absolute", inset: 0, opacity: on ? 1 : 0,
    transition: "opacity 0.4s ease", pointerEvents: "none" }}>{children}</div>;
}

// ---- intake form -----------------------------------------------------------
function IntakeForm({ theme, go }) {
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const [need, setNeed] = useState("Art Direction");
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const chips = WWD.map((s) => s.name).concat(["The whole thing"]);

  // Web3Forms — get a free access key at https://web3forms.com (enter your email).
  // Replace the placeholder below with your real key.
  const WEB3FORMS_KEY = "23070b1f-409a-409e-b1f5-35ac188c1541";

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = 1;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) er.email = 1;
    if (!f.msg.trim()) er.msg = 1;
    setErr(er);
    if (Object.keys(er).length > 0) return;
    setSending(true);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New EVRYWHR enquiry — ${need}`,
        from_name: "EVRYWHR site",
        name: f.name,
        email: f.email,
        need: need,
        message: f.msg,
      }),
    })
      .then((r) => r.json())
      .then((d) => { setSending(false); if (d.success) setSent(true); else setErr({ submit: 1 }); })
      .catch(() => { setSending(false); setErr({ submit: 1 }); });
  };

  if (sent) {
    return (
      <div style={{ padding: "30px 0", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
        <div style={{ fontSize: 30, color: theme.accent2 }}>✦</div>
        <h3 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: 30, margin: "8px 0 6px" }}>Message received.</h3>
        <p style={{ fontFamily: theme.fontBody, fontSize: 15, color: theme.muted, margin: 0, maxWidth: "40ch" }}>
          It's in our inbox. Expect a reply within a few days — sooner if your idea keeps us up at night.</p>
      </div>
    );
  }

  const lbl = (k, text) => (
    <span style={{ fontFamily: theme.fontMono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase",
      color: err[k] ? theme.accent : theme.muted, display: "block", marginBottom: 6 }}>
      {text}{err[k] ? " · required" : ""}</span>
  );
  const inp = (k) => ({ width: "100%", fontFamily: theme.fontBody, fontSize: 13.5, color: theme.ink,
    background: theme.surface, border: `1px solid ${err[k] ? theme.accent : theme.line}`, borderRadius: 8,
    padding: "12px 14px", outline: "none", resize: "none" });

  return (
    <form onSubmit={submit}>
      <div style={{ display: "flex", gap: 12, marginBottom: 14 }} className="work-frow">
        <label style={{ flex: 1, display: "block" }}>{lbl("name", "Name")}
          <input className="work-input" value={f.name} onChange={(e) => set("name", e.target.value)}
            placeholder="Your name" style={inp("name")} /></label>
        <label style={{ flex: 1, display: "block" }}>{lbl("email", "Email")}
          <input className="work-input" value={f.email} onChange={(e) => set("email", e.target.value)}
            placeholder="you@email.com" style={inp("email")} /></label>
      </div>
      <div style={{ marginBottom: 14 }}>{lbl("need", "What you need")}
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {chips.map((c) => {
            const sel = need === c;
            return (
              <button type="button" key={c} onClick={() => setNeed(c)} aria-pressed={sel} className="work-chip" style={{
                fontFamily: theme.fontBody, fontSize: 11.5, padding: "8px 13px", borderRadius: 999, cursor: "pointer",
                border: `1px solid ${sel ? theme.accent : theme.line}`, background: sel ? theme.accent : theme.surface,
                color: sel ? "#fff" : theme.muted, transition: "all .16s ease" }}>{c}</button>
            );
          })}
        </div>
      </div>
      <label style={{ display: "block", marginBottom: 16 }}>{lbl("msg", "The idea")}
        <textarea className="work-input" value={f.msg} onChange={(e) => set("msg", e.target.value)} rows={3}
          placeholder="Where you are, and what you're dreaming up…" style={inp("msg")} /></label>
      {err.submit ? (
        <p style={{ fontFamily: theme.fontBody, fontSize: 12.5, color: theme.accent, margin: "0 0 12px" }}>
          Something went wrong sending that — give it another try in a moment.</p>
      ) : null}
      <Btn theme={theme} kind="solid">{sending ? "Sending…" : "Send it →"}</Btn>
      <p style={{ fontFamily: theme.fontBody, fontSize: 11.5, lineHeight: 1.5, color: theme.muted, margin: "14px 0 0", maxWidth: "46ch" }}>
        By sending this you agree to our{" "}
        <button type="button" onClick={() => go && go("privacy")} style={{ fontFamily: "inherit", fontSize: "inherit",
          color: theme.accent2, background: "transparent", border: "none", padding: 0, cursor: "pointer", textDecoration: "underline" }}>Privacy Policy</button>.
      </p>
    </form>
  );
}

// ---- view ------------------------------------------------------------------
function WorkView({ theme, onNav }) {
  const [active, setActive] = useState("art");
  const vids = useRef([]);
  const loaded = useRef(false);
  const setVref = (el, i) => { vids.current[i] = el; };
  const loadVideos = () => {
    if (loaded.current) return;
    loaded.current = true;
    vids.current.forEach((v, i) => {
      if (!v) return;
      fetch(`${WB}content/v${i + 1}.mp4`).then((r) => r.blob()).then((b) => {
        v.src = URL.createObjectURL(b); v.play().catch(() => {});
      }).catch(() => {});
    });
  };
  const go = (k) => { setActive(k); if (k === "content") loadVideos(); };

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%",
      padding: "clamp(34px,4.5vw,64px) var(--pad) clamp(48px,6vw,84px)" }}>
      <style>{`
        .work-input:focus{border-color:${theme.accent} !important}
        .work-chip:hover{border-color:${theme.ink} !important;color:${theme.ink}}
        @media(max-width:820px){
          .work-top{grid-template-columns:1fr !important}
          .work-mos{min-height:420px}
          .work-intake-in{grid-template-columns:1fr !important;gap:24px !important}
          .work-frow{flex-direction:column !important}
        }
      `}</style>

      {/* top: pitch + services left, mosaic right */}
      <div className="work-top" style={{ display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "clamp(30px,4.5vw,64px)", alignItems: "stretch" }}>

        <div>
          <Eyebrow theme={theme}>Work with us</Eyebrow>
          <h1 style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(34px,4vw,54px)",
            lineHeight: 0.96, letterSpacing: "-0.01em", margin: "12px 0 0" }}>Take the story further.</h1>
          <p style={{ fontFamily: theme.fontBody, fontSize: "clamp(14px,1.3vw,16px)", lineHeight: 1.55,
            color: theme.muted, margin: "14px 0 0", maxWidth: "48ch" }}>
            Nowhere is off limits. As a small, hands-on team, we're with you{" "}
            <b style={{ color: theme.ink, fontWeight: 600 }}>from the first idea to the final frame</b>.
            We shape the vision, scout the location, direct the shoot and deliver the final cut.</p>

          <div style={{ marginTop: "clamp(18px,2.4vw,28px)" }}>
            <div style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.14em",
              textTransform: "uppercase", color: theme.accent2, paddingTop: "clamp(14px,1.8vw,20px)",
              borderTop: `1px solid ${theme.line}` }}>What we do — any one, or end to end</div>
            <div style={{ marginTop: 4 }}>
              {WWD.map((s) => {
                const on = active === s.key;
                return (
                  <div key={s.key} tabIndex={0} onMouseEnter={() => go(s.key)} onFocus={() => go(s.key)}
                    style={{ display: "grid", gridTemplateColumns: "30px 1fr", gap: 14, alignItems: "baseline",
                      padding: "12px 0", borderBottom: `1px solid ${theme.line}`, cursor: "pointer",
                      paddingLeft: on ? 14 : 0, transition: "padding-left 0.32s cubic-bezier(.2,.7,.2,1)" }}>
                    <span style={{ fontFamily: theme.fontMono, fontSize: 12, color: theme.accent2 }}>{s.no}</span>
                    <div>
                      <div style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(23px,2.4vw,30px)",
                        lineHeight: 1.02, color: on ? theme.accent : theme.ink, transition: "color .22s ease" }}>{s.name}</div>
                      <div style={{ fontFamily: theme.fontBody, fontSize: 12.5, color: theme.muted,
                        lineHeight: 1.4, marginTop: 5 }}>{s.blurb}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* mosaic */}
        <div className="work-mos" style={{ position: "relative", minHeight: 0, borderRadius: 10,
          overflow: "hidden", background: theme.surface2 }}>
          <Layer on={active === "art"}><PhotoMosaic srcs={[WB+"art/1.jpg", WB+"art/2.jpg?v=2", WB+"art/3.jpg", WB+"art/4.jpg"]} pos={[null, null, null, "center 78%"]} /></Layer>
          <Layer on={active === "film"}><FilmMosaic theme={theme} /></Layer>
          <Layer on={active === "photo"}><PhotoMosaic srcs={[WB+"photo/2.jpg", WB+"photo/1.jpg", WB+"photo/3.jpg", WB+"photo/4.jpg"]} /></Layer>
          <Layer on={active === "content"}><ContentMosaic theme={theme} vref={setVref} /></Layer>
        </div>
      </div>

      {/* bottom: intake block */}
      <div style={{ marginTop: "clamp(24px,3vw,44px)", background: theme.surface2,
        border: `1px solid ${theme.line}`, borderRadius: 14, padding: "clamp(22px,2.6vw,36px)" }}>
        <div className="work-intake-in" style={{ display: "grid", gridTemplateColumns: "0.62fr 1.38fr",
          gap: "clamp(28px,4vw,64px)", alignItems: "start" }}>
          <div>
            <Eyebrow theme={theme}>Tell us the idea</Eyebrow>
            <div style={{ fontFamily: theme.fontDisplay, fontWeight: 500, fontSize: "clamp(30px,3.4vw,46px)",
              lineHeight: 0.98, marginTop: 12 }}>Got a place, a brand, or a wild idea?</div>
            <p style={{ fontFamily: theme.fontBody, fontSize: 13.5, color: theme.muted, lineHeight: 1.55,
              marginTop: 12, maxWidth: "34ch" }}>One sentence is enough to start. We read everything — reply from a
              strange timezone, usually within a few days. Fill in the form and we'll take it from there.</p>
          </div>
          <IntakeForm theme={theme} go={onNav} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WorkView });
