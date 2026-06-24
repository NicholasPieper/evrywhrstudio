// EVRYWHR — shared UI primitives used across views.

function Eyebrow({ children, theme, color }) {
  return <div style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.18em",
    textTransform: "uppercase", color: color || theme.accent }}>{children}</div>;
}

function Btn({ children, onClick, href, theme, kind }) {
  const solid = kind === "solid";
  const base = {
    fontFamily: theme.fontMono, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
    textDecoration: "none", padding: "13px 22px", borderRadius: 999, cursor: "pointer",
    display: "inline-block", transition: "transform .2s ease, filter .2s ease, background .2s ease",
    background: solid ? theme.accent : "transparent", color: solid ? (theme.dark ? "#15130f" : "#faf7f0") : theme.ink,
    border: solid ? "none" : `1px solid ${theme.line}`
  };
  const Tag = href ? "a" : "button";
  return <Tag href={href} onClick={onClick} className="ev-btn" style={base}>{children}</Tag>;
}

function Tag({ children, theme, active }) {
  return <span style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.12em",
    textTransform: "uppercase", padding: "5px 11px", borderRadius: 999, whiteSpace: "nowrap", display: "inline-block",
    border: `1px solid ${active ? theme.accent2 : theme.line}`,
    color: active ? theme.onAccent2 : theme.muted, background: active ? theme.accent2Fill : "transparent" }}>{children}</span>;
}

function PageHead({ kicker, title, lead, theme, right }) {
  return (
    <div style={{ padding: "clamp(34px,6vw,80px) var(--pad) 0" }}>
      <Eyebrow theme={theme}>{kicker}</Eyebrow>
      <h1 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(48px,10vw,140px)",
        lineHeight: 1.02, margin: "10px 0 0", letterSpacing: "-0.02em", textWrap: "balance" }}>{title}</h1>
      {right}
      {lead && <p style={{ fontFamily: theme.fontBody, fontSize: 18, lineHeight: 1.55, color: theme.muted,
        maxWidth: 600, margin: "clamp(24px,3.5vw,38px) 0 0", textWrap: "pretty" }}>{lead}</p>}
    </div>
  );
}

function BackLink({ onClick, theme, label }) {
  return (
    <button onClick={onClick} className="ev-back" style={{ fontFamily: theme.fontMono, fontSize: 11.5,
      letterSpacing: "0.12em", textTransform: "uppercase", color: theme.muted, background: "transparent",
      border: "none", cursor: "pointer", padding: "0", display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 15 }}>←</span>{label || "Back"}
    </button>
  );
}

Object.assign(window, { Eyebrow, Btn, Tag, PageHead, BackLink });
