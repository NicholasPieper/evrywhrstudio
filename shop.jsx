// EVRYWHR — Shop: filterable products + cart drawer (Shopify-ready).

function ShopCard({ p, theme, onAdd }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
        <div style={{ transform: h ? "scale(1.04)" : "scale(1)", transition: "transform .5s ease" }}>
          <Placeholder label={p.ph} theme={theme} ratio="1 / 1" />
        </div>
        <button onClick={() => onAdd(p)} style={{ position: "absolute", left: 12, right: 12, bottom: 12,
          padding: "11px", borderRadius: 999, cursor: "pointer", border: "none", background: theme.accent,
          color: theme.dark ? "#15130f" : "#faf7f0", fontFamily: theme.fontMono, fontSize: 11,
          letterSpacing: "0.12em", textTransform: "uppercase", opacity: h ? 1 : 0,
          transform: h ? "translateY(0)" : "translateY(8px)", transition: "all .25s ease" }}>
          Add · ${p.price}</button>
      </div>
      <h3 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: 22, lineHeight: 1.05, margin: "12px 0 0" }}>{p.name}</h3>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, marginTop: 6 }}>
        <span style={{ fontFamily: theme.fontMono, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase",
          color: theme.accent }}>{p.cat}</span>
        <span style={{ fontFamily: theme.fontMono, fontSize: 13, color: theme.ink }}>${p.price}</span>
      </div>
      <p style={{ fontFamily: theme.fontBody, fontSize: 14, lineHeight: 1.45, color: theme.muted, margin: "6px 0 0" }}>{p.note}</p>
    </div>
  );
}

function CartDrawer({ open, cart, theme, onClose, onQty }) {
  const items = Object.values(cart);
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <React.Fragment>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 90,
        background: "oklch(0 0 0 / 0.4)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity .3s ease" }} />
      <aside style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(420px, 92vw)", zIndex: 91,
        background: theme.surface, borderLeft: `1px solid ${theme.line}`, color: theme.ink,
        transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform .35s cubic-bezier(.16,1,.3,1)",
        display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px var(--pad)",
          borderBottom: `1px solid ${theme.line}` }}>
          <span style={{ fontFamily: theme.fontMono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Your bag · {items.reduce((s, it) => s + it.qty, 0)}</span>
          <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer",
            color: theme.muted, fontSize: 18 }}>✕</button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "8px var(--pad)" }}>
          {items.length === 0 && (
            <p style={{ fontFamily: theme.fontBody, fontSize: 16, color: theme.muted, marginTop: 30, textAlign: "center" }}>
              Empty. Go collect something.</p>
          )}
          {items.map((it) => (
            <div key={it.id} style={{ display: "flex", gap: 14, padding: "16px 0", borderBottom: `1px solid ${theme.line}` }}>
              <div style={{ width: 60, flexShrink: 0 }}><Placeholder label="" theme={theme} ratio="1 / 1" /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: theme.fontDisplay, fontSize: 18 }}>{it.name}</div>
                <div style={{ fontFamily: theme.fontMono, fontSize: 11, color: theme.muted, marginTop: 2 }}>${it.price}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                  <button onClick={() => onQty(it.id, -1)} style={qtyBtn(theme)}>−</button>
                  <span style={{ fontFamily: theme.fontMono, fontSize: 13 }}>{it.qty}</span>
                  <button onClick={() => onQty(it.id, 1)} style={qtyBtn(theme)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: "18px var(--pad) 24px", borderTop: `1px solid ${theme.line}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: theme.fontMono, fontSize: 13,
            letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
            <span style={{ color: theme.muted }}>Subtotal</span><span>${total}</span>
          </div>
          <button disabled={items.length === 0} style={{ width: "100%", padding: "14px", borderRadius: 999,
            border: "none", cursor: items.length ? "pointer" : "not-allowed", background: theme.accent,
            color: theme.dark ? "#15130f" : "#faf7f0", fontFamily: theme.fontMono, fontSize: 12,
            letterSpacing: "0.12em", textTransform: "uppercase", opacity: items.length ? 1 : 0.4 }}>
            Checkout with Shopify →</button>
          <p style={{ fontFamily: theme.fontMono, fontSize: 10, letterSpacing: "0.08em", color: theme.muted,
            textAlign: "center", margin: "10px 0 0" }}>Secure checkout powered by Shopify</p>
        </div>
      </aside>
    </React.Fragment>
  );
}
function qtyBtn(theme) {
  return { width: 26, height: 26, borderRadius: 999, border: `1px solid ${theme.line}`, background: "transparent",
    color: theme.ink, cursor: "pointer", fontSize: 14, lineHeight: 1 };
}

function ShopView({ theme, onAdd }) {
  const all = window.EVRYWHR.SHOP;
  const cats = window.EVRYWHR.SHOP_CATS;
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? all : all.filter((p) => p.cat === cat);

  return (
    <div>
      <PageHead theme={theme} kicker="The Shop · objects from the road"
        title="Shop"
        lead="Objects from the archive and the road: scarves, prints, books, field-tested pieces, and small editions shaped by places we could not shake." />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", padding: "clamp(28px,4vw,46px) var(--pad) 0" }}>
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} style={{ cursor: "pointer", background: "transparent",
            border: "none", padding: 0 }}>
            <Tag theme={theme} active={c === cat}>{c}</Tag>
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
        gap: "clamp(22px,3vw,38px)", padding: "clamp(26px,4vw,44px) var(--pad) 100px" }}>
        {list.map((p) => <ShopCard key={p.id} p={p} theme={theme} onAdd={onAdd} />)}
      </div>
    </div>
  );
}

Object.assign(window, { ShopView, CartDrawer });
